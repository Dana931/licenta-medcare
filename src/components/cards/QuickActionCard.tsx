import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, radius, shadows, spacing, typography} from '../../theme';

interface QuickActionCardProps {
  title: string;
  iconName: string;
  onPress: () => void;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({title, iconName, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
      <View style={styles.iconWrap}>
        <Icon color={colors.primary} name={iconName} size={20} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 105,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
    justifyContent: 'space-between',
    ...shadows.soft,
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: spacing.sm,
    color: colors.textPrimary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semiBold,
  },
});

export default QuickActionCard;
