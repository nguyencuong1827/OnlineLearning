/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import {AuthenticationContext} from '../../../providers/authentication-provider';
import Icon from 'react-native-vector-icons/AntDesign';
import {Typography, Colors} from '../../../globals/styles';
import axiosClient from '../../../api/axiosClient';
import configToken from '../../../api/config-token';

const CategoryItem = (props) => {
  const [isLike, setIsLike] = useState(false);
  const {userState, updateListFavoriteCategory} = useContext(
    AuthenticationContext,
  );
  const {id, title, titleStyle, buttonStyle, onPressCategory} = props;
  const {userInfo} = userState;
  const checkIsLike = () => {
    for (let i = 0; i < userInfo.favoriteCategories.length; i++) {
      if (id === userInfo.favoriteCategories[i]) {
        setIsLike(true);
        break;
      }
    }
  };
  const updateFavorite = async (listNewFavorite) => {
    const url = '/user/update-favorite-categories';
    try {
      await axiosClient.put(
        url,
        {categoryIds: listNewFavorite},
        configToken(userState.token),
      );
    } catch (error) {
      console.log(error);
    }
  };
  const onPressHeart = () => {
    if (isLike === true) {
      setIsLike(false);
      const index = userInfo.favoriteCategories.indexOf(id);
      let arrayTemp = userInfo.favoriteCategories;
      arrayTemp.splice(index, 1);
      updateListFavoriteCategory(arrayTemp);
      updateFavorite(arrayTemp);
    } else {
      setIsLike(true);
      let arrayTemp = userInfo.favoriteCategories;
      arrayTemp.push(id);
      updateListFavoriteCategory(arrayTemp);
      updateFavorite(arrayTemp);
    }
  };
  useEffect(() => {
    checkIsLike();
  }, [userState]);

  return (
    <ImageBackground style={buttonStyle.button} source={{uri: props.source}}>
      <TouchableOpacity style={styles.touch} onPress={onPressCategory}>
        <Text style={titleStyle.title}>{title}</Text>
        <TouchableOpacity onPress={() => onPressHeart()}>
          <Icon
            name={isLike === false ? 'hearto' : 'heart'}
            size={Typography.fontSize20}
            color={Colors.orange}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blackWith05OpacityColor,
  },
});
