import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, radius, shadows, spacing, typography} from '../../theme';
import {Medication} from '../../types/models';
import StatusBadge from '../common/StatusBadge';

interface MedicationCardProps {
  medication: Medication;
  onPress?: () => void;
}

const MedicationCard: React.FC<MedicationCardProps> = ({medication, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={!onPress}
      onPress={onPress}
      style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.titleWrap}>
          <Text style={styles.name}>{medication.name}</Text>
          <Text style={styles.subtitle}>
            {medication.dosage} • {medication.type}
          </Text>
        </View>
        <StatusBadge status={medication.remindersEnabled ? 'Activ' : 'Amânat'} />
      </View>

      <View style={styles.infoRow}>
        <Icon color={colors.textSecondary} name="repeat-outline" size={16} />
        <Text style={styles.infoText}>{medication.frequency}</Text>
      </View>

      <View style={styles.infoRow}>
        <Icon color={colors.textSecondary} name="time-outline" size={16} />
        <Text style={styles.infoText}>{medication.times.join(' • ')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.card,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  titleWrap: {
    flex: 1,
  },
  name: {
    color: colors.textPrimary,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semiBold,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
    marginTop: spacing.xxs,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  infoText: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
});

export default MedicationCard;
