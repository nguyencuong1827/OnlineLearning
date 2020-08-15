import React, {useState, useContext, useLayoutEffect} from 'react';
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

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.groupSetting = {
    ...styles.groupSetting,
    backgroundColor: theme.backgroundColor,
  };
  styles.name = {...styles.name, color: theme.colorMainText};
  styles.email = {...styles.email, color: theme.colorSubText};
};
const Profile = (props) => {
  const {theme} = useContext(ThemeContext);
  const {userState, logout} = useContext(AuthenticationContext);
  setStyleWithTheme(theme);

  const {navigation} = props;
  const {userInfo} = userState;
  const signOut = () => {
    logout();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.info}>
        <Avatar
          rounded={true}
          size={ScaleSize.scaleSizeWidth(77)}
          source={{uri: userInfo.avatar}}
        />
        <Text style={styles.name}>{userInfo.name}</Text>
        <Text style={styles.email}>{userInfo.email}</Text>
        <Text style={styles.email}>{userInfo.type}</Text>
      </View>
      <View style={styles.groupSetting}>
        <SettingItem
          title1="Theme"
          nameIcon="theme-light-dark"
          onPress={() => navigation.navigate(ThemeScreen)}
        />
        <SettingItem title1="Change Password" nameIcon="key-outline" />
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
        onSubmit={signOut}
      />
    </ScrollView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: DistanceScale.spacing_10,
  },
  name: {
    fontSize: Typography.fontSize20,
    fontWeight: Typography.fontWeightBold,
    marginTop: DistanceScale.spacing_10,
  },
  email: {
    marginTop: DistanceScale.superSmall,
    fontSize: Typography.fontSize14,
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
