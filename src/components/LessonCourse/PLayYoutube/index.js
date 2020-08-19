import React, {useRef, useEffect, useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import {LessonContext} from '../../../providers/lesson-provider';
import {Size, Typography, Distance} from '../../../globals/styles';

const getYouTubeID = (str) => {
  return str.substring(str.lastIndexOf('/') + 1, str.length);
};
const PLayYouTube = (props) => {
  const {urlVideo} = props;
  const playerRef = useRef();
  // const {itemLesson, setTime} = useContext(LessonContext);
  const [widthVid, setWidth] = useState(0);
  const [heightVid, setHeight] = useState(0);

  useEffect(() => {
    const fetchYoutubeMetadata = async () => {
      try {
        let response = await getYoutubeMeta(getYouTubeID(urlVideo));
        setWidth(response.width);
        setHeight(response.height);
      } catch (err) {
        console.log(err);
      }
    };
    fetchYoutubeMetadata();
  }, [urlVideo]);
  const getHeightVid = () => {
    if (heightVid && widthVid) {
      return (heightVid * Size.WIDTH) / widthVid;
    }
    return 300;
  };

  // const readyPLayVideo = () => {
  //   if (itemLesson && itemLesson.currentTime) {
  //     playerRef.current.seekTo(itemLesson.currentTime);
  //     setTime(itemLesson.currentTime);
  //   }
  // };

  return (
    <View style={styles.backgroundVideo}>
      <YoutubePlayer
        ref={playerRef}
        height={getHeightVid()}
        width={Size.WIDTH}
        videoId={getYouTubeID(urlVideo)}
        play={true}
        volume={50}
        playbackRate={1}
        webViewStyle={styles.videoYoutube}
        // onReady={readyPLayVideo}
        initialPlayerParams={{
          cc_lang_pref: 'us',
          controls: true,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoYoutube: {alignSelf: 'stretch', flex: 1},
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
export default PLayYouTube;
