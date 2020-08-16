/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import * as screenName from '../../globals/constants/screen-name';
import {ThemeContext} from '../../providers/theme-propvider';
import {AuthenticationContext} from '../../providers/authentication-provider';
import axiosClient from '../../api/axiosClient';
import {ListCoursesVertical} from '../../components/ListCourses';

const ListOfCourse = (props) => {
  const {navigation, route} = props;
  const {theme2} = useContext(ThemeContext);
  const {id, keyword} = route.params;
  const [data, setData] = useState([]);
  const {state} = useContext(AuthenticationContext);

  const body = {
    limit: 10,
    offset: 0,
  };
  const fetchData = async () => {
    try {
      switch (id) {
        case screenName.NewRelease:
          let response = await axiosClient.post('/course/top-new', body);
          if (response.status === 200) {
            setData(response.data.payload);
          }
          break;
        case screenName.TopRating:
          let topRating = await axiosClient.post('course/top-rate', body);
          if (topRating.status === 200) {
            setData(topRating.data.payload);
          }
          break;
        case screenName.BestSeller:
          let bestSeller = await axiosClient.post('/course/top-sell', body);
          if (bestSeller.status === 200) {
            setData(bestSeller.data.payload);
          }
          break;
        case screenName.YourFavorite:
          let userFavorite = await axiosClient.post(
            '/course/courses-user-favorite-categories',
            {
              userId: state.userInfo.id,
            },
          );
          if (userFavorite.status === 200) {
            setData(userFavorite.data.payload);
          }
          break;
        case screenName.RecommendCourse:
          let recommendCourse = await axiosClient.get(
            `${'/user/recommend-course'}/${state.userInfo.id}/10/0`,
          );
          if (recommendCourse.status === 200) {
            setData(recommendCourse.data.payload);
          }
          break;
        case screenName.searchCourseScreen:
          let searchCoursePrice = await axiosClient.post('/course/search', {
            keyword: '',
            opt: {price: [keyword.price]},
            limit: 12,
            offset: 0,
          });
          if (searchCoursePrice.status === 200) {
            setData(searchCoursePrice.data.payload.rows);
          }
          break;
        default:
          let searchCourse = await axiosClient.post('/course/search', {
            keyword: '',
            opt: {category: [id]},
            limit: 7,
            offset: 0,
          });
          if (searchCourse.status === 200) {
            setData(searchCourse.data.payload.rows);
          }
          break;
      }
    } catch ({response}) {
      console.log(response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme2.backgroundColor}]}>
      <ListCoursesVertical navigation={navigation} data={data} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ListOfCourse;
