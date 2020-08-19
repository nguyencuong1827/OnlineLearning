import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Moment from 'moment';
import StarRating from 'react-native-star-rating';
import {ThemeContext} from '../../providers/theme-propvider';
import {Styles, BoxModel, Typography, Size} from '../../globals/styles';

const FeedBackComponent = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {itemFeedBack} = props;

  return (
    <View key={itemFeedBack.id} style={Styles.fillColumn}>
      <View style={Styles.fillRowStart}>
        <View
          style={[
            Styles.columnCross,
            styles.avatarContainer,
            BoxModel.tinyMargin,
          ]}>
          <FastImage
            style={[Styles.avatarIcon, BoxModel.tinyMarginVertical]}
            source={{
              uri: itemFeedBack.user.avatar,
            }}
          />
        </View>
        <View style={[Styles.fillColumnStart, BoxModel.smallMarginHorizontal]}>
          <Text
            style={[
              styles.textHeader,
              BoxModel.tinyMarginVertical,
              {color: theme2.primaryColor},
            ]}>
            {itemFeedBack.user.name || itemFeedBack.user.email}
          </Text>
          <View style={{alignSelf: 'flex-start'}}>
            <StarRating
              disabled={false}
              maxStars={5}
              starSize={15}
              rating={itemFeedBack.averagePoint}
              fullStarColor={'#f1c40f'}
              containerStyle={styles.rating}
            />
          </View>

          <Text
            style={[
              Typography.fontRegular,
              {
                color: theme2.primaryTextColor,
                fontSize: Typography.fontSize14,
              },
            ]}>
            {itemFeedBack.content}
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              styles.authorContainer,
              BoxModel.tinyMarginVertical,
              {color: theme2.grayColor},
            ]}>
            {Moment(itemFeedBack.updatedAt).format('MMM DD, yyyy')}
          </Text>
        </View>
      </View>

      <View style={[styles.divide, {backgroundColor: theme2.DialogColor}]} />
    </View>
  );
};
const styles = StyleSheet.create({
  avatarContainer: {
    width: Size.scaleSize(70),
  },
  divide: {
    height: 1,
  },
  authorContainer: {
    alignSelf: 'flex-end',
  },
  textHeader: {
    fontSize: Typography.fontSize14,
    ...Typography.fontBold,
  },
});

export default FeedBackComponent;
