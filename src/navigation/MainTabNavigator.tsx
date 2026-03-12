import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home/HomeScreen';
import MedicationsScreen from '../screens/medication/MedicationsScreen';
import TreatmentHistoryScreen from '../screens/history/TreatmentHistoryScreen';
import ProfileSettingsScreen from '../screens/profile/ProfileSettingsScreen';
import {colors, radius, spacing, typography} from '../theme';
import {MainTabParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();

const tabIcons: Record<keyof MainTabParamList, string> = {
  Acasa: 'home-outline',
  Medicamente: 'medkit-outline',
  Istoric: 'time-outline',
  Profil: 'person-outline',
};

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: {
          fontSize: typography.size.xs,
          fontWeight: typography.weight.medium,
          marginBottom: spacing.xxs,
        },
        tabBarStyle: {
          height: 68,
          paddingTop: spacing.xs,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          backgroundColor: colors.surface,
          borderTopLeftRadius: radius.xl,
          borderTopRightRadius: radius.xl,
        },
        tabBarIcon: ({color, size}) => (
          <Icon color={color} name={tabIcons[route.name]} size={size} />
        ),
      })}>
      <Tab.Screen
        component={HomeScreen}
        name="Acasa"
        options={{tabBarLabel: 'Acasă'}}
      />
      <Tab.Screen component={MedicationsScreen} name="Medicamente" />
      <Tab.Screen component={TreatmentHistoryScreen} name="Istoric" />
      <Tab.Screen component={ProfileSettingsScreen} name="Profil" />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
