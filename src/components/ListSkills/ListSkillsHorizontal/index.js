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

const ListSkillsHorizontal = () => {
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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderListSkill()}
      </ScrollView>
    </View>
  );
};

export default ListSkillsHorizontal;
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
    fontSize: 14,
  },
  seeAll: {
    borderRadius: 12,
    fontSize: 12,
    height: 25,
    textAlignVertical: 'center',
    backgroundColor: '#d9d9d9',
    paddingHorizontal: 10,
  },
});
