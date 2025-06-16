import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleOverlay} style={styles.menuButton}>
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={overlayVisible}
        onRequestClose={toggleOverlay}
      >
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>

            <TouchableOpacity 
              onPress={toggleOverlay} 
              style={styles.closeButton}
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>

            <Text style={styles.menuTitle}>Menu</Text>
            
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => {
                toggleOverlay();
                navigation.navigate('Login');
              }}
            >
              <Text style={styles.menuItemText}>Deslogar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#add8e6',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  menuIcon: {
    fontSize: 30,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  overlayContent: {
    backgroundColor: '#fff',
    width: windowWidth * 0.2,
    height: '100%',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
    marginRight: 10,
    position: 'absolute',
    marginTop: -40,
  },
  closeText: {
    fontSize: 20,
    color: '#9b59b6',
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: 20,
  },
  menuTitle: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'left',
    color: '#9b59b0',
    borderBottomColor: '#9b59b6',  
    marginTop: -50,
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#9b59b6',
    alignSelf: 'stretch',
    marginTop: 5,
  },
  menuItem: {
    padding: 15,
    marginTop: 500,
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',   
    marginVertical: 5,
    borderRadius: 5,                   
  },
  menuItemText: {
    fontSize: 18,
    color: '#ff0000',
    fontWeight: '600',
    paddingLeft: 10,
  },
});