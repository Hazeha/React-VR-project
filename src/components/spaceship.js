import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Cylinder,
    Sphere,

} from 'react-360';

export default class Spaceship extends React.Component {

    constructor(props){
        super(props);

        let movementUp = 2;
        this.state = {
            movementY: movementUp,
            movementX: 1,
            rotationY: -1,
            movementZ: -.002,
        }
    }
    render() {
        return (
            <View>
                <View style={{transform: [{translateY: this.state.movementY}, {translateX: this.state.movementX}, {translateZ: this.state.movementZ}, {rotateX: this.state.rotationY}, {rotateY: 90}]}}>
                    <Cylinder radiusTop={.9} radiusBottom={1} dimHeight={5} segments={12} style={{ color:'lightgrey', transform: [{translate: [.7, -1.7, 1]}]}}/>
                    <Cylinder radiusTop={.2} radiusBottom={.5} dimHeight={2} segments={12} style={{ color:'white', transform: [{translate: [.7, -4, 1]}]}}/>
                    <Sphere radius={.9} widthSegments={12} heightSegments={12} style={{ color: 'white', transform: [{ translate: [.7,.7,1] }] }}/>
                    <Cylinder radiusTop={1} radiusBottom={3} dimHeight={3} segments={2} style={{ color:'white', transform: [{translate: [.7, -2.5, 1]}, {rotateX: 0}, {rotateY: 0}, {rotateZ: 0}]}}/>


                    <View>
                        <Cylinder radiusTop={.2} radiusBottom={.5} dimHeight={2} segments={9} style={{ color:'red',opacity:.3 , transform: [{translate: [.7, -5, 1]}]}}/>
                        <Cylinder radiusTop={.2} radiusBottom={.7} dimHeight={2} segments={6} style={{ color:'yellow',opacity:.3 , transform: [{translate: [.7, -5.5, 1]}]}}/>
                    </View>
                </View>
            </View>
        );
    }

    componentDidMount() {
        this.movementY = setInterval(() => {
            this.setState({movementY: this.state.movementY + .005});
            this.setState({movementX: this.state.movementX + .004});
            this.setState({movementZ: this.state.movementZ - .008});

            if(this.state.rotationY >= -61){
                this.setState({rotationY: this.state.rotationY - .09});
            }

        }, 10);
    }
};

AppRegistry.registerComponent('Spaceship', () => Spaceship);
