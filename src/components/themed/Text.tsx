import React from 'react';
import {Text as DefaultText, TextProps} from 'react-native';
import {useThemeColors} from '../../hooks/color';

export const Text = (props: TextProps) => {
  const {style, ...otherProps} = props;
  const {colors} = useThemeColors();

  return <DefaultText style={[{color: colors.text}, style]} {...otherProps} />;
};
