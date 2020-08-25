import React, {useRef, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
  Alert,
} from 'react-native';
import {Distance, ScaleSize, Colors, Typography} from '../../globals/styles';
import FormInput from '../../components/Authentication/FormInput';
import {useState} from 'react';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';
import axiosClient from '../../api/axiosClient';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {ThemeContext} from '../../providers/theme-propvider';
import configToken from '../../api/config-token';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {LanguageContext} from '../../providers/language-provider';

const setStyleWithTheme = (theme) => {
  styles.modalView = {
    ...styles.modalView,
    backgroundColor: theme.backgroundColorModal,
  };
  styles.input = {
    ...styles.input,
    color: theme.colorTextModal,
    borderColor: theme.colorTextModal,
  };
  styles.title = {...styles.title, color: theme.colorTextModal};
};

const ChangePassword = (props) => {
  const {userState} = useContext(AuthenticationContext);
  const {theme} = useContext(ThemeContext);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorOldPassword, setErrorOldPassword] = useState('');
  const [errorNewPassword, setErrorNewPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const {showChangePasswordModal, setShowChangePasswordModal} = props;
  const {language} = useContext(LanguageContext);
  const {setItem} = useAsyncStorage('@userLogin');
  setStyleWithTheme(theme);

  const handleEditOldPassword = (text) => {
    setOldPassword(text);
    if (text === '') {
      setErrorOldPassword(
        `${
          language === 'eng'
            ? 'Please enter your password!'
            : 'Vui lòng nhập mật khẩu!'
        }`,
      );
    } else {
      setErrorOldPassword('');
    }
  };
  const handleEditNewPassword = (text) => {
    setNewPassword(text);
    if (text === '') {
      setErrorNewPassword(
        `${
          language === 'eng'
            ? 'Please enter your password!'
            : 'Vui lòng nhập mật khẩu!'
        }`,
      );
    } else if (text.length < 8) {
      setErrorNewPassword(
        `${
          language === 'eng'
            ? 'Password is at least 8 characters!'
            : 'Mật khẩu phải ít nhất 8 ký tự'
        }`,
      );
    } else {
      setErrorNewPassword('');
    }
  };

  const handleEditConfirmPassword = (text) => {
    setConfirmPassword(text);
    if (text === '') {
      setErrorConfirmPassword(
        `${
          language === 'eng'
            ? 'Please enter your confirm password!'
            : 'Vui lòng nhập xác nhận mật khẩu!'
        }`,
      );
    } else if (text !== newPassword) {
      setErrorConfirmPassword(
        `${
          language === 'eng'
            ? 'Confirm password is not correct!'
            : 'Xác nhận mật khẩu không đúng!'
        }`,
      );
    } else {
      setErrorConfirmPassword('');
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const handleSubmit = async () => {
    if (newPassword === '') {
      setErrorNewPassword(
        `${
          language === 'eng'
            ? 'Please enter your password!'
            : 'Vui lòng nhập mật khẩu!'
        }`,
      );
    }
    if (oldPassword === '') {
      setErrorOldPassword(
        `${
          language === 'eng'
            ? 'Please enter your password!'
            : 'Vui lòng nhập mật khẩu!'
        }`,
      );
    }
    if (confirmPassword === '') {
      setErrorConfirmPassword(
        `${
          language === 'eng'
            ? 'Please enter your confirm password!'
            : 'Vui lòng nhập xác nhận mật khẩu!'
        }`,
      );
    }

    if (
      errorOldPassword !== '' ||
      errorNewPassword !== '' ||
      errorConfirmPassword !== ''
    ) {
      return;
    }

    try {
      const url = '/user/change-password';
      const body = {
        id: userState.userInfo.id,
        oldPass: oldPassword,
        newPass: newPassword,
      };
      const response = await axiosClient.post(
        url,
        body,
        configToken(userState.token),
      );
      if (response.status === 200) {
        Alert.alert(
          `${language === 'eng' ? 'Notification' : 'Thông báo'}`,
          `${
            language === 'eng'
              ? 'Password has been changed'
              : 'Đổi mật khẩu thành công'
          }`,
        );
        storeData({email: userState.userInfo.email, password: newPassword});

        props.setShowChangePasswordModal(false);
      } else {
        Alert.alert(
          `${language === 'eng' ? 'Notification' : 'Thông báo'}`,
          `${
            language === 'eng'
              ? 'Old password not correct'
              : 'Mật khẩu cũ không đúng'
          }`,
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showChangePasswordModal}>
        <KeyboardAvoidingView behavior="padding" style={styles.centeredView}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.centeredView}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.title}>
                  {language === 'eng' ? 'CHANGE PASSWORD' : 'ĐỔI MẬT KHẨU'}
                </Text>
                <View style={styles.infoContainer}>
                  <FormInput
                    styleInput={styles.input}
                    placeholder={
                      language === 'eng' ? 'Old password' : 'Mật khẩu cũ'
                    }
                    placeholderTextColor="gray"
                    secureTextEntry
                    autoCorrect={false}
                    defaultValue={oldPassword}
                    onChangeText={(text) => handleEditOldPassword(text)}
                  />
                  <Text style={styles.txtErrror}>{errorOldPassword}</Text>
                  <FormInput
                    styleInput={styles.input}
                    placeholder={
                      language === 'eng' ? 'New password' : 'Mật khẩu mới'
                    }
                    placeholderTextColor="gray"
                    secureTextEntry
                    autoCorrect={false}
                    defaultValue={newPassword}
                    onChangeText={(text) => handleEditNewPassword(text)}
                  />
                  <Text style={styles.txtErrror}>{errorNewPassword}</Text>
                  <FormInput
                    styleInput={styles.input}
                    placeholder={
                      language === 'eng'
                        ? 'Confirm password'
                        : 'Xác nhận mật khẩu'
                    }
                    placeholderTextColor="gray"
                    secureTextEntry
                    autoCorrect={false}
                    returnKeyType="go"
                    defaultValue={confirmPassword}
                    onChangeText={(text) => handleEditConfirmPassword(text)}
                  />
                  <Text style={styles.txtErrror}>{errorConfirmPassword}</Text>
                  <ButtonSubmit
                    buttonSubmitStyle={styles.buttonContainer}
                    titleSubmitStyle={styles.buttonText}
                    title={language === 'eng' ? 'SUBMIT' : 'ĐỔI MẬT KHẨU'}
                    onSubmit={handleSubmit}
                  />
                  <TouchableOpacity
                    style={styles.btnCancel}
                    onPress={() => setShowChangePasswordModal(false)}>
                    <Text style={styles.txtCancel}>
                      {language === 'eng' ? 'Cancel' : 'Thoát'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default ChangePassword;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  modalView: {
    borderRadius: 20,
    padding: Distance.spacing_10,
    alignItems: 'center',
    height: ScaleSize.scaleSizeHeight(280),
    width: ScaleSize.scaleSizeWidth(280),
  },
  title: {
    marginTop: Distance.spacing_5,

    fontSize: Typography.fontSize20,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: Distance.spacing_30,

    padding: Distance.spacing_16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,

    height: ScaleSize.scaleSizeHeight(30),
    paddingHorizontal: Distance.spacing_10,
    marginTop: Distance.spacing_5,
    fontSize: Typography.fontSize16,
  },
  buttonContainer: {
    backgroundColor: Colors.orange,
    paddingVertical: Distance.spacing_12,
    borderRadius: 10,

    marginTop: Distance.spacing_12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.black,
  },
  btnCancel: {
    alignItems: 'flex-end',
    marginTop: Distance.spacing_30,
  },
  txtCancel: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: Typography.fontSize16,
    borderRadius: 10,
    backgroundColor: Colors.orange,
    width: ScaleSize.scaleSizeWidth(60),
  },
  txtErrror: {
    color: Colors.red,
    marginLeft: Distance.superSmall,
  },
});
