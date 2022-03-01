import React from 'react';
import {
  AppRegistry,
  View,
  Cylinder,
} from 'react-360';

export default class Reciever extends React.Component {
  render() {
    console.log(this.props.style)
    console.log('this.props.style')
    return (
      <View>
        <View style = {
          this.props.style
        } >
          < Cylinder radiusTop = {
            .03
          }
          radiusBottom = {
            .075
          }
          dimHeight = {
            0.05
          }
          segments = {
            12
          }
          style = {
            {
              color: 'white',
              transform: [{
                translate: [0.45, -0.2, 0],
              }]
            }
          }
          />
          < Cylinder radiusTop = {
            .005
          }
          radiusBottom = {
            .005
          }
          dimHeight = {
            0.05
          }
          segments = {
            12
          }
          style = {
            {
              color: 'black',
              transform: [{
                translate: [0.45, -0.25, 0],
              }]
            }
          }
          />
        </View>
      </View>
    );
  }
};
