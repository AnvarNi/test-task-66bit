import { StatusBar, Text, View, FlatList, ActivityIndicator, RefreshControl, Button } from 'react-native';
import React from 'react';
import MainContainer from './components/MainContainer';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <MainContainer/>
    </ThemeProvider>
  );
};
