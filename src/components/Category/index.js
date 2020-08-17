import React, {useContext} from 'react';
import {ScrollView, FlatList, StyleSheet} from 'react-native';
import {CategoryContext} from '../../providers/category-provider';
import {Size} from '../../globals/styles';
import {RelateSkillItem} from '../Skill';

const ListCategory = (props) => {
  const {listCategory} = useContext(CategoryContext);
  const {onPress} = props;
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <FlatList
        nestedScrollEnabled={true}
        numColumns={JSON.parse(JSON.stringify(listCategory)).length / 2}
        alwaysBounceVertical={false}
        data={JSON.parse(JSON.stringify(listCategory))}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => (
          <RelateSkillItem item={item} onPress={onPress} />
        )}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(150),
          offset: Size.scaleSize(150) * index,
          index,
        })}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default ListCategory;
