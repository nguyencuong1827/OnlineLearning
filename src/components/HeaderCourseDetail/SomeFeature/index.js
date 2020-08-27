import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../../../providers/theme-propvider';
import PrimaryButton from '../../Authentication/PrimaryButton';
import {Styles, BoxModel, Size, Colors} from '../../../globals/styles';
import {LanguageContext} from '../../../providers/language-provider';

const Feature = (props) => {
  const {onPressLike, onPressJoin, isOwnCourse, isLike} = props;
  const {theme2} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const titlePrimary = () => {
    if (isOwnCourse.isUserOwnCourse) {
      return language === 'eng' ? 'Continue' : 'Tiếp tục';
    } else {
      return language === 'eng' ? 'Join Now' : 'Tham gia';
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
          title={
            isLike
              ? `${language === 'eng' ? 'Liked' : 'Đã thích'}`
              : `${language === 'eng' ? 'Like' : 'Thích'}`
          }
          onPress={onPressLike}
          active={true}
          icon="heart-o"
          style={[styles.buttonContainer, {backgroundColor: Colors.orange}]}
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
