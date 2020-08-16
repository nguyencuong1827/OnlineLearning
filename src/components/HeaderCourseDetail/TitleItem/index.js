import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography, BoxModel} from '../../../globals/styles';
const Title = (props) => {
  const {theme2} = useContext(ThemeContext);
  return (
    <View style={[styles.container]}>
      <Text style={[styles.textContainer, {color: theme2.primaryTextColor}]}>
        {props.name}
      </Text>
      {props.subtitle ? (
        <Text style={[styles.subtitleContainer, {color: theme2.grayColor}]}>
          {props.subtitle}
        </Text>
      ) : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 10,
  },
  textContainer: {
    fontSize: Typography.fontSize25,
    ...Typography.fontBold,
  },
  subtitleContainer: {
    ...BoxModel.smallMarginVertical,
    fontSize: Typography.fontSize18,
    ...Typography.fontRegular,
  },
});

export default Title;
