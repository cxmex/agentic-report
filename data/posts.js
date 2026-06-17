export const posts = [
  {
    slug: 'mcp-summit-three-forces',
    title: '638 Slides, 22 Talks, and the Three Forces Reshaping AI Agent Security',
    conference: 'mcp-mumbai-2026',
    day: 0,
    date: '2026-06-15',
    tags: ['MCP', 'Security', 'Governance', 'Deep Dive'],
    excerpt: 'Every major MCP security incident in 2025-2026 passed authentication. All authenticated. All breached.',
    content: `I spent June 14-15 at MCP Dev Summit Mumbai, capturing every talk I could with a custom slide scanner app I built during the conference itself. By the end, I had 638 slides across 22 talks, 8 full audio transcripts, and a database of 337 unique, deduplicated insights.

What I found isn't just technically interesting. It's a map of where the entire AI agent ecosystem is heading — and the three forces that will shape it.

## The Numbers That Frame Everything

MCP SDK downloads are approaching 100 million. The registry has grown 8x. 67% of CTOs are now considering MCP as their default standard. The July 29 release candidate makes MCP a stateless protocol — fundamentally changing how agents maintain context.

But here's the number that matters most: every major MCP security incident in 2025-2026 passed authentication. The Asana leak (1,000 orgs). The mcp-remote RCE. The first malicious MCP server in the wild (800M+ emails). 21,000 agent instances exposed online. The NSA publishing a formal advisory.

All authenticated. All breached.

## Force 1: The Offensive Perspective

Akash Mahajan from KLOUDLE walked through Simon Willison's Lethal Trifecta: the three properties that make MCP servers uniquely dangerous when combined.

1. Untrusted input flowing through the system
2. Tool access with real-world side effects
3. An LLM that cannot distinguish instructions from data

Any two of these are manageable. All three together are lethal. And every MCP server has all three.

## Force 2: The Defensive Perspective

What surprised me most was how the defensive talks, from completely different companies and perspectives, fit together like puzzle pieces.

**AWS** demonstrated a complete confused deputy attack on an Amazon Bedrock multi-agent pipeline. Their three-layer defense — Preserve Intent, Reduce Authority, Validate Actions — is the most detailed authorization framework I've seen for multi-agent systems.

**Google** launched the MCP Toolbox for Databases with a deceptively simple principle: the model never supplies identity parameters. The username comes from the verified JWT token. Period.

**Palo Alto Networks** argued that Docker is a "concrete bunker" — too heavy for AI agents. WebAssembly is a "glass box": transparent, sealed, with controlled air holes. For AI agents that need microsecond startup, Wasm wins.

## Force 3: The Governance Perspective

Navin Pai (StackGen) and Archana Rajkumar (SentinelOne) delivered the most strategically important talk. Their MCP Governance Maturity Model:

- **Level 0 — Shadow:** "We have no idea what's running."
- **Level 1 — Visibility:** "We know every agent, server, and connection."
- **Level 2 — Identity:** "Every tool call is attributable."
- **Level 3 — Policy:** "Every tool call passes a deterministic check."
- **Level 4 — Audit:** "We can prove what any agent did, and why it was allowed."

One line crystallized it: "Governance is a program, not a checkpoint."

## The Bottom Line

Three forces are converging on AI agent security: offensive researchers finding real vulnerabilities, defensive builders creating layered protections, and governance frameworks giving enterprises a path from shadow to sanctioned.

The playbook exists. The tools are emerging. The question is whether you'll implement them proactively or reactively.

I know which one costs less.`,
  },
  {
    slug: 'motorola-mcp-powered-ops',
    title: 'MCP-Powered Ops: How Motorola Cut MTTR from 45 Minutes to 4',
    conference: 'mcp-mumbai-2026',
    day: 2,
    date: '2026-06-15',
    tags: ['MCP', 'SRE', 'Kubernetes', 'Grafana', 'Case Study'],
    excerpt: 'Red Hat Kubernetes MCP + Grafana MCP for mission-critical public safety applications. 91% reduction in incident resolution time.',
    content: `Sayantan Karmakar (Platform DevOps Engineer, Motorola Solutions, 8+ years) and Rishi Nikhilesh (Manager Software Engineering, 12+ years) presented the most concrete MCP production case study at the summit.

## The Problem: 45-Minute Manual Investigation

Motorola's mission-critical environment covers Emergency Dispatch, Command Center, Video Management, Analytics, and Communication Services. Infrastructure: OpenShift Clusters, Grafana, Prometheus, AI Operations.

When a fire emergency comes in, the flow is: Citizen Call → Call Taker → CAD Incident Created → Dispatch Service → Fire Units Notified → Responders Arrive → Incident Resolved.

Every minute counts. A 45-minute MTTR for infrastructure incidents is unacceptable when lives depend on dispatch systems.

## The Solution: AI Agent with MCP Protocol Layer

The architecture: SRE/Operator sends natural language query → AI Agent (AWS Bedrock) with Anomaly Detection, Incident Analysis, Correlation Engine, Recommendation Engine → MCP Protocol layer → Red Hat Kubernetes MCP Server + Grafana MCP Server + Runbook MCP Server.

Before MCP: Human manually intermediated between Grafana and Kubernetes.
After MCP: AI Agent communicates through MCP Layer to both systems simultaneously.

## Why MCP Instead of Custom Integrations?

| Traditional | MCP |
|---|---|
| Custom APIs | Standard Protocol |
| Point-to-point | Reusable |
| High Maintenance | Low Maintenance |
| Vendor-specific | Portable |

## The Results

- **Before:** 45 minutes manual investigation
- **After:** 4 minutes with automated correlation
- **91% reduction** in Mean Time To Resolve
- **99.99% uptime target achieved**

## Human-In-The-Loop Design

Critical principle: Control and Oversight. Agent acts within bounds; critical actions require a Human. Scaling, restarting, deploying — all restricted without human approval.

The meme slide said it best: SRE choosing between "Wait for Human Approval Gate" and "Run it autonomously (NO!)"

## The Agent Workflow

1. Incident Alert (Grafana, Sentry)
2. Agent Trigger (pre-defined criteria)
3. MCP Context Gathering (K8s state)
4. Correlation Analysis
5. Root Cause Identification
6. Human Approval Request
7. Automated Action (approved remediation only)

This is MCP in production for mission-critical infrastructure. Not a demo. Not a POC. Real public safety systems.`,
  },
  {
    slug: 'securing-multi-agent-mcp-healthcare',
    title: 'Who Do You Trust? Securing Multi-Agent MCP Systems in Regulated Environments',
    conference: 'mcp-mumbai-2026',
    day: 2,
    date: '2026-06-15',
    tags: ['MCP', 'Healthcare', 'Security', 'Byzantine Fault Tolerance'],
    excerpt: 'Healthcare is the #1 target for 14 years straight. $9.77M per breach. And multi-agent AI makes it worse.',
    content: `## Healthcare is the #1 Target

$9.77M — average cost per healthcare breach. Highest of any sector for 14 consecutive years (IBM/Ponemon 2025).

259M Americans had their health records breached in 2024 alone — 192.7M from a single attack (Change Healthcare).

In a multi-agent AI system, a security breach doesn't just affect a single record. A compromised AI agent can instantly expose or alter every patient file it accesses before security systems can detect the threat.

## The Attack Surfaces When Models Talk to Models

1. **Prompt Injection in Clinical Reports** — Hidden instructions inside a radiology report silently flip specialist outputs. 47-68% success rate against frontier models (Greshake et al., AISEC '23).
2. **Tampered Model Weights** — 100 fine-tuning examples and 1 GPU-hour subvert a safety-aligned model with 99.5% violation rate. Behavioral tests show nothing.
3. **Weak stdio/subprocess Boundary** — A specialist with network access can exfiltrate data regardless of prompt injection. Must be removed structurally, not with config.
4. **OAuth Token Exfiltration** — A malicious MCP server captures bearer tokens. Stolen = full access to every patient record.

## 5 Specialized AI Doctors. 1 Judge.

The architecture: 5 specialist AI models (Radiology, Cardiology, Oncology, Internal Medicine, Pathology), each running as an independent MCP server. An orchestrator coordinates all five.

**Byzantine Fault Tolerance: n=5, f≤1.** Five specialists vote on every case. Even if one is compromised, the majority holds. A single bad actor cannot flip the diagnosis alone.

## The 4-Layer Defense Stack

1. **Interceptor Proxy** — Normalizes Unicode, runs 400+ injection patterns, AI classifier (score > 0.7 = quarantined)
2. **Signed Manifests** — Must compromise Sigstore OIDC identity
3. **stdio + seccomp** — Kernel-level bypass required
4. **DPoP** — Must steal private key from memory, not just token

Each layer compounds. Breaking the stack means beating every one independently.

## An AI Caught What Clinicians Missed — 475 Days Earlier

Mayo Clinic's REDMOD AI detected pancreatic cancer on routine CT scan an average of 475 days before radiologists. Validated across 1,462 patients. Pancreatic cancer 5-year survival: ~15% because 85% of cases are caught too late.

The question they asked next: What happens when multiple specialist AI models review the same case together with MCP orchestration?

They built it. Then they tried to break it.`,
  },
  {
    slug: 'superai-73-companies',
    title: '73 Companies at SuperAI Singapore — Here\'s What They\'re Building',
    conference: 'superai-singapore-2026',
    day: 0,
    date: '2026-06-11',
    tags: ['SuperAI', 'Startups', 'Market Map', 'Singapore'],
    excerpt: 'From agent-to-agent payments to robot deployment as a service. 42 scrapeable websites. 19 priority research targets.',
    content: `I scanned 296 slides across SuperAI Singapore 2026 at Marina Bay Sands. 10,000+ attendees, 150+ speakers, 100+ exhibitors.

Here's the complete landscape of what's being built.

## AI Infrastructure & Cloud (13 companies)

**Nebius** — AI cloud for startups, up to $100K credits. **TuringData** — AI storage at 40-60 GB/s, 4.2-4.5M IOPS. **FriendliAI** — Frontier inference cloud, works with Claude Code and Cursor. **TiDB** — "State for Agents at Scale," trusted by Manus, KIMI, Dify.

## AI Developer Tools & Platforms (10 companies)

**Cursor** — AI code editor, 30K+ enterprises, 100M lines/month. **Manus** — Autonomous AI agent, 2M+ waitlist, $90M run rate in 4 months. **Temporal** — Open source workflow orchestration, 10K+ devs. **Jeen** — Governed operating layer for autonomous enterprise with MCP support.

## The Agentic Economy Stack

**Clink** — Global payments for AI builders. Agent-to-agent transactions. **MetaComp/AgentX** — KYA (Know Your Agent), agentic KYC, fiat+stablecoin hybrid. **OTLRS** — "Build a venture in 15 min" AI venture studio.

## AI Governance (3 companies)

**Airia** — Enterprise AI governance. Discover, Secure, Govern, Optimize all AI agents, models, and MCP servers. This is the company closest to what we're building.

## Health AI (8 companies)

**Heidi Health** — 2.7M clinical visits/week, 37M hours saved. 21g wearable mic, works offline.

## Robotics (3 companies)

**The Robot Company** — Robot deployment as a service. Hospitality, labs, data centres, agriculture. Contact: deploy@therobotcompany.ai

## Key Numbers

- Manus: $90M run rate in 4 months
- Cursor: 30K enterprises
- Magnific: 160M monthly users
- Grab: 52M MTU
- Stripe: $1.9T GDP processed

73 companies. 42 with scrapeable websites. 19 priority research targets identified. The agentic economy isn't coming — it's here.`,
  },
  {
    slug: 'superai-monetization-broken',
    title: 'AI Monetization Is Broken — SuperAI Shows What\'s Next',
    conference: 'superai-singapore-2026',
    day: 2,
    date: '2026-06-11',
    tags: ['SuperAI', 'Monetization', 'Business Models', 'Pricing'],
    excerpt: '2 in 3 Forbes AI 50 companies use usage-based pricing. Hybrid pricing up from 27% to 41%. The subscription era is ending.',
    content: `The latest 100 slides from SuperAI's Day 2 were dominated by one theme: how do you charge for AI?

## The Numbers

- 2 in 3 Forbes AI 50 companies now use usage-based pricing
- Hybrid pricing models grew from 27% to 41%
- AI companies are monetizing at breakneck speed — but costs are high, variable, and volatile
- "Agents are on track to read more Stripe docs than humans by the end of 2026"

## Stripe's Three-Stage Pricing Framework

Stage 1: Seat-based (traditional SaaS)
Stage 2: Usage-based (pay per API call, token, action)
Stage 3: Outcome-based (pay per result delivered)

Most AI companies are transitioning from Stage 1 to Stage 2. The leaders are already experimenting with Stage 3.

## The Agentic Commerce Framework

Stripe presented their Agentic Commerce and Payments Framework. Key insight: agents aren't tools. They are hires. Each agent needs identity, payment capability, and accountability.

## AI Interaction Levels

The spectrum from human-led to agent-led:
1. Human does everything, AI assists
2. AI does routine tasks, human approves
3. AI acts autonomously within boundaries
4. AI delegates to other AIs
5. Fully autonomous agent networks

Most companies are stuck between levels 2 and 3. The infrastructure for levels 4 and 5 is what's being built now.

## What's Working

- **Cursor:** $2B ARR on seat + usage hybrid
- **Anthropic:** $47B valuation, enterprise contracts
- **Manus:** $90M run rate in 4 months on waitlist-driven demand

AI revenue growth isn't slowing down. It's speeding up. But the pricing model that wins hasn't been invented yet.`,
  },
  {
    slug: 'oss-india-day1-tokenomics-dpi',
    title: 'Open Source Summit India Day 1: Tokenomics, Digital Public Infrastructure, and the India Stack',
    conference: 'oss-india-2026',
    day: 1,
    date: '2026-06-16',
    tags: ['Open Source', 'India', 'Tokenomics', 'DPI', 'Blockchain'],
    excerpt: 'AI Tokenomics Foundation, OCUDU RAN ecosystem, LF Decentralized Trust powering India\'s government — the India stack is going open source.',
    content: `Open Source Summit India 2026 opened with a focus on India's digital public infrastructure — and the Linux Foundation projects making it happen.

## AI Tokenomics Foundation

A new Linux Foundation project tackling the economics of AI. Building reference implementations and layers for two audiences: Practitioner Minds (buyers/consumers) and Supplier Minds (builders/providers).

This matters because token pricing is the unsolved problem of the AI economy. How do you price a token? How do you make token economics transparent? The foundation is building the standards.

## OCUDU — Global Open Source RAN Ecosystem

The National Spectrum Consortium is backing OCUDU, an open source Radio Access Network foundation. India is leading the development with a philosophy of "Minimum Development, Maximum Upstream Dependence" — leveraging O-RAN-SC, ONAP, Nephio, and CNCF.

LF interns and local open-source community are driving glue code, automation scripts, and test frameworks. This is how India builds telecom infrastructure without vendor lock-in.

## LF Decentralized Trust

Hyperledger Fabric is powering India's digital public infrastructure across multiple government agencies:
- **RBI** — Central bank blockchain initiatives
- **MeitY** — Ministry of Electronics and IT
- **CBSE** — Education board records
- **Supply Chain** — Government procurement

The India Stack (UPI, Aadhaar, DigiLocker) is going open source. The implications for AI agent identity and verification are massive — if every citizen has a verifiable digital identity, every agent acting on their behalf can inherit that trust chain.

More coverage coming from Day 2.`,
  },
  {
    slug: 'kubecon-preview-grpc-mcp',
    title: 'What to Watch at KubeCon India 2026: gRPC MCP Transport, Agent Sandboxes, and Sovereign AI',
    conference: 'kubecon-india-2026',
    day: 0,
    date: '2026-06-17',
    tags: ['KubeCon', 'Preview', 'gRPC', 'MCP', 'Kubernetes'],
    excerpt: 'Google building gRPC transport for MCP. Alibaba Cloud agent sandboxes. Sarvam AI\'s sovereign infrastructure. The talks to catch June 18-19.',
    content: `KubeCon + CloudNativeCon India starts tomorrow. Based on the schedule and our research across 55 conference transcripts, here's what matters most.

## Must-Attend: gRPC Transport for MCP (June 19, 12:00)

Pawan Bhardwaj from Google is building a production-grade gRPC transport for the Model Context Protocol. This would replace the current JSON-RPC/SSE transport with high-performance streaming.

Why this matters: Current MCP transport is fine for demos but doesn't scale for enterprise workloads. gRPC gives you multiplexing, backpressure, protobuf efficiency, and native streaming. This is foundational infrastructure for MCP at scale.

## Agent Sandboxes on Kubernetes (Already Presented at KubeCon EU)

Alibaba Cloud's Open Cruise Agent project introduced sandbox lifecycle management for AI agents on Kubernetes: pending, running, pause, resume, checkpoint, complete. Compatible with E2B and MCP protocols.

Key insight: regular Kubernetes pods can't handle agent sandboxes. You need checkpoint/restore, state management, and cost control for agents that might be idle for hours but need to resume with full context.

## Sarvam AI — India's Sovereign AI ($1.5B Valuation)

Building India's AI infrastructure on the CNCF stack. Sovereign AI means: data stays in India, models trained on Indian languages, infrastructure controlled by Indian entities.

## The Governance Stack

From our cloud-native research, the 8 tools that form the agent governance stack:
- **OpenTelemetry** — trace every agent tool call
- **Grafana + Prometheus** — dashboards for agent performance
- **OPA + Kyverno** — policy enforcement for what agents can do
- **Falco** — runtime security detection
- **Talos** — hardened OS for agent infrastructure

All CNCF projects. All open source. All being adapted for the agent era.

We'll be on the ground capturing slides and talks. Follow for real-time coverage.`,
  },
];

export function getPost(slug) {
  return posts.find(p => p.slug === slug);
}

export function getPostsByConference(conferenceSlug) {
  return posts.filter(p => p.conference === conferenceSlug);
}
