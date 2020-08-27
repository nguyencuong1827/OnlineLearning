import React, {useContext, useState} from 'react';
import {StyleSheet, TouchableHighlight, SafeAreaView} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../providers/theme-propvider';
import VideoFrame from '../../components/PreviewCourse/VideoFrame';
import YoutubeFrame from '../../components/PreviewCourse/YoutubeFrame';

const PlayReview = (props) => {
  const {navigation, route} = props;
  const {theme2} = useContext(ThemeContext);
  const [paused, setPaused] = useState(false);

  const dismiss = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.backgroundVideo}>
      <TouchableHighlight onPress={dismiss} underlayColor={theme2.overlayColor}>
        <MaterialIcons
          name="close"
          size={30}
          color={theme2.whiteWith07OpacityColor}
          style={styles.cancelButton}
        />
      </TouchableHighlight>
      {route.params.typeUploadVideoLesson === 1 ? (
        <VideoFrame
          urlVideo={route.params.urlVideo}
          paused={paused}
          setPaused={setPaused}
        />
      ) : (
        <YoutubeFrame paused={paused} urlVideo={route.params.urlVideo} />
        // <View style={[styles.backgroundVideo, Styles.fillCenter]}>
        //   <YoutubePlayer
        //     ref={playerRef}
        //     height={300}
        //     width={Size.WIDTH}
        //     videoId={getYouTubeID(route.params.urlVideo)}
        //     play={!paused}
        //     volume={50}
        //     playbackRate={1}
        //     initialPlayerParams={{
        //       cc_lang_pref: 'us',
        //       showClosedCaptions: true,
        //       controls: true,
        //     }}
        //   />
        // </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    backgroundColor: 'black',
  },

  cancelButton: {
    left: 15,
  },
});
export default PlayReview;
