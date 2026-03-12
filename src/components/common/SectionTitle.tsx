import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, spacing, typography} from '../../theme';

interface SectionTitleProps {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title, actionLabel, onActionPress}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? (
        <TouchableOpacity onPress={onActionPress}>
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semiBold,
  },
  action: {
    color: colors.primary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semiBold,
  },
});

export default SectionTitle;
