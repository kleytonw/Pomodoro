import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon, textStyle, outline }) => {
  return (
    <Pressable 
    style={[styles.button, outline && styles.outlineButton]} 
    onPress={onPress}>
      {icon}
      <Text 
      style={[styles.buttonText, textStyle, outline && styles.outlineButtonText]}
      >{title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#BB72FF",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#BB72FF",
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontWeight: "bold",
    fontSize: 18,
  },
  outlineButtonText: {
    color: "#BB72FF",
    
  },
});
