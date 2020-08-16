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
  const {userState} = useContext(AuthenticationContext);
  setStyleWithTheme(theme);

  const {navigation} = props;
  const {userInfo} = userState;

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
        <SettingItem title1="Update profile" nameIcon="account-box-outline" />
        <SettingItem title1="Change Password" nameIcon="key-outline" />
        <SettingItem
          title1="Update favorite categories"
          nameIcon="bookmark-outline"
        />
      </View>
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
});
