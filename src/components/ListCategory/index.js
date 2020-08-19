import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
  Text,
} from 'react-native';
import {categoryImage} from '../../globals/fake-data';
import {ScaleSize, Distance, Colors, Typography} from '../../globals/styles';
import {CategoryContext} from '../../providers/category-provider';
import {ThemeContext} from '../../providers/theme-propvider';
import CategoryItem from './CategoryItem';
import {CategoryScreen} from '../../globals/constants/screen-name';

const setStyleWithTheme = (theme) => {
  styles.title2 = {...styles.title2, color: theme.colorMainText};
};
const ListTopicsHorizontal = (props) => {
  const {listCategory} = useContext(CategoryContext);
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);
  const {navigation} = props;

  const findImage = (itemId) => {
    const result = categoryImage.find(({id}) => id === itemId);
    if (result) {
      return result.image;
    } else {
      return 'https://pluralsight.imgix.net/course-images/audience/software-development.jpg';
    }
  };
  const onPressCategory = (item) => {
    navigation.navigate(CategoryScreen, {
      title: item.name,
      id: item.id,
    });
  };
  const renderItem = (item) => {
    const url = findImage(item.id);
    return (
      <CategoryItem
        buttonStyle={{button: styles.topicImgButton}}
        titleStyle={{title: styles.title1}}
        title={item.name.toUpperCase()}
        id={item.id}
        source={url}
        onPressCategory={() => onPressCategory(item)}
      />
    );
  };
  return (
    <View>
      <Text style={styles.title2}>Category</Text>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}>
        <FlatList
          nestedScrollEnabled={true}
          numColumns={listCategory.length / 2}
          alwaysBounceVertical={false}
          data={listCategory}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => renderItem(item)}
        />
      </ScrollView>
    </View>
  );
};

export default ListTopicsHorizontal;
const styles = StyleSheet.create({
  topicImgButton: {
    height: ScaleSize.scaleSizeHeight(80),
    width: (ScaleSize.WIDTH - Distance.spacing_12 * 3) / 2,
    marginLeft: Distance.spacing_12,
    marginBottom: Distance.spacing_12,
  },
  title1: {
    fontSize: Typography.fontSize18,
    color: Colors.white,
  },
  title2: {
    fontSize: Typography.fontSize18,
    marginLeft: Distance.spacing_12,
    marginTop: Distance.spacing_10,
    marginBottom: Distance.spacing_5,
    fontWeight: Typography.fontWeightBold,
  },
});
