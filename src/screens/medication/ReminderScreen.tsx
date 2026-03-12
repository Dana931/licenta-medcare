import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import StatusBadge from '../../components/common/StatusBadge';
import EmptyState from '../../components/common/EmptyState';
import {todayReminders} from '../../data/mockData';
import {colors, radius, shadows, spacing, typography} from '../../theme';
import {RootStackParamList} from '../../types/navigation';
import {getCurrentTime} from '../../utils/date';

type Props = NativeStackScreenProps<RootStackParamList, 'Reminder'>;

const ReminderScreen: React.FC<Props> = ({navigation, route}) => {
  const reminder = todayReminders.find(item => item.id === route.params.reminderId);

  if (!reminder) {
    return (
      <ScreenContainer>
        <AppHeader onBack={() => navigation.goBack()} title="Reminder" />
        <EmptyState title="Reminder indisponibil" />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <AppHeader onBack={() => navigation.goBack()} title="Reminder administrare" />

      <View style={styles.reminderCard}>
        <Text style={styles.topLabel}>Este timpul pentru doza programată</Text>
        <Text style={styles.medicationName}>{reminder.medicationName}</Text>
        <Text style={styles.dosage}>{reminder.dosage}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Ora programată:</Text>
          <Text style={styles.infoValue}>{reminder.scheduledTime}</Text>
        </View>
        <StatusBadge status={reminder.status} />
      </View>

      <PrimaryButton
        onPress={() =>
          navigation.navigate('ConfirmIntake', {
            medicationName: reminder.medicationName,
            confirmedAt: getCurrentTime(),
          })
        }
        style={styles.primaryAction}
        title="Am luat"
      />

      <View style={styles.secondaryRow}>
        <SecondaryButton
          onPress={() => Alert.alert('Amânat', 'Doza a fost amânată (mock).')}
          style={styles.secondaryButton}
          title="Amână"
        />
        <SecondaryButton
          onPress={() => Alert.alert('Omitere', 'Doza a fost omisă (mock).')}
          style={styles.secondaryButton}
          title="Omite"
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  reminderCard: {
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    ...shadows.card,
  },
  topLabel: {
    color: colors.warning,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.sm,
  },
  medicationName: {
    color: colors.textPrimary,
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
  },
  dosage: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.size.lg,
  },
  infoRow: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoLabel: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
  infoValue: {
    color: colors.textPrimary,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semiBold,
  },
  primaryAction: {
    marginBottom: spacing.sm,
  },
  secondaryRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  secondaryButton: {
    flex: 1,
  },
});

export default ReminderScreen;
