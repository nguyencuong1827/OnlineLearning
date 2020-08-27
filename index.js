/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
LogBox.ignoreLogs(['VirtualizedLists']);
LogBox.ignoreLogs(['Require cycle']);
LogBox.ignoreLogs(['Trying to load ']);
AppRegistry.registerComponent(appName, () => App);
