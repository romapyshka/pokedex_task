import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, View, Text} from 'react-native';
import {getPhotos} from "./api/unsplash";
import {Image} from "react-native-web";

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        return fetch('https://api.unsplash.com/photos/?page=1&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log('res', json)
                this.setState({
                    photos: json
                })
            })
    }

    render() {
        return (
            <NavigationContainer>
                <View>
                    {
                        this.state.photos.map(photo => {
                            return(
                                <Image style={{width: 100, height: 100}} key={photo.id} source={photo.urls.full}/>
                            )
                        })
                    }
                </View>
            </NavigationContainer>
        );
    }
};

export default App;