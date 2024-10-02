import './gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

const AppState = ( {children}: React.PropsWithChildren) => {
  return(
    <NavigationContainer>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NavigationContainer>
  )
}


export const ComponentsApp = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )
}
