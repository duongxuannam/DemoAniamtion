import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Header from './components/Header';
import Image from './components/Image';
import {HEADER_TOP, POTTER_SIZE} from './constants';
import Playlist from './components/Playlist';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HeaderScrollAnimated = () => {
  const {top} = useSafeAreaInsets();
  const layoutY = useSharedValue(0);
  const sv = useSharedValue<number>(0);
  const onScrollHandle = useAnimatedScrollHandler({
    onScroll(event) {
      'worklet';
      sv.value = event.contentOffset.y;
    },
  });

  const animatedScrollStyle = useAnimatedStyle(() => {
    return {
      paddingTop: POTTER_SIZE,
    };
  });

  const fixedButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            sv.value,
            [
              layoutY.value - (HEADER_TOP + top) - 1,
              layoutY.value - (HEADER_TOP + top),
              layoutY.value - (HEADER_TOP + top) + 1,
            ],
            [0, 0, 1],
          ),
        },
      ],
    };
  });

  return (
    <>
      {/* <SafeAreaView style={styles.container}> */}
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Header sv={sv} />
        <Image sv={sv} />
        <View style={styles.flex1}>
          <Animated.ScrollView
            onScroll={onScrollHandle}
            scrollEventThrottle={16}
            style={[styles.flex1]}
            showsVerticalScrollIndicator={false}>
            <Animated.View
              style={[styles.paddingBottom10, animatedScrollStyle]}>
              <Animated.View
                onLayout={event => {
                  'worklet';
                  layoutY.value = event.nativeEvent.layout.y;
                }}
                style={[
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                    zIndex: 1000,
                    backgroundColor: 'black',
                  },
                  fixedButtonAnimatedStyle,
                ]}>
                <View
                  style={{
                    backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 45,
                    paddingVertical: 10,
                    borderRadius: 30,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    SHUFFLE PLAY
                  </Text>
                </View>
              </Animated.View>
              <View style={{marginLeft: 20}}>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 15,
                    marginBottom: 15,
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Popular
                </Text>
              </View>
              <Playlist />
            </Animated.View>
          </Animated.ScrollView>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </>
  );
};

export default HeaderScrollAnimated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  flex1: {flex: 1},
  paddingBottom10: {
    paddingBottom: 10,
  },
});
