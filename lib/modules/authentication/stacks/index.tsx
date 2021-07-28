import React from "react";
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Initial } from "../screens/initial/index";
import { Register } from "../screens/register/index";
import { Login } from "../screens/login";
import { TowFactor } from "../screens/twoFactor";
import { Recovery } from "../screens/recovery";

const Stack = createStackNavigator();

const AuthNavigator = () => {

  const { theme } = useSelector((state: RootState) => state.theme);

  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }

  return (
    <Stack.Navigator screenOptions={screenOptions} headerMode='float'>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TowFactor" component={TowFactor} />
      <Stack.Screen name="Recovery" component={Recovery} />
    </Stack.Navigator>
  )
}

export { AuthNavigator }