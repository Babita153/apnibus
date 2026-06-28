import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const FirstPage = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('One');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => navigation.navigate('One')}
        style={{ alignItems: 'center' }}
      >

        {/* ✅ LOGO */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
        />

        {/* TEXT */}
        <Text style={styles.title}>ApniBus</Text>
        <Text style={styles.subtitle}>Your journey, elevated</Text>

      </TouchableOpacity>

    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2e5df6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 120,          // ✅ FIXED SIZE
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius:30,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },

  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },

});
