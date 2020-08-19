import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Styles} from '../../../globals/styles';

const BackgroundVideo = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {dismiss, imageUrl, onPressPlayVideo, onShare} = props;
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
          underlayColor={theme2.overlayColor}>
          <MaterialIcons
            name="cancel"
            size={30}
            color={theme2.whiteWith07OpacityColor}
            style={styles.cancelButton}
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
          underlayColor={theme2.overlayColor}>
          <Feather
            name="share"
            size={25}
            color={theme2.whiteWith07OpacityColor}
            style={styles.shareButton}
          />
        </TouchableHighlight>
      </View>
    </FastImage>
  );
};
const styles = StyleSheet.create({
  cancelButton: {
    top: 15,
    left: 15,
  },
  shareButton: {
    top: 15,
    right: 15,
  },
  videoContainer: {
    flex: 1,
  },
});
export default BackgroundVideo;
