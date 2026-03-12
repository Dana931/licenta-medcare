import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import {useAuth} from './AuthContext';
import {RootStackParamList} from '../types/navigation';
import AddMedicationScreen from '../screens/medication/AddMedicationScreen';
import ScanMedicationScreen from '../screens/medication/ScanMedicationScreen';
import MedicationDetailsScreen from '../screens/medication/MedicationDetailsScreen';
import ScheduleMedicationScreen from '../screens/medication/ScheduleMedicationScreen';
import ReminderScreen from '../screens/medication/ReminderScreen';
import ConfirmIntakeScreen from '../screens/medication/ConfirmIntakeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const {isAuthenticated} = useAuth();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <Stack.Screen component={AuthNavigator} name="Auth" />
      ) : (
        <>
          <Stack.Screen component={MainTabNavigator} name="MainTabs" />
          <Stack.Screen component={AddMedicationScreen} name="AddMedication" />
          <Stack.Screen component={ScanMedicationScreen} name="ScanMedication" />
          <Stack.Screen
            component={MedicationDetailsScreen}
            name="MedicationDetails"
          />
          <Stack.Screen
            component={ScheduleMedicationScreen}
            name="ScheduleMedication"
          />
          <Stack.Screen component={ReminderScreen} name="Reminder" />
          <Stack.Screen component={ConfirmIntakeScreen} name="ConfirmIntake" />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
