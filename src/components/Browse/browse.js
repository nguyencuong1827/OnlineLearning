import React from 'react';
import {View, StyleSheet, Alert, ScrollView} from 'react-native';
import Banner from '../Banner';
import PopularSkills from './PopularSkills/popular-skills';
import SectionPaths from '../Paths/SectionPaths/section-paths';
import ListTopAuthors from './ListTopAuthors/list-top-auhors';
import {ScaleSize} from '../../globals/styles';
const Browse = (props) => {
  return (
    <ScrollView style={styles.container}>
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
      <PopularSkills />
      <View style={styles.groupImgButton}>
        <Banner
          buttonStyle={{button: styles.topicImgButton}}
          title1Style={{title1: styles.title1}}
          title2Style={{title2: styles.title2}}
          title1="CONFERENCES"
          title2=""
          source={require('../../../assets/images/conference.jpg')}
          onPress={() => Alert.alert('Comming soon!')}
        />
        <Banner
          buttonStyle={{button: styles.topicImgButton}}
          title1Style={{title1: styles.title1}}
          title2Style={{title2: styles.title2}}
          title1="<Software>"
          title2="DEVELOPMENT"
          source={require('../../../assets/images/software.jpg')}
          onPress={() => Alert.alert('Comming soon!')}
        />
        <Banner
          buttonStyle={{button: styles.topicImgButton}}
          title1Style={{title1: styles.title1}}
          title2Style={{title2: styles.title2}}
          title1="BUSINESS"
          title2="PROFESSIONAL"
          source={require('../../../assets/images/business.jpg')}
          onPress={() => Alert.alert('Comming soon!')}
        />
        <Banner
          buttonStyle={{button: styles.topicImgButton}}
          title1Style={{title1: styles.title1}}
          title2Style={{title2: styles.title2}}
          title1="Creative"
          title2="PROFESSIONAL"
          source={require('../../../assets/images/creative.jpg')}
          onPress={() => Alert.alert('Comming soon!')}
        />
      </View>
      <SectionPaths title="Paths" navigation={props.navigation} />
      <ListTopAuthors />
    </ScrollView>
  );
};

export default Browse;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f2f2f2',
  },
  newAndRecommendButton: {
    height: ScaleSize.scaleSizeHeight(80),
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  newAndRecommendTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  topicImgButton: {
    height: ScaleSize.scaleSizeHeight(80),
    width: ScaleSize.scaleSizeWidth(158),
    margin: 5,
  },
  title1: {
    fontSize: 24,
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
