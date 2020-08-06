import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Downloads from '../../../screens/Downloads';
import {DownloadScreen} from '../../../globals/constants/screen-name';
import {ThemeContext} from '../../../providers/theme-propvider';

const Stack = createStackNavigator();

const DownloadStack = () => {
  const {theme} = useContext(ThemeContext);
  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.headerFooterBackground,
    },
    headerTintColor: theme.colorMainText,
    headerTitleAlign: 'center',
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={DownloadScreen}
        component={Downloads}
        options={{
          title: 'Downloads',
        }}
      />
    </Stack.Navigator>
  );
};

export default DownloadStack;
