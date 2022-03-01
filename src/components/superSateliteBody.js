import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Cylinder,
    Sphere,

} from 'react-360';

export default class SuperSateliteBody extends React.Component {

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
                <View>
                    <Cylinder radiusTop = {
                        .05
                    }
                    radiusBottom = {
                        .05
                    }
                    dimHeight = {
                        0.2
                    }
                    style = {
                        {
                            color: 'gainsboro',
                            transform: [{
                                translate: [0.45, 0, 0]
                            }]
                        }
                    }
                    />
                     <Cylinder radiusTop = {
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
                                 translate: [0.45, -0.1, 0]
                             }]
                         }
                     }
                    />
                   
                </View>
            </View>
        );
    }

};

