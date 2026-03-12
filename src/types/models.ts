export type MedicationType =
  | 'Comprimat'
  | 'Capsulă'
  | 'Sirop'
  | 'Injecție'
  | 'Picături';

export type FrequencyOption =
  | 'O dată pe zi'
  | 'De 2 ori pe zi'
  | 'De 3 ori pe zi'
  | 'La nevoie';

export type ReminderStatus = 'Programat' | 'Administrat' | 'Ratat' | 'Amânat';

export type HistoryStatus = 'Administrat' | 'Omit' | 'Ratat' | 'Amânat';

export interface PatientProfile {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  age: number;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: FrequencyOption;
  type: MedicationType;
  notes?: string;
  times: string[];
  remindersEnabled: boolean;
}

export interface Reminder {
  id: string;
  medicationId: string;
  medicationName: string;
  dosage: string;
  scheduledTime: string;
  status: ReminderStatus;
}

export interface TreatmentHistoryItem {
  id: string;
  medicationId: string;
  medicationName: string;
  dosage: string;
  date: string;
  time: string;
  status: HistoryStatus;
  details?: string;
}

export interface MedicationSchedule {
  medicationId: string;
  startDate: string;
  endDate: string;
  repeatDays: string[];
  times: string[];
}

export interface MissedDoseAlert {
  id: string;
  medicationName: string;
  scheduledTime: string;
  message: string;
}
