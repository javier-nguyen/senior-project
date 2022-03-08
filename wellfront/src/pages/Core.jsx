import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import mapboxgl, { Marker } from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

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

        const popUp = () => (
          <div class='card'>
              <img src='img_avatar.png' alt='Avatar' style='width:100%'/>
              <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect Engineer</p>
              </div>
            </div>
        )

        const marker = new Marker()
          .setLngLat([-86.8635263, 39.6377499])
          .setPopup(new mapboxgl.Popup().setHTML(
            "<div class='card'>" + 
              "<img src='/assets/lilly-center.jpg' alt='Avatar' style='width:100%'/>" +
                "<div class='container'>" +
                  "<h4><b>Lilly Center</b></h4>" + 
                  "<button>Book</button>" +
                "</div>" +
            "</div>"
          )) // add popup
          .addTo(map);
      }, []);

    return (
      <div>
        <div ref = {node} className = "mapboxgl-canvas"/>
      </div>    
    )  
}
export default Core;

