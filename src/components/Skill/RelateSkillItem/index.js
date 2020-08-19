import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {categoryImage} from '../../../globals/fake-data';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Styles, Size, BoxModel, Typography} from '../../../globals/styles';

const Item = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {onPress, item} = props;

  const findIMage = () => {
    const result = categoryImage.find(({id}) => id === item.id);
    if (result.image) {
      return result.image;
    } else {
      return 'https://pluralsight.imgix.net/course-images/audience/software-development.jpg';
    }
  };
  return (
    <FastImage
      style={styles.container}
      source={{
        uri: findIMage(),
      }}>
      <TouchableOpacity
        style={[
          {backgroundColor: theme2.blackWith05OpacityColor},
          styles.container,
        ]}
        onPress={() => {
          onPress(item);
        }}>
        <Text
          style={[
            Styles.textInBanner,
            styles.text,
            {color: theme2.whiteColor},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </FastImage>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    ...BoxModel.tinyMargin,
    width: Size.scaleSize(150),
    height: Size.itemHeight,
  },
  blurContainer: {},
  text: {
    ...BoxModel.smallPadding,
    ...Typography.fontBold,
  },
});
export default Item;
