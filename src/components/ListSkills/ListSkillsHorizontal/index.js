import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography, Distance, ScaleSize} from '../../../globals/styles';

const setStyleWithTheme = (theme) => {
  styles.title = {
    ...styles.title,
    color: theme.colorMainText,
  };
  styles.seeAll = {
    ...styles.seeAll,
    backgroundColor: theme.buttonSeeAllBackground,
    color: theme.colorMainText,
  };
};

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
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

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
    marginHorizontal: Distance.spacing_12,
    marginVertical: Distance.spacing_18,
  },
  seeAllButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Distance.superSmall,
    marginTop: Distance.spacing_8,
  },
  title: {
    fontWeight: Typography.fontWeightBold,
    fontSize: Typography.fontSize18,
  },
  seeAll: {
    fontSize: Typography.fontSize14,

    textAlignVertical: 'center',
    textAlign: 'center',

    borderRadius: 12,
    paddingHorizontal: Distance.spacing_10,

    height: ScaleSize.scaleSizeWidth(18),
    minWidth: ScaleSize.scaleSizeWidth(38),
  },
});
