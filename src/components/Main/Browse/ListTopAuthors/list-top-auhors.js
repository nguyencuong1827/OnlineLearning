import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

const ListTopAuthors = () => {
  const topAuthor = [
    {
      name: 'Cristiano Ronaldo',
      imgUrl: require('../../../../../assets/images/cristiano-ronaldo.jpg'),
    },
    {
      name: 'Barack Obamaa',
      imgUrl: require('../../../../../assets/images/barack-obama.jpg'),
    },
    {
      name: 'Taylor Swift',
      imgUrl: require('../../../../../assets/images/taylor-swift.jpg'),
    },
    {
      name: 'Kaká',
      imgUrl: require('../../../../../assets/images/kaka.jpg'),
    },
    {
      name: 'John Boyds',
      imgUrl: require('../../../../../assets/images/john-boyd.jpg'),
    },
  ];

  const renderAuthor = (author) => {
    return (
      <View style={styles.author}>
        <Avatar
          rounded
          size="large"
          source={author.imgUrl}
          containerStyle={styles.avatar}
        />
        <View style={styles.groupName}>
          <Text style={styles.name}>{author.name}</Text>
          {author.name.length > 12 ? <Text>...</Text> : null}
        </View>
      </View>
    );
  };
  const renderListTopAutor = () => {
    return topAuthor.map((author, index) => renderAuthor(author));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Authors</Text>
      <ScrollView horizontal={true}>{renderListTopAutor()}</ScrollView>
    </View>
  );
};

export default ListTopAuthors;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5,
  },
  author: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  avatar: {
    margin: 10,
  },
  groupName: {
    flexDirection: 'row',
  },
  name: {
    width: 80,
    height: 20,
    textAlign: 'center',
    marginRight: -10,
  },
});
