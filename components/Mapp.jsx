import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import styles from '../styles/Location.module.css'

export default function Mapp() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyAxynDSNPkm8RgKJnY4ZgzZatgeZt7RHQQ"
  })
  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

export function Map2() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyAxynDSNPkm8RgKJnY4ZgzZatgeZt7RHQQ"
  })
  if (!isLoaded) return <div>Loading...</div>
  return <Map3 />
}

function Map() {
  const center = useMemo(() => ({ lat: 31.739700218975738, lng: -106.4250295401936 }), [])
  return (
    <GoogleMap
      zoom={15}
      center={center}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
      mapContainerClassName={styles.locationMap}
    >
      <Marker position={center}/>
    </GoogleMap>
  )
}

function Map3() {
  const center = useMemo(() => ({ lat: 31.68105600125817, lng: -106.38942673529553 }), [])
  return (
    <GoogleMap
      zoom={15}
      center={center}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
      mapContainerClassName={styles.locationMap}
    >
      <Marker position={center}/>
    </GoogleMap>
  )
}