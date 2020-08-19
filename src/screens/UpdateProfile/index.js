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

function validateNumber(number) {
  const re = /^[0-9]+$/;
  return re.test(String(number).toLowerCase());
}

import {ThemeContext} from '../../providers/theme-propvider';

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
  const {userState} = useContext(AuthenticationContext);
  const {theme} = useContext(ThemeContext);
  const [username, setUsername] = useState(userState.userInfo.name);
  const [phone, setPhone] = useState(userState.userInfo.phone);
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const {showUpdateProfileModal, setShowUpdateProfileModal} = props;
  setStyleWithTheme(theme);

  const handleEditUsername = (text) => {
    setUsername(text);
    if (text === '') {
      setErrorUsername('Please enter your full name!');
    } else if (text.length <= 1) {
      setErrorUsername('Full name is at least two characters!');
    } else {
      setErrorUsername('');
    }
  };

  const handleEditPhone = (text) => {
    setPhone(text);
    if (text === '') {
      setErrorPhone('Please enter your number phone!');
    } else if (text.length < 10 || validateNumber(text) === false) {
      setErrorPhone('Invalid number phone!');
    } else {
      setErrorPhone('');
    }
  };

  const handleSubmit = async () => {
    const userInfo = {
      username,
      phone,
    };
    if (username === '') {
      setErrorUsername('Please enter your full name!');
    }
    if (phone === '') {
      setErrorPhone('Please enter your phone!');
    }

    if (errorUsername !== '' || errorPhone !== '') {
      return;
    }

    try {
      const url = '/user/update-profile';
      const body = {
        name: username,
        avatar: '',
        phone: phone,
      };
      const response = await axiosClient.post(
        url,
        body,
        configToken(userState.token),
      );
      if (response.status === 200) {
        Alert.alert('Notification', 'Your profile have been updated');
        setShowUpdateProfileModal(false);
      } else {
        console.log(response);
        Alert.alert('Notification', 'Update profile faild');
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
        visible={showUpdateProfileModal}>
        <KeyboardAvoidingView behavior="padding" style={styles.centeredView}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.centeredView}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.title}>UPDATE PROFILE</Text>
                <View style={styles.infoContainer}>
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
                    title="SUBMIT"
                    onSubmit={handleSubmit}
                  />
                  <TouchableOpacity
                    style={styles.btnCancel}
                    onPress={() => setShowUpdateProfileModal(false)}>
                    <Text style={styles.txtCancel}>Cancel</Text>
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
    height: ScaleSize.scaleSizeHeight(250),
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
});
