import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../../components/common/ScreenContainer';
import AppHeader from '../../components/common/AppHeader';
import AppInput from '../../components/common/AppInput';
import FormField from '../../components/common/FormField';
import ChipSelector from '../../components/common/ChipSelector';
import TimePill from '../../components/common/TimePill';
import PrimaryButton from '../../components/common/PrimaryButton';
import {commonTimeOptions, weekDayOptions} from '../../constants/labels';
import {colors, radius, spacing, typography} from '../../theme';
import {RootStackParamList} from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ScheduleMedication'>;

const ScheduleMedicationScreen: React.FC<Props> = ({navigation}) => {
  const [selectedTimes, setSelectedTimes] = useState<string[]>(['08:00', '20:00']);
  const [startDate, setStartDate] = useState('2026-03-12');
  const [endDate, setEndDate] = useState('2026-06-12');
  const [repeatDays, setRepeatDays] = useState<string[]>([
    'Luni',
    'Marți',
    'Miercuri',
    'Joi',
    'Vineri',
  ]);
  const [remindersEnabled, setRemindersEnabled] = useState(true);

  const toggleTime = (time: string) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter(item => item !== time));
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  const onSaveSchedule = () => {
    console.log('Mock save schedule:', {
      selectedTimes,
      startDate,
      endDate,
      repeatDays,
      remindersEnabled,
    });
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <AppHeader onBack={() => navigation.goBack()} title="Programare administrare" />

      <FormField label="Alege orele zilnice">
        <View style={styles.timeWrap}>
          {commonTimeOptions.map(time => (
            <TimePill
              key={time}
              onPress={() => toggleTime(time)}
              selected={selectedTimes.includes(time)}
              time={time}
            />
          ))}
        </View>
      </FormField>

      <AppInput
        helperText="Format mock: YYYY-MM-DD"
        label="Dată început"
        onChangeText={setStartDate}
        value={startDate}
      />
      <AppInput
        helperText="Format mock: YYYY-MM-DD"
        label="Dată sfârșit"
        onChangeText={setEndDate}
        value={endDate}
      />

      <FormField label="Zile de repetare">
        <ChipSelector
          multiSelect
          onChange={setRepeatDays}
          options={weekDayOptions}
          selected={repeatDays}
        />
      </FormField>

      <View style={styles.toggleCard}>
        <View>
          <Text style={styles.toggleTitle}>Reminder activ</Text>
          <Text style={styles.toggleSubtitle}>Afișează notificări pentru dozele programate</Text>
        </View>
        <Switch
          onValueChange={setRemindersEnabled}
          thumbColor={colors.surface}
          trackColor={{false: '#C8D6E4', true: colors.primary}}
          value={remindersEnabled}
        />
      </View>

      <PrimaryButton onPress={onSaveSchedule} style={styles.saveButton} title="Salvează programul" />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  timeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  toggleCard: {
    marginTop: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    padding: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
  },
  toggleTitle: {
    color: colors.textPrimary,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semiBold,
  },
  toggleSubtitle: {
    marginTop: spacing.xxs,
    color: colors.textSecondary,
    fontSize: typography.size.xs,
  },
  saveButton: {
    marginTop: spacing.xl,
  },
});

export default ScheduleMedicationScreen;
