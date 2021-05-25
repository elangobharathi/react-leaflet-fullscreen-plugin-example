import { useMapEvents } from 'react-leaflet';
import Fullscreen from 'react-leaflet-fullscreen-plugin';

const FullscreenWithUseMapEvents = ({ options }) => {
  useMapEvents({
    enterFullscreen(event) {
      console.log('Through UseMapEvents  - entered fullscreen', event);
    },
    exitFullscreen(event) {
      console.log('Through UseMapEvents  - exited fullscreen', event);
    },
  });

  return <Fullscreen {...options} />;
};

export default FullscreenWithUseMapEvents;
