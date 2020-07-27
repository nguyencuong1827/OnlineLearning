import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
export const WIDTH = width;
export const HEIGHT = height;

const baseWidth = 360;
const baseHeight = 592;

export const scaleFont = (size) => size * PixelRatio.getFontScale();

export const scaleSizeWidth = (size) => (width / baseWidth) * size;

export const scaleSizeHeight = (size) => (height / baseHeight) * size;
export const moderateScale = (size, factor = 0.5) => {
  return size + (scaleSizeWidth(size) - size) * factor;
};

export const ratingSize = scaleSizeWidth(15);
