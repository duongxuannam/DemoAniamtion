import {ColorSchemeName, useColorScheme as _useColorScheme} from 'react-native';
import {useCustomTheme} from '../components/themed/Theme';
import Colors from '../constants/colors';

export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
};

export const useThemeColors = () => {
  const customTheme = useCustomTheme();

  const activeTheme = customTheme.theme;

  return {
    theme: customTheme.theme,
    isDark: customTheme.isDark || activeTheme === 'dark',
    colors: Colors[activeTheme],
  };
};
