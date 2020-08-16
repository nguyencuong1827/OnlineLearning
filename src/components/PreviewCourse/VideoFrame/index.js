import React, {useContext, useState, useEffect, useRef} from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Slider} from 'react-native-elements';
import {useSafeArea} from 'react-native-safe-area-context';
import Moment from 'moment';
import {ThemeContext} from '../../../providers/theme-propvider';
import {
  Styles,
  BoxModel,
  Size,
  Typography,
  Distance,
} from '../../../globals/styles';

const VideoFrame = (props) => {
  const {theme2} = useContext(ThemeContext);
  const insets = useSafeArea();
  const {urlVideo, paused, setPaused} = props;
  const [isHide, setHide] = useState(true);
  const [valueSlider, setValueSlider] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [time, setTime] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('');
  var playerRef = useRef();

  useEffect(() => {
    if (isHide === false) {
      setTimeout(() => {
        setHide(true);
      }, 3000);
    }
  }, [isHide]);
  const onProgress = (data) => {
    setTotalTime(data.seekableDuration);
    setValueSlider(data.currentTime / data.seekableDuration);
    setTime(
      Moment('1900-01-01 00:00:00')
        .add(data.currentTime, 'seconds')
        .format('mm:ss'),
    );
    setTimeRemaining(
      Moment('1900-01-01 00:00:00')
        .add(data.seekableDuration - data.currentTime, 'seconds')
        .format('mm:ss'),
    );
  };
  const onForward10s = () => {
    playerRef.seek((valueSlider + 10 / totalTime) * totalTime);
  };
  const onReplay10s = () => {
    playerRef.seek((valueSlider - 10 / totalTime) * totalTime);
  };
  const onPressHide = () => {
    setHide(!isHide);
  };
  const onChangeValue = (value) => {
    playerRef.seek(value * totalTime);
  };
  const getOnTouch = () => {
    if (isHide) {
      return theme2.overlayColor;
    } else {
      return theme2.blackWith05OpacityColor;
    }
  };
  const onPressPlayVideo = () => {
    setPaused(!paused);
    if (paused) {
      setHide(true);
    } else {
      setHide(false);
    }
  };
  return (
    <View style={styles.backgroundVideo}>
      <Video
        paused={paused}
        onProgress={onProgress}
        source={{uri: urlVideo}}
        style={styles.videoContainer}
        ref={(ref) => {
          playerRef = ref;
        }}
        onBuffer={this.onBuffer}
        onError={this.videoError}
      />

      <TouchableHighlight
        onPress={onPressHide}
        underlayColor={theme2.overlayColor}
        style={[styles.container, {backgroundColor: getOnTouch()}]}>
        <View>
          <View
            style={[
              styles.controlContainer,
              BoxModel.marginHorizontal,
              {
                height:
                  Size.HEIGHT - insets.top - insets.bottom - Size.scaleSize(50),
              },
            ]}>
            <TouchableHighlight
              underlayColor={theme2.overlayColor}
              style={Styles.center}>
              <MaterialIcons
                name="library-books"
                size={20}
                color={theme2.whiteWith07OpacityColor}
                style={Styles.center}
              />
            </TouchableHighlight>
            <Text style={[styles.timeContainer, BoxModel.tinyMarginHorizontal]}>
              {time}
            </Text>
            <Slider
              value={valueSlider}
              onSlidingComplete={onChangeValue}
              thumbTintColor={theme2.whiteColor}
              style={styles.sliderContainer}
              minimumTrackTintColor={theme2.primaryColor}
            />
            <Text style={[styles.timeContainer, BoxModel.tinyMarginHorizontal]}>
              {timeRemaining}
            </Text>
            <TouchableHighlight
              onPress={onPressPlayVideo}
              underlayColor={theme2.overlayColor}
              style={Styles.center}>
              <MaterialIcons
                name="fullscreen"
                size={25}
                color={theme2.whiteWith07OpacityColor}
                style={Styles.center}
              />
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
      {isHide ? undefined : (
        <View
          style={[
            styles.control,
            {
              bottom: Size.HEIGHT / 2 - Size.scaleSize(30) - insets.top,
            },
          ]}>
          <TouchableHighlight
            onPress={onReplay10s}
            underlayColor={theme2.overlayColor}
            style={Styles.center}>
            <MaterialIcons
              name="replay-10"
              size={50}
              color={theme2.whiteColor}
              style={Styles.center}
            />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={onPressPlayVideo}
            underlayColor={theme2.overlayColor}
            style={Styles.center}>
            {paused ? (
              <MaterialIcons
                name="play-arrow"
                size={70}
                color={theme2.whiteColor}
                style={Styles.center}
              />
            ) : (
              <MaterialIcons
                name="pause"
                size={70}
                color={theme2.whiteColor}
                style={Styles.center}
              />
            )}
          </TouchableHighlight>
          <TouchableHighlight
            onPress={onForward10s}
            underlayColor={theme2.overlayColor}
            style={Styles.center}>
            <MaterialIcons
              name="forward-10"
              size={50}
              color={theme2.whiteColor}
              style={Styles.center}
            />
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoContainer: {
    height: Size.HEIGHT - Size.scaleSize(150),
    width: Size.WIDTH,
    backgroundColor: 'black',
  },
  container: {
    position: 'absolute',
    height: Size.HEIGHT,
    width: '100%',
  },
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    left: 0,
    right: 0,
    bottom: 0,
  },
  timeContainer: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    color: 'white',
  },
  sliderContainer: {
    flex: 1,
    marginRight: Distance.spacing_10,
  },
  control: {
    height: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default VideoFrame;
