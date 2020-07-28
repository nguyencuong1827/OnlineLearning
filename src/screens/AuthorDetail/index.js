import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderAuthorDetail from '../../components/AuthorDetail/Header';
import Separator from '../../components/Separator';
import {ListCoursesVertical} from '../../components/ListCourses';
import {courses} from '../../globals/fake-data';
import {DistanceScale} from '../../globals/styles';

const AuthorDetail = (props) => {
  const {authorDetail} = props.route.params;
  const renderHeader = () => {
    return (
      <View>
        <HeaderAuthorDetail
          name={authorDetail.name}
          description={authorDetail.description}
          urlAvatar={authorDetail.urlAvatar}
        />
        <View style={styles.separator}>
          <Separator />
        </View>
      </View>
    );
  };
  return (
    <View>
      <ListCoursesVertical
        navigation={props.navigation}
        data={courses}
        renderHeader={renderHeader}
      />
    </View>
  );
};

export default AuthorDetail;
const styles = StyleSheet.create({
  separator: {
    marginVertical: DistanceScale.spacing_8,
  },
});
