/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {HEIGHT} from '../../globals/styles/scale-size';
import {Colors} from '../../globals/styles';
import {useAsyncStorage} from '@react-native-community/async-storage';
import * as ScreenName from '../../globals/constants/screen-name';
import axiosClient from '../../api/axiosClient';
import {CategoryContext} from '../../providers/category-provider';

const SplashScreen = (props) => {
  const yValue = new Animated.Value(HEIGHT / 2 - 100);
  const springValue = new Animated.Value(1);
  const {navigation} = props;
  const {getItem} = useAsyncStorage('@userLogin');
  const {setListCategory} = useContext(CategoryContext);
  let timer;

  const animatedLogo = () => {
    Animated.timing(yValue, {
      toValue: HEIGHT / 2,
      duration: 4000,
      asing: Easing.cubic,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(yValue, {
        toValue: HEIGHT / 2 - 100,
        duration: 2000,
        asing: Easing.back(),
        useNativeDriver: false,
      }).start();
    });

    Animated.spring(springValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: false,
    }).start();
  };

  const getData = async () => {
    const userLogin = await getItem();
    if (userLogin !== null) {
      timer = setTimeout(
        () =>
          navigation.replace(ScreenName.AppNavigatorScreen, {
            screen: ScreenName.HomeScreen,
            firstLogin: false,
          }),
        2500,
      );
    } else {
      timer = setTimeout(
        () => navigation.replace(ScreenName.LoginScreen),
        2500,
      );
    }
  };
  const fetchCategory = async () => {
    const url = '/category/all';
    try {
      let response = await axiosClient.get(url);
      if (response.status === 200) {
        setListCategory(response.data.payload);
      }
    } catch ({response}) {
      console.log(response);
    }
  };

  useEffect(() => {
    fetchCategory();
    getData();
    return () => clearTimeout(timer);
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
