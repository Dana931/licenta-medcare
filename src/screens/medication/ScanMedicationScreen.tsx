import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import SecondaryButton from '../../components/common/SecondaryButton';
import PrimaryButton from '../../components/common/PrimaryButton';
import InfoCard from '../../components/cards/InfoCard';
import {RootStackParamList} from '../../types/navigation';
import {colors, radius, spacing, typography} from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ScanMedication'>;

const ScanMedicationScreen: React.FC<Props> = ({navigation}) => {
  const mockResult = {
    medicationId: 'm1',
    medicationName: 'Metformin',
    dosage: '500 mg',
    instruction: 'Se administrează după masă.',
  };

  return (
    <ScreenContainer>
      <AppHeader onBack={() => navigation.goBack()} title="Scanare cutie medicament" />

      <View style={styles.cameraPlaceholder}>
        <View style={styles.scanFrame} />
        <Icon color={colors.textMuted} name="camera-outline" size={38} />
        <Text style={styles.cameraText}>Previzualizare cameră (mock)</Text>
      </View>

      <Text style={styles.instructions}>
        Încadrați cutia medicamentului în zona marcată pentru extragerea automată a
        detaliilor.
      </Text>

      <TouchableOpacity onPress={() => console.log('Mock flash toggle')} style={styles.flashButton}>
        <Icon color={colors.primary} name="flash-outline" size={18} />
        <Text style={styles.flashText}>Flash</Text>
      </TouchableOpacity>

      <SecondaryButton
        onPress={() => navigation.navigate('AddMedication')}
        style={styles.manualButton}
        title="Introducere manuală"
      />

      <InfoCard
        message={mockResult.instruction}
        title={`${mockResult.medicationName} • ${mockResult.dosage}`}
        variant="info"
      />

      <PrimaryButton
        onPress={() =>
          navigation.navigate('MedicationDetails', {medicationId: mockResult.medicationId})
        }
        style={styles.confirmButton}
        title="Confirmă rezultatul"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  cameraPlaceholder: {
    minHeight: 300,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#ECF5F9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  scanFrame: {
    position: 'absolute',
    width: 220,
    height: 150,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: radius.lg,
  },
  cameraText: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
  instructions: {
    marginTop: spacing.md,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
    lineHeight: 20,
  },
  flashButton: {
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: colors.surface,
  },
  flashText: {
    color: colors.primary,
    fontWeight: typography.weight.medium,
    fontSize: typography.size.sm,
  },
  manualButton: {
    marginBottom: spacing.md,
  },
  confirmButton: {
    marginTop: spacing.md,
  },
});

export default ScanMedicationScreen;
