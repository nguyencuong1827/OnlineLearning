import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import {Styles, Size} from '../../../globals/styles';
const getYouTubeID = (str) => {
  return str.substring(str.lastIndexOf('/') + 1, str.length);
};
const YoutubeFrame = (props) => {
  const {urlVideo, paused} = props;
  const [widthVid, setWidth] = useState(0);
  const [heightVid, setHeight] = useState(0);

  var playerRef = useRef();
  useEffect(() => {
    const fetchYoutubeMetadata = async () => {
      try {
        let response = await getYoutubeMeta(getYouTubeID(urlVideo));
        setWidth(response.width);
        setHeight(response.height);

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchYoutubeMetadata();
  }, [urlVideo]);
  return (
    <View style={[styles.container, Styles.fillCenter]}>
      <YoutubePlayer
        ref={(ref) => {
          playerRef = ref;
        }}
        height={heightVid}
        width={Size.WIDTH}
        videoId={getYouTubeID(urlVideo)}
        play={!paused}
        volume={50}
        playbackRate={1}
        initialPlayerParams={{
          cc_lang_pref: 'us',
          controls: true,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default YoutubeFrame;
