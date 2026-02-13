import { AIProject } from '@/lib/types';

export const aiProjects: AIProject[] = [
  {
    slug: 'ai-dubbing-studio',
    title: 'Full-Stack AI Dubbing Studio Platform',
    subtitle: 'Independent AI Engineering Project',
    summary:
      'End-to-end multilingual AI-powered video dubbing platform integrating Whisper, OpenAI, and ElevenLabs APIs.',
    role: 'Full-Stack Engineer & System Architect',
    tags: ['Whisper AI', 'OpenAI', 'ElevenLabs', 'Next.js', 'Node.js', 'Full-Stack', 'SaaS'],
    image: 'ai-studio',
    metrics: [
      { value: 'End-to-End', label: 'Full pipeline automation' },
      { value: 'Multi-API', label: 'Whisper + OpenAI + ElevenLabs' },
      { value: 'SaaS-Grade', label: 'Production architecture' },
    ],
    description: [
      'To deepen my expertise in applied AI systems, I built a full-stack production-grade dubbing studio platform capable of handling the complete video dubbing workflow.',
      'The platform supports uploading video, audio, or external links with automatic transcription using Whisper AI, translation via OpenAI endpoints, and an editable transcript interface with SRT timeline control.',
      'Users can add, edit, and delete transcript lines while preserving timing synchronization. Audio generation uses ElevenLabs AI with support for both predefined and custom voice clones.',
      'The system merges generated audio with the original video and supports export or direct upload to Google Drive.',
      'This project was designed as a fully scoped SaaS system — not a demo — including backend services, database logic, authentication flows, and distributed API orchestration.',
    ],
    advancedFeatures: [
      'Admin panel with role-based access control (Admin / User)',
      'Language-based project segmentation per admin',
      'Approval and rejection workflows for translated content',
      'Internal messaging system between admins and users',
      'Slack-integrated bug reporting system with automatic job creation',
      'End-to-end authentication (OTP, protected routes, authorization layers)',
      'Project ownership and permission boundaries',
      'Editable SRT timeline with frame-accurate sync preservation',
      'Custom voice clone management via ElevenLabs API',
      'Batch processing pipeline for multi-language dubbing',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Whisper AI',
      'OpenAI API',
      'ElevenLabs API',
      'Google Drive API',
      'Slack API',
      'JWT Auth',
      'Docker',
    ],
  },
];

export function getAIProject(slug: string): AIProject | undefined {
  return aiProjects.find((p) => p.slug === slug);
}
