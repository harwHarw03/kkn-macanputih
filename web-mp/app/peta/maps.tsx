"use client";

import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import geojsondata from "@/data/tokyo.json";

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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* @ts-ignore */}
      <GeoJSON data={geojsondata} onEachFeature={onEachFeature} />
    </MapContainer>
  );
}
