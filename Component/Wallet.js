import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

const MenuItem = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.left}>
        <Icon name={icon} size={20} color="#2979ff" />
        <Text style={styles.itemText}>{title}</Text>
      </View>
      <Icon name="chevron-right" size={20} color="#999" />
    </TouchableOpacity>
  );
};

const Wallet = ({ navigation }) => {
  return (
    <View style={styles.container}>
      // <StatusBar barStyle="light-content" />

      {/* 🔷 HEADER */}
      <View style={styles.header}>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Wallet</Text>

        {/* User */}
        <View style={styles.userRow}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Ashika</Text>
        </View>
      </View>

      {/* 💳 FLOATING BALANCE CARD */}
      <View style={styles.balanceWrapper}>
        <View style={styles.card}>
          <Text style={styles.smallText}>Total Balance</Text>
          <Text style={styles.balance}>BDT 1000.00</Text>
          <Text style={styles.subText}>March BDT 1200</Text>
        </View>
      </View>

      {/* 📋 MENU */}
      <View style={styles.menu}>

        <MenuItem
          icon="credit-card"
          title="Recharge Balance"
          onPress={() => navigation.navigate('Recharge')}
        />

        <MenuItem
          icon="refresh-ccw"
          title="Refund"
          onPress={() => {}}
        />
      </View>

    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /* 🔷 HEADER */
  header: {
    backgroundColor: '#2979ff',
    height: 160,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginTop:"10%"
  },

  backBtn: {
    position: 'absolute',
    left: 15,
    top: 50,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  userRow: {
    position: 'absolute',
    right: 15,
    top: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 6,
  },

  userName: {
    color: '#fff',
    fontSize: 13,
  },

  /* 💳 BALANCE CARD (FLOATING 70-80%) */
  balanceWrapper: {
    alignItems: 'center',
    marginTop: -40, // overlap effect
  },

  card: {
    width: '85%',   // 🔥 70–80% screen feel
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,

    // shadow
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  smallText: {
    color: '#777',
    fontSize: 12,
  },

  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2979ff',
    marginVertical: 5,
  },

  subText: {
    color: '#aaa',
    fontSize: 12,
  },

  /* 📋 MENU */
  menu: {
    backgroundColor: '#fff',
    marginTop: 25,
    borderRadius: 15,
    marginHorizontal: 15,
    overflow: 'hidden',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemText: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: '500',
  },

});
