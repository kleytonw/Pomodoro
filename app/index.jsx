import { Text, View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FokusButton } from "../componentes/FokusButton";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.image} />
      
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {"\n"} produtividade, {"\n"}
          <Text style={styles.bold}>
            mergulhe no que {"\n"} importa
          </Text>
        </Text>

        <Image source={require("../assets/images/home.png")} style={styles.imagem2} />

        <FokusButton
          title="Quero iniciar!"
          onPress={() => router.replace("/pomodoro")}
          style={styles.startButton}
          textStyle={styles.startButtonText}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais. Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
  },
  image: {
    width: 156,
    height: 40,
  },
  imagem2: {
    width: 317,
    height: 266,
  },
  inner: {
    gap: 40,
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
    marginTop: 40,
  },
  bold: {
    fontWeight: "bold",
  },
  startButton: {
    width: 220,
    marginTop: 12,
  },
  startButtonText: {
    fontSize: 18,
  },
  footer: {
    width: "80%",
    marginTop: 24,
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});