import { StatusBar } from 'expo-status-bar';
import {useState, React} from 'react';
import MapView from 'react-native-maps';
import { Modal, StyleSheet, Text, View } from 'react-native';

const Home = () => {
    const getInitialState = () => {
        return {
          region: {
            latitude: 13.596346855163574,
            longitude: 100.5833969116211,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        }
      }

    const [region, setRegion] = useState(getInitialState());

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region = {region}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

export default Home;