import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../../../providers/theme-propvider';
import PrimaryButton from '../../Authentication/PrimaryButton';
import {Styles, BoxModel, Size} from '../../../globals/styles';

const Feature = (props) => {
  const {onPressLike, onPressJoin, isOwnCourse, isLike} = props;
  const {theme2} = useContext(ThemeContext);
  const titlePrimary = () => {
    if (isOwnCourse.isUserOwnCourse) {
      return 'Continue';
    } else {
      return 'Join Now';
    }
  };
  return (
    <View style={[styles.container, {backgroundColor: theme2.themeColor}]}>
      <View style={styles.mainContainer}>
        <PrimaryButton
          title={titlePrimary()}
          onPress={onPressJoin}
          active={true}
          icon="book"
          style={[
            styles.buttonContainer,
            {
              backgroundColor: isOwnCourse.isUserOwnCourse
                ? theme2.subPrimaryColor
                : theme2.primaryColor,
            },
          ]}
        />
      </View>
      <View style={styles.mainContainer}>
        <PrimaryButton
          title={isLike ? 'Liked' : 'Like'}
          onPress={onPressLike}
          active={true}
          icon="heart-o"
          style={[styles.buttonContainer, {backgroundColor: theme2.alertColor}]}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    ...Styles.center,
    ...BoxModel.smallBorderRadius,
    ...BoxModel.marginHorizontal,
    ...BoxModel.smallMarginVertical,
    height: Size.scaleSize(45),
    width: Size.scaleSize(150),
    borderRadius: Size.scaleSize(15),
  },
});
export default Feature;
