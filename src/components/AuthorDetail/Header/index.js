import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {Avatar} from 'react-native-elements';
import {
  Colors,
  ScaleSize,
  DistanceScale,
  Typography,
} from '../../../globals/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Contacts from '../Contacts';
import Separator from '../../Separator';

const HeaderAuthorDetail = () => {
  const moveToLink = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Cannot show ', url);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Avatar
        rounded={true}
        size={ScaleSize.scaleSizeWidth(77)}
        source={require('../../../../assets/images/taylor-swift.jpg')}
      />
      <Text style={styles.txtName}>Taylor Swift</Text>
      <Text style={styles.txtJob}>Pluralsight Author</Text>
      <TouchableOpacity style={styles.btnFollow}>
        <Text style={styles.txtFollow}>Follow</Text>
      </TouchableOpacity>
      <View>
        <Text style={[styles.txtJob, {fontSize: Typography.fontSize12}]}>
          Follow to be notified when new courses are published.
        </Text>
      </View>
      <View>
        <Text style={styles.txtDescription}>
          Taylor Swift is a software developer, consultant, conference speaker,
          and Pluralsight author. Her courses include: Angular: Getting Started,
          Angular Routing, and Object-Oriented Programming Fundamentals in C#.
          For her work in support of software developers, she has been
          recognized with Microsoft Most Valuable Professional (MVP) award, and
          is a Google Developer Expert (GDE)
        </Text>
      </View>
      <View style={styles.link}>
        <Icon name="insert-link" size={20} />
        <TouchableOpacity>
          <Text style={styles.txtLink}>https://reactnative.dev</Text>
        </TouchableOpacity>
      </View>
      <Contacts />
    </View>
  );
};

export default HeaderAuthorDetail;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: DistanceScale.spacing_8,
  },
  txtName: {
    color: Colors.black,
    fontSize: Typography.fontSize18,
    marginTop: DistanceScale.spacing_8,
    fontWeight: Typography.fontWeightBold,
  },
  txtJob: {
    color: Colors.gray,
    fontSize: Typography.fontSize14,
    marginVertical: DistanceScale.spacing_5,
  },
  btnFollow: {
    borderRadius: 3,
    backgroundColor: Colors.blue,
    marginVertical: DistanceScale.spacing_5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: DistanceScale.spacing_40,
    paddingVertical: DistanceScale.superSmall,
  },
  txtFollow: {
    color: Colors.white,
    fontSize: Typography.fontSize16,
  },
  txtDescription: {
    color: Colors.black,
    fontSize: Typography.fontSize14,
    lineHeight: DistanceScale.spacing_18,
    marginVertical: DistanceScale.spacing_5,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginVertical: DistanceScale.spacing_5,
  },
  txtLink: {
    color: Colors.black,
    fontSize: Typography.fontSize14,
    marginLeft: DistanceScale.spacing_8,
  },
});
