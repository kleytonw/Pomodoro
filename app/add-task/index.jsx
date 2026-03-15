import { useRouter } from "expo-router";
import { useTaskContext } from "../../componentes/context/useTaskContext";
import FormTask from "../../componentes/FormTask";

export default function AddTask() {
  const { addTask } = useTaskContext();
  const router = useRouter();

  const submitTask = (description) => {
    addTask(description.trim());
    router.navigate("/tasks");
  };

  return (<FormTask onFormSubmit={submitTask}/>);
}
