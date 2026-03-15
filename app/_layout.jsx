import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TaskProvider } from "../componentes/context/TaskProvider";

export default function Layout() {

  const router = useRouter();

  return (
    <TaskProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { 
            backgroundColor: "#021123",
          },
          headerTintColor: "#FFF",
          drawerStyle: {
            backgroundColor: "#021123",
          },
          drawerLabelStyle: {
            color: "#FFF",
          },
        }}
      >
        <Drawer.Screen 
        name='index'
        options={{ 
          headerShown: false,
          drawerItemStyle: {
            display: "none",
           }, 
          }} 
          />
      
      <Drawer.Screen 
        name='edit-task/[id]' 
        options={{
          drawerItemStyle: { display: "none" },
          title: "",
          headerLeft: () => {
            return <Ionicons
            name="arrow-back"
            size={24}
            color="#FFF"
            style={{ marginLeft: 16 }}
            onPress={() => router.navigate("/tasks")}
            />
          }
        }} 
        />

      <Drawer.Screen 
        name='add-task/index' 
        options={{
          drawerItemStyle: { display: "none" },
          title: "",
          headerLeft: () => {
            return <Ionicons
            name="arrow-back"
            size={24}
            color="#FFF"
            style={{ marginLeft: 16 }}
            onPress={() => router.navigate("/tasks")}
            />
          }
        }} 
        />

        <Drawer.Screen 
        name='pomodoro' 
        options={{
          drawerLabel: "Timer",
          title: "",
        }} 
        />

       <Drawer.Screen 
        name='tasks/index' 
        options={{
          drawerLabel: "Lista de tardefas",
          title: "",
        }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  </TaskProvider>
  );
}
