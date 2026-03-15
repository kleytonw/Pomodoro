import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TaskContext = createContext();

const TASKS_STORAGE_KEY = 'fokus-tasks';

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
          const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
          setTasks(loadedData);
          setIsLoaded(true);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };
      getData();
  }, []);


  useEffect(() => {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
    } catch (error) {
      console.error('Erro ao armazenar dados:', error);
    }
  };
}, [tasks]);


  const addTask = (description) => {
    console.log('tarefa vai ser adicionada:')
    setTasks(oldState => [
        ...oldState,
        {description, id: oldState.length + 1}
    ])
  };
  
  const updateTask = (id, newDescription) => {
    setTasks(oldState => oldState.map(t =>
      t.id === id ? { ...t, description: newDescription } : t
    ));
  };

  const toggleTaskCompleted = (id) => {
    setTasks(oldState => oldState.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(oldState => oldState.filter(t => t.id !== id))
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompleted, deleteTask, updateTask }}>{
        children}
    </TaskContext.Provider>
  );
};