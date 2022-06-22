import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { TabBar, TabBarContainer } from "../components/elements/TabBar"
import { usePlataform } from "../helpers/usePlataform"
import { Home } from "../screens/Home"
import { WorkoutList } from "../screens/WorkoutList"
import theme from "../theme"

const Tab = createBottomTabNavigator()

const AdminRoutes = () => {
  return (
    <NavigationContainer independent>
      <Tab.Navigator screenOptions={{ ...tabBarConfig }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => <TabBarContainer {...props} />,
            tabBarIcon: ({ focused }) => <TabBar name="Início" icon="grid" isSelected={focused} />
          }}
        />
        <Tab.Screen
          name="List"
          component={WorkoutList}
          options={{
            tabBarButton: (props) => <TabBarContainer {...props} />,
            tabBarIcon: ({ focused }) => <TabBar name="Treino" icon="file-text" isSelected={focused} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const tabBarConfig = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    // position: "absolute",
    backgroundColor: theme.colors.mediumGrey,
    borderTopWidth: 0,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: -4
    },
    height: usePlataform(80, 60)
  }
}

export default AdminRoutes
