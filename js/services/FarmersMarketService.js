(function() {
  App.Services.FarmersMarkerService = Ember.Object.extend({
    searchByZipCode: function(postCode) {
      $.ajax({
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        url: "http://search.ams.usda.gov/v1/data.svc/zipSearch?zip=" + postCode,
        success: function(data) {
          console.log(data);
        }
      });
    }
  });

}).call(this);
