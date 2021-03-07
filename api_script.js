var app = {
    coords: [],
    initialize: function() {
        app.getData();
        setInterval(function(){
          console.log("making call...");
          app.getData();
        }, 20000);
    },
    getData: function() {
        $.ajax({
            url: 'http://api.open-notify.org/iss-now.json',
            type: 'GET',
            error: function(err) {
                console.log(err);
            },
            success: function(data) {
                //view json
                //console.log(data);

                //store coordinates in coords array
                app.coords[0] = parseFloat(data["iss_position"]["latitude"]);
                app.coords[1] = parseFloat(data["iss_position"]["longitude"]);
                //test to ensure values are captured
                console.log(app.coords);
                app.display();
            }
        });
    },
    display: function() {
      let htmlString = "<p>Latitutde: " + app.coords[0];
      htmlString += " Longitude: " + app.coords[1] + "</p>";
      $("#holder").html(htmlString);
    }
};
function startApp() { //call api from html
    app.initialize();
}
