

(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<div><img src="img/temp.png"  /> <span>{{temperature}} °C</span> </div> \
      <div><img src="img/press.png" /> <span>{{pressure}} hPa</span>   </div> \
      <div> <img src="img/humi.png" /> <span>{{humidility}} %</span>  </div> \
      <div><img src="img/wind.png" /> <span>{{wind}} m/s</span> </div> \
      <div><img src="img/sun.png" /> <span>{{sun}} lum</span> </div>'
    })
    .Class({
      constructor: function() {
        this.temperature = 18;
        this.pressure = 1002;
        this.humidility = 80;
        this.wind = 5;
        this.sun = 4;
        this.jsonData = "";
      },
      fun : function() {
       this.http.get('http://www.w3schools.com/jquery/demo_ajax_json.js')
        .map(function(res) {res.text();})
        .suscribe(
          function(data){this.jsonData = data;},
          function(err) {console.log(err);},
          function() {console.log("EMPTY");}
        );
      }
    });
})(window.app || (window.app = {}));
