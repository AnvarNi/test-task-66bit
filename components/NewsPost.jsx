import { StatusBar, Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../contexts/ThemeContext';

const NewsPostView = styled.View`
  padding: 15px;
  margin-bottom: 2px;
  border: 0px;
`;

const NewsPostTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const NewsPostContent = styled.Text`
  font-size: 16px;
  font-weight: normal;
`;

export const NewsPost = ({title, content, id, createdAt, updatedAt}) => {
  const { theme } = useTheme();
  return (
      <View>
        <NewsPostView style={{backgroundColor: theme==null ? "rgb(111, 103, 120)" : theme.secondColor}}>
            <NewsPostTitle style={{color: theme==null ? "rgb(25, 25, 25)" : theme.mainColor}}>{title}</NewsPostTitle>
            <NewsPostContent style={{color: theme==null ? "rgb(209, 187, 46)" : theme.textColor}}>{content}</NewsPostContent>
        </NewsPostView>
      </View>
    );
};