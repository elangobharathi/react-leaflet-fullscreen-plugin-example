import { MapContainer, TileLayer } from 'react-leaflet';
import Fullscreen from 'react-leaflet-fullscreen-plugin';
// import FullscreenWithUseMapEvents from './FullscreenWithUseMapEvents';

const Example = () => {
  const options = {
    position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, default topleft
    title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
    titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
    content: null, // change the content of the button, can be HTML, default null
    forceSeparateButton: true, // force separate button to detach from zoom buttons, default false
    forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
    fullscreenElement: false, // Dom element to render in full screen, false by default, fallback to map._container
  };

  return (
    <MapContainer
      className="map"
      center={[20.5937, 78.9629]}
      zoom={5}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attribution/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
      <Fullscreen
        eventHandlers={{
          enterFullscreen: (event) => console.log('entered fullscreen', event),
          exitFullscreen: (event) => console.log('exited fullscreen', event),
        }}
        {...options}
      />
      {/* <FullscreenWithUseMapEvents options={options} /> */}
    </MapContainer>
  );
};

export default Example;
