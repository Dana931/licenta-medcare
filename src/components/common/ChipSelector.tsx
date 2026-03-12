import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, radius, spacing, typography} from '../../theme';

interface ChipSelectorProps {
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
  multiSelect?: boolean;
}

const ChipSelector: React.FC<ChipSelectorProps> = ({
  options,
  selected,
  onChange,
  multiSelect = true,
}) => {
  const toggleOption = (option: string) => {
    const isActive = selected.includes(option);

    if (multiSelect) {
      if (isActive) {
        onChange(selected.filter(item => item !== option));
      } else {
        onChange([...selected, option]);
      }
      return;
    }

    onChange(isActive ? [] : [option]);
  };

  return (
    <View style={styles.wrap}>
      {options.map(option => {
        const active = selected.includes(option);
        return (
          <TouchableOpacity
            key={option}
            onPress={() => toggleOption(option)}
            style={[styles.chip, active && styles.chipActive]}>
            <Text style={[styles.chipLabel, active && styles.chipLabelActive]}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  chipActive: {
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
  },
  chipLabel: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
  chipLabelActive: {
    color: colors.primaryDark,
  },
});

export default ChipSelector;
