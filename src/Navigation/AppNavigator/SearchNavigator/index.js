import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

function Result(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Result search </Text>
    </View>
  );
}
function Recent() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Recent search</Text>
    </View>
  );
}
const SearchView = (props) => {
  const {navigation} = props;
  const [content, setContent] = useState('');
  const handle = (text) => {
    setContent(text);
  };
  const send = () => {
    console.log('pressed');
    navigation.navigate('Result', {content});
  };

  return (
    <View style={{flex: 1, height: 50}}>
      <TextInput
        onChange={handle}
        style={{backgroundColor: '#f4511e'}}
        placeholder="Search...."
      />
      <TouchableOpacity onPress={send}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

function SeachStack() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTitle: () => <SearchView navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e',
          height: 100,
        },
      })}>
      <Stack.Screen
        name="Recent"
        component={Recent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SeachStack;
