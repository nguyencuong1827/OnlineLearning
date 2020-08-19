import React from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import Item from '../RelateSkillItem';
import {RelateSkillScreen} from '../../../globals/constants/screen-name';
import {Size, Distance} from '../../../globals/styles';
const RelateSkill = (props) => {
  const {navigation, route, data} = props;
  const onPress = () => {
    navigation.navigate(RelateSkillScreen);
  };

  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      <FlatList
        nestedScrollEnabled={true}
        contentContainerStyle={styles.contentContainer}
        numColumns={data.length / 2}
        alwaysBounceVertical={false}
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <Item item={item} onPress={onPress} />}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(150),
          offset: Size.scaleSize(150) * index,
          index,
        })}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: Distance.spacing_14,
  },
});
export default RelateSkill;
