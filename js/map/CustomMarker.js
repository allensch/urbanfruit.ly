function CustomMarker(latlng, map, color) {
    this.latlng_ = latlng;
    this.color = color;
    this.setMap(map);
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
    var t = 6 * 2;
    var me = this;
    var div = this.div_;
    var panes = this.getPanes();
    var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);

    if (!div) {
        div = this.div_ = document.createElement('div');
        div.style.border = "none";
        div.style.position = "absolute";
        div.style.paddingLeft = "0px";
        div.style.cursor = 'pointer';
        div.style.width = t+'px';
        div.style.height = t+'px';
        div.style.backgroundColor = this.color;
        div.style.borderRadius = t/2+'px';

        google.maps.event.addDomListener(div, "click", function(event) {
            google.maps.event.trigger(me, "click");
        });
        panes.overlayImage.appendChild(div);
    }

    if (point) {
        div.style.left = point.x + 'px';
        div.style.top = point.y + 'px';
    }
}

CustomMarker.prototype.remove = function() {
    if (this.div_) {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
}

CustomMarker.prototype.getPosition = function() {
    return this.latlng_;
}

CustomMarker.prototype.setAsCenterPoint = function() {
    if (!this.div) {
        this.pendingCenterPoint = true;
        return;
    }
    this.div.onmouseout = null
    this.div.onmouseout = null;
    TweenMax.to(this.div,.5, {scale:2, opacity:0, yoyo:true, repeat:-1});
}

CustomMarker.delay = 0;
CustomMarker.delayTimeout = 0;
CustomMarker.delayValue = 0.01;

CustomMarker.delayIncrement = function() {
    CustomMarker.delay = CustomMarker.delay += CustomMarker.delayValue;
    return CustomMarker.delay;
}

CustomMarker.delayTimeoutClear = function() {
    clearTimeout(CustomMarker.delayTimeout);
    CustomMarker.delayTimeout = setTimeout(function() {
        CustomMarker.delay = 0;
    }, 1000);
}