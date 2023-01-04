/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {CircleButton} from './CircleButton';
import {useStopWatch} from './hooks';
import {LapList} from './LapList';

const StopWatch = () => {
  const {
    // actions
    start,
    stop,
    reset,
    lap,
    // data
    isRunning,
    time,
    // lap data
    laps,
    currentLapTime,
    hasStarted,
    slowestLapTime,
    fastestLapTime,
    dataLoaded,
  } = useStopWatch();
  if (!dataLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.timeText}>{time}</Text>

        <View style={styles.row}>
          <CircleButton
            onPress={() => {
              isRunning ? lap() : reset();
            }}>
            {isRunning ? 'Lap' : 'Reset'}
          </CircleButton>
          <CircleButton
            onPress={() => {
              isRunning ? stop() : start();
            }}
            color={isRunning ? 'red' : 'green'}>
            {isRunning ? 'Stop' : 'Start'}
          </CircleButton>
        </View>

        <LapList
          hasStarted={hasStarted}
          currentLapTime={currentLapTime}
          laps={laps}
          fastestLapTime={fastestLapTime}
          slowestLapTime={slowestLapTime}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  timeText: {
    fontSize: 60,
    fontWeight: '300',
    marginTop: 100,
    fontVariant: ['tabular-nums'], // fixed width character
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 100,
  },
});

export default StopWatch;
