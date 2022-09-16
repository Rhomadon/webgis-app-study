import MarkerClusterGroup from 'react-leaflet-cluster'
import { MapContainer, Marker } from 'react-leaflet'
import { addressPoints } from '../connect/addressPoints'

const Geojson = () => {
  return (
    <MapContainer
      style={{height: '500px'}}
      center={[38.9637, 35.2433]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <MarkerClusterGroup
        chunkedLoading
      >
        {/* {(addressPoints as AdressPoint).map((address, index) => (
          <Marker
            key={index}
            position={[address[0], address[1]]}
            title={address[2]}
            icon={customIcon}
          ></Marker>
        ))} */}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Geojson