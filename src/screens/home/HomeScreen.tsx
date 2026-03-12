import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ScreenContainer from '../../components/common/ScreenContainer';
import SectionTitle from '../../components/common/SectionTitle';
import MedicationCard from '../../components/cards/MedicationCard';
import QuickActionCard from '../../components/cards/QuickActionCard';
import ReminderCard from '../../components/cards/ReminderCard';
import InfoCard from '../../components/cards/InfoCard';
import {medications, missedDoses, patientProfile, todayReminders} from '../../data/mockData';
import {colors, radius, shadows, spacing, typography} from '../../theme';
import {RootNavigationProp} from '../../types/navigation';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const nextReminder = useMemo(
    () => todayReminders.find(item => item.status === 'Programat'),
    [],
  );

  const progressValue = useMemo(() => {
    const completed = todayReminders.filter(item => item.status === 'Administrat').length;
    const total = todayReminders.length;
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  }, []);

  return (
    <ScreenContainer>
      <Text style={styles.greeting}>Bun venit, {patientProfile.fullName.split(' ')[0]}!</Text>
      <Text style={styles.subtitle}>Ai {todayReminders.length} alerte active pentru astăzi.</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Rezumatul zilei</Text>
        <Text style={styles.summaryText}>
          {todayReminders.filter(item => item.status === 'Administrat').length} doze
          confirmate din {todayReminders.length}
        </Text>
        <View style={styles.progressBarWrap}>
          <View style={[styles.progressBarFill, {width: `${progressValue}%`}]} />
        </View>
        <Text style={styles.progressLabel}>{progressValue}% completat</Text>
      </View>

      <SectionTitle title="Acțiuni rapide" />
      <View style={styles.quickActionsRow}>
        <QuickActionCard
          iconName="add-circle-outline"
          onPress={() => navigation.navigate('AddMedication')}
          title="Adaugă medicament"
        />
        <QuickActionCard
          iconName="scan-outline"
          onPress={() => navigation.navigate('ScanMedication')}
          title="Scanează cutia"
        />
        <QuickActionCard
          iconName="time-outline"
          onPress={() => navigation.navigate('MainTabs', {screen: 'Istoric'})}
          title="Istoric"
        />
      </View>

      <SectionTitle title="Următorul reminder" />
      {nextReminder ? (
        <ReminderCard
          onConfirm={() => navigation.navigate('Reminder', {reminderId: nextReminder.id})}
          onSnooze={() => console.log('Mock snooze reminder')}
          reminder={nextReminder}
        />
      ) : (
        <InfoCard
          message="Nu există remindere rămase pentru astăzi."
          title="Totul este la zi"
          variant="success"
        />
      )}

      <SectionTitle actionLabel="Vezi toate" onActionPress={() => navigation.navigate('MainTabs', {screen: 'Medicamente'})} title="Medicamente pentru azi" />
      {medications.map(item => (
        <MedicationCard
          key={item.id}
          medication={item}
          onPress={() => navigation.navigate('MedicationDetails', {medicationId: item.id})}
        />
      ))}

      <SectionTitle title="Alerte / doze ratate" />
      {missedDoses.length === 0 ? (
        <InfoCard
          message="Nu există alerte de doză ratată."
          title="Nicio alertă activă"
          variant="success"
        />
      ) : (
        missedDoses.map(alert => (
          <InfoCard
            key={alert.id}
            message={`${alert.message} (ora ${alert.scheduledTime})`}
            title={alert.medicationName}
            variant="warning"
          />
        ))
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  greeting: {
    color: colors.textPrimary,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
  },
  subtitle: {
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
  summaryCard: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
    marginBottom: spacing.lg,
    ...shadows.card,
  },
  summaryTitle: {
    color: colors.textPrimary,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semiBold,
  },
  summaryText: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
  progressBarWrap: {
    marginTop: spacing.md,
    height: 8,
    borderRadius: radius.pill,
    backgroundColor: '#D8E5F0',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: radius.pill,
    backgroundColor: colors.success,
  },
  progressLabel: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.size.xs,
  },
  quickActionsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
});

export default HomeScreen;
