/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
YellowBox.ignoreWarnings(['VirtualizedLists']);
AppRegistry.registerComponent(appName, () => App);
