import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <Task task="와우우ㅜ" />
          <Task task="rㄹㅈㄹㅈrfrfwfrrwrfrfffㅈㄹㅈrfrfwfrrwrfrㅈㄹㅈrfrfwfrrwrfrffㄹ" />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder="write tasks here" />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9EAED",
    // position: "relative",
  },
  tasksWrapper: { paddingTop: 100, paddingHorizontal: 20 },

  sectionTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },

  items: {},
  writeTaskWrapper: {
    position: "absolute",
    bottom: 50,
    marginHorizontal: 20,
    // borderWidth: 3,
    flexDirection: "row",
    // backgroundColor: "gray",
    justifyContent: "space-around",
  },
  input: {
    width: "82%",
    backgroundColor: "white",
    margin: 5,
    padding: 10,
    height: 40,
    borderRadius: 60,
  },
  addIcon: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    margin: 5,
    padding: 8,
    height: 40,
    borderRadius: 60,
  },
  addWrapper: {
    // width: "120%",
    // backgroundColor: "white",
    // margin: 5,
    // height: 40,
    // textAlign: "center",
  },
});
