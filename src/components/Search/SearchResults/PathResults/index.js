import React from 'react';
import {View, Text} from 'react-native';
import {ListCoursesVertical} from '../../../ListCourses';
const PathResults = (props) => {
  const {pathResults} = props.route.params;
  console.log(props.route);
  const renderHeader = () => {
    return (
      <View>
        <Text>{pathResults.length} results</Text>
      </View>
    );
  };
  return (
    <View>
      <ListCoursesVertical data={pathResults} renderHeader={renderHeader} />
    </View>
  );
};

export default PathResults;
