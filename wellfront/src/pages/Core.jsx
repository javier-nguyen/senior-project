import React, {useState} from "react";
import ReactMapGL from "react-map-gl"

const Core = () => {
    const [viewport, setViewport] = useState({
        latitude: 39.6377499,
        longitude: -86.8635263,
        width: "100vw",
        height: "100vh",
        zoom: 15,
    })
    return (
        <div>
        <ReactMapGL 
        {... viewport} 
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken = "pk.eyJ1IjoiamF2aWVybmd1eWVuOTkiLCJhIjoiY2wwMWZmamI1MHRtNDNndDhoaXhhbWZrYiJ9.ByJQQ3HYI4OUz2qm5q9G8g"
        onViewportChange={viewport => {
            setViewport(viewport);
        }}
        >
                markers here
        </ReactMapGL>
        </div>
    )
}
export default Core;