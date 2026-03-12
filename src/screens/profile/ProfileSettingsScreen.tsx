import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import SettingRow from '../../components/common/SettingRow';
import PrimaryButton from '../../components/common/PrimaryButton';
import SectionTitle from '../../components/common/SectionTitle';
import {patientProfile} from '../../data/mockData';
import {useAuth} from '../../navigation/AuthContext';
import {colors, radius, spacing, typography} from '../../theme';

const ProfileSettingsScreen: React.FC = () => {
  const {logout} = useAuth();
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <ScreenContainer>
      <AppHeader title="Profil & Setări" />

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Icon color={colors.primary} name="person-outline" size={28} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{patientProfile.fullName}</Text>
          <Text style={styles.meta}>{patientProfile.email}</Text>
          <Text style={styles.meta}>{patientProfile.phone}</Text>
        </View>
      </View>

      <SectionTitle title="Notificări" />
      <View style={styles.list}>
        <SettingRow
          iconName="notifications-outline"
          label="Reminder notificări"
          onSwitchChange={setRemindersEnabled}
          switchValue={remindersEnabled}
          withSwitch
        />
        <SettingRow
          iconName="volume-high-outline"
          label="Sunet notificări"
          onSwitchChange={setSoundEnabled}
          switchValue={soundEnabled}
          withSwitch
        />
      </View>

      <SectionTitle title="Preferințe" />
      <View style={styles.list}>
        <SettingRow
          iconName="language-outline"
          label="Limbă"
          onPress={() => console.log('Mock language picker')}
          value="Română"
        />
        <SettingRow
          iconName="color-palette-outline"
          label="Temă"
          onPress={() => console.log('Mock theme selector')}
          value="Medical Light"
        />
      </View>

      <PrimaryButton onPress={logout} style={styles.logoutButton} title="Delogare" />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    padding: spacing.md,
    marginBottom: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    color: colors.textPrimary,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semiBold,
  },
  meta: {
    marginTop: spacing.xxs,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
  list: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  logoutButton: {
    marginTop: spacing.md,
  },
});

export default ProfileSettingsScreen;
