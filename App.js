import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import Task from "./components/Task";
import react, { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState(["rqfqreof", "irif"]);
  const [input, setInput] = useState("");

  function handleDelete(index) {
    let copy = [...todoList];
    copy.splice(index, 1);
    setTodoList(copy);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <ScrollView style={styles.items}>
          {todoList.map((todo, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                handleDelete(i);
              }}
            >
              <Task task={todo} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="write tasks here"
          value={input}
          onChangeText={(e) => {
            setInput(e);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (!todoList.includes(input)) {
              setTodoList([...todoList, input]);
              setInput("");
            } else {
              Alert.alert("already there!");
            }
          }}
        >
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
    height: 100,
    bottom: 10,
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
