import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Alert, View} from 'react-native';
import Banner from '../../components/Banner';
import {ListAuthorsHorizontal} from '../../components/ListAuthors';
import {
  ScaleSize,
  DistanceScale,
  Typography,
  Colors,
} from '../../globals/styles';
import {ListSkillsHorizontal} from '../../components/ListSkills';
import ListTopicsHorizontal from '../../components/ListTopics/ListTopicsHorizontal';
import {ListPathsHorizontal} from '../../components/ListPaths';
import {ThemeContext} from '../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
};

const Browse = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner
          buttonStyle={{button: styles.newAndRecommendButton}}
          title1Style={{title1: styles.newAndRecommendTitle}}
          title2Style={{title2: styles.newAndRecommendTitle}}
          title1="NEW"
          title2="RELEASES"
          source={require('../../../assets/images/landscape1.jpg')}
          onPress={() => Alert.alert('Comming soon!')}
        />
        <Banner
          buttonStyle={{button: styles.newAndRecommendButton}}
          title1Style={{title1: styles.newAndRecommendTitle}}
          title2Style={{title2: styles.newAndRecommendTitle}}
          title1="RECOMMENDED"
          title2="FOR YOU"
          source={require('../../../assets/images/landscape2.jpg')}
          onPress={() => Alert.alert('Comming soon!')}
        />
        <ListSkillsHorizontal />
        <ListTopicsHorizontal />
        <ListPathsHorizontal />
        <ListAuthorsHorizontal
          navigation={props.navigation}
          title="Top Authors"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Browse;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newAndRecommendButton: {
    marginHorizontal: DistanceScale.spacing_12,
    marginTop: DistanceScale.spacing_10,
    height: ScaleSize.scaleSizeHeight(65),
  },
  newAndRecommendTitle: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.white,
  },
  topicImgButton: {
    height: ScaleSize.scaleSizeHeight(65),
    margin: DistanceScale.spacing_5,
  },
  title1: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.white,
  },
  title2: {
    fontSize: Typography.fontSize14,
    color: Colors.white,
  },
  groupImgButton: {
    margin: DistanceScale.spacing_5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
