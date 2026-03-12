import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {colors, radius, spacing, typography} from '../../theme';

interface AppInputProps extends TextInputProps {
  label?: string;
  helperText?: string;
  errorText?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  helperText,
  errorText,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={colors.textMuted}
        style={[styles.input, Boolean(errorText) && styles.errorInput, style]}
        {...props}
      />
      {errorText ? (
        <Text style={styles.error}>{errorText}</Text>
      ) : helperText ? (
        <Text style={styles.helper}>{helperText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: typography.size.sm,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    fontWeight: typography.weight.medium,
  },
  input: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    color: colors.textPrimary,
    fontSize: typography.size.md,
  },
  errorInput: {
    borderColor: colors.danger,
  },
  helper: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.size.xs,
  },
  error: {
    marginTop: spacing.xs,
    color: colors.danger,
    fontSize: typography.size.xs,
  },
});

export default AppInput;
