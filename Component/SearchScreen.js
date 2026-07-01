import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

const SearchScreen = ({ navigation }) => {

  // ✅ STATE FOR INPUTS
  const [from, setFrom] = useState("Mirpur-12");
  const [to, setTo] = useState("Dhanmondi");

  // 🔄 SWAP FUNCTION
  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* 🔙 HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Search Route</Text>
      </View>

      {/* 🔝 INPUT SECTION */}
      <View style={styles.inputContainer}>

        {/* LEFT LINE DESIGN */}
        <View style={styles.lineContainer}>
          <View style={styles.dot} />
          <View style={styles.line} />
          <View style={styles.square} />
        </View>

        {/* INPUTS */}
        <View style={{ flex: 1 }}>

          <TextInput
            value={from}
            onChangeText={setFrom}
            style={styles.input}
          />

          <TextInput
            value={to}
            onChangeText={setTo}
            style={styles.input}
          />

        </View>

        {/* SWAP BUTTON */}
        <TouchableOpacity onPress={swapLocations}>
          <Icon name="repeat" size={20} color="#777" />
        </TouchableOpacity>

      </View>

      {/* ⏱ DEPART */}
      <View style={styles.departBox}>
        <Text style={{ color: '#777' }}>Depart:</Text>
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Now</Text>
        <Icon name="more-horizontal" size={18} style={{ marginLeft: 'auto' }} />
      </View>

      {/* 🚍 GO BUTTON */}
      <TouchableOpacity
        style={styles.goBtn}
        onPress={() =>
          navigation.navigate('Routes', {
            from,
            to
          })
        }
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          Search Routes
        </Text>
      </TouchableOpacity>

      {/* 🕘 RECENT */}
      <Text style={styles.section}>Recent</Text>

      <ScrollView>
        <RecentItem text="Mirpur 12 → New Market" />
        <RecentItem text="New Market → Mirpur-12" />
        <RecentItem text="Shyamoli → New Market" />
      </ScrollView>

    </SafeAreaView>
  );
};

const RecentItem = ({ text }) => (
  <TouchableOpacity style={styles.recentItem}>
    <Icon name="clock" size={16} color="#777" />
    <Text style={{ marginLeft: 10 }}>{text}</Text>
  </TouchableOpacity>
);

export default SearchScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    padding: 15,
  },

  /* 🔙 HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  /* INPUT SECTION */
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    elevation: 3,
    alignItems: 'center',
  },

  lineContainer: {
    alignItems: 'center',
    marginRight: 10,
  },

  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#2979ff',
    borderRadius: 4,
  },

  line: {
    width: 2,
    height: 25,
    backgroundColor: '#ccc',
    marginVertical: 2,
  },

  square: {
    width: 8,
    height: 8,
    backgroundColor: '#000',
  },

  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  /* DEPART */
  departBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
  },

  /* GO BUTTON */
  goBtn: {
    backgroundColor: '#2979ff',
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center',
  },

  section: {
    marginTop: 20,
    marginBottom: 10,
    color: '#777',
  },

  recentItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 10,
  },

});
