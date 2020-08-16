import React, {useState, useContext, useLayoutEffect, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements';
import {
  ScaleSize,
  DistanceScale,
  Typography,
  Colors,
} from '../../globals/styles';
import SettingItem from '../../components/SettingItem';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';
import {ThemeScreen, LoginScreen} from '../../globals/constants/screen-name';
import {ThemeContext} from '../../providers/theme-propvider';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {useAsyncStorage} from '@react-native-community/async-storage';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.groupSetting = {
    ...styles.groupSetting,
    backgroundColor: theme.backgroundColor,
  };
};
const Setting = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  const {logout} = useContext(AuthenticationContext);
  setStyleWithTheme(theme);

  const {getItem} = useAsyncStorage('@userLogin');
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await getItem();
        if (value !== null) {
          // value previously stored
        } else {
          navigation.replace(LoginScreen);
        }
      } catch (e) {
        navigation.replace(LoginScreen);
        // error reading value
      }
    };
    getData();
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.groupSetting}>
        <SettingItem
          title1="Theme"
          nameIcon="theme-light-dark"
          onPress={() => navigation.navigate(ThemeScreen)}
        />
        <SettingItem title1="Subcription" nameIcon="cart-outline" />
        <SettingItem
          title1="Communication Preferences"
          nameIcon="comment-account-outline"
        />
      </View>
      <View style={styles.groupSetting}>
        <SettingItem title1="Your Location" nameIcon="google-maps" />
        <SettingItem
          title1="Download Options"
          nameIcon="cloud-download-outline"
        />
        <SettingItem title1="Stream Options" nameIcon="view-stream-outline" />
        <SettingItem title1="Video Playback Options" nameIcon="video-outline" />
      </View>
      <View style={styles.groupSetting}>
        <SettingItem title1="Contact Support" nameIcon="contacts-outline" />
        <SettingItem title1="Send Feedback" nameIcon="send-outline" />
        <SettingItem
          title1="App Version"
          title2="1.00"
          nameIcon="application"
        />
        <SettingItem title1="About us" nameIcon="information-outline" />
      </View>
      <ButtonSubmit
        buttonSubmitStyle={styles.buttonContainer}
        titleSubmitStyle={styles.buttonText}
        title="SIGN OUT"
        onSubmit={logout}
      />
    </ScrollView>
  );
};

export default Setting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupSetting: {
    backgroundColor: Colors.white,
    marginBottom: DistanceScale.spacing_16,
    padding: DistanceScale.spacing_8,
  },
  buttonContainer: {
    backgroundColor: Colors.orange,
    paddingVertical: DistanceScale.spacing_12,
    borderRadius: 10,
    marginBottom: DistanceScale.spacing_16,
    marginHorizontal: DistanceScale.spacing_12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.black,
  },
});
