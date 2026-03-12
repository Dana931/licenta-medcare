import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import AppInput from '../../components/common/AppInput';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import {useAuth} from '../../navigation/AuthContext';
import {AuthStackParamList} from '../../types/navigation';
import {colors, spacing, typography} from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLogin = () => {
    if (!email || !password) {
      setError('Introduceți email-ul și parola.');
      return;
    }
    setError('');
    console.log('Mock login:', {email});
    login();
  };

  return (
    <ScreenContainer contentContainerStyle={styles.container}>
      <AppHeader onBack={() => navigation.goBack()} title="Autentificare" />

      <View style={styles.form}>
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
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <PrimaryButton onPress={onLogin} style={styles.primaryButton} title="Autentificare" />
      <SecondaryButton
        onPress={() => navigation.navigate('Register')}
        style={styles.secondary}
        title="Creează cont"
      />
      <Text onPress={() => console.log('Mock forgot password')} style={styles.forgot}>
        Ai uitat parola?
      </Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  form: {
    gap: spacing.md,
  },
  error: {
    marginTop: spacing.sm,
    color: colors.danger,
    fontSize: typography.size.sm,
  },
  primaryButton: {
    marginTop: spacing.lg,
  },
  secondary: {
    marginTop: spacing.sm,
  },
  forgot: {
    marginTop: spacing.md,
    textAlign: 'center',
    color: colors.primary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
});

export default LoginScreen;
