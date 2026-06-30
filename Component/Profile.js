import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // 👈 ADD THIS

const ProfileScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // 👈 ADD THIS

  const handleLogout = () => {
    setModalVisible(false);

    // 👇 Navigate to Login Screen
    navigation.replace("Login"); 
    // (ensure your screen name is exactly "Login")
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={require("../assets/avatar.png")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Rama</Text>
        <Text style={styles.phone}>0701001001</Text>
      </View>

      {/* Options */}
      <View style={styles.menu}>

        <MenuItem title="My Locations" />
        <MenuItem title="Trusted Location" />
        <MenuItem title="Offers & Voucher" />

        {/* Log Out */}
        <MenuItem 
          title="Log Out" 
          onPress={() => setModalVisible(true)} 
        />

      </View>

      {/* MODAL */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
      >
        <View style={styles.modalContainer}>

          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>Log Out</Text>

            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>

            <View style={styles.modalButtons}>

              {/* Cancel */}
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>

              {/* OK */}
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={handleLogout}
              >
                <Text style={styles.btnText}>OK</Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>
      </Modal>

    </View>
  );
};

const MenuItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuText}>{title}</Text>
      <Text>{'>'}</Text>
    </TouchableOpacity>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  header: {
    backgroundColor: '#1e1e2f',
    padding: 15,
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:"20%",
  },

  profileSection: {
    backgroundColor: '#1e1e2f',
    alignItems: 'center',
    paddingVertical: 20,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },

  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  phone: {
    color: '#ccc',
    fontSize: 12,
  },

  menu: {
    marginTop: 20,
    backgroundColor: '#fff',
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  menuText: {
    fontSize: 14,
  },

  /* MODAL */

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },

  modalButtons: {
    flexDirection: 'row',
    width: '100%',
  },

  cancelBtn: {
    flex: 1,
    backgroundColor: '#2e5df6',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 5,
  },

  confirmBtn: {
    flex: 1,
    backgroundColor: '#2e5df6',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 5,
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
