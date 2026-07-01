import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Ticket = ({ navigation, route }) => {

  const [tickets, setTickets] = useState([]);

  // 🔥 HANDLE NEW & COMPLETED TICKETS
  useEffect(() => {

    // ✅ NEW BOOKING
    if (route?.params?.newTicket) {
      const newTicket = route.params.newTicket;

      setTickets(prev => [
        {
          ...newTicket,
          status: "Active"
        },
        ...prev.map(t => ({
          ...t,
          status: t.status === "Active" ? "Old" : t.status
        }))
      ]);
    }

    // ✅ COMPLETED TRIP
    if (route?.params?.completedTicket) {
      const completed = route.params.completedTicket;

      setTickets(prev =>
        prev.map(t =>
          t.bus === completed.bus &&
          t.from === completed.from &&
          t.to === completed.to
            ? { ...t, status: "Completed" }
            : t
        )
      );
    }

  }, [route?.params]);

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <Text style={styles.header}>My Tickets</Text>

      {/* LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {tickets.length === 0 ? (
          <Text style={styles.empty}>No tickets booked yet</Text>
        ) : (
          tickets.map((item, index) => (
            <TicketCard
              key={index}
              {...item}
              onPress={() =>
                navigation.navigate("TicketDetails", item)
              }
            />
          ))
        )}

      </ScrollView>

    </SafeAreaView>
  );
};

export default Ticket;



// 🔥 CARD COMPONENT
const TicketCard = ({
  bus,
  from,
  to,
  timeStart,
  timeEnd,
  price,
  status,
  onPress
}) => {

  const getColor = () => {
    if (status === "Active") return '#2979ff';
    if (status === "Completed") return '#4caf50';
    return '#ccc';
  };

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: getColor() }]}
      onPress={onPress}
    >

      {/* TOP */}
      <View style={styles.row}>
        <Text style={styles.bus}>{bus}</Text>
        <Text style={styles.price}>₹{price}</Text>
      </View>

      {/* ROUTE */}
      <View style={styles.routeRow}>
        <Text style={styles.place}>{from}</Text>
        <Text style={styles.arrow}>➝</Text>
        <Text style={styles.place}>{to}</Text>
      </View>

      {/* TIME */}
      <Text style={styles.time}>
        {timeStart} - {timeEnd}
      </Text>

      {/* STATUS BADGE */}
      <View style={styles.statusBox}>
        <Text style={styles.statusText}>{status}</Text>
      </View>

    </TouchableOpacity>
  );
};



// 🎨 STYLES
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },

  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  empty: {
    textAlign: 'center',
    marginTop: 50,
    color: '#777',
  },

  card: {
    marginVertical: 8,
    padding: 15,
    borderRadius: 15,
    elevation: 3,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },

  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },

  routeRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },

  place: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff'
  },

  arrow: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#fff'
  },

  time: {
    marginTop: 5,
    fontSize: 12,
    color: '#eee',
  },

  statusBox: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  }

});
