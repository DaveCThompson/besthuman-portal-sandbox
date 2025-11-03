// src/data/mockData.ts
import type { Session, Cohort, Participant } from '../types';

const participants: Participant[] = [
  { id: 'p1', name: 'Taimoor Khan', initials: 'TK' },
  { id: 'p2', name: 'David Thompson', initials: 'DT' },
  { id: 'p3', name: 'Khaled Yousef', initials: 'KY' },
];

export const upcomingSessions: Session[] = [
  {
    id: 's1',
    name: 'First Session',
    datetime: 'Tue Nov 28 2025 - 12:30pm',
    duration: '30 min session',
    coach: 'David Thompson',
    participants: [participants[2]],
    status: 'Completed',
  },
  {
    id: 's2',
    name: 'First Session',
    datetime: 'Tue Nov 28 2025 - 12:30pm',
    duration: '30 min session',
    coach: 'David Thompson',
    participants: [participants[2]],
    status: 'Completed',
  },
  {
    id: 's3',
    name: 'First Session',
    datetime: 'Tue Nov 28 2025 - 12:30pm',
    duration: '30 min session',
    coach: 'David Thompson',
    participants: [participants[2]],
    status: 'Completed',
  },
];

export const passedSessions: Session[] = [
    {
    id: 's4',
    name: 'First Session',
    datetime: 'Tue Nov 28 2025 - 12:30pm',
    duration: '30 min session',
    coach: 'David Thompson',
    participants: [participants[2]],
    status: 'Completed',
  },
  {
    id: 's5',
    name: 'First Session',
    datetime: 'Tue Nov 28 2025 - 12:30pm',
    duration: '30 min session',
    coach: 'David Thompson',
    participants: [participants[2]],
    status: 'Completed',
  },
];

export const cohorts: Cohort[] = [
  {
    id: 'c1',
    name: 'David Thompson-Taimoor Khan',
    participantCount: 1,
    sessionsScheduled: 2,
    pendingCompletion: 1,
    nextSessionDate: 'Mon, Mar 10, 2025 - 12:00 PM',
    participants: [participants[0]],
    sessions: [
      {
        id: 'cs1',
        name: 'First session',
        datetime: 'Fri, Dec 13, 2024 - 11:15 AM',
        duration: '(1 hour)',
        coach: 'David Thompson',
        participants: [participants[0]],
        status: 'Completed',
        isRecurring: false,
      },
      {
        id: 'cs2',
        name: 'Recurring session',
        datetime: 'Fri, Dec 13, 2024 - 11:15 AM',
        duration: '(1 hour)',
        coach: 'David Thompson',
        participants: [participants[0]],
        status: 'Scheduled',
        isRecurring: true,
      },
    ],
  },
  {
    id: 'c2',
    name: 'Another Cohort Example',
    participantCount: 1,
    sessionsScheduled: 2,
    pendingCompletion: 1,
    nextSessionDate: 'Mon, Mar 10, 2025 - 12:00 PM',
    participants: [participants[0]],
    sessions: [
      {
        id: 'cs3',
        name: 'First session',
        datetime: 'Fri, Dec 13, 2024 - 11:15 AM',
        duration: '(1 hour)',
        coach: 'David Thompson',
        participants: [participants[0]],
        status: 'Completed',
        isRecurring: false,
      },
      {
        id: 'cs4',
        name: 'Recurring session',
        datetime: 'Fri, Dec 13, 2024 - 11:15 AM',
        duration: '(1 hour)',
        coach: 'David Thompson',
        participants: [participants[0]],
        status: 'Scheduled',
        isRecurring: true,
      },
    ],
  },
];