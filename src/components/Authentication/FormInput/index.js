import React from 'react';
import {TextInput} from 'react-native';

const FormInput = React.forwardRef((props, ref) => {
  const {
    styleInput,
    placeholder,
    placeholderTextColor,
    returnKeyType,
    secureTextEntry,
    autoCorrect,
    onSubmitEditing,
    onChangeText,
    defaultValue,
  } = props;
  return (
    <TextInput
      style={styleInput}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
      ref={ref}
      onSubmitEditing={onSubmitEditing}
      onChangeText={onChangeText}
      defaultValue={defaultValue}
    />
  );
});

export default FormInput;
