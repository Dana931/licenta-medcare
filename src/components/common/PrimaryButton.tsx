import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, radius, shadows, spacing, typography} from '../../theme';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  iconName?: string;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  iconName,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled, style]}>
      {loading ? (
        <ActivityIndicator color={colors.surface} />
      ) : (
        <>
          {iconName ? <Icon color={colors.surface} name={iconName} size={18} /> : null}
          <Text style={styles.label}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.xl,
    ...shadows.card,
  },
  label: {
    color: colors.surface,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semiBold,
  },
  disabled: {
    opacity: 0.55,
  },
});

export default PrimaryButton;
