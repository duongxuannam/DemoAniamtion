import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HEADER_TOP, POTTER_SIZE} from '../constants';
import {AnimatedProp} from '../constants/type';
import {ChevronLeft} from '../icons/ChevronLeft';
import {EllipsisVertical} from '../icons/EllipsisVertical';

const Header: React.FC<AnimatedProp> = ({sv}) => {
  const {top} = useSafeAreaInsets();
  const opacityAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        sv.value,
        [
          ((POTTER_SIZE - (HEADER_TOP + top)) / 4) * 3,
          POTTER_SIZE - (HEADER_TOP + top) + 1,
        ],
        [0, 1],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          scale: interpolate(
            sv.value,
            [
              (POTTER_SIZE - (HEADER_TOP + top) / 4) * 3,
              POTTER_SIZE - (HEADER_TOP + top) + 1,
            ],
            [0.98, 1],
            Extrapolation.CLAMP,
          ),
        },
        {
          translateY: interpolate(
            sv.value,
            [
              (POTTER_SIZE - (HEADER_TOP + top) / 4) * 3,
              POTTER_SIZE - (HEADER_TOP + top) + 1,
            ],
            [-10, 0],
            Extrapolation.CLAMP,
          ),
        },
      ],
      paddingTop: top === 0 ? 8 : top,
    };
  });
  return (
    <>
      <Animated.View style={[styles.container, opacityAnimated]}>
        <ChevronLeft />
        <Text style={styles.text}>John Krasinski</Text>
        <EllipsisVertical />
      </Animated.View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    zIndex: 10,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
