import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import EmptyState from '../../components/common/EmptyState';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import SectionTitle from '../../components/common/SectionTitle';
import StatusBadge from '../../components/common/StatusBadge';
import TimePill from '../../components/common/TimePill';
import {medications, medicationSchedules, treatmentHistory, todayReminders} from '../../data/mockData';
import {colors, radius, spacing, typography} from '../../theme';
import {RootStackParamList} from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'MedicationDetails'>;

const MedicationDetailsScreen: React.FC<Props> = ({navigation, route}) => {
  const {medicationId} = route.params;

  const medication = useMemo(
    () => medications.find(item => item.id === medicationId),
    [medicationId],
  );

  const schedule = medicationSchedules.find(item => item.medicationId === medicationId);
  const recent = treatmentHistory
    .filter(item => item.medicationId === medicationId)
    .slice(0, 3);
  const reminderState = todayReminders.find(item => item.medicationId === medicationId);

  if (!medication) {
    return (
      <ScreenContainer>
        <AppHeader onBack={() => navigation.goBack()} title="Detalii medicament" />
        <EmptyState
          subtitle="Medicamentul selectat nu a fost găsit în datele mock."
          title="Detalii indisponibile"
        />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <AppHeader onBack={() => navigation.goBack()} title="Detalii medicament" />

      <View style={styles.summaryCard}>
        <View style={styles.rowBetween}>
          <View style={styles.titleBlock}>
            <Text style={styles.name}>{medication.name}</Text>
            <Text style={styles.subtitle}>
              {medication.dosage} • {medication.type}
            </Text>
          </View>
          <StatusBadge status={reminderState?.status ?? 'Programat'} />
        </View>

        <Text style={styles.label}>Rezumat program:</Text>
        <Text style={styles.value}>
          {medication.frequency} | {medication.times.join(' • ')}
        </Text>

        <Text style={styles.label}>Note:</Text>
        <Text style={styles.value}>{medication.notes || 'Fără note suplimentare.'}</Text>
      </View>

      <SectionTitle title="Ore următoare" />
      <View style={styles.timeWrap}>
        {medication.times.map(item => (
          <TimePill key={item} time={item} />
        ))}
      </View>

      {schedule ? (
        <Text style={styles.scheduleText}>
          Perioadă: {schedule.startDate} - {schedule.endDate}
        </Text>
      ) : null}

      <View style={styles.actionRow}>
        <PrimaryButton
          onPress={() => navigation.navigate('AddMedication')}
          style={styles.actionButton}
          title="Editează"
        />
        <SecondaryButton
          onPress={() => console.log('Mock delete medication')}
          style={styles.actionButton}
          title="Șterge"
        />
      </View>

      <SectionTitle title="Istoric recent" />
      {recent.length === 0 ? (
        <EmptyState title="Nicio înregistrare recentă" />
      ) : (
        recent.map(item => (
          <View key={item.id} style={styles.historyCard}>
            <View style={styles.rowBetween}>
              <Text style={styles.historyDate}>
                {item.date} • {item.time}
              </Text>
              <StatusBadge status={item.status} />
            </View>
            <Text style={styles.historyDetails}>{item.details}</Text>
          </View>
        ))
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  summaryCard: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
  },
  titleBlock: {
    flex: 1,
  },
  name: {
    color: colors.textPrimary,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
    marginTop: spacing.xxs,
  },
  label: {
    marginTop: spacing.md,
    color: colors.textSecondary,
    fontSize: typography.size.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    marginTop: spacing.xs,
    color: colors.textPrimary,
    fontSize: typography.size.md,
  },
  timeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  scheduleText: {
    marginTop: spacing.md,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
  actionRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginVertical: spacing.lg,
  },
  actionButton: {
    flex: 1,
  },
  historyCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  historyDate: {
    color: colors.textPrimary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
  historyDetails: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
});

export default MedicationDetailsScreen;
