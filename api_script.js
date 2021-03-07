var app = {
    coords: [],
    initialize: function() {
        app.getData();
    },
    getData: function() {
        $.ajax({
            url: 'http://api.open-notify.org/iss-now.json',
            type: 'GET',
            error: function(err) {
                console.log(err);
            },
            success: function(data) {
                console.log(data);
                console.log(data['iss_position']);
                //console.log("latitude: " + data["iss_position"]["latitude"]);
                //console.log("longitude: " + data["iss_position"]["longitude"]);
                app.coords[0] = data["iss_position"]["latitude"];
                app.coords[1] = data["iss_position"]["longitude"];

        
            }
        });
      
    }
};
function startApp() {
    app.initialize();
}
function appendData() {
    let innertxt = "<p>Latitude: " + app.coords[0] + ", Longitude: " + app.coords[1] + "</p>";
    let holder = document.createElement("div");
    holder.id = 'holder';
    holder.innerHTML = innertxt;
}