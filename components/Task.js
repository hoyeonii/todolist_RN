import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
      </View>
      <Text style={styles.itemText}>you have to: {props.task}</Text>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    opacity: 0.4,
    backgroundColor: "#55BCF6",
    borderRadius: 5,
  },
  itemText: { width: "80%" },
  circular: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#55BCF6",
  },
});
export default Task;
