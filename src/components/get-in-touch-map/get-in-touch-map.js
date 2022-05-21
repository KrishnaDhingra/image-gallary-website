// import { useMemo } from 'react'
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
// import './get-in-touch-map.css'

// export default function GetInTouchMap() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyCAmXpb2r3ua3UzvGdYG2Xt7joP8GiFK8A',
//   })

//   if (!isLoaded) return <div>Loading...</div>
//   return <Map />
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), [])

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   )
// }
