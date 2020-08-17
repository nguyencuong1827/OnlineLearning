import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import {Colors} from '../../globals/styles';

const Banner = (props) => {
  return (
    <ImageBackground
      style={props.buttonStyle.button}
      source={{uri: props.source}}>
      <TouchableOpacity style={styles.touch} onPress={props.onPress}>
        <Text style={props.title1Style.title1}>{props.title1}</Text>
        {props.title2 ? (
          <Text style={props.title2Style.title2}>{props.title2}</Text>
        ) : null}
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Banner;

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blackWith05OpacityColor,
  },
});
