import React from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet, Alert} from 'react-native';
import Banner from '../../components/Banner';
import {ListAuthorsHorizontal} from '../../components/ListAuthors';
import {ScaleSize} from '../../globals/styles';
import {ListSkillsHorizontal} from '../../components/ListSkills';
import ListTopicsHorizontal from '../../components/ListTopics/ListTopicsHorizontal';
import {ListPathsHorizontal} from '../../components/ListPaths';

const Browse = (props) => {
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
    margin: 10,
    backgroundColor: '#f2f2f2',
  },
  newAndRecommendButton: {
    height: ScaleSize.scaleSizeHeight(65),
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  newAndRecommendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  topicImgButton: {
    height: ScaleSize.scaleSizeHeight(65),
    margin: 5,
  },
  title1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  title2: {
    fontSize: 12,
    color: 'white',
  },
  groupImgButton: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
