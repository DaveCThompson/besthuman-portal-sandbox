// src/data/mockData.ts
import type { Session, Cohort, Participant, UserProfile, Task, FAQItem, Resource } from '../types';

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
];

export const mockUserProfile: UserProfile = {
  id: 'u1',
  name: 'David Thompson',
  jobTitle: 'UX Architect',
  primaryEmail: 'davecthompson@gmail.com',
  alternateEmail: '',
  company: 'Dave Thompson',
  linkedinUrl: 'https://www.linkedin.com/in/your-profile',
  careerGoals: 'Help others reach new levels of success',
  avatarInitials: 'DT',
};

export const mockTasks: Task[] = [
  {
    id: 't1',
    title: 'Terms and Conditions',
    status: 'completed',
    timeToComplete: 'Takes about 2 mins',
    signedOn: 'Signed on: Tue, Jan 09 2024',
    action: { label: 'Agreement Signed' },
    secondaryAction: { label: 'View Terms and Conditions', url: '#' },
  },
  {
    id: 't2',
    title: 'Pre-Program Survey',
    status: 'active',
    timeToComplete: 'Takes about 10 mins',
    action: { label: 'Start Survey' },
  },
  {
    id: 't3',
    title: 'Onboarding Document Review',
    status: 'overdue',
    timeToComplete: 'Takes about 5 mins',
    action: { label: 'Review Now' },
    secondaryAction: { label: 'View Document', url: '#' },
  },
];

