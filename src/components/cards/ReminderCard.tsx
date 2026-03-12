import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radius, shadows, spacing, typography} from '../../theme';
import {Reminder} from '../../types/models';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import StatusBadge from '../common/StatusBadge';

interface ReminderCardProps {
  reminder: Reminder;
  onConfirm?: () => void;
  onSnooze?: () => void;
}

const ReminderCard: React.FC<ReminderCardProps> = ({reminder, onConfirm, onSnooze}) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>{reminder.medicationName}</Text>
          <Text style={styles.subtitle}>{reminder.dosage}</Text>
        </View>
        <StatusBadge status={reminder.status} />
      </View>

      <Text style={styles.timeLabel}>Ora programată: {reminder.scheduledTime}</Text>

      {onConfirm ? (
        <View style={styles.actions}>
          <PrimaryButton onPress={onConfirm} title="Am luat" />
          <SecondaryButton onPress={onSnooze ?? (() => undefined)} title="Amână" />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
    ...shadows.card,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semiBold,
  },
  subtitle: {
    color: colors.textSecondary,
    marginTop: spacing.xxs,
    fontSize: typography.size.sm,
  },
  timeLabel: {
    color: colors.textPrimary,
    marginTop: spacing.md,
    fontSize: typography.size.md,
    fontWeight: typography.weight.medium,
  },
  actions: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
});

export default ReminderCard;
