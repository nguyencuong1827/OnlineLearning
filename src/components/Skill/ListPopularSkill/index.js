import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Item from '../PopularSkillItem';
import {Styles, Typography, Distance, BoxModel} from '../../../globals/styles';
import {PopularSkillScreen} from '../../../globals/constants/screen-name';
const PopularSkill = (props) => {
  const {navigation, route, data} = props;
  const onPress = () => {
    navigation.navigate(PopularSkillScreen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>
          Popular skills
        </Text>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Item key={item.id} item={item} onPress={onPress} />
        )}
        ListFooterComponent={() => {
          return <View style={styles.footer} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    ...Styles.rowCross,
    ...BoxModel.tinyMarginVertical,
    ...BoxModel.marginHorizontal,
    height: Distance.medium,
  },
  footer: {
    width: Distance.spacing_14,
  },
});

export default PopularSkill;
