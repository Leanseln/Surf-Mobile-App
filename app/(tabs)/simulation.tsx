import { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Play, Anchor } from "lucide-react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const Simulation = () => {
  const [isSimulationActive, setIsSimulationActive] = useState(false)

  const toggleSimulation = () => {
    setIsSimulationActive(!isSimulationActive)
  }

  const handleRescue = (rescueNumber: number) => {
    console.log(`Rescue ${rescueNumber} initiated`)
    // Add rescue logic here
  }

  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Simulation Control</Text>

      <TouchableOpacity
        style={[styles.button, styles.startButton, isSimulationActive && styles.activeButton]}
        onPress={toggleSimulation}
        accessibilityLabel={isSimulationActive ? "Stop Simulation" : "Start Simulation"}
        accessibilityHint="Toggles the boat simulation on or off"
      >
        <Play color="white" size={24} />
        <Text style={styles.buttonText}>{isSimulationActive ? "Stop Simulation" : "Start Simulation"}</Text>
      </TouchableOpacity>

      <View style={styles.rescueContainer}>
        <TouchableOpacity
          style={[styles.button, styles.rescueButton]}
          onPress={() => handleRescue(1)}
          disabled={!isSimulationActive}
          accessibilityLabel="Rescue 1"
          accessibilityHint="Initiates rescue operation 1"
        >
          <Anchor color="white" size={24} />
          <Text style={styles.buttonText}>Rescue 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.rescueButton]}
          onPress={() => handleRescue(2)}
          disabled={!isSimulationActive}
          accessibilityLabel="Rescue 2"
          accessibilityHint="Initiates rescue operation 2"
        >
          <Anchor color="white" size={24} />
          <Text style={styles.buttonText}>Rescue 2</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0f172a",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  startButton: {
    backgroundColor: "#22c55e",
  },
  activeButton: {
    backgroundColor: "#ef4444",
  },
  rescueButton: {
    backgroundColor: "#3b82f6",
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 8,
  },
  rescueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
})

export default Simulation

