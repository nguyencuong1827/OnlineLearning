import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScaleSize, DistanceScale, Typography} from '../../globals/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Separator from '../Separator';
import {ThemeContext} from '../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.title = {...styles.title, color: theme.colorMainText};
};
const SettingItem = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);
  const {title1, title2, nameIcon, onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.viewIconTitle}>
          <Icon
            size={ScaleSize.scaleSizeWidth(25)}
            name={nameIcon}
            color={theme.colorMainText}
          />
          <Text style={styles.title}>{title1}</Text>
        </View>
        <View style={styles.viewIconTitle}>
          <Text>{title2}</Text>
          <Icon
            size={ScaleSize.scaleSizeWidth(25)}
            name="chevron-right"
            color={theme.colorMainText}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.separator}>
        <Separator />
      </View>
    </View>
  );
};
export default SettingItem;
const styles = StyleSheet.create({
  container: {
    marginVertical: DistanceScale.spacing_5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: DistanceScale.spacing_14,
  },
  viewIconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: DistanceScale.spacing_16,
    fontSize: Typography.fontSize16,
  },
  separator: {
    marginHorizontal: DistanceScale.spacing_10,
    marginTop: DistanceScale.spacing_5,
  },
});
