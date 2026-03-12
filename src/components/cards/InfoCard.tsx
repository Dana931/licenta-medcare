import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, radius, spacing, typography} from '../../theme';

interface InfoCardProps {
  title: string;
  message: string;
  variant?: 'info' | 'warning' | 'success';
}

const variantStyles = {
  info: {
    backgroundColor: '#EAF5FF',
    borderColor: '#CFE6FA',
    iconColor: colors.info,
    iconName: 'information-circle-outline',
  },
  warning: {
    backgroundColor: '#FFF3E4',
    borderColor: '#FAD9AF',
    iconColor: colors.warning,
    iconName: 'warning-outline',
  },
  success: {
    backgroundColor: '#E6F7EF',
    borderColor: '#BFE7D2',
    iconColor: colors.success,
    iconName: 'checkmark-circle-outline',
  },
};

const InfoCard: React.FC<InfoCardProps> = ({title, message, variant = 'info'}) => {
  const preset = variantStyles[variant];

  return (
    <View style={[styles.card, {backgroundColor: preset.backgroundColor, borderColor: preset.borderColor}]}>
      <Icon color={preset.iconColor} name={preset.iconName} size={22} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  content: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semiBold,
  },
  message: {
    marginTop: spacing.xxs,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
    lineHeight: 20,
  },
});

export default InfoCard;
