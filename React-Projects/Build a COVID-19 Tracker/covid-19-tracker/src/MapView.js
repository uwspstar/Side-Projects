import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import './MapView.css'

function MapView({ center, zoom }) {
    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )
}

export default MapView
