import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
           {icon}
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#BB72FF',
    borderRadius: 24,
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    textAlign: 'center',
    color: '#0221123',
    fontWeight: 'bold',
    fontSize: 18,
  },
});