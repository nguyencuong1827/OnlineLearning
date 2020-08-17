import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import CourseVerticalItem from '../../components/ListCourses/ListCoursesVertical/CourseItem';
import HeaderAuthorDetail from '../../components/HeaderAuthorDetail';
import {ThemeContext} from '../../providers/theme-propvider';
import axiosClient from '../../api/axiosClient';
import {Size} from '../../globals/styles';
const AuthorDetail = (props) => {
  const {navigation, route} = props;
  const {theme2} = useContext(ThemeContext);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchInstructorDetail = async () => {
      try {
        let response = await axiosClient.get(
          `${'/instructor/detail/'}${route.params.id}`,
        );
        setData(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInstructorDetail();
  }, [route.params.id]);

  const flatListSeparator = () => {
    return (
      <View
        style={[styles.separator, {backgroundColor: theme2.backgroundColor}]}
      />
    );
  };
  return (
    <SafeAreaView
      style={{backgroundColor: theme2.backgroundColor, height: '100%'}}>
      <FlatList
        data={data.courses}
        ItemSeparatorComponent={flatListSeparator}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CourseVerticalItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => {
          return <HeaderAuthorDetail data={data} />;
        }}
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
  separator: {
    height: 1,
  },
});
export default AuthorDetail;
