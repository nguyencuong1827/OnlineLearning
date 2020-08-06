import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {DistanceScale, Typography} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';

const Contacts = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="facebook-square"
        size={Typography.fontSize20}
        color={theme.colorMainText}
      />
      <Icon
        style={styles.icon}
        name="twitter"
        size={Typography.fontSize20}
        color={theme.colorMainText}
      />
      <Icon
        style={styles.icon}
        name="linkedin-square"
        size={Typography.fontSize20}
        color={theme.colorMainText}
      />
    </View>
  );
};

export default Contacts;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: DistanceScale.spacing_5,
  },
  icon: {
    marginEnd: DistanceScale.spacing_8,
  },
});
