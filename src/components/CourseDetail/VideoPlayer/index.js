import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScaleSize, Colors} from '../../../globals/styles';
const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.videoPlayer}
        source={require('../../../../assets/images/video-player.jpg')}>
        <View style={styles.blurContainer}>
          <TouchableOpacity>
            <Icon name="close" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="sharealt" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VideoPlayer;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
  },
  videoPlayer: {
    height: ScaleSize.scaleSizeHeight(150),
  },
  blurContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.blackWith05OpacityColor,
    padding: 20,
  },
});
