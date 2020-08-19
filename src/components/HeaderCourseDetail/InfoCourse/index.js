import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';
import Moment from 'moment';
import {ThemeContext} from '../../../providers/theme-propvider';
import {
  Styles,
  Typography,
  BoxModel,
  Size,
  Colors,
} from '../../../globals/styles';

const InfoCourse = (props) => {
  const {theme2} = useContext(ThemeContext);
  return (
    <View>
      <View style={styles.container}>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme2.grayColor},
          ]}>
          <FontAwesome
            name="file-video-o"
            size={Size.scaleSize(16)}
            color={theme2.grayColor}
          />
          <Text style={[styles.text, {color: theme2.grayColor}]}>
            {props.videoNumber} Videos
          </Text>
        </View>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme2.grayColor},
          ]}>
          <MaterialIcons
            name="play-arrow"
            size={Size.scaleSize(16)}
            color={theme2.grayColor}
          />
          <Text style={[styles.text, {color: theme2.grayColor}]}>
            {props.totalHour} hours
          </Text>
        </View>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme2.grayColor},
          ]}>
          <StarRating
            disabled={false}
            maxStars={5}
            starSize={13}
            rating={props.rate}
            fullStarColor={Colors.yellow}
            containerStyle={styles.rating}
          />
          <Text style={[styles.text, {color: theme2.grayColor}]}>
            ({props.totalRate})
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme2.grayColor},
          ]}>
          <MaterialIcons
            name="person-pin"
            size={Size.scaleSize(16)}
            color={theme2.grayColor}
          />
          <Text style={[styles.text, {color: theme2.grayColor}]}>
            {props.soldNumber} Enrolled
          </Text>
        </View>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme2.grayColor},
          ]}>
          <MaterialIcons
            name="update"
            size={Size.scaleSize(16)}
            color={theme2.grayColor}
          />
          <Text style={[styles.text, {color: theme2.grayColor}]}>
            Updated {Moment(props.updatedAt).format('MMM DD, yyyy')}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  text: {
    marginLeft: 5,
    fontSize: Typography.fontSize16,
    ...Typography.fontRegular,
  },
  infoContainer: {
    borderWidth: 1,
    ...BoxModel.tinyPadding,
    ...BoxModel.tinyMarginHorizontal,
    borderRadius: Size.scaleSize(12),
  },
  rating: {
    marginLeft: 5,
  },
});
export default InfoCourse;
