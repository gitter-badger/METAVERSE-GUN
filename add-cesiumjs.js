// this goes into index.html - start

<link href="/build/Widgets/widgets.css" rel="stylesheet" />
<script async type='text/javascript'>window.CESIUM_BASE_URL = '/build/';</script>

// this goes into index.html - end


// this goes into the js file for the component/page which shows the Cesium UI - start



// avoid "window not declared"

	if (typeof window !== "undefined"){
		// browser code
	}
	


  // cesium viewer
  let viewer: Viewer;



  // cesium basic settings

  onMount(async () => { 
		viewer = new Viewer('cesiumContainer', {
    "animation": false,
    "baseLayerPicker": false,
    "fullscreenButton": false,
    "vrButton": false,
    "geocoder": false,
    "homeButton": false,
    "infoBox": false,
    "sceneModePicker": false,
    "selectionIndicator": false,
    "timeline": false,
    "navigationHelpButton": false,
    "shouldAnimate": true

    

    //Use OpenStreetMaps
    // imageryProvider : new Cesium.OpenStreetMapImageryProvider({
    //    url : 'https://a.tile.openstreetmap.org/'
    // })
    
		});
	});


	// cesium access token

	Cesium.Ion.defaultAccessToken = 'add free token from https://cesium.com/ion/signup/ here';


// this goes into the js file for the component/page which shows the Cesium UI - end