import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RootNavigator from './src/navigation/RootNavigator';
import {AuthProvider} from './src/navigation/AuthContext';
import {colors} from './src/theme';

enableScreens(true);
Ionicons.loadFont();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    text: colors.textPrimary,
    border: colors.border,
    primary: colors.primary,
    card: colors.surface,
    notification: colors.warning,
  },
};

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <AuthProvider>
          <StatusBar
            backgroundColor={colors.background}
            barStyle="dark-content"
            translucent={false}
          />
          <NavigationContainer theme={navigationTheme}>
            <RootNavigator />
          </NavigationContainer>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
