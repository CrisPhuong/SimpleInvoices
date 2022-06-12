/**
 * Source
 * https://github.com/marudy/react-native-responsive-screen
 */

// packages
import { Dimensions, Platform } from 'react-native';

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;
// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;

let baseScreenWidth = Platform.OS === 'ios' ? 375 : 360;
let baseScreenHeight = Platform.OS === 'ios' ? 812 : 740;

let widthRatio = screenWidth / baseScreenWidth;
let heightRatio = screenHeight / baseScreenHeight;

let baseRatio = Math.min(widthRatio, heightRatio);

export const scale = value => {
  return baseRatio * value;
};
