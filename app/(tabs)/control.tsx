import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Anchor } from 'lucide-react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const control = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView>
       <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
          <Text style={styles.headerTitle}>In-Control</Text>
        </View>
    
        <Image 
          source={require('./images/dashboardboat.jpg')} 
          style={styles.streaming} />

      <View style={styles.card}>
        <View style={styles.arrows}>
          <AntDesign name="leftcircleo" size={48} color="black" />
          <Entypo name="controller-stop" size={48} color="red" />
          <AntDesign name="rightcircleo" size={48} color="black" />
        </View>

        <View style={styles.safeZoneContainer} >
          <Text style={styles.safeZone}>Back to Safe Zone</Text>  
        </View>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
      backgroundColor: "white",
      borderBottomWidth: 1,
      borderBottomColor: "#e2e8f0",
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 12,
      color: "#0f172a",
    },
    headerText: {
      fontSize: 22,
      color: "#9e9e9e",
    },
    streaming: {
      width: '100%',
      height: '65%',
    },
    arrows: {
      flexDirection: 'row',
      justifyContent:  'space-evenly',
      margin: 16,
    },
    safeZoneContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    safeZone: {
      backgroundColor: 'green',
      justifyContent: 'center',
      color: 'white',
      borderRadius: 20,
      textAlign: 'center',
      width: '50%',
      padding: 8,
    },
    card: {
      backgroundColor: "white",
      borderRadius: 12,
      padding: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
  })
export default control