export const mockFaqs: FAQItem[] = [
  // --- MENTORSHIP ---
  {
    id: 'm1',
    category: 'Mentorship',
    question: 'How many sessions are there?',
    answer: 'Up to 2 mentoring sessions per month, 30 minutes each OR up to 1 hour session per month (if mentor and mentee agree on this).',
  },
  {
    id: 'm2',
    category: 'Mentorship',
    question: 'What do you look at when making a match?',
    answer: "Our mentors have 10+ years of experience behind them and our mentees are ambitious women looking to get the guidance they need to grow in their careers or sometimes, simply, just have a personal board of advisors. They range from senior managers to executive leaders, VP’s, serial entrepreneurs and more. We base our matches on areas mentees want to grow in such as goals and skills. Not always will they be in the same role or industry as you, it’s relevance and experience in the topic of guidance we match you on. Rest assured, if the match isn’t a good fit, let us know and we can find another match.",
  },
  {
    id: 'm3',
    category: 'Mentorship',
    question: 'How can I prepare for my sessions?',
    answer: [
      'Check out our resource guides here:',
      'Meet and Greet Guide',
      'Regular Sessions Guide',
      'Meeting Agenda Template',
      'Session Prep Form',
      'Our Process Timeline',
    ],
  },
  {
    id: 'm4',
    category: 'Mentorship',
    question: "What if I'm not clear about what my goals are?",
    answer: "That's okay! Your goals can range from big to small. We recommend taking 5 minutes before your meet & greet to reflect on where you are in your career and some possible goals. Chat about these ideas with your mentor and take 5 minutes post meet & greet to narrow in on which goals resonated with you and which you will work on for the remainder of your mentorship. Remember that these sessions are for both helping you learn from leaders who have been there, done that but also, to help navigate workplace topics that may occur (such as a new conflict or new position).",
  },
  {
    id: 'm5',
    category: 'Mentorship',
    question: 'What happens if session(s) are missed or canceled?',
    answer: 'If a mentee cancels or doesn’t show up, that session is missed and may not be rescheduled. However, if a mentor cancels, our team can help reschedule with the same or a different mentor depending on desire and availability. You may be able to reschedule a missed session if you canceled 7 days before the session and your mentor has availability.',
  },
  {
    id: 'm6',
    category: 'Mentorship',
    question: 'How are sessions scheduled?',
    answer: 'Sessions are scheduled via the BestHuman Portal by Client Success at this time based on mutual availability. All updates can be viewed by the mentee, mentor and the appointed Locelle Client Success Manager, including any rescheduling.',
  },
  {
    id: 'm7',
    category: 'Mentorship',
    question: 'What if my mentor or mentee is late more than once?',
    answer: 'Email your appointed Client Success Manager and we will resolve as required. Time is precious for all parties and we want to ensure a good experience.',
  },
  {
    id: 'm8',
    category: 'Mentorship',
    question: 'If my mentor or mentee doesn’t seem engaged, how should I manage this?',
    answer: 'We provide our mentor and mentee resources and guides for the mentorship sessions. We strongly urge you to read these first, apply the steps and come to sessions as prepared as possible. If this doesn’t help, contact your Client Success Manager.',
  },
  {
    id: 'm9',
    category: 'Mentorship',
    question: 'What if I come across technical difficulties?',
    answer: 'Email your appointed Client Success Manager and we will resolve as required.',
  },
  // --- COACHING ---
  {
    id: 'c1',
    category: 'Coaching',
    question: 'What is coaching, and how can it benefit me?',
    answer: "At BestHuman, we follow ICF’s definition of Coaching as well as code of ethics. ICF is the gold standard in coaching and defines coaching as partnering with clients in a thought-provoking and creative process that inspires them to maximize their personal and professional potential. The process of coaching often unlocks previously untapped sources of imagination, productivity and leadership.",
  },
  {
    id: 'c2',
    category: 'Coaching',
    question: 'How does the coaching platform work?',
    answer: 'Interested participants onboard on the platform, get paired with a group and an executive coach. Our team takes care of all logistics such as setting up the groups, set up your sessions and share all content you need to make the most of the program.',
  },
  {
    id: 'c3',
    category: 'Coaching',
    question: 'What types of coaching services are available on the platform?',
    answer: 'Group Coaching (various levels of leadership) and 1:1',
  },
  {
    id: 'c4',
    category: 'Coaching',
    question: 'How do you choose the right coach for my needs?',
    answer: 'In this leadership learning program, all of our coaches are ICF Certified and are experts in what they do. We pick coaches based on the group’s profile, level in their career as well as goals and needs.',
  },
  {
    id: 'c5',
    category: 'Coaching',
    question: 'How do I schedule a coaching session?',
    answer: 'The team at BestHuman takes your availability as well as your groups’ into consideration and set it up for you. You will also receive calendar invites and reminders to ensure you attend all sessions.',
  },
  {
    id: 'c6',
    category: 'Coaching',
    question: 'What are the qualifications and credentials of the coaches on the platform?',
    answer: 'All of our coaches have globally recognised coaching credentials as well as industry experience backed by many hundreds and thousands of hours of coaching. They also go through training specifically for the program.',
  },
  {
    id: 'c7',
    category: 'Coaching',
    question: "Can I change coaches if I'm not satisfied with my current one?",
    answer: 'In a 1:1 scenario, yes you can. In a group setting, if it’s after the first session, we can try to switch your group and coach but after that, it may not be possible. We ask after the first session (survey) to rate your experience so if it’s not a great one, we make it so.',
  },
  {
    id: 'c8',
    category: 'Coaching',
    question: 'Is my information and data kept confidential and secure?',
    answer: 'Your data and information will be kept confidential and secure. The sessions must be confidential between individuals/groups and the coach.',
  },
  {
    id: 'c9',
    category: 'Coaching',
    question: 'How long are coaching sessions?',
    answer: '1:1 sessions can be 30 mins to 1 hour. Group sessions are all 1 hour at this time.',
  },
  {
    id: 'c10',
    category: 'Coaching',
    question: 'What if I need to reschedule or cancel a coaching session?',
    answer: '1:1 sessions can be rescheduled if 7 days notice is given. For no shows, the client will be billed for the time. Group sessions can’t be rescheduled as they are set up in advance and take into account everyone’s schedule and time. If a coach cancels, those sessions will be rescheduled.',
  },
];

export const mockResources: Resource[] = [
  {
    id: 'r1',
    title: 'How to Set SMART Goals for Your Career',
    type: 'article',
    description: 'A comprehensive guide to defining and achieving your professional objectives with the SMART framework.',
    thumbnailUrl: 'https://via.placeholder.com/400x225.png/E1224C/FFFFFF?text=Article',
    url: '#',
  },
  {
    id: 'r2',
    title: 'Mastering Difficult Conversations',
    type: 'video',
    description: 'Watch this 10-minute video to learn key strategies for navigating challenging workplace discussions.',
    thumbnailUrl: 'https://via.placeholder.com/400x225.png/018C7A/FFFFFF?text=Video',
    url: '#',
  },
  {
    id: 'r3',
    title: 'Your First 90 Days Plan',
    type: 'worksheet',
    description: 'A downloadable worksheet to help you structure your goals and actions in a new role.',
    thumbnailUrl: 'https://via.placeholder.com/400x225.png/01849A/FFFFFF?text=Worksheet',
    url: '#',
  },
  {
    id: 'r4',
    title: 'Giving and Receiving Feedback Effectively',
    type: 'article',
    description: 'Learn the art of constructive feedback to foster growth in yourself and your team.',
    thumbnailUrl: 'https://via.placeholder.com/400x225.png/E1224C/FFFFFF?text=Article',
    url: '#',
  },
];