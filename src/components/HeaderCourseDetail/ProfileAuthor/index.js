import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import {ThemeContext} from '../../../providers/theme-propvider';
import {
  Typography,
  BoxModel,
  Styles,
  Distance,
  Size,
} from '../../../globals/styles';
import PrimaryButton from '../../Authentication/PrimaryButton';

const ProfileAuthor = (props) => {
  const {data, onPress} = props;
  const {theme2} = useContext(ThemeContext);
  return (
    <View style={Styles.fillColumnStart}>
      <View style={[styles.divide, {backgroundColor: theme2.DialogColor}]} />
      {data ? (
        <View>
          <Text style={[styles.title, {color: theme2.primaryTextColor}]}>
            Created by {data.name || data.email}
          </Text>
          <View style={[Styles.fillRowStart, BoxModel.marginHorizontal]}>
            <FastImage
              style={styles.image}
              source={{
                uri: data.avatar,
              }}
            />
            <View style={Styles.fillColumnStart}>
              <View style={styles.link}>
                <MaterialIcons
                  name="person-outline"
                  size={22}
                  color={theme2.primaryTextColor}
                />
                <Text
                  style={[styles.linkText, {color: theme2.primaryTextColor}]}>
                  {data.soldNumber} Students
                </Text>
              </View>
              <View style={styles.link}>
                <MaterialIcons
                  name="library-books"
                  size={22}
                  color={theme2.primaryTextColor}
                />
                <Text
                  style={[styles.linkText, {color: theme2.primaryTextColor}]}>
                  {data.totalCourse} Courses
                </Text>
              </View>
              <View style={styles.link}>
                <MaterialIcons
                  name="star-border"
                  size={22}
                  color={theme2.primaryTextColor}
                />
                <Text
                  style={[styles.linkText, {color: theme2.primaryTextColor}]}>
                  {data.averagePoint.toFixed(1)} Average Rating
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : undefined}
      <PrimaryButton
        title="View Profile"
        onPress={() => onPress(data)}
        active={true}
        icon="user"
        style={[styles.buttonContainer, {backgroundColor: theme2.primaryColor}]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12.5,
  },
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
  divide: {
    height: 1,
  },
  buttonContainer: {
    width: Size.scaleSize(150),
    height: Size.scaleSize(40),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
export default ProfileAuthor;
