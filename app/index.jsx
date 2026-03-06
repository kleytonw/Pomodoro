import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useRef, useState } from "react";
import { FokusButton } from "../componentes/FokusButton";
import { ActionButton } from "../componentes/ActionButton";
import { Timer } from "../componentes/Timer";
import { IconPause, IconPlay } from "../componentes/Icons";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    imagem: require('./pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    imagem: require('./short.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,  
    imagem: require('./long.png'),
    display: 'Pausa longa'
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])

  const [timerRunning, setTimerRunning] = useState(false)

  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)

  const timerRef = useRef(null)

  const clear = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }

  const toggleTimer = () => {
    if(timerRef.current) {
      // pausar
      clear()
      return 
    }

    setTimerRunning(true)
    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
      console.log('timer rolando')
    }, 1000)
    timerRef.current = id
  }

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.imagem} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
            key= {p.id}
            active = { timerType.id === p.id }
            onPress={() => toggleTimerType(p)}
            display= {p.display}/>
          ))}
          </View>
        <Timer totalSeconds={seconds} />
        <FokusButton 
        title={timerRunning ? 'Pausar' : 'Iniciar'}
        icon={timerRunning ? <IconPause /> : <IconPlay />}
        onPress={toggleTimer}/>
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
    backgroundColor: '#021123'
  },
  actions: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'center',
    alingnItems: 'center',
  },
  timer: {
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
   width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5,
  },
});
