import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import AppInput from '../../components/common/AppInput';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import {AuthStackParamList} from '../../types/navigation';
import {colors, spacing, typography} from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const helperMessage = useMemo(() => {
    if (error) {
      return error;
    }
    return 'Completați datele pentru a crea contul pacientului.';
  }, [error]);

  const onRegister = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Completați toate câmpurile obligatorii.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Parola și confirmarea parolei nu coincid.');
      return;
    }

    setError('');
    console.log('Mock register:', {fullName, email, phone});
    navigation.navigate('Login');
  };

  return (
    <ScreenContainer>
      <AppHeader onBack={() => navigation.goBack()} title="Înregistrare" />

      <View style={styles.form}>
        <AppInput
          label="Nume complet"
          onChangeText={setFullName}
          placeholder="Ex: Maria Popescu"
          value={fullName}
        />
        <AppInput
          autoCapitalize="none"
          keyboardType="email-address"
          label="Email"
          onChangeText={setEmail}
          placeholder="Ex: nume@email.com"
          value={email}
        />
        <AppInput
          label="Parolă"
          onChangeText={setPassword}
          placeholder="Introduceți parola"
          secureTextEntry
          value={password}
        />
        <AppInput
          label="Confirmare parolă"
          onChangeText={setConfirmPassword}
          placeholder="Confirmați parola"
          secureTextEntry
          value={confirmPassword}
        />
        <AppInput
          keyboardType="phone-pad"
          label="Telefon (opțional)"
          onChangeText={setPhone}
          placeholder="Ex: +40 7xx xxx xxx"
          value={phone}
        />
      </View>

      <Text style={[styles.helper, error ? styles.error : null]}>{helperMessage}</Text>

      <PrimaryButton onPress={onRegister} style={styles.primaryButton} title="Înregistrare" />
      <SecondaryButton
        onPress={() => navigation.navigate('Login')}
        title="Ai deja cont? Autentificare"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: spacing.md,
  },
  helper: {
    marginVertical: spacing.md,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
  error: {
    color: colors.danger,
  },
  primaryButton: {
    marginBottom: spacing.sm,
  },
});

export default RegisterScreen;
