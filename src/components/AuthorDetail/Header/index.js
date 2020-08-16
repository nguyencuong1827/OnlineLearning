import React, {useContext} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {Avatar} from 'react-native-elements';
import {
  Colors,
  ScaleSize,
  Distance,
  Typography,
} from '../../../globals/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Contacts from '../Contacts';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.txtName = {...styles.txtName, color: theme.colorMainText};
  styles.txtJob = {...styles.txtJob, color: theme.colorSubText};
  styles.txtDescription = {
    ...styles.txtDescription,
    color: theme.colorMainText,
  };
  styles.txtLink = {...styles.txtLink, color: theme.colorMainText};
};

const HeaderAuthorDetail = (props) => {
  const {name, description, urlAvatar} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

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
        source={urlAvatar}
      />
      <Text style={styles.txtName}>{name}</Text>
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
        <Text style={styles.txtDescription}>{description}</Text>
      </View>
      <View style={styles.link}>
        <Icon
          name="insert-link"
          size={Typography.fontSize20}
          color={theme.colorMainText}
        />
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
    marginHorizontal: Distance.spacing_8,
  },
  txtName: {
    fontSize: Typography.fontSize18,
    marginTop: Distance.spacing_8,
    fontWeight: Typography.fontWeightBold,
  },
  txtJob: {
    fontSize: Typography.fontSize14,
    marginVertical: Distance.spacing_5,
  },
  btnFollow: {
    borderRadius: 3,
    backgroundColor: Colors.blue,
    marginVertical: Distance.spacing_5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Distance.spacing_40,
    paddingVertical: Distance.superSmall,
  },
  txtFollow: {
    color: Colors.white,
    fontSize: Typography.fontSize16,
  },
  txtDescription: {
    fontSize: Typography.fontSize16,
    lineHeight: Distance.spacing_18,
    marginVertical: Distance.spacing_5,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginVertical: Distance.spacing_5,
  },
  txtLink: {
    fontSize: Typography.fontSize16,
    marginLeft: Distance.spacing_8,
  },
});
