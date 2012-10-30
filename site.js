
  var map = mapbox.map('map');
    map.centerzoom({lat:44.7156, lon: -68.3111},5); 
     map.addLayer(mapbox.layer().id('lxbarth.map-k77nz5ym'));

      map.addLayer(mapbox.layer().id('dw2.sandy'));

     map.ui.zoomer.add();
     map.ui.zoombox.add();

