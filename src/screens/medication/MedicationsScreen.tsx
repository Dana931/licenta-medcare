import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import AppInput from '../../components/common/AppInput';
import SectionTitle from '../../components/common/SectionTitle';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import MedicationCard from '../../components/cards/MedicationCard';
import EmptyState from '../../components/common/EmptyState';
import {medications} from '../../data/mockData';
import {colors, spacing, typography} from '../../theme';
import {RootNavigationProp} from '../../types/navigation';

const MedicationsScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [search, setSearch] = useState('');

  const filtered = medications.filter(item =>
    item.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <ScreenContainer>
      <AppHeader title="Medicamente" />
      <Text style={styles.subtitle}>Gestionați schema de tratament și detaliile fiecărui medicament.</Text>

      <AppInput
        onChangeText={setSearch}
        placeholder="Caută medicament..."
        value={search}
      />

      <View style={styles.actions}>
        <PrimaryButton
          iconName="add-outline"
          onPress={() => navigation.navigate('AddMedication')}
          style={styles.actionButton}
          title="Adaugă"
        />
        <SecondaryButton
          onPress={() => navigation.navigate('ScanMedication')}
          style={styles.actionButton}
          title="Scanează"
        />
      </View>

      <SectionTitle title="Lista curentă" />
      {filtered.length === 0 ? (
        <EmptyState
          iconName="medkit-outline"
          subtitle="Nu există medicamente care să corespundă căutării."
          title="Niciun rezultat"
        />
      ) : (
        filtered.map(item => (
          <MedicationCard
            key={item.id}
            medication={item}
            onPress={() => navigation.navigate('MedicationDetails', {medicationId: item.id})}
          />
        ))
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
    marginBottom: spacing.md,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginVertical: spacing.md,
  },
  actionButton: {
    flex: 1,
  },
});

export default MedicationsScreen;
