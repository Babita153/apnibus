import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

export default function RouteDetailsScreen({ navigation }) {
  const mapRef = useRef(null);

  // 🔵 ROUTE COORDINATES
  const routeCoords = [
    { latitude: 28.61, longitude: 77.2 },
    { latitude: 28.612, longitude: 77.205 },
    { latitude: 28.615, longitude: 77.21 },
    { latitude: 28.62, longitude: 77.215 },
    { latitude: 28.625, longitude: 77.22 },
    { latitude: 28.63, longitude: 77.23 },
  ];

  // 🚌 BUS POSITION
  const [busIndex, setBusIndex] = useState(0);

  // 🔁 ANIMATION LOOP
  useEffect(() => {
    const interval = setInterval(() => {
      setBusIndex((prev) => (prev < routeCoords.length - 1 ? prev + 1 : 0));
    }, 1500); // speed

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* 🗺 MAP */}
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 28.61,
          longitude: 77.2,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        {/* 🔵 ROUTE LINE */}
        <Polyline
          coordinates={routeCoords}
          strokeWidth={5}
          strokeColor="#2979ff"
        />

        {/* 📍 START */}
        <Marker coordinate={routeCoords[0]} />

        {/* 📍 END */}
        <Marker coordinate={routeCoords[routeCoords.length - 1]} />

        {/* 🚌 MOVING BUS */}
        <Marker coordinate={routeCoords[busIndex]}>
          <View style={styles.bus}>
            <Text>🚌</Text>
          </View>
        </Marker>
      </MapView>

      {/* 🔙 BACK */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={22} />
      </TouchableOpacity>

      {/* 🔊 SIDE BUTTONS */}
      <View style={styles.sideBtns}>
        <TouchableOpacity style={styles.circleBtn}>
          <Icon name="volume-2" size={18} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.circleBtn}>
          <Icon name="navigation" size={18} />
        </TouchableOpacity>
      </View>

      {/* 📦 BOTTOM CARD */}
      <View style={styles.card}>
        {/* TAKE RIDE */}
        <TouchableOpacity
          style={styles.rideBtn}
          onPress={() =>
            navigation.navigate('Booking', {
              bus: 'Bus 01',
              from: 'Mirpur-12',
              to: 'Dhanmondi',
              price: 50,
            })
          }>
          <Text style={styles.rideText}>Take a Ride</Text>
        </TouchableOpacity>

        {/* INFO */}
        <View style={styles.infoRow}>
          <Text>
            Reach station at <Text style={{ color: '#2979ff' }}>10:55 AM</Text>
          </Text>
          <Text>⭐ 4.2</Text>
        </View>

        {/* TAGS */}
        <View style={styles.tagsRow}>
          <Tag text="10 min" />
          <Tag text="50 minutes travel time" />
        </View>

        <View style={styles.tagsRow}>
          <Tag text="Available Seats 05" />
          <Tag text="Fair: 40 Tk" />
        </View>

        {/* WALK */}
        <Text style={styles.walk}>10 minutes walking time</Text>

        {/* ROUTE */}
        <Text style={styles.routeTitle}>
          Bus 01: From Mirpur-12 to Dhanmondi
        </Text>
      </View>
    </SafeAreaView>
  );
}

/* 🔹 TAG */
const Tag = ({ text }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },

  map: { flex: 1 },

  /* BACK */
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },

  /* SIDE */
  sideBtns: {
    position: 'absolute',
    right: 15,
    top: 120,
  },

  circleBtn: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    marginBottom: 10,
    elevation: 3,
  },

  /* BUS */
  bus: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
    elevation: 3,
  },

  /* CARD */
  card: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 10,
  },

  rideBtn: {
    backgroundColor: '#2979ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  rideText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  tagsRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  tag: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 8,
    marginRight: 10,
  },

  tagText: { fontSize: 12 },

  walk: {
    marginTop: 10,
    color: '#777',
  },

  routeTitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
