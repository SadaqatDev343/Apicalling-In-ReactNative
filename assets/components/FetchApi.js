import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import styles from '../components/Styling'

const FetchApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://reactnative.dev/movies.json');
        setData(res.data.movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
     <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.row}>
        <Text style={styles.cell1}>{item.id}</Text>
        <Text style={styles.cell2}>{item.title}</Text>
        <Text style={styles.cell3}>{item.releaseYear}</Text>
      </View>
    )}
  />
    </View>
  );
};

export default FetchApi