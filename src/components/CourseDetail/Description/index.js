import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import {
  DistanceScale,
  Colors,
  ScaleSize,
  Typography,
} from '../../../globals/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.expandButton = {
    ...styles.expandButton,
    backgroundColor: theme.buttonSeeAllBackground,
  };
  styles.content = {...styles.content, color: theme.colorSubText};
};

const Description = (props) => {
  const {theme} = useContext(ThemeContext);
  const [isExpand, setIsExpand] = useState(false);
  const [heightValue, setHeightValue] = useState(100);

  setStyleWithTheme(theme);

  const onExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setHeightValue(isExpand === false ? -1 : 100);
    setIsExpand(!isExpand);
  };

  return (
    <View style={[styles.container, {height: heightValue}]}>
      <Text style={styles.content}>{props.description}</Text>
      <TouchableOpacity onPress={onExpand} style={styles.expandButton}>
        <Icon
          name={isExpand === false ? 'down' : 'up'}
          size={15}
          color={Colors.black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Description;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    padding: DistanceScale.spacing_5,
    marginHorizontal: DistanceScale.spacing_12,
    marginTop: DistanceScale.spacing_8,
  },
  expandButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  content: {
    lineHeight: ScaleSize.scaleSizeHeight(15),
    fontSize: Typography.fontSize16,
  },
});
