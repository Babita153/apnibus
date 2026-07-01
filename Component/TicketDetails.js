import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Feather';

const TicketDetails = ({ navigation, route }) => {

  const {
    bus,
    from,
    to,
    timeStart,
    timeEnd,
    price,
    seats = []
  } = route.params || {};

  const [isScanned, setIsScanned] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Starting Trip");

  const scale = new Animated.Value(1);

  // 🔥 ANIMATION LOOP
  useEffect(() => {
    if (isScanned) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scale, { toValue: 1.3, duration: 800, useNativeDriver: true }),
          Animated.timing(scale, { toValue: 1, duration: 800, useNativeDriver: true }),
        ])
      ).start();

      // 🔥 PROGRESS SIMULATION
      let interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus("Arrived at Destination 🎉");
            return 100;
          }

          if (prev > 60) setStatus("Almost There...");
          else if (prev > 30) setStatus("On The Way...");
          else setStatus("Trip Started");

          return prev + 10;
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isScanned]);

  // 🔥 END TRIP
  const handleEndTrip = () => {
    navigation.navigate('Tabs', {
      screen: 'Ticket',
      params: {
        completedTicket: {
          bus,
          from,
          to,
          timeStart,
          timeEnd,
          price,
          seats,
          status: "Completed"
        }
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={22} />
      </TouchableOpacity>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.bus}>{bus}</Text>
        <Text style={styles.text}>{from} → {to}</Text>
        <Text style={styles.text}>{timeStart} - {timeEnd}</Text>
      </View>

      {!isScanned ? (
        <>
          <View style={styles.qrContainer}>
            <QRCode value={`${bus}-${from}-${to}`} size={200} />
          </View>

          <TouchableOpacity
            style={styles.scanBtn}
            onPress={() => setIsScanned(true)}
          >
            <Text style={{ color: '#fff' }}>Scan Ticket</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.activeBox}>

          {/* 🔥 ANIMATED DOT */}
          <Animated.View
            style={[
              styles.dot,
              { transform: [{ scale }] }
            ]}
          />

          <Text style={styles.title}>Trip Active</Text>
          <Text style={styles.sub}>{status}</Text>

          {/* 🔥 PROGRESS BAR */}
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${progress}%` }]} />
          </View>

          <Text>{progress}% Completed</Text>

          <TouchableOpacity style={styles.endBtn} onPress={handleEndTrip}>
            <Text style={{ color: '#fff' }}>End Trip</Text>
          </TouchableOpacity>

        </View>
      )}

    </SafeAreaView>
  );
};

export default TicketDetails;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f2f2f2' },

  card: {
    backgroundColor: '#2979ff',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10
  },

  bus: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  text: { color: '#fff', marginTop: 5 },

  qrContainer: { alignItems: 'center', marginTop: 40 },

  scanBtn: {
    marginTop: 20,
    backgroundColor: '#2979ff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  },

  activeBox: { alignItems: 'center', marginTop: 50 },

  dot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'green',
    marginBottom: 10
  },

  title: { fontSize: 22, fontWeight: 'bold' },
  sub: { color: '#777', marginBottom: 10 },

  progressBar: {
    width: '80%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginVertical: 10
  },

  progress: {
    height: 10,
    backgroundColor: 'green',
    borderRadius: 10
  },

  endBtn: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 10
  }
});
