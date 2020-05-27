import React from "react";
import { TouchableOpacity ,ImageBackground, StyleSheet, Text } from "react-native";

const ImageButton = (props) => {
  return (
    <ImageBackground style={styles.button} source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/24/13/brick-wall-room-background-neon-light-vector-27852413.jpg'}}>
        <TouchableOpacity style={styles.touch}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    </ImageBackground>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
    button: {
        height: 100,
        margin: 5
    },
    touch: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    }
});
