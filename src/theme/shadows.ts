import {Platform} from 'react-native';

export const shadows = {
  card: Platform.select({
    ios: {
      shadowColor: '#0F3A56',
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 0.08,
      shadowRadius: 10,
    },
    android: {
      elevation: 3,
    },
    default: {},
  }),
  soft: Platform.select({
    ios: {
      shadowColor: '#0F3A56',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.05,
      shadowRadius: 6,
    },
    android: {
      elevation: 1,
    },
    default: {},
  }),
};
