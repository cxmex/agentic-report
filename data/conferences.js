export const conferences = [
  {
    slug: 'mcp-mumbai-2026',
    name: 'MCP Dev Summit Mumbai 2026',
    shortName: 'MCP Mumbai',
    dates: 'June 14-15, 2026',
    location: 'Jio World Convention Centre, Mumbai',
    color: '#7C4DFF',
    stats: {
      slides: 638,
      talks: 22,
      transcripts: 8,
      insights: 337,
    },
    description: 'The largest gathering of MCP protocol developers, security researchers, and enterprise adopters. Two days of deep technical talks on agent security, governance, and the stateless protocol future.',
    days: [
      { day: 1, date: 'June 14', label: 'Day 1 — Security & Infrastructure' },
      { day: 2, date: 'June 15', label: 'Day 2 — Governance & Verticals' },
    ],
    speakers: [
      'Akash Mahajan (KLOUDLE)',
      'Shuva Jyoti Kar (Palo Alto Networks)',
      'Shivay Lamba (Qualcomm / Google)',
      'Hasini Samarathunga & Sahan Dilshan (WSO2)',
      'Navin Pai (StackGen) & Archana Rajkumar (SentinelOne)',
      'Shannon Williams (Obot AI)',
      'Saradindu Sengupta (Lytx)',
      'MV Shiva & Arushi Garg (Google)',
      'Kalyan Kolachala & Vaishali Shetty (SymphonyAI)',
      'Sayantan Karmakar & Rishi Nikhilesh (Motorola Solutions)',
    ],
    companies: ['AWS', 'Google', 'Palo Alto Networks', 'WSO2', 'SentinelOne', 'StackGen', 'Obot AI', 'Blaxel', 'Caze Labs', 'KLOUDLE', 'Motorola Solutions', 'SymphonyAI', 'Lytx', 'HDFC Bank', 'Temporal', 'Redis'],
  },
  {
    slug: 'superai-singapore-2026',
    name: 'SuperAI Singapore 2026',
    shortName: 'SuperAI Singapore',
    dates: 'June 10-11, 2026',
    location: 'Marina Bay Sands, Singapore',
    color: '#00C853',
    stats: {
      slides: 192,
      companies: 73,
      booths: 50,
    },
    description: 'Southeast Asia\'s premier AI conference. 73 companies showcasing everything from agent-to-agent payments to robot deployment, wearable health OS, and AI monetization infrastructure.',
    days: [
      { day: 1, date: 'June 10', label: 'Day 1 — Keynotes & Expo' },
      { day: 2, date: 'June 11', label: 'Day 2 — Deep Dives & Startups' },
    ],
    speakers: [
      'Grab AI Team',
      'Stripe AI Partnerships',
      'Savannah Kunovsky (IDEO)',
      'Randy Hunt (Notion)',
      'Nathan Xu (Plaud)',
      'Ben Condon (Heidi Health)',
      'Tanvi Jayaraman (Oura)',
    ],
    companies: ['Grab', 'Stripe', 'Notion', 'Anthropic', 'Manus', 'MiniMax', 'Cursor', 'IDEO', 'Plaud', 'Heidi Health', 'Oura', 'Alibaba Cloud', 'Meitu', 'Telnyx', 'Friendli AI', 'Nebius', 'GPTBots', 'The Robot Company', 'Clink', 'AutoCoder', 'PollyReach', 'Atypica AI', 'Airia', 'TuringData', 'Goveda', 'Temporal'],
  },
  {
    slug: 'oss-india-2026',
    name: 'Open Source Summit India 2026',
    shortName: 'OSS India',
    dates: 'June 16-17, 2026',
    location: 'Jio World Convention Centre, Mumbai',
    color: '#FF6D00',
    stats: {
      slides: 8,
      topics: 4,
    },
    description: 'The Linux Foundation\'s flagship open source event in India. AI Tokenomics, Digital Public Infrastructure, decentralized trust, and the India Stack — where sovereign tech meets open standards.',
    days: [
      { day: 1, date: 'June 16', label: 'Day 1 — Keynotes & Foundation Updates' },
      { day: 2, date: 'June 17', label: 'Day 2 — Workshops & Deep Dives' },
    ],
    speakers: [
      'Linux Foundation Leadership',
      'LF Networking India Team',
      'LF Decentralized Trust Team',
    ],
    companies: ['Linux Foundation', 'FinOps Foundation', 'LF Networking', 'LF Decentralized Trust', 'OCUDU', 'C-DAC', 'OpenNets'],
  },
  {
    slug: 'kubecon-india-2026',
    name: 'KubeCon India 2026',
    shortName: 'KubeCon India',
    dates: 'June 18-19, 2026',
    location: 'Jio World Convention Centre, Mumbai',
    color: '#00BCD4',
    stats: {
      expected_talks: 40,
      expected_attendees: 3000,
    },
    description: 'Cloud native infrastructure meets the agent era. gRPC MCP transport, agent sandboxes, sovereign AI clusters, and the governance stack for Kubernetes-native agents.',
    days: [
      { day: 1, date: 'June 18', label: 'Day 1 — Keynotes & Platform Engineering' },
      { day: 2, date: 'June 19', label: 'Day 2 — Security & Agent Infrastructure' },
    ],
    speakers: [],
    companies: ['CNCF', 'Google', 'AWS', 'Red Hat', 'Microsoft'],
  },
];

export function getConference(slug) {
  return conferences.find(c => c.slug === slug);
}

export function getConferenceBySlug(slug) {
  return conferences.find(c => c.slug === slug);
}
