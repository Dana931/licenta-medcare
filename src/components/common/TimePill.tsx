import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, radius, spacing, typography} from '../../theme';

interface TimePillProps {
  time: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

const TimePill: React.FC<TimePillProps> = ({time, selected = false, onPress, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={!onPress}
      onPress={onPress}
      style={[styles.container, selected && styles.active, style]}>
      <Icon color={selected ? colors.primaryDark : colors.textSecondary} name="time-outline" size={15} />
      <Text style={[styles.label, selected && styles.activeLabel]}>{time}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  active: {
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
  },
  label: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
  activeLabel: {
    color: colors.primaryDark,
  },
});

export default TimePill;
