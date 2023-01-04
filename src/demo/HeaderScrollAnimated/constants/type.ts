import {SharedValue} from 'react-native-reanimated';

export type AnimatedProp = {
  sv: SharedValue<number>;
  layoutImage?: SharedValue<number>;
};
