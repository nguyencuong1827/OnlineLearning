/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {ThemeContext} from '../../providers/theme-propvider';
import {AuthenticationContext} from '../../providers/authentication-provider';
import axiosClient from '../../api/axiosClient';
import configToken from '../../api/config-token';
import {
  Size,
  Styles,
  BoxModel,
  Distance,
  Typography,
} from '../../globals/styles';
import Separator from '../../components/Separator';
import CourseVerticalItem from '../../components/ListCourses/ListCoursesVertical/CourseItem';

const MyCourses = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {userState} = useContext(AuthenticationContext);
  const {navigation} = props;
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url = '/user/get-process-courses';
    try {
      let response = await axiosClient.get(url, configToken(userState.token));

      if (response.status === 200) {
        setData(response.data.payload);
      }
    } catch ({response}) {
      console.log(response.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, [userState]);

  return (
    <SafeAreaView
      style={[styles.safeAreaView, {backgroundColor: theme2.backgroundColor}]}>
      <FlatList
        data={data}
        image
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CourseVerticalItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => item.id + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(100),
          offset: Size.scaleSize(100) * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    ...Styles.rowBetween,
    ...BoxModel.smallPaddingHorizontal,
    height: Distance.spacing_40,
  },
  textDownload: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
  textRemove: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
  },
});

export default MyCourses;
