/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {HEIGHT} from '../../globals/styles/scale-size';
import {Colors} from '../../globals/styles';

const SplashScreen = () => {
  const yValue = new Animated.Value(0);
  const springValue = new Animated.Value(0.1);
  useEffect(() => {
    Animated.timing(yValue, {
      toValue: HEIGHT / 2,
      duration: 1000,
      asing: Easing.cubic,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(yValue, {
        toValue: HEIGHT / 2 - 100,
        duration: 500,
        asing: Easing.back(),
        useNativeDriver: false,
      }).start();
    });

    Animated.spring(springValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{top: yValue, transform: [{scale: springValue}]}}
        source={require('../../../assets/images/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
  },
});
export default SplashScreen;
