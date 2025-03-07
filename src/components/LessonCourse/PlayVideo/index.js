/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useRef, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {LessonContext} from '../../../providers/lesson-provider';
import {Typography, Distance} from '../../../globals/styles';

const PLayVideo = (props) => {
  const {urlVideo, onCompleteVideo} = props;
  const {itemLesson, setTime, listDownload} = useContext(LessonContext);
  const [uri, setUri] = useState('');
  var playerRef = useRef();

  const onProgress = (data) => {
    setTime(data.currentTime);
  };
  const readyPLayVideo = () => {
    if (itemLesson && itemLesson.currentTime) {
      playerRef.seek(itemLesson.currentTime);
      setTime(itemLesson.currentTime);
    }
  };
  const checkDownload = () => {
    const fResult = listDownload.find((item) => item.id === itemLesson.id);
    if (!fResult) {
      setUri(urlVideo);
      return;
    }
    setUri(fResult.uri);
  };
  useEffect(() => {
    checkDownload();
  }, [itemLesson]);

  return (
    <View style={styles.videoContainer}>
      <Video
        onProgress={onProgress}
        controls={true}
        resizeMode="contain"
        source={{uri: uri}}
        ref={(ref) => {
          playerRef = ref;
        }}
        onEnd={onCompleteVideo}
        onReadyForDisplay={readyPLayVideo}
        paused={false}
        style={styles.videoYoutube}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  videoYoutube: {
    flex: 1,
    alignSelf: 'stretch',
  },

  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
  controlContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
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
});
export default PLayVideo;
