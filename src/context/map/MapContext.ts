import { Map, Marker } from "mapbox-gl";
import { createContext } from "react";

interface MapContextProps {
    isMapReady: boolean,
    map?: Map,
    markers: Marker[],
    // Metodos
    setMap: (map: Map) => void,
    getRouterBetwenPoints: (start: [number, number], end: [number, number]) => Promise<void>,
}

export const MapContext = createContext({} as MapContextProps);