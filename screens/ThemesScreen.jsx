import { StatusBar, Text, View, FlatList, ActivityIndicator, RefreshControl, Button, StyleSheet, Pressable } from 'react-native';
import styled from 'styled-components/native';
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useTheme } from '../contexts/ThemeContext';

export const ThemesScreen = () => {
  const { applyTheme } = useTheme();

  const handleThemeChange = async (theme) => {
    try {
      const response = await fetch(`https://frontappapi.dock7.66bit.ru/api/theme/get?name=${theme}`);
      const json = await response.json();
      applyTheme(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.block}>
      <ThemeButton1 onPress={() => handleThemeChange('dark')}>
        <BtnText1>Тёмная тема</BtnText1>
      </ThemeButton1>

      <ThemeButton2 onPress={() => handleThemeChange('light')}>
        <BtnText2>Светлая тема</BtnText2>
      </ThemeButton2>

      <ThemeButton3 onPress={() => handleThemeChange('blue')}>
        <BtnText3>Синяя тема</BtnText3>
      </ThemeButton3>
    </View>
  );
};

const ThemeButton1 = styled.Pressable`
  border: 5px solid rgb(25, 25, 25);
  background: rgb(111, 103, 120);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40;
  padding-top: 10;
  padding-bottom: 10;
  border-radius: 15px;
`;

const ThemeButton2 = styled.Pressable`
  border: 5px solid rgb(206, 240, 227);
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40;
  padding-top: 10;
  padding-bottom: 10;
  border-radius: 15px;
`;

const ThemeButton3 = styled.Pressable`
  border: 5px solid rgb(34, 22, 105);
  background: rgb(41, 67, 153);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40;
  padding-top: 10;
  padding-bottom: 10;
  border-radius: 15px;
`;

const BtnText1 = styled.Text`
  color: rgb(209, 187, 46);
`;

const BtnText2 = styled.Text`
  color: rgb(10, 10, 10);
`;
const BtnText3 = styled.Text`
  color: rgb(201, 201, 201);
`;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
});