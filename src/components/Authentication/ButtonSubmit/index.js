import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ButtonSubmit = React.forwardRef((props, ref) => {
  const {buttonSubmitStyle, titleSubmitStyle, title, onSubmit} = props;
  return (
    <TouchableOpacity
      ref={ref}
      style={buttonSubmitStyle}
      onPress={onSubmit}
      hasTVPreferredFocus={true}>
      <Text style={titleSubmitStyle}>{title}</Text>
    </TouchableOpacity>
  );
});

export default ButtonSubmit;
