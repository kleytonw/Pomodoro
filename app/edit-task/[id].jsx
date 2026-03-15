import { useLocalSearchParams, router } from "expo-router";
import {
  Text,
} from "react-native";
import { useTaskContext } from "../../componentes/context/useTaskContext";
import FormTask from "../../componentes/FormTask";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();

  const submitTask = (description) => {
    updateTask(Number(id), description);
    router.navigate("/tasks");
  };


  const task = tasks.find((t) => t.id === Number(id));

 if (!task) {
  return (
    <Text>
      Nao foi encontrada nenhuma tarefa com o id {id}
    </Text>
  );
}

return (
  <FormTask defaultValue={task.description} onFormSubmit={submitTask}/>
  );
}