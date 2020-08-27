/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Distance, Typography, Colors} from '../../globals/styles';
import SettingItem from '../../components/SettingItem';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';
import {
  ThemeScreen,
  LoginScreen,
  LanguageScreen,
} from '../../globals/constants/screen-name';
import {ThemeContext} from '../../providers/theme-propvider';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {LanguageContext} from '../../providers/language-provider';

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
  const {language} = useContext(LanguageContext);
  const [nameTheme, setNameTheme] = useState('');
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
  useEffect(() => {
    if (language === 'eng') {
      setNameTheme(theme.name);
    } else {
      if (theme.name === 'light') {
        setNameTheme('Sáng');
      } else if (theme.name === 'dark') {
        setNameTheme('Tối');
      } else {
        setNameTheme('Hệ thống');
      }
    }
  }, [language]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.groupSetting}>
        <SettingItem
          title1={language === 'eng' ? 'Theme' : 'Chủ đề'}
          title2={nameTheme}
          nameIcon="theme-light-dark"
          onPress={() => navigation.navigate(ThemeScreen)}
        />
        <SettingItem
          title1={language === 'eng' ? 'Subcription' : 'Đăng ký'}
          nameIcon="cart-outline"
        />
        <SettingItem
          title1={language === 'eng' ? 'Language' : 'Ngôn ngữ'}
          title2={language === 'eng' ? 'English' : 'Việt Nam'}
          nameIcon="earth"
          onPress={() => navigation.navigate(LanguageScreen)}
        />
      </View>
      <View style={styles.groupSetting}>
        <SettingItem
          title1={language === 'eng' ? 'Your Location' : 'Vị trí của bạn'}
          nameIcon="google-maps"
        />
        <SettingItem
          title1={language === 'eng' ? 'Download Options' : 'Lựa chọn tải về'}
          nameIcon="cloud-download-outline"
        />
        <SettingItem
          title1={language === 'eng' ? 'Stream Options' : 'Lựa chọn xem'}
          nameIcon="view-stream-outline"
        />
        <SettingItem
          title1={
            language === 'eng' ? 'Video Playback Options' : 'Lựa chọn xem lại'
          }
          nameIcon="video-outline"
        />
      </View>
      <View style={styles.groupSetting}>
        <SettingItem
          title1={language === 'eng' ? 'Contact Support' : 'Liên hệ hỗ trợ'}
          nameIcon="contacts-outline"
        />
        <SettingItem
          title1={language === 'eng' ? 'Send Feedback' : 'Gửi phản hồi'}
          nameIcon="send-outline"
        />
        <SettingItem
          title1={language === 'eng' ? 'App Version' : 'Phiên bản'}
          title2="1.00"
          nameIcon="application"
        />
        <SettingItem
          title1={language === 'eng' ? 'About us' : 'Thông tin'}
          nameIcon="information-outline"
        />
      </View>
      <ButtonSubmit
        buttonSubmitStyle={styles.buttonContainer}
        titleSubmitStyle={styles.buttonText}
        title={language === 'eng' ? 'SIGN OUT' : 'ĐĂNG XUẤT'}
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
    marginBottom: Distance.spacing_16,
    padding: Distance.spacing_8,
  },
  buttonContainer: {
    backgroundColor: Colors.orange,
    paddingVertical: Distance.spacing_12,
    borderRadius: 10,
    marginBottom: Distance.spacing_16,
    marginHorizontal: Distance.spacing_12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.black,
  },
});
