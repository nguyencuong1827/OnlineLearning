/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ScaleSize, Distance, Typography, Colors} from '../../globals/styles';
import SettingItem from '../../components/SettingItem';
import {ThemeContext} from '../../providers/theme-propvider';
import {AuthenticationContext} from '../../providers/authentication-provider';
import ChangePassword from '../ChangePassword';
import UpdateProfile from '../UpdateProfile';
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
  styles.name = {...styles.name, color: theme.colorMainText};
  styles.email = {...styles.email, color: theme.colorSubText};
};
const Profile = (props) => {
  const {theme} = useContext(ThemeContext);
  const {userState} = useContext(AuthenticationContext);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);
  const [isLoginGoogle, setIsLoginGoogle] = useState(false);
  setStyleWithTheme(theme);
  const {getItem} = useAsyncStorage('@userLogin');
  const {userInfo} = userState;
  const {language} = useContext(LanguageContext);

  const getUser = async () => {
    const item = await getItem();
    const jsonValue = JSON.parse(item);
    if (jsonValue.password === undefined) {
      setIsLoginGoogle(true);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.container}>
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
          title1={language === 'eng' ? 'Update profile' : 'Cập nhật thông tin'}
          nameIcon="account-box-outline"
          onPress={() => setShowUpdateProfileModal(true)}
        />
        {isLoginGoogle === false ? (
          <SettingItem
            title1={language === 'eng' ? 'Change Password' : 'Đổi mật khẩu'}
            nameIcon="key-outline"
            onPress={() => setShowChangePasswordModal(true)}
          />
        ) : null}
      </View>
      <ChangePassword
        showChangePasswordModal={showChangePasswordModal}
        setShowChangePasswordModal={setShowChangePasswordModal}
      />
      <UpdateProfile
        showUpdateProfileModal={showUpdateProfileModal}
        setShowUpdateProfileModal={setShowUpdateProfileModal}
      />
    </View>
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
    marginVertical: Distance.spacing_10,
  },
  name: {
    fontSize: Typography.fontSize20,
    fontWeight: Typography.fontWeightBold,
    marginTop: Distance.spacing_10,
  },
  email: {
    marginTop: Distance.superSmall,
    fontSize: Typography.fontSize14,
  },

  groupSetting: {
    backgroundColor: Colors.white,
    marginBottom: Distance.spacing_16,
    padding: Distance.spacing_8,
  },
});
