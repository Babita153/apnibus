import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

const RoutesScreen = ({ navigation, route }) => {

  const { from = "Mirpur-12", to = "Dhanmondi" } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>

      {/* 🔙 HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Routes</Text>
      </View>

      {/* 🔝 LOCATION */}
      <View style={styles.inputBox}>
        <View style={styles.lineContainer}>
          <View style={styles.dot} />
          <View style={styles.line} />
          <View style={styles.square} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.inputText}>{from}</Text>
          <Text style={styles.inputText}>{to}</Text>
        </View>

        <Icon name="repeat" size={20} color="#777" />
      </View>

      {/* ⏱ DEPART */}
      <View style={styles.departBox}>
        <Text style={{ color: '#777' }}>Depart:</Text>
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Now</Text>
      </View>

      {/* 🚍 ROUTES */}
      <Text style={styles.section}>Recommended Routes</Text>

      <ScrollView>

        <RouteCard bus="Bus 01" time="15" navigation={navigation} from={from} to={to} />
        <RouteCard bus="Bus 02" time="25" navigation={navigation} from={from} to={to} />

        <Text style={styles.section}>Saved Routes</Text>

        <RouteCard bus="Bus 01" time="15" navigation={navigation} from={from} to={to} />
        <RouteCard bus="Bus 04" time="45" navigation={navigation} from={from} to={to} />

      </ScrollView>

    </SafeAreaView>
  );
};


// 🔥 CARD
const RouteCard = ({ bus, time, navigation, from, to }) => (
  <View style={styles.card}>

    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={styles.iconCircle}>
        <Icon name="truck" size={16} color="#2979ff" />
      </View>

      <View style={{ marginLeft: 10 }}>
        <Text style={styles.bus}>{bus}</Text>
        <Text style={styles.subText}>2 Km Away From You</Text>
        <Text style={styles.subText}>Coming From Mirpur-02</Text>
      </View>
    </View>

    <View style={{ alignItems: 'flex-end' }}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.minText}>minutes away</Text>

      {/* ✅ WORKING BUTTON */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate('RouteDetails', {
            bus,
            time,
            from,
            to
          })
        }
      >
        <Text style={styles.btnText}>Select Bus</Text>
      </TouchableOpacity>
    </View>

  </View>
);

export default RoutesScreen;


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fb', padding: 15 },

  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  headerTitle: { fontSize: 16, fontWeight: 'bold', marginLeft: 10 },

  inputBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    elevation: 3,
    alignItems: 'center',
  },

  lineContainer: { alignItems: 'center', marginRight: 10 },
  dot: { width: 8, height: 8, backgroundColor: '#2979ff', borderRadius: 4 },
  line: { width: 2, height: 25, backgroundColor: '#ccc', marginVertical: 2 },
  square: { width: 8, height: 8, backgroundColor: '#000' },

  inputText: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },

  departBox: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
  },

  section: { marginTop: 20, marginBottom: 10, color: '#777' },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },

  iconCircle: {
    backgroundColor: '#e3f0ff',
    padding: 8,
    borderRadius: 20,
  },

  bus: { fontWeight: 'bold' },
  subText: { fontSize: 11, color: '#777' },

  time: { color: 'red', fontSize: 18, fontWeight: 'bold' },
  minText: { fontSize: 10, color: '#777' },

  btn: {
    backgroundColor: '#2979ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 5,
  },

  btnText: { color: '#fff', fontSize: 12 },
});
