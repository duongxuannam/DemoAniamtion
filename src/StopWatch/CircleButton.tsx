/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type CircleButtonProps = {
  onPress: () => void;
  children: string;
  color?: 'green' | 'red';
};

export const CircleButton = ({onPress, children, color}: CircleButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.btnBorder, {borderColor: color || '#C5D0D8'}]}>
        <View style={[styles.btn, {backgroundColor: color || '#C5D0D8'}]}>
          <Text style={[styles.text, {color: color ? '#C5D0D8' : 'black'}]}>
            {children}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 75,
    height: 75,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBorder: {
    borderWidth: 2,
    padding: 3,
    borderRadius: 100,
  },

  text: {
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: '600',
  },
});
