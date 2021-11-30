import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';

import { upload } from './server-interface/upload';

export default function App() {

  // Calculate the aspect ratio
  const dimensions = useRef(Dimensions.get("window"));
  const height = dimensions.current.height + 50;
  const width = Math.round((height * 9) / 16);

  let camera;

  const [hasPermission, setHasPermission] = useState(null);
  const [serverStatus, setServerStatus] = useState(null);
  const [picture, setPicture] = useState(null);


  // Ask the user to grant access to the camera
  useEffect(() => {

    (async () => {

      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');

    })();

  }, []);


  // When the user take a picture, save it to the state
  onTakePicture = async () => {

    let picture = await camera.takePictureAsync();
    setPicture(picture);
    console.log("Picture taken !");

  }


  // When the user send a picture, send it to the server
  onSendPicture = async () => {

    let res = await upload(picture);
    console.log(res); 

    if (res && res.status === "success") {

      console.log(res);

    } else {

      setServerStatus("error");

    }

  }


  // When the user cancel a picture, empty the picture and server state
  onRetryPicture = async () => {

    setPicture(null);
    setServerStatus(null);

  }


  // Empty view until the permission have been set
  if (hasPermission === null) {

    return <View />;

  }


  // If no permission, notify the user
  if (hasPermission === false) {

    return (
    
      <View style={styles.container}>
        <Text style={styles.textError}>Can't get access to the Camera</Text>
      </View>

    );

  }


  if (serverStatus === "error") {

    return (

      <View style={styles.container}>

        <Text style={styles.textError}>Can't reach the server</Text>

        <View style={styles.buttonContainer}>

          {/* Retry button */}
          <TouchableOpacity style={styles.button} onPress={onRetryPicture}>
            <Text style={styles.text}>Retry</Text>
          </TouchableOpacity>

        </View>

      </View>

    );

  }


  if (picture) {

    return (

      <View style={styles.container}>

        <Image
          style={{
            height: height,
            width: width,
            alignSelf: 'center'
          }}
          source={picture}
        />

        <View style={styles.buttonContainer}>

          {/* Send Button */}
          <TouchableOpacity style={styles.button} onPress={onSendPicture}>
            <Text style={styles.text}>Send</Text>
          </TouchableOpacity>

          {/* Retry button */}
          <TouchableOpacity style={styles.button} onPress={onRetryPicture}>
            <Text style={styles.text}>Retry</Text>
          </TouchableOpacity>

        </View>


      </View>

    );
  }


  return (

    <View style={styles.container}>
      <Camera 
        style={{
          height: height,
          width: width,
          alignSelf: 'center'
        }}
        ref={r => { camera = r }}
        ratio="16:9"
      >
        <View style={styles.buttonContainer}>

          {/* Take picture button */}
          <TouchableOpacity style={styles.button} onPress={onTakePicture}>
            <Text style={styles.text}>Take picture</Text>
          </TouchableOpacity>

        </View>
      </Camera>
    </View>

  );
}


const styles = StyleSheet.create({

  container: {

    flex: 1

  },

  buttonContainer: {

    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 80,
    bottom: 0

  },

  button: {

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 64,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginTop: 40

  },

  text: {

    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',

  },

  textError: {
    flex: 1,
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'red',

  }

});
