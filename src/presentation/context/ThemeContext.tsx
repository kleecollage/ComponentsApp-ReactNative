import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { darkColors, lightColors, ThemeColors } from "../../config/theme/theme";
import { Appearance, AppState, useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext( {} as ThemeContextProps );

export const ThemeProvider = ( {children}: PropsWithChildren ) => {
  const colorScheme = useColorScheme(); 
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme( theme );
  }
  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  // Cambio de tema segun el tema del dispositivo ...
  useEffect(() => {
    if(colorScheme === 'dark'){
      setCurrentTheme('dark')
    } else {
      setCurrentTheme('light')
    }
  }, [colorScheme]);
  
  // Aplicacion ativa, en suspension o en background ...
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const colorScheme = Appearance.getColorScheme();
      setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light')
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer theme={ isDark ? DarkTheme : DefaultTheme }>
      <ThemeContext.Provider
        value= {{
          currentTheme: currentTheme,
          isDark: isDark,
          colors: colors,
          setTheme: setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  )
}