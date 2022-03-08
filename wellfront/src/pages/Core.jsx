import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = "pk.eyJ1IjoiamF2aWVybmd1eWVuOTkiLCJhIjoiY2wwMWZmamI1MHRtNDNndDhoaXhhbWZrYiJ9.ByJQQ3HYI4OUz2qm5q9G8g"


const Core = () => {
    const [lng, setLng] = useState(-86.8635263);
    const [lat, setLat] = useState(39.6377499);
    const [zoom, setZoom] = useState(15);
    const node = useRef(null);
    
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: node.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lng, lat],
          zoom: zoom,
        });

        map.on("move", () => {
          setLng(map.getCenter().lng.toFixed(4));
          setLat(map.getCenter().lat.toFixed(4));
          setZoom(map.getZoom().toFixed(2));
        });
        
        map.addControl(new mapboxgl.NavigationControl());
      }, []);

    return (
        <div ref = {node} className = "mapboxgl-canvas"/>     
    )  
}
export default Core;

