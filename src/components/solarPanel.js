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

export default class SolarPanel extends React.Component {
  constructor(props) { 
    super(props)
  }
  render() {

    const solarPanelJsx = [
      [],
      []
    ]
    solarPanelJsx.forEach(array => {
      for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 4; i++) {
          array.push(<
            Box key={
              solarPanelJsx.indexOf(array)
            } {
            ...getSolarPanelProps(
              baseMargin,
              array.length,
              solarPanelJsx.indexOf(array),
              j % 2 == 0 ? SolarPanelType.BASE : SolarPanelType.TALL,
              this.props.shiftX
            )
            }
          />
          )
        }
      }
    })
    return (
      <View>
        
          {solarPanelJsx}
        
      </View>
    );
  }
}
const baseSize = {
  width: 0.02,
  height: 0.02,
  translateY: 0

};
const baseMargin = 0.001;
const tallSize = {
  width: 0.02,
  height: 0.04,
  translateY: 30 / baseSize.height * 100
};
const getSolarPanelProps = (
  translateX,
  rowIndex,
  columnIndex,
  panelType,
  shiftX) => {

  switch (panelType) {
    case SolarPanelType.BASE:
      size = baseSize;
      currentTranslateY = columnIndex * baseSize.height + baseSize.translateY + columnIndex*baseMargin
      break;
    case SolarPanelType.TALL:
      size = tallSize;
      currentTranslateY = (tallSize.height * 100) / (tallSize.width * 100)
      currentTranslateY = tallSize.height * 100 / currentTranslateY / 2
      currentTranslateY /= 100;
      currentTranslateY += columnIndex * baseMargin + columnIndex*tallSize.height
 
      currentTranslateY = currentTranslateY - tallSize.height/2

      break;
    default:
      throw new Error('panel type not found')
  }
  return ({
    dimDepth: 0,
    dimWidth: size.width,
    dimHeight: size.height,
    style: [{
      transform: [{
        translate: [
          rowIndex * (size.width + translateX) + shiftX,
          currentTranslateY,
          0
        ]
      }]
    }]
  })
}
const SolarPanelType = {
  BASE: 'BASE',
  TALL: 'TALL'
}
AppRegistry.registerComponent('SolarPanel', () => SolarPanel);
