"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import geojsondata from "@/data/tokyo.json";

const { BaseLayer, Overlay } = LayersControl;

function SearchControl() {
  const [searchQuery, setSearchQuery] = useState("");
  const map = useMap();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`);
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        map.setView([lat, lon], 13);
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Error searching for location:", error);
      alert("Error searching for location");
    }
  };

  return (
    <div style={{ position: "absolute", top: 10, left: 50, zIndex: 1000 }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a location"
          style={{ padding: "5px", width: "200px" }}
        />
        <button type="submit" style={{ marginLeft: "5px", padding: "5px 10px" }}>Search</button>
      </form>
    </div>
  );
}

export default function Maps(props: any) {
  const { position, zoom } = props;

  const onEachFeature = (feature: any, layer: any) => {
    if (feature.properties && feature.properties.name) {
      layer.bindTooltip(feature.properties.name);
    }
  };

  return (
    <MapContainer
      center={[35.658581, 139.745438]}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <SearchControl />
      <LayersControl>
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>

        <Overlay checked name="GeoJSON Data">
          {/* @ts-ignore */}
          <GeoJSON data={geojsondata} onEachFeature={onEachFeature} />
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
}