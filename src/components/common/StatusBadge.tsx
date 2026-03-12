import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radius, spacing, typography} from '../../theme';
import {HistoryStatus, ReminderStatus} from '../../types/models';

type BadgeStatus = HistoryStatus | ReminderStatus | 'Activ';

interface StatusBadgeProps {
  status: BadgeStatus;
}

const badgeStyles: Record<
  BadgeStatus,
  {backgroundColor: string; textColor: string}
> = {
  Administrat: {backgroundColor: '#E6F7EF', textColor: colors.success},
  Programat: {backgroundColor: '#E8F4FF', textColor: colors.info},
  'Omit': {backgroundColor: '#FDEEEE', textColor: colors.danger},
  Ratat: {backgroundColor: '#FDEEEE', textColor: colors.danger},
  Amânat: {backgroundColor: '#FFF3E4', textColor: colors.warning},
  Activ: {backgroundColor: '#E6F7EF', textColor: colors.success},
};

const StatusBadge: React.FC<StatusBadgeProps> = ({status}) => {
  return (
    <View style={[styles.container, {backgroundColor: badgeStyles[status].backgroundColor}]}>
      <Text style={[styles.label, {color: badgeStyles[status].textColor}]}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: typography.size.xs,
    fontWeight: typography.weight.semiBold,
  },
});

export default StatusBadge;
