import React from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, radius, spacing, typography} from '../../theme';

interface SettingRowProps {
  label: string;
  value?: string;
  iconName?: string;
  withSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  onPress?: () => void;
}

const SettingRow: React.FC<SettingRowProps> = ({
  label,
  value,
  iconName = 'settings-outline',
  withSwitch = false,
  switchValue = false,
  onSwitchChange,
  onPress,
}) => {
  const content = (
    <View style={styles.row}>
      <View style={styles.left}>
        <Icon color={colors.primary} name={iconName} size={18} />
        <Text style={styles.label}>{label}</Text>
      </View>

      {withSwitch ? (
        <Switch
          onValueChange={onSwitchChange}
          thumbColor={colors.surface}
          trackColor={{false: '#C8D6E4', true: colors.primary}}
          value={switchValue}
        />
      ) : (
        <View style={styles.right}>
          {value ? <Text style={styles.value}>{value}</Text> : null}
          <Icon color={colors.textMuted} name="chevron-forward" size={18} />
        </View>
      )}
    </View>
  );

  if (!onPress || withSwitch) {
    return <View style={styles.container}>{content}</View>;
  }

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.container}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flexShrink: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  label: {
    color: colors.textPrimary,
    fontSize: typography.size.md,
  },
  value: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
});

export default SettingRow;
