import React from 'react';
import {
    AppRegistry,
    View,
    Cylinder,
} from 'react-360';

export default class Satelite extends React.Component {
    render() {
        return (
            <View>
                {/* Main Parts */}
                <Cylinder radiusTop={0.9} radiusBottom={0.9} dimHeight={5} segments={24} style={{ color:'black', transform: [{translate: [.7,.7,1]}]}}/>
                <Cylinder radiusTop={0.4} radiusBottom={0.4} dimHeight={3} segments={24} style={{ color:'darkblue', transform: [{translate: [-2,.7,1]}]}}/>
                <Cylinder radiusTop={0.4} radiusBottom={0.4} dimHeight={3} segments={24} style={{ color:'darkblue', transform: [{translate: [3,.7,1]}]}}/>

                {/* Small sTubes */}
                <Cylinder radiusTop={0.1} radiusBottom={0.1} dimHeight={2} segments={24} style={{ color:'grey', transform: [{translate: [2,1,1]}, {rotateZ: 90}]}}/>
                <Cylinder radiusTop={0.1} radiusBottom={0.1} dimHeight={2} segments={24} style={{ color:'grey', transform: [{translate: [-1,1,1]}, {rotateZ: 90}]}}/>
            </View>
        );
    }
};
AppRegistry.registerComponent('Satelite', () => Satelite);
