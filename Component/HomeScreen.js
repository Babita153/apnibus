import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const TabItem = ({ icon, label, active, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabItem}>
      <Icon
        name={icon}
        size={20}
        color={active ? '#2979ff' : '#777'}
      />
      <Text style={[styles.tabText, active && { color: '#2979ff' }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      {/* 🗺 MAP */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 28.61,
          longitude: 77.20,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: 28.61, longitude: 77.20 }}
          title="Mirpur Rd"
        />
      </MapView>

      {/* 🔍 SEARCH BAR */}
      <View style={styles.topBar}>

        <TouchableOpacity style={styles.menuBtn}>
          <Icon name="menu" size={22} />
        </TouchableOpacity>

        {/* ✅ FIXED NAVIGATION */}
        <TouchableOpacity
          style={styles.searchBox}
          onPress={() => navigation.navigate('Search')}
        >
          <Icon name="search" size={16} color="#777" />
          <Text style={styles.placeholder}>Where to?</Text>
          <Icon name="star" size={16} color="#2979ff" />
        </TouchableOpacity>

      </View>

      {/* 🎯 LOCATION BUTTON */}
      <TouchableOpacity style={styles.locBtn}>
        <Icon name="navigation" size={18} />
      </TouchableOpacity>

      {/* 🚌 BUS ROUTES BUTTON */}
      <TouchableOpacity
        style={styles.routeBtn}
        onPress={() => navigation.navigate('Routes')}
      >
        <Text style={styles.routeText}>Bus Routes</Text>
      </TouchableOpacity>

      {/* 🔻 FLOATING TAB */}
      <View style={styles.bottomTab}>

        <TabItem icon="home" label="Home" active />

        <TabItem
          icon="credit-card"
          label="Wallet"
          onPress={() => navigation.navigate('Wallet')}
        />

        <TabItem
          icon="file-text"
          label="Ticket"
          onPress={() => navigation.navigate('Ticket')}
        />

        <TabItem
          icon="bell"
          label="Notification"
        />

        <TabItem
          icon="user"
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
        />

      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  topBar: {
    position: 'absolute',
    top: 50,
    left: 15,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuBtn: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },

  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginLeft: 10,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },

  placeholder: {
    flex: 1,
    marginLeft: 8,
    color: '#777',
  },

  locBtn: {
    position: 'absolute',
    bottom: 180,
    right: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 30,
    elevation: 5,
  },

  routeBtn: {
    position: 'absolute',
    bottom: 110,
    right: 20,
    backgroundColor: '#2979ff',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 30,
    elevation: 5,
  },

  routeText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  bottomTab: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
  },

  tabItem: {
    alignItems: 'center',
  },

  tabText: {
    fontSize: 10,
    color: '#777',
    marginTop: 2,
  },

});
