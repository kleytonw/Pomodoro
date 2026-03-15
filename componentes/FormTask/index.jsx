import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
  } from "react-native";
  import { useState } from "react";
  import { IconSave } from "../Icons";
  
  export default function FormTask({onFormSubmit, defaultValue = ''}) {
    const [description, setDescription] = useState(defaultValue);
  
    const submitTask = () => {
      if (!description.trim()) return;
      onFormSubmit(description.trim());
      setDescription("");
    };
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.inner}>
            <Text style={styles.text}>
              {defaultValue ? 'Editar' : 'Adicionar'} uma tarefa
            </Text>
  
            <Text style={styles.label}>
              Em que você está trabalhando?
            </Text>
  
            <TextInput
              style={styles.input}
              numberOfLines={10}
              multiline={true}
              onChangeText={setDescription}
              value={description}
              placeholder="Digite sua tarefa..."
              placeholderTextColor="#999"
            />
  
            <View style={styles.actions}>
              <Pressable style={styles.button} 
                onPress={ () => {
                  submitTask();
                }}
               >
                <IconSave />
                <Text>
                  Salvar
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#021123",
    },
    scrollContent: {
      flexGrow: 1,
      gap: 16,
      alignItems: "center",
      paddingVertical: 24,
    },
    text: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 26,
    },
    inner: {
      backgroundColor: "#98A0A8",
      width: "90%",
      borderRadius: 8,
      padding: 16,
      gap: 32,
    },
    label: {
      fontWeight: "600",
      fontSize: 18,
    },
    input: {
      backgroundColor: "#FFFFFF",
      padding: 16,
      borderRadius: 8,
      height: 100,
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    actions: {
      flexDirection: "row",
      justifyContent: "center",
    }
  });