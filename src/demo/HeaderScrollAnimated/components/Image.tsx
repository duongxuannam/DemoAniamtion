import React from 'react';
import {Dimensions, LayoutChangeEvent, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HEADER_TOP, POTTER_SIZE} from '../constants';
import {AnimatedProp} from '../constants/type';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const Image: React.FC<AnimatedProp> = ({sv}) => {
  const {top} = useSafeAreaInsets();
  const layoutY = useSharedValue(0);

  const opacityAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        sv.value,
        [0, POTTER_SIZE - (HEADER_TOP + top) / 0.9],
        [1, 0],
        Extrapolation.CLAMP,
      ),
    };
  });

  const textAnim = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        sv.value,
        [-POTTER_SIZE / 8, 0, POTTER_SIZE - (HEADER_TOP + top) / 0.8],
        [0, 1, 0],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          scale: interpolate(
            sv.value,
            [-POTTER_SIZE / 8, 0, (POTTER_SIZE - (HEADER_TOP + top)) / 2],
            [1.1, 1, 0.95],
            'clamp',
          ),
        },
        {
          translateY: interpolate(
            sv.value,
            [layoutY.value - 1, layoutY.value, layoutY.value + 1],
            [0, 0, -1],
          ),
        },
      ],
    };
  });
  const scaleAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(sv.value, [-50, 0], [1.3, 1], {
            extrapolateLeft: 'extend',
            extrapolateRight: 'clamp',
          }),
        },
      ],
    };
  });

  const onLayout = (event: LayoutChangeEvent) => {
    'worklet';
    layoutY.value = event.nativeEvent.layout.y;
  };

  return (
    <>
      <Animated.View style={[styles.container, opacityAnimated]}>
        <Animated.Image
          style={[styles.image, scaleAnim]}
          source={require('../assets/artist.jpeg')}
        />
        <Animated.View
          onLayout={onLayout}
          style={[styles.textContainer, textAnim]}>
          <Text numberOfLines={2} style={styles.text}>
            {'John \nKrasinski'}
          </Text>
        </Animated.View>
        <AnimatedLinearGradient
          style={[styles.gradientContainer, scaleAnim]}
          colors={[
            `rgba(0,0,0,${0})`,
            `rgba(0,0,0,${0.1})`,
            `rgba(0,0,0,${0.3})`,
            `rgba(0,0,0,${0.5})`,
            `rgba(0,0,0,${0.8})`,
            `rgba(0,0,0,${1})`,
          ]}
        />
      </Animated.View>
    </>
  );
};

export default Image;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 2,
    width: Dimensions.get('screen').width,
    position: 'absolute',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 5,
    zIndex: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    // marginBottom: '20%',
  },
  gradientContainer: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
