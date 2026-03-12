import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../../components/common/ScreenContainer';
import PrimaryButton from '../../components/common/PrimaryButton';
import AppInput from '../../components/common/AppInput';
import {colors, radius, spacing, typography} from '../../theme';
import {RootStackParamList} from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ConfirmIntake'>;

const ConfirmIntakeScreen: React.FC<Props> = ({navigation, route}) => {
  const {medicationName, confirmedAt} = route.params;
  const [notes, setNotes] = useState('');

  return (
    <ScreenContainer contentContainerStyle={styles.content}>
      <View style={styles.iconWrap}>
        <Icon color={colors.success} name="checkmark-circle" size={68} />
      </View>

      <Text style={styles.title}>Administrare confirmată</Text>
      <Text style={styles.subtitle}>
        Medicamentul {medicationName} a fost confirmat la ora {confirmedAt}.
      </Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Status: Administrat</Text>
      </View>

      <AppInput
        helperText="Opțional: adăugați un comentariu pentru jurnal."
        label="Notițe"
        multiline
        numberOfLines={4}
        onChangeText={setNotes}
        placeholder="Ex: M-am simțit bine după administrare."
        style={styles.notesInput}
        textAlignVertical="top"
        value={notes}
      />

      <PrimaryButton
        onPress={() => navigation.navigate('MainTabs', {screen: 'Acasa'})}
        style={styles.button}
        title="Înapoi la Acasă"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  iconWrap: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    textAlign: 'center',
    color: colors.textPrimary,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
  },
  subtitle: {
    marginTop: spacing.sm,
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: typography.size.md,
    lineHeight: 22,
  },
  badge: {
    marginTop: spacing.lg,
    alignSelf: 'center',
    borderRadius: radius.pill,
    backgroundColor: '#E6F7EF',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  badgeText: {
    color: colors.success,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semiBold,
  },
  notesInput: {
    marginTop: spacing.xl,
    minHeight: 110,
    paddingTop: spacing.sm,
  },
  button: {
    marginTop: spacing.xl,
  },
});

export default ConfirmIntakeScreen;
