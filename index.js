import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Spaceship from "./src/components/spaceship";
import UFO from "./src/components/ufo";
import Satelite from "./src/components/satelite";
import SuperSatelite from "./src/components/superSatelite";

export default class GeometryVR extends React.Component {
  render() {
    return (
        <View style={styles.panel}>

        </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('GeometryVR', () => GeometryVR);
