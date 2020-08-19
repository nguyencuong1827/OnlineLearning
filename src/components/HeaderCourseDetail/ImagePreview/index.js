import React, {useContext, useState} from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Styles, Size, Distance, Colors} from '../../../globals/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../../providers/theme-propvider';

const ImagePreview = (props) => {
  const {imageUrl, dismiss, onShare, onPressPlayVideo} = props;
  const {theme2} = useContext(ThemeContext);
  return (
    <FastImage
      style={[
        styles.videoContainer,
        Styles.fillRow,
        {backgroundColor: theme2.backgroundColor},
      ]}
      source={{uri: imageUrl}}>
      <View
        style={{
          ...Styles.fillRowBetween,
          backgroundColor: theme2.blackWith05OpacityColor,
        }}>
        <TouchableHighlight
          onPress={dismiss}
          underlayColor={theme2.overlayColor}
          style={styles.closeButon}>
          <Ionicons
            name="close-outline"
            size={40}
            color={theme2.whiteWith07OpacityColor}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onPressPlayVideo}
          underlayColor={theme2.overlayColor}
          style={Styles.center}>
          <MaterialIcons
            name="play-arrow"
            size={150}
            color={theme2.whiteWith07OpacityColor}
            style={Styles.center}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onShare}
          underlayColor={theme2.overlayColor}
          style={styles.closeButon}>
          <Feather
            name="share"
            size={30}
            color={theme2.whiteWith07OpacityColor}
          />
        </TouchableHighlight>
      </View>
    </FastImage>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  videoContainer: {
    width: Size.WIDTH,
    height: Size.HEIGHT / 2 - Size.scaleSize(100),
  },
  closeButon: {
    padding: Distance.spacing_12,
  },
});
