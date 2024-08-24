import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current !== null) {
            return; // If map is already initialized, do nothing
        }

        // Initialize the map with attributionControl set to false
        mapRef.current = L.map('map', { attributionControl: false }).setView([18.524761, 73.780566], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);

        // Define custom icon
        const customIcon = L.icon({
            iconUrl: markerIcon,
            iconRetinaUrl: markerIcon2x,
            shadowUrl: markerShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        // Add a marker with the custom icon
        L.marker([18.524761, 73.780566], { icon: customIcon }).addTo(mapRef.current)
            .bindPopup('Pune, Maharashtra')
            .openPopup();
    }, []);

    return <div id="map" className="map-container" ></div>;
};

export default MapComponent;