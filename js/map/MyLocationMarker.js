function MyLocationMarker(latlng, map, color) {
    this.latlng_ = latlng;
    this.color = color;
    this.setMap(map);
}

MyLocationMarker.prototype = new google.maps.OverlayView();

MyLocationMarker.prototype.draw = function() {
    var t = 10;
    var div = this.div_;
    var panes = this.getPanes();
    var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);

    if (!div) {
        div = this.div_ = document.createElement('div');
        div.style.border = "1px solid #DEE011";
        div.style.position = "absolute";
        div.style.paddingLeft = "0px";
        div.style.cursor = 'pointer';
        div.style.width = t*2+'px';
        div.style.height = t*2+'px';
        div.style.backgroundColor = '#990000';
        div.style.borderBottomRightRadius = t+'px';
        div.style.borderBottomLeftRadius = '0px';
        div.style.borderTopRightRadius = t+'px';
        div.style.borderTopLeftRadius = t+'px';
        div.style.className = 'MyLocationMarker';
        console.log(div);
        panes.overlayImage.appendChild(div);
    }

    if (point) {
        div.style.left = point.x + 'px';
        div.style.top = point.y + 'px';
    }
}

MyLocationMarker.prototype.remove = function() {
    if (this.div_) {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
}

MyLocationMarker.prototype.getPosition = function() {
    return this.latlng_;
}