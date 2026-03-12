import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import AppInput from '../../components/common/AppInput';
import FormField from '../../components/common/FormField';
import ChipSelector from '../../components/common/ChipSelector';
import PrimaryButton from '../../components/common/PrimaryButton';
import {frequencyOptions, medicationTypeOptions} from '../../constants/labels';
import {RootStackParamList} from '../../types/navigation';
import {spacing} from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'AddMedication'>;

const AddMedicationScreen: React.FC<Props> = ({navigation}) => {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const onSave = () => {
    console.log('Mock save medication:', {name, dosage, frequency, type, notes});
    navigation.navigate('ScheduleMedication');
  };

  return (
    <ScreenContainer>
      <AppHeader onBack={() => navigation.goBack()} title="Adăugare medicament" />

      <AppInput
        label="Nume medicament"
        onChangeText={setName}
        placeholder="Ex: Paracetamol"
        value={name}
      />
      <AppInput
        label="Dozaj"
        onChangeText={setDosage}
        placeholder="Ex: 500 mg"
        value={dosage}
      />

      <FormField label="Frecvență">
        <ChipSelector
          multiSelect={false}
          onChange={setFrequency}
          options={frequencyOptions}
          selected={frequency}
        />
      </FormField>

      <FormField label="Tip medicament">
        <ChipSelector
          multiSelect={false}
          onChange={setType}
          options={medicationTypeOptions}
          selected={type}
        />
      </FormField>

      <AppInput
        label="Note"
        multiline
        numberOfLines={4}
        onChangeText={setNotes}
        placeholder="Observații suplimentare..."
        style={styles.notesInput}
        textAlignVertical="top"
        value={notes}
      />

      <PrimaryButton onPress={onSave} style={styles.saveButton} title="Salvează" />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  notesInput: {
    minHeight: 110,
    paddingTop: spacing.sm,
  },
  saveButton: {
    marginTop: spacing.xl,
  },
});

export default AddMedicationScreen;
