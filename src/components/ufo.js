import React from 'react';
import {
    AppRegistry,
    View,
    Cylinder,
    Sphere,
    Box,
    asset
} from 'react-360';



export default class UFO extends React.Component {

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

    render() {
        return (
            <View style={{ transform: [{rotateY: this.state.rotation}]}}>
                <View style={{ transform: [{translate: [42,11,0]}, {rotateY: this.state.rotation}, {rotateZ: 20}]}}>
                    <Sphere radius={1} widthSegments={12} heightSegments={12} texture={asset('../../static_assets/spacecraft.jpg')} style={{ transform: [{ translate: [0,0,0] }, {rotateX: this.state.rotation}] }}/>
                    <View style={{ transform: [{translate: [0,0,0]}, {rotateY: this.state.rotation}]}}>
                        <Cylinder radiusTop={2} radiusBottom={2} dimHeight={0.3} segments={24} style={{ color:'black', transform: [{translate: [0,0,0]}]}}/>
                        <View>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.red, transform: [{ translate: [2,0,0] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.red, transform: [{ translate: [-2,0,0] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.red, transform: [{ translate: [0,0,2] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.red, transform: [{ translate: [0,0,-2] }] }}/>
                        </View>
                        <View style={{transform: [{rotateY: 45}]}}>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.green, transform: [{ translate: [2,0,0] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.green, transform: [{ translate: [-2,0,0] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.green, transform: [{ translate: [0,0,2] }] }}/>
                            <Sphere radius={0.1} widthSegments={12} heightSegments={12}  style={{ color: this.state.green, transform: [{ translate: [0,0,-2] }] }}/>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
    componentDidMount() {
        this.rotationController();

        this.diodeController();
    }

    rotationController(){
        this.rotation = setInterval(() => {
            this.setState({rotation: this.state.rotation + 0.2});
        }, 20);
    }

    diodeController(){
        this.color = setInterval(() => {
            this.state.color = !this.state.color;

            if (this.state.color !== false){
                this.setState({green: 'lightgreen', red: 'darkred'});
            }
            else{
                this.setState({ green: 'green', red: 'red'})
            }
            this.setState({colorGreen: !this.state.colorGreen});
        }, 500)
    }
};
AppRegistry.registerComponent('UFO', () => UFO);
