import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const SkillButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.seeAllButton}
      onPress={() => Alert.alert('Comming soon!')}>
      <Text style={styles.seeAll}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const PopularSkills = () => {
  const popularSkills = [
    'Angular',
    'React JS',
    'React natvie',
    'C#',
    'Python',
    'PHP',
    'Docker',
    'SQL',
    'Nodejs',
    'Express.js',
  ];
  const renderListSkill = () => {
    return popularSkills.map((skill, index) => (
      <SkillButton key={index} name={skill} />
    ));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular skills</Text>
      <ScrollView horizontal={true}>{renderListSkill()}</ScrollView>
    </View>
  );
};

export default PopularSkills;
const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  seeAllButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  seeAll: {
    borderRadius: 12,
    fontSize: 11,
    height: 25,
    textAlignVertical: 'center',
    backgroundColor: '#d1c4e9',
    paddingHorizontal: 10,
  },
});
