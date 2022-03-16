import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { appStyle as styles } from "./styles";

function App() {
  const [text, setText] = useState("");

  const [task, setTask] = useState([
    
  ]);

  const handleChange = () => {
    setTask([...task, text]);
    setText("");
  };

  const handleDelete = (index) => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Tasks {text}</Text>
        <Text style={styles.subTitle}>
          Enter your tasks into the text box and add button
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your task here"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleChange}>
          <Text>Add Task</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <FlatList
          data={task}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity
                style={styles.taskDelete}
                onPress={handleDelete}
              >
                <Text style={styles.taskDeleteTask}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item + Math.random()}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
