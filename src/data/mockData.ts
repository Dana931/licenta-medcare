import {
  Medication,
  MedicationSchedule,
  MissedDoseAlert,
  PatientProfile,
  Reminder,
  TreatmentHistoryItem,
} from '../types/models';
import {getTodayIsoDate} from '../utils/date';

const today = getTodayIsoDate();

export const patientProfile: PatientProfile = {
  id: 'p1',
  fullName: 'Maria Popescu',
  email: 'maria.popescu@email.com',
  phone: '+40 721 000 111',
  age: 67,
};

export const medications: Medication[] = [
  {
    id: 'm1',
    name: 'Metformin',
    dosage: '500 mg',
    frequency: 'De 2 ori pe zi',
    type: 'Comprimat',
    notes: 'Se administrează după masă.',
    times: ['08:00', '20:00'],
    remindersEnabled: true,
  },
  {
    id: 'm2',
    name: 'Amlodipină',
    dosage: '5 mg',
    frequency: 'O dată pe zi',
    type: 'Comprimat',
    notes: 'Monitorizare tensiune arterială.',
    times: ['09:00'],
    remindersEnabled: true,
  },
  {
    id: 'm3',
    name: 'Vitamina D3',
    dosage: '2000 UI',
    frequency: 'O dată pe zi',
    type: 'Capsulă',
    notes: 'Administrare dimineața.',
    times: ['10:00'],
    remindersEnabled: false,
  },
];

export const todayReminders: Reminder[] = [
  {
    id: 'r1',
    medicationId: 'm1',
    medicationName: 'Metformin',
    dosage: '500 mg',
    scheduledTime: '08:00',
    status: 'Administrat',
  },
  {
    id: 'r2',
    medicationId: 'm2',
    medicationName: 'Amlodipină',
    dosage: '5 mg',
    scheduledTime: '09:00',
    status: 'Programat',
  },
  {
    id: 'r3',
    medicationId: 'm1',
    medicationName: 'Metformin',
    dosage: '500 mg',
    scheduledTime: '20:00',
    status: 'Programat',
  },
];

export const treatmentHistory: TreatmentHistoryItem[] = [
  {
    id: 'h1',
    medicationId: 'm1',
    medicationName: 'Metformin',
    dosage: '500 mg',
    date: today,
    time: '08:05',
    status: 'Administrat',
    details: 'Administrat conform programului.',
  },
  {
    id: 'h2',
    medicationId: 'm2',
    medicationName: 'Amlodipină',
    dosage: '5 mg',
    date: today,
    time: '09:30',
    status: 'Amânat',
    details: 'Amânat cu 30 minute.',
  },
  {
    id: 'h3',
    medicationId: 'm3',
    medicationName: 'Vitamina D3',
    dosage: '2000 UI',
    date: '2026-03-11',
    time: '10:10',
    status: 'Ratat',
    details: 'Nu a fost confirmată administrarea.',
  },
  {
    id: 'h4',
    medicationId: 'm2',
    medicationName: 'Amlodipină',
    dosage: '5 mg',
    date: '2026-03-10',
    time: '09:00',
    status: 'Omit',
    details: 'Doză omisă de pacient.',
  },
];

export const medicationSchedules: MedicationSchedule[] = [
  {
    medicationId: 'm1',
    startDate: '2026-03-01',
    endDate: '2026-06-01',
    repeatDays: ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'],
    times: ['08:00', '20:00'],
  },
  {
    medicationId: 'm2',
    startDate: '2026-02-15',
    endDate: '2026-05-15',
    repeatDays: ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'],
    times: ['09:00'],
  },
];

export const missedDoses: MissedDoseAlert[] = [
  {
    id: 'miss1',
    medicationName: 'Vitamina D3',
    scheduledTime: '10:00',
    message: 'Doza de Vitamina D3 nu a fost confirmată ieri.',
  },
];
