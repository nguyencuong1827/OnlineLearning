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
import {AuthenticationContext} from '../../providers/authentication-provider';
import axiosClient from '../../api/axiosClient';
import configToken from '../../api/config-token';
import ImagePicker from 'react-native-image-picker';
import {Avatar} from 'react-native-elements';
import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

function validateNumber(number) {
  const re = /^[0-9]+$/;
  return re.test(String(number).toLowerCase());
}

import {ThemeContext} from '../../providers/theme-propvider';
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

const UpdateProfile = (props) => {
  const {userState, updateUserInfo} = useContext(AuthenticationContext);
  const {theme} = useContext(ThemeContext);
  const [username, setUsername] = useState(userState.userInfo.name);
  const [phone, setPhone] = useState(userState.userInfo.phone);
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [imgUri, setImgUri] = useState(userState.userInfo.avatar);
  const [imgName, setImgName] = useState('');
  const {language} = useContext(LanguageContext);
  const {showUpdateProfileModal, setShowUpdateProfileModal} = props;
  setStyleWithTheme(theme);

  const handleEditUsername = (text) => {
    setUsername(text);
    if (text === '') {
      setErrorUsername(
        `${
          language === 'eng'
            ? 'Please enter your full name!'
            : 'Vui lòng điền họ tên!'
        }`,
      );
    } else if (text.length <= 1) {
      setErrorUsername(
        `${
          language === 'eng'
            ? 'Full name is at least two characters!'
            : 'Họ tên phải ít nhất 2 ký tự!'
        }`,
      );
    } else {
      setErrorUsername('');
    }
  };

  const handleEditPhone = (text) => {
    setPhone(text);
    if (text === '') {
      setErrorPhone(
        `${
          language === 'eng'
            ? 'Please enter your number phone!'
            : 'Vui lòng nhập số điện thoại!'
        }`,
      );
    } else if (text.length < 10 || validateNumber(text) === false) {
      setErrorPhone(
        `${
          language === 'eng'
            ? 'Invalid number phone!'
            : 'Số điện thoại không hợp lệ!'
        }`,
      );
    } else {
      setErrorPhone('');
    }
  };

  const handleSubmit = async () => {
    if (username === '') {
      setErrorUsername(
        `${
          language === 'eng'
            ? 'Please enter your full name!'
            : 'Vui lòng điền họ tên!'
        }`,
      );
    }
    if (phone === '') {
      setErrorPhone(
        `${
          language === 'eng'
            ? 'Please enter your number phone!'
            : 'Vui lòng nhập số điện thoại!'
        }`,
      );
    }

    if (errorUsername !== '' || errorPhone !== '') {
      return;
    }
    let urlAvatar = '';
    if (imgName !== '') {
      urlAvatar = await uploadPhoto();
    }

    try {
      const url = '/user/update-profile';
      const body = {
        name: username,
        avatar: urlAvatar === '' ? userState.userInfo.avatar : urlAvatar,
        phone: phone,
      };
      const response = await axiosClient.put(
        url,
        body,
        configToken(userState.token),
      );
      if (response.status === 200) {
        Alert.alert(
          `${language === 'eng' ? 'Notification' : 'Thông báo'}`,
          `${
            language === 'eng'
              ? 'Your profile have been updated'
              : 'Thông tin của bạn đã được cập nhật'
          }`,
        );
        updateUserInfo(body);
        setShowUpdateProfileModal(false);
      } else {
        console.log(response);
        Alert.alert(
          `${language === 'eng' ? 'Notification' : 'Thông báo'}`,
          `${
            language === 'eng'
              ? 'Your profile have been updated'
              : 'Cập nhật thông tin thất bại'
          }`,
        );
        setImgUri(userState.userInfo.avatar);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setImgUri(response.uri);
        setImgName(response.fileName);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  const uploadPhoto = async () => {
    const reference = storage().ref(
      `avatars/${userState.userInfo.email}_${imgName}`,
    );
    const task = await reference.putFile(imgUri);
    if (task.state === 'error') {
      ToastAndroid.showWithGravity(
        `${
          language === 'eng'
            ? 'Your profile have been updated'
            : 'Tải hình đại diện thất bại'
        }`,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      const url = await reference.getDownloadURL();
      return url;
    }
    return '';
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showUpdateProfileModal}>
        <KeyboardAvoidingView behavior="padding" style={styles.centeredView}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.centeredView}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.title}>
                  {language === 'eng' ? 'UPDATE PROFILE' : 'CẬP NHẬT THÔNG TIN'}
                </Text>
                <View style={styles.infoContainer}>
                  <View style={styles.avatar}>
                    <Avatar
                      rounded={true}
                      size={ScaleSize.scaleSizeWidth(77)}
                      source={{uri: imgUri}}
                    />
                  </View>

                  <FormInput
                    styleInput={styles.input}
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    defaultValue={username}
                    onChangeText={(text) => handleEditUsername(text)}
                  />
                  <Text style={styles.txtErrror}>{errorUsername}</Text>
                  <FormInput
                    styleInput={styles.input}
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    defaultValue={phone}
                    onChangeText={(text) => handleEditPhone(text)}
                  />
                  <Text style={styles.txtErrror}>{errorPhone}</Text>
                  <ButtonSubmit
                    buttonSubmitStyle={styles.buttonContainer}
                    titleSubmitStyle={styles.buttonText}
                    title={language === 'eng' ? 'Select image' : 'Chọn ảnh'}
                    onSubmit={selectPhotoTapped}
                  />
                  <ButtonSubmit
                    buttonSubmitStyle={styles.buttonContainer}
                    titleSubmitStyle={styles.buttonText}
                    title={language === 'eng' ? 'SUBMIT' : 'CẬP NHẬT'}
                    onSubmit={handleSubmit}
                  />
                  <TouchableOpacity
                    style={styles.btnCancel}
                    onPress={() => setShowUpdateProfileModal(false)}>
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

export default UpdateProfile;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Distance.spacing_10,
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: Distance.spacing_10,
    alignItems: 'center',
    height: ScaleSize.scaleSizeHeight(350),
    width: ScaleSize.scaleSizeWidth(280),
  },
  title: {
    marginTop: Distance.spacing_5,

    color: Colors.black,
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
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,

    height: ScaleSize.scaleSizeHeight(30),
    paddingHorizontal: Distance.spacing_10,
    marginTop: Distance.spacing_5,

    color: Colors.black,
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
  avatar: {
    alignSelf: 'center',
    marginBottom: Distance.spacing_10,
  },
});
