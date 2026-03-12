import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import AppInput from '../../components/common/AppInput';
import StatusBadge from '../../components/common/StatusBadge';
import EmptyState from '../../components/common/EmptyState';
import {treatmentHistory} from '../../data/mockData';
import {colors, radius, spacing, typography} from '../../theme';

const TreatmentHistoryScreen: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredHistory = useMemo(
    () =>
      treatmentHistory.filter(item =>
        `${item.medicationName} ${item.dosage}`
          .toLowerCase()
          .includes(search.trim().toLowerCase()),
      ),
    [search],
  );

  return (
    <ScreenContainer>
      <AppHeader title="Istoric tratament" />

      <AppInput
        onChangeText={setSearch}
        placeholder="Caută după medicament..."
        value={search}
      />

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => console.log('Mock date filter')}
        style={styles.filterButton}>
        <Icon color={colors.primary} name="calendar-outline" size={18} />
        <Text style={styles.filterText}>Filtru dată (mock)</Text>
      </TouchableOpacity>

      {filteredHistory.length === 0 ? (
        <EmptyState
          iconName="time-outline"
          subtitle="Nu există înregistrări pentru filtrele selectate."
          title="Istoric gol"
        />
      ) : (
        filteredHistory.map(item => (
          <View key={item.id} style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.name}>{item.medicationName}</Text>
              <StatusBadge status={item.status} />
            </View>
            <Text style={styles.dosage}>{item.dosage}</Text>
            <Text style={styles.dateText}>
              {item.date} • {item.time}
            </Text>
            {item.details ? <Text style={styles.details}>{item.details}</Text> : null}
          </View>
        ))
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  filterText: {
    color: colors.primary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
  },
  name: {
    color: colors.textPrimary,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semiBold,
    flex: 1,
  },
  dosage: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
  dateText: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.size.xs,
  },
  details: {
    marginTop: spacing.sm,
    color: colors.textPrimary,
    fontSize: typography.size.sm,
  },
});

export default TreatmentHistoryScreen;
