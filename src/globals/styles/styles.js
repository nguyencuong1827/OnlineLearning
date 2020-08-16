import {
  black,
  backgroundColor,
  primaryTextColor,
  grayDark,
  backgroundSeeAllButton,
} from './colors';
import {smallMargin, tinyMargin, smallPaddingHorizontal} from './box-model';
import {scaleSize, itemHeight} from './size';
import {fontSize18, fontRegular, fontSize12, fontSize16} from './typography';
import {spacing_14} from './distance';
export const avatarIcon = {
  width: scaleSize(30),
  height: scaleSize(30),
  borderRadius: scaleSize(15),
};
export const divide = {
  height: 1,
};
export const titleInList = {
  color: black,
  fontWeight: '600',
  fontSize: 18,
};
export const titleRow = {
  color: primaryTextColor,
  fontSize: fontSize18,
};
export const titleInHorizontalList = {
  flex: 1,
  ...fontRegular,
  fontSize: fontSize16,
};
export const subTitleInHorizontalList = {
  flex: 1,
  ...fontRegular,
  fontSize: fontSize12,
  color: grayDark,
};
export const headerContainer = {
  height: 40,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: backgroundSeeAllButton,
};

export const horizontalCourse = {
  ...smallMargin,
  width: scaleSize(200),
  // height: scaleSize(200),
};
export const imageInHorizontalCourse = {
  flex: 1,
  width: scaleSize(200),
  height: scaleSize(100),
  resizeMode: 'cover',
};
export const barIcon = {
  width: scaleSize(25),
  height: scaleSize(25),
};
export const containerInHorizontalCourse = {
  ...tinyMargin,
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

export const horizontalAuthor = {
  ...crossCenter,
  height: scaleSize(160),
  width: scaleSize(100),
  marginLeft: spacing_14,
};
export const imageInHorizontalAuthor = {
  width: itemHeight,
  height: itemHeight,
  borderRadius: scaleSize(50),
};
export const containerInHorizontalAuthor = {
  ...center,
  ...smallPaddingHorizontal,
};
export const logoView = {
  width: scaleSize(150),
  height: scaleSize(150),
  resizeMode: 'contain',
};
export const backgroundReset = {
  backgroundColor: backgroundColor,
};
export const center = {
  alignItems: 'center',
  justifyContent: 'center',
};
export const columnCenter = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
export const maxHeight = {
  height: '100%',
};
export const columnCross = {
  flexDirection: 'column',
  alignItems: 'center',
};
export const rowCenter = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};
export const rowCross = {
  alignItems: 'center',
  flexDirection: 'row',
};
export const crossCenter = {
  alignItems: 'center',
};
export const width100 = {
  width: '100%',
};
export const height100 = {
  height: '100%',
};
export const mainStart = {
  justifyContent: 'flex-start',
};
export const footer = {
  width: spacing_14,
};

export const fillRow = {
  flex: 1,
  flexDirection: 'row',
};
export const separator = {
  height: 1,
  backgroundColor: backgroundColor,
};
export const fillCenter = {
  flex: 1,
  justifyContent: 'center',
};

export const fillRowBetween = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const fillRowCenter = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
};

export const fillRowStart = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
};

export const fillColumn = {
  flex: 1,
  flexDirection: 'column',
};
export const fillColumnStart = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
};
export const rowBetween = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};
export const breakContentText = {
  flexDirection: 'row',
};
export const textInBanner = {
  textAlign: 'center',
  textTransform: 'uppercase',
  flexWrap: 'wrap',
};
export const textCenter = {
  textAlign: 'center',
};
export const mainCenter = {
  justifyContent: 'center',
};
