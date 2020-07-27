import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import {DistanceScale, Colors, ScaleSize} from '../../../globals/styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Description = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [heightValue, setHeightValue] = useState(100);
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
    backgroundColor: Colors.silver,
    borderRadius: 5,
  },
  content: {
    color: Colors.grayBold,
    lineHeight: ScaleSize.scaleSizeHeight(15),
  },
});
