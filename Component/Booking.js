import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TOTAL_SEATS = 24;
const BOOKED_SEATS = [3, 8, 12];

const Booking = ({ navigation, route }) => {

  const { bus = "Bus 01", from = "Mirpur-12", to = "Dhanmondi", price = 50 } = route.params || {};

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleSeat = (seat) => {
    if (BOOKED_SEATS.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const totalPrice = selectedSeats.length * price;

  // 🔥 FIXED CONFIRM FUNCTION
  const handleConfirm = () => {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);

      // ✅ NAVIGATE TO TABS → TICKET SCREEN
      navigation.navigate('Tabs', {
        screen: 'Ticket',
        params: {
          newTicket: {
            bus,
            from,
            to,
            timeStart: "10:40 AM",
            timeEnd: "12:00 PM",
            price: totalPrice,
            seats: selectedSeats,
          }
        }
      });

    }, 2000); // shorter delay
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Select Your Seats</Text>

      <FlatList
        data={[...Array(TOTAL_SEATS).keys()].map(i => i + 1)}
        numColumns={4}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => {

          const isSelected = selectedSeats.includes(item);
          const isBooked = BOOKED_SEATS.includes(item);

          return (
            <TouchableOpacity
              style={[
                styles.seat,
                isSelected && styles.selectedSeat,
                isBooked && styles.bookedSeat
              ]}
              onPress={() => toggleSeat(item)}
              disabled={isBooked}
            >
              <Text style={{
                color: isSelected ? '#fff' : isBooked ? '#fff' : '#000'
              }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Booking Summary</Text>

        <Text>Bus: {bus}</Text>
        <Text>Route: {from} → {to}</Text>
        <Text>
          Seats: {selectedSeats.length ? selectedSeats.join(', ') : 'None'}
        </Text>

        <Text style={styles.price}>₹{totalPrice}</Text>

        <TouchableOpacity
          style={[
            styles.btn,
            selectedSeats.length === 0 && { backgroundColor: '#aaa' }
          ]}
          disabled={selectedSeats.length === 0}
          onPress={handleConfirm}
        >
          <Text style={styles.btnText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>

      {/* MODAL */}
      <Modal visible={showSuccess} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={{ fontSize: 40 }}>✅</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Booking Successful!
            </Text>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default Booking;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f7fb',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },

  seat: {
    flex: 1,
    margin: 8,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  selectedSeat: {
    backgroundColor: '#2979ff',
  },

  bookedSeat: {
    backgroundColor: '#ccc',
  },

  summary: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
  },

  summaryTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    color: '#555',
    marginBottom: 5,
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  btn: {
    backgroundColor: '#2979ff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  /* MODAL */
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },

  success: {
    fontSize: 40,
  },

  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  sub: {
    marginTop: 5,
    color: '#777',
  },

});
