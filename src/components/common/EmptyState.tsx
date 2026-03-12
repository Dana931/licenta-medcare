import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, spacing, typography} from '../../theme';

interface EmptyStateProps {
  title: string;
  subtitle?: string;
  iconName?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  subtitle = 'Momentan nu există date disponibile.',
  iconName = 'document-text-outline',
}) => {
  return (
    <View style={styles.container}>
      <Icon color={colors.textMuted} name={iconName} size={40} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl,
    gap: spacing.sm,
  },
  title: {
    fontSize: typography.size.lg,
    color: colors.textPrimary,
    fontWeight: typography.weight.semiBold,
  },
  subtitle: {
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: typography.size.sm,
    maxWidth: 260,
  },
});

export default EmptyState;
