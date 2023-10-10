import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context";
import { LoadingPlaces } from "./LoadingPlaces";
import { Feature } from "../interfaces/places";

export const SearchResult = () => {

    const [activeId, setActiveId] = useState('');

    const { isLoadingPlaces, places, userLocation } = useContext(PlacesContext);

    const { map, getRouterBetwenPoints } = useContext(MapContext);

    if (isLoadingPlaces) {
        return <LoadingPlaces />;
    }

    if (places.length === 0) return <></>;

    const onPlacedClicked = (place: Feature) => {
        const [lng, lat] = place.center;
        setActiveId(place.id);
        map?.flyTo({
            zoom: 14,
            center: [lng, lat],
        });
    };

    const getRoute = (place: Feature) => {
        if (!userLocation) return;
        const [lng, lat] = place.center;
        getRouterBetwenPoints(userLocation, [lng, lat]);
    }

    return (
        <ul className="list-group mt-3">
            {
                places.map((place) => (
                    <li
                        key={place.id}
                        className={`list-group-item list-group-item-action pointer ${activeId === place.id ? 'active' : ''}`}
                        onClick={() => onPlacedClicked(place)}
                    >
                        <h6>{place.text_es}</h6>
                        <p style={{
                            fontSize: '12px'
                        }}>{place.place_name}</p>
                        <button
                            className={`btn ${activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary'} btn-sm`}
                            onClick={() => getRoute(place)}
                        >Direcciones</button>
                    </li>
                ))
            }

        </ul>
    )
}
