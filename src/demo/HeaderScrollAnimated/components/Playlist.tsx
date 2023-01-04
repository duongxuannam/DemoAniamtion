import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {playlist, PlaylistType} from '../constants/playlist';
import {EllipsisHorizontal} from '../icons/EllipsisHorizontal';

const Playlist: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        {playlist.map((song: PlaylistType, index: number) => {
          return (
            <View
              style={styles.childContainer}
              key={JSON.stringify(song.name + index)}>
              <View style={styles.firstCol}>
                <View style={styles.childFirstCol}>
                  <Text style={styles.textFirstCol}>{index + 1}</Text>
                </View>
                <View style={styles.secondCol}>
                  <Text style={styles.textWhite}>{song.name}</Text>
                  <Text style={styles.textSecondCol}>{song.plays} </Text>
                </View>
              </View>
              <EllipsisHorizontal />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default Playlist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
    marginRight: 5,
  },
  firstCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  childFirstCol: {
    width: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFirstCol: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.5,
  },
  secondCol: {
    paddingLeft: 10,
  },
  textWhite: {color: 'white'},
  textSecondCol: {
    color: 'white',
    opacity: 0.6,
    marginTop: 5,
  },
});
