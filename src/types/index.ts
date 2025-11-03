// src/types/index.ts

// --- EXISTING TYPES ---
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

// --- NEW TYPES ---

export interface UserProfile {
  id: string;
  name: string;
  jobTitle: string;
  primaryEmail: string;
  alternateEmail?: string;
  company: string;
  linkedinUrl?: string;
  careerGoals?: string;
  avatarInitials: string;
}

export type TaskStatus = 'active' | 'overdue' | 'completed';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  timeToComplete: string;
  signedOn?: string; // Optional, only for completed tasks
  action: {
    label: string;
  };
  secondaryAction?: {
    label: string;
    url: string;
  };
}

export type FAQCategory = 'Coaching' | 'Mentorship';

export interface FAQItem {
  id: string;
  question: string;
  answer: string | string[]; // Answer can be a single paragraph or a list
  category: FAQCategory;
}

export type ResourceType = 'article' | 'video' | 'worksheet';

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  description: string;
  thumbnailUrl: string;
  url: string;
}