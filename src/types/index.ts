// src/types/index.ts
export interface Participant {
  id: string;
  name: string;
  initials: string;
}

export type SessionStatus = 'Completed' | 'Scheduled' | 'Pending';

export interface Session {
  id: string;
  name: string;
  datetime: string;
  duration: string;
  coach: string;
  participants: Participant[];
  status: SessionStatus;
  isRecurring?: boolean;
}

export interface Cohort {
  id: string;
  name: string;
  participantCount: number;
  sessionsScheduled: number;
  pendingCompletion: number;
  nextSessionDate: string;
  participants: Participant[];
  sessions: Session[];
}