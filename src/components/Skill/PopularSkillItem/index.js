import React, {useContext} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import {ThemeContext} from 'react-native-elements';
import {BoxModel, Styles, Distance, Typography} from '../../../globals/styles';
const Item = (props) => {
  const {item, onPress} = props;
  const {theme2} = useContext(ThemeContext);
  const titleItem = () => {
    if (item.id === 0) {
      return 'Free';
    }
    if (item.id === 1) {
      return '<200.000đ';
    }
    if (item.id === 2) {
      return '200.000đ - 500.000đ';
    }
    if (item.id === 3) {
      return '500.000đ - 1.000.000đ';
    }
    if (item.id === 4) {
      return '1.000.000đ - 2.000.000đ ';
    }
    return '>2.000.000đ';
  };
  return (
    <TouchableHighlight
      style={[
        styles.skillContainer,
        {backgroundColor: theme2.backgroundSeeAllButton},
      ]}
      underlayColor={theme2.backgroundSeeAllButton}
      onPress={() => {
        onPress(item, titleItem);
      }}>
      <Text style={{...Typography.fontRegular, color: theme2.primaryTextColor}}>
        {titleItem()}
      </Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  skillContainer: {
    ...BoxModel.smallBorderRadius,
    ...Styles.mainCenter,
    ...BoxModel.smallPaddingHorizontal,
    marginLeft: Distance.spacing_10,
    height: Distance.spacing_30,
  },
});
export default Item;
