import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Box,
  Cylinder,
  Plane,
  Sphere,
  asset
} from 'react-360';
import GeometryVR from "../../index";
import Entity from 'Entity';
import SolarPanel from './solarPanel'
import Reciever from './reciever'
import SuperSateliteBody from './superSateliteBody';
class SuperSatelite extends React.Component {
  constructor(props) {
    super(props);

    let axisRotate = 10;
    this.state = {
      rotation: axisRotate,
      color: true,
      green: 'green',
      red: 'red'
    }
  }
  componentDidMount() {
    this.rotation = setInterval(() => {
      this.setState({
        rotation: this.state.rotation - 0.2
      });
    }, 20);
  }
  render() {
    return (
      < View style = {
        {
          transform: [{
            rotateY: this.state.rotation
          }]
        }
      } >
        <View  style={{ transform: [{translate: [3, 0 ,0]}, {rotateZ: 20}, {rotateY: this.state.rotation * -1}]}}>
          < Reciever style = {
            {
              transform: [{
                translateY: -0.1
              }, {
                rotateX: 180
              }]
            }
          }
          />
          <Reciever style = {
            {
              transform: [{
                    translateY: 0
                  }, {
                    translateZ: -0.04
                  }, {
                    translateX: 0.22
                  }, {
                    rotateX: -90
                  }, {
                    scale: 0.5
                  }]
            }
          }
          />
          <SolarPanel shiftX={0.5}/>
          <SolarPanel shiftX={0}/>
          <SuperSateliteBody />

          </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('SuperSatelite', () => SuperSatelite );
