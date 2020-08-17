import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {ThemeContext} from '../../providers/theme-propvider';
import {Styles, Typography, BoxModel} from '../../globals/styles';
import axiosClient from '../../api/axiosClient';
import configToken from '../../api/config-token';
import {ListCoursesVertical} from '../../components/ListCourses';

const Browse = (props) => {
  const {navigation} = props;
  const [data, setData] = useState([]);
  const {userState} = useContext(AuthenticationContext);
  const {theme2} = useContext(ThemeContext);
  useEffect(() => {
    const fetchData = async () => {
      const url = '/user/get-favorite-courses';
      try {
        let response = await axiosClient.get(url, configToken(userState.token));
        if (response.status === 200) {
          setData(response.data.payload);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userState]);

  const renderItem = () => {
    if (data.length === 0) {
      return (
        <View style={[Styles.columnCenter, Styles.maxHeight]}>
          <FontAwesome5 name="link" size={70} color={theme2.primaryColor} />
          <Text
            style={[
              Typography.fontBold,
              BoxModel.marginVertical,
              {fontSize: Typography.fontSize20, color: theme2.primaryTextColor},
            ]}>
            No Matching Courses{' '}
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize18, color: theme2.grayColor},
            ]}>
            Try another one
          </Text>
        </View>
      );
    } else {
      return <ListCoursesVertical data={data} navigation={navigation} />;
    }
  };
  return (
    <View style={[Styles.maxHeight, {backgroundColor: theme2.backgroundColor}]}>
      {data ? renderItem() : undefined}
    </View>
  );
};
export default Browse;
