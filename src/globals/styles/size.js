import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export const WIDTH = width;
export const HEIGHT = height;

const baseWidth = 375;

export const scaleSize = (size) => (width / baseWidth) * size;

export const scaleFont = (size) => size * PixelRatio.getFontScale();
export const ratingSize = scaleSize(20);
export const itemHeight = scaleSize(100);
export const bannerHeight = scaleSize(120);
export const bannerWidth = WIDTH - scaleSize(30);
export function boxShadow(
  color,
  offset = {height: 3, width: 3},
  radius = 5,
  opacity = 0.3,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
