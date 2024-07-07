import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';

const Card = () => {
  // Uncomment and use this block if you want to fetch data from the API
  const [moviesData, setMoviesData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.bearer_token}`,
    }
  };
  const getMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
      const data = await response.json();
      const fresults = data.results;
      setMoviesData(fresults);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={moviesData}
        renderItem={({ item }) => <View style={styles.item}><Text style={styles.text}>{item.original_title}</Text></View>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
    padding: 16,
    minHeight: 1000
  },
  item: {
    color: "#ffffff", // Ensure the text is visible
    marginBottom: 8,
    borderColor: "#ffffff",
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 10,
    margin: 20,
  },
  text: {
    color: "#ffffff",
    marginTop: 16,
    textAlign: "center",
    borderColor: "#ffffff",
  }
});