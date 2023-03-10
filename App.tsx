import * as React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <ToastProvider>
      <RootNavigator />
    </ToastProvider>
  );
}