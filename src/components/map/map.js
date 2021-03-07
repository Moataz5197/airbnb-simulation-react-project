import { Component } from "react";

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.platform = null;
    this.map = null;

    this.state = {
      apiKey: "v3P-vxkKEL33-87rfQGBt5VKrf1skZbegKFJC9hi3-U",
      center: this.props.data.coordinates,
      zoom: 10,
      pixelRatio: window.devicePixelRatio || 1,
    };
  }

  componentDidMount() {
    this.platform = new window.H.service.Platform(this.state);

    var layer = this.platform.createDefaultLayers();
    var container = document.getElementById("here-map");

    this.map = new window.H.Map(container, layer.normal.map, {
      center: this.state.center,
      zoom: this.state.zoom,
    });

    var events = new window.H.mapevents.MapEvents(this.map);
    // eslint-disable-next-line
    var behavior = new window.H.mapevents.Behavior(events);
    // eslint-disable-next-line
    var ui = new window.H.ui.UI.createDefault(this.map, layer);

    // Marker code goes here
    var LocationOfMarker = this.props.data.coordinates;

    // optionally - resize a larger PNG image to a specific size
    var pngIcon = new window.H.map.Icon(
      "https://cdn3.iconfinder.com/data/icons/faticons/32/location-01-512.png",
      { size: { w: 56, h: 56 } }
    );

    // Create a marker using the previously instantiated icon:
    var marker = new window.H.map.Marker(LocationOfMarker, { icon: pngIcon });

    // Add the marker to the map:
    this.map.addObject(marker);

    // Optionally,
    //Show the marker in the center of the map
    this.map.setCenter(LocationOfMarker);

    //Zooming so that the marker can be clearly visible
    this.map.setZoom(10);

  }

  render() {
    return (
      <div
        id="here-map"
        style={{ width: "50%", height: "400px", background: "grey" }}
      />
    );
  }
}
