import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../../components/common/ScreenContainer';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import {AuthStackParamList} from '../../types/navigation';
import {colors, radius, spacing, typography} from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <ScreenContainer contentContainerStyle={styles.centered} scroll={false}>
      <View style={styles.logoContainer}>
        <Icon color={colors.primary} name="medkit-outline" size={36} />
      </View>

      <Text style={styles.title}>MedCare Reminder</Text>
      <Text style={styles.subtitle}>
        Gestionați tratamentul zilnic cu alerte clare și confirmare rapidă a
        administrării.
      </Text>

      <View style={styles.illustration}>
        <Icon color={colors.primary} name="heart-outline" size={34} />
        <Text style={styles.illustrationText}>Spațiu ilustrație medicală</Text>
      </View>

      <PrimaryButton
        onPress={() => navigation.navigate('Register')}
        style={styles.primaryButton}
        title="Creează cont"
      />
      <SecondaryButton
        onPress={() => navigation.navigate('Login')}
        title="Autentificare"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  centered: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },
  logoContainer: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
  },
  subtitle: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.size.md,
    textAlign: 'center',
    lineHeight: 23,
    maxWidth: 320,
  },
  illustration: {
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
    width: '100%',
    minHeight: 170,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  illustrationText: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
  primaryButton: {
    width: '100%',
    marginBottom: spacing.sm,
  },
});

export default WelcomeScreen;
