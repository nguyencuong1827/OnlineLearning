import React, {useRef} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DistanceScale,
  ScaleSize,
  Colors,
  Typography,
} from '../../globals/styles';
import FormInput from '../../components/Authentication/FormInput';
import {useState} from 'react';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';

const Register = (props) => {
  const txtPassword = useRef(null);
  const txtConfirmPassword = useRef(null);
  const btnRegister = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.showRegisterModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>CREATE ACCOUNT</Text>
            <View style={styles.infoContainer}>
              <FormInput
                styleInput={styles.input}
                placeholder="Username"
                placeholderTextColor="gray"
                keyboardType="email-address"
                returnKeyType="next"
                defaultValue={username}
                onChangeText={(text) => setUsername(text)}
                onSubmitEditing={() => txtPassword.current.focus()}
              />
              <FormInput
                styleInput={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
                autoCorrect={false}
                ref={txtPassword}
                defaultValue={password}
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={() => txtConfirmPassword.current.focus()}
              />
              <FormInput
                styleInput={styles.input}
                placeholder="Confirm password"
                placeholderTextColor="gray"
                secureTextEntry
                autoCorrect={false}
                returnKeyType="go"
                ref={txtPassword}
                defaultValue={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                onSubmitEditing={() => btnRegister.current.focus()}
              />
              <ButtonSubmit
                ref={btnRegister}
                buttonSubmitStyle={styles.buttonContainer}
                titleSubmitStyle={styles.buttonText}
                title="REGISTER"
              />
              <TouchableOpacity
                style={styles.btnCancel}
                onPress={() => props.setShowRegisterModal(false)}>
                <Text style={styles.txtCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: DistanceScale.spacing_40,
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: DistanceScale.spacing_10,
    alignItems: 'center',
    height: ScaleSize.scaleSizeHeight(250),
    width: ScaleSize.scaleSizeWidth(280),
  },
  title: {
    marginTop: DistanceScale.spacing_5,

    color: Colors.black,
    fontSize: Typography.fontSize20,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: DistanceScale.spacing_30,

    padding: DistanceScale.spacing_16,
  },
  input: {
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,

    height: ScaleSize.scaleSizeHeight(30),
    paddingHorizontal: DistanceScale.spacing_10,
    marginTop: DistanceScale.spacing_10,

    color: Colors.black,
    fontSize: Typography.fontSize16,
  },
  buttonContainer: {
    backgroundColor: Colors.orange,
    paddingVertical: DistanceScale.spacing_12,
    borderRadius: 10,

    marginTop: DistanceScale.spacing_12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.black,
  },
  btnCancel: {
    alignItems: 'flex-end',
    marginTop: DistanceScale.spacing_30,
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
