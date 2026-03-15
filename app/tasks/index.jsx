import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useTaskContext } from "../../componentes/context/useTaskContext";
import { FokusButton } from "../../componentes/FokusButton";
import { IconPlus } from "../../componentes/Icons";
import TaskItem from "../../componentes/TaskItem";

export default function Tasks() {

  const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>

        <View style={styles.inner}>
          {/*
          {tasks.map(t => {
            return(
            <TaskItem 
              completed={t.completed}
              text={t.descripition}
              key={t.id}
              />
            )
        })}*/}
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                completed={item.completed}
                text={item.description}
                onPressDelete={() => deleteTask(item.id)}
                onToggleComplete={() => toggleTaskCompleted(item.id)}
                onPressEdit={() => router.push(`/edit-task/${item.id}`)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={styles.text}>Lista de tarefas:</Text>
            }
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FokusButton
                  title="Adicionar nova tarefa"
                  icon={<IconPlus outline />}
                  outline
                  onPress={() => router.push("/add-task")}
                />
              </View>
            }
            ListEmptyComponent={
              <View style={{ marginTop: 16 }}>
                <Text style={{
                  color: '#98A0AB',
                  fontSize: 18,
                  textAlign: 'center',
                  marginTop: 40,
                  marginBottom: 24
                }}>
                  Ainda nao há tarefas na sua lista, que tal adicionar?
                </Text>
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 26,
    margin: 16,
  },
  wrapper: {
    gap: 40,
    width: '90%',
  },
  inner: {
    gap: 8,
  },
});
