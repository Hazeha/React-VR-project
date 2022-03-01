import {ReactInstance, Surface, Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const SpaceshipLocation = new Location([-10,2,-10]);

  const UFOLocation = new Location([0,0,-2]);
  const SuperSateliteLocation = new Location([0, 0, -1])

  r360.renderToLocation(
      r360.createRoot('Spaceship', { /* initial props */ }),
      SpaceshipLocation
  );

  r360.renderToLocation(
    r360.createRoot('SuperSatelite', {
      /* initial props */ }),
    SuperSateliteLocation
  );
  r360.renderToLocation(
    r360.createRoot('UFO', { /* initial props */ }),
    UFOLocation
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('GeometryVR', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('atmospherehdr.png'));
}

window.React360 = {init};
