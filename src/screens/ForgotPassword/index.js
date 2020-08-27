import React, {useRef, useContext} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {Distance, ScaleSize, Colors, Typography} from '../../globals/styles';
import FormInput from '../../components/Authentication/FormInput';
import {useState} from 'react';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';
import axiosClient from '../../api/axiosClient';
import {LanguageContext} from '../../providers/language-provider';

const ForgotPassword = (props) => {
  const btnSendCode = useRef(null);
  const [email, setEmail] = useState('');
  const {language} = useContext(LanguageContext);

  const handldeSubmit = async () => {
    const url = '/user/forget-pass/send-email';
    try {
      let response = await axiosClient.post(url, {email});
      if (response.status === 200) {
        Alert.alert(
          `${language === 'eng' ? 'Notification' : 'Thông báo'}`,
          `${
            language === 'eng'
              ? 'Please check your email to get password!'
              : 'Vui lòng kiểm tra email để lấy lại mật khẩu!'
          }`,
        );
        props.setShowForgotPasswordModal(false);
      } else {
        Alert.alert(
          `${language === 'eng' ? 'Notification' : 'Thông báo'}`,
          `${language === 'eng' ? 'Email not find!' : 'Không tìm thấy email!'}`,
        );
      }
    } catch ({response}) {
      console.log(response);
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.showForgotPasswordModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>
              {language === 'eng' ? 'FORGOT PASSWORD' : 'QUÊN MẬT KHẨU'}
            </Text>
            <View style={styles.infoContainer}>
              <FormInput
                styleInput={styles.input}
                placeholder={
                  language === 'eng' ? 'Your email' : 'Email đăng ký'
                }
                placeholderTextColor="gray"
                keyboardType="email-address"
                returnKeyType="go"
                defaultValue={email}
                onChangeText={(text) => setEmail(text)}
                onSubmitEditing={() => btnSendCode.current.focus()}
              />
              <ButtonSubmit
                ref={btnSendCode}
                buttonSubmitStyle={styles.buttonContainer}
                titleSubmitStyle={styles.buttonText}
                title={language === 'eng' ? 'SEND CODE' : 'GỬI MÃ'}
                onSubmit={handldeSubmit}
              />
              <TouchableOpacity
                style={styles.btnCancel}
                onPress={() => props.setShowForgotPasswordModal(false)}>
                <Text style={styles.txtCancel}>
                  {language === 'eng' ? 'Cancel' : 'Thoát'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ForgotPassword;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Distance.spacing_40,
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: Distance.spacing_10,
    alignItems: 'center',
    height: ScaleSize.scaleSizeHeight(170),
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
    marginTop: Distance.spacing_10,

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
});
