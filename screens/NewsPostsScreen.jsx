import { StatusBar, Text, View, FlatList, ActivityIndicator, RefreshControl, Button } from 'react-native';
import axios from 'axios';
import { NewsPost } from '../components/NewsPost';
import React from 'react';

export const NewsPostsScreen = () => {
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchNewsPosts = () => {
    setIsLoading(true);
    axios.get('https://frontappapi.dock7.66bit.ru/api/news/get?page=1&count=10')
    .then(({ data }) => {
      setItems(data);
    })
    .catch(error => {
      console.log(error);
      alert('Ошибка при загрузке новостей');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  React.useEffect(fetchNewsPosts, []);

  if (isLoading) {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <ActivityIndicator size="large"/>
      <Text>Loading...</Text>
    </View>
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchNewsPosts} />}
        data={items}
        renderItem={({item}) => <NewsPost title={item.title} content={item.content}/>}
      />
    </View>
  );
};