import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Styles, BoxModel, Distance, Typography} from '../../../globals/styles';
import {LanguageContext} from '../../../providers/language-provider';
const WhatLearn = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const skillComponent = () => {
    if (props.WhatLearnItem) {
      return props.WhatLearnItem.map((item) => (
        <View style={styles.link} key={item.toString()}>
          <MaterialIcons name="check" size={22} color={theme2.primaryColor} />
          <Text style={[styles.linkText, {color: theme2.primaryTextColor}]}>
            {item}
          </Text>
        </View>
      ));
    } else {
      <Text style={[styles.linkText, {color: theme2.primaryTextColor}]}>
        ({language === 'eng' ? 'Not required' : 'Không yêu cầu'})
      </Text>;
    }
  };
  const requirementComponent = () => {
    if (props.requireItem) {
      return props.requireItem.map((item) => (
        <View style={styles.link} key={item.toString()}>
          <MaterialIcons name="check" size={22} color={theme2.primaryColor} />
          <Text style={[styles.linkText, {color: theme2.primaryTextColor}]}>
            {item}
          </Text>
        </View>
      ));
    } else {
      <Text style={[styles.linkText, {color: theme2.primaryTextColor}]}>
        ({language === 'eng' ? 'Not required' : 'Không yêu cầu'})
      </Text>;
    }
  };
  return (
    <View>
      <View style={[styles.divide, {backgroundColor: theme2.DialogColor}]} />
      <Text style={[styles.title, {color: theme2.primaryTextColor}]}>
        {language === 'eng' ? 'What will you learn?' : 'Bạn sẽ học được gì?'}
      </Text>
      {skillComponent()}
      <View style={[styles.divide, {backgroundColor: theme2.DialogColor}]} />
      <Text style={[styles.title, {color: theme2.primaryTextColor}]}>
        {language === 'eng' ? 'Requirements' : 'Yêu cầu'}
      </Text>
      {requirementComponent()}
      <View style={[styles.divide, {backgroundColor: theme2.DialogColor}]} />
      <Text style={[styles.title, {color: theme2.primaryTextColor}]}>
        {language === 'eng' ? 'Description' : 'Mô tả'}
      </Text>
      <Text style={[styles.description, {color: theme2.primaryTextColor}]}>
        {props.description ? props.description : 'Not found'}
      </Text>
      <View style={[styles.divide, {backgroundColor: theme2.DialogColor}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    ...Styles.fillRowStart,
    ...BoxModel.bottomMargin,
    alignSelf: 'flex-start',
    marginLeft: Distance.spacing_16,
  },
  linkText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    marginLeft: Distance.spacing_8,
  },
  description: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    ...BoxModel.marginHorizontal,
    ...BoxModel.bottomMargin,
  },
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  divide: {
    height: 1,
  },
});
export default WhatLearn;
