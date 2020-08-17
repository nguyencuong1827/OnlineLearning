import React, {useRef} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {Distance, ScaleSize, Colors, Typography} from '../../globals/styles';
import FormInput from '../../components/Authentication/FormInput';
import {useState} from 'react';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';

const ForgotPassword = (props) => {
  const btnSendCode = useRef(null);
  const [email, setEmail] = useState('');
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.showForgotPasswordModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>FORGOT PASSWORD</Text>
            <View style={styles.infoContainer}>
              <FormInput
                styleInput={styles.input}
                placeholder="Your email"
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
                title="SEND CODE"
              />
              <TouchableOpacity
                style={styles.btnCancel}
                onPress={() => props.setShowForgotPasswordModal(false)}>
                <Text style={styles.txtCancel}>Cancel</Text>
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
