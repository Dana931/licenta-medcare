import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
};

export type MainTabParamList = {
  Acasa: undefined;
  Medicamente: undefined;
  Istoric: undefined;
  Profil: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList> | undefined;
  MainTabs: NavigatorScreenParams<MainTabParamList> | undefined;
  AddMedication: undefined;
  ScanMedication: undefined;
  MedicationDetails: {medicationId: string};
  ScheduleMedication: {medicationId?: string} | undefined;
  Reminder: {reminderId: string};
  ConfirmIntake: {medicationName: string; confirmedAt: string};
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
