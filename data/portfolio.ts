export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  overview: string;
  businessProblem: string;
  usersAndStakeholders: string;
  roleAndResponsibilities: string;
  uxStrategy: string;
  wireframingApproach: string;
  uiDesignSystem: string;
  technicalImplementation: string;
  challengesAndConstraints: string;
  impactAndBusinessResults: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "credit-card-case-management",
    title: "Credit Card Case Management",
    sector: "Banking",
    overview:
      "Rebuilt a fragmented banking support workflow into a unified triage and resolution platform for card dispute and service requests.",
    businessProblem:
      "Legacy workflows produced long turnaround times, low visibility, and compliance risk due to duplicated data entry and inconsistent escalation logic.",
    usersAndStakeholders:
      "Operations agents, fraud investigators, branch managers, compliance teams, and executive risk leadership.",
    roleAndResponsibilities:
      "Led end-to-end UX architecture, facilitated workflow mapping workshops, defined system interaction models, and guided UI engineering handoff.",
    uxStrategy:
      "Designed for role-based clarity with status-driven queues, SLA indicators, and guided task completion to reduce cognitive overload.",
    wireframingApproach:
      "Mapped current-state workflows into swimlanes, then built low-fidelity queue and case-detail layouts validated with operations teams.",
    uiDesignSystem:
      "Created reusable enterprise components for case summaries, timeline audits, approvals, and exception handling patterns.",
    technicalImplementation:
      "Implemented front-end patterns in React and integrated workflow orchestration with Appian for SLA routing and audit trails.",
    challengesAndConstraints:
      "Had to modernize experience while preserving legacy integrations and passing strict regulatory review windows.",
    impactAndBusinessResults:
      "Reduced case resolution time by 38%, increased first-contact closure by 24%, and improved compliance reporting confidence for audits."
  },
  {
    slug: "pharma-budget-approval",
    title: "Pharmaceutical Budget Approval System",
    sector: "Pharmaceutical",
    overview:
      "Designed a governed approval platform for multi-country marketing and research budget requests.",
    businessProblem:
      "Email-led approvals created financial leakage, delayed launches, and no shared visibility across finance and therapeutic business units.",
    usersAndStakeholders:
      "Medical affairs leads, finance controllers, procurement, regional directors, and legal reviewers.",
    roleAndResponsibilities:
      "Owned product UX strategy, approval matrix design, dashboard information architecture, and frontend implementation guidance.",
    uxStrategy:
      "Introduced policy-aware forms, conditional approval steps, and proactive exception alerts for high-risk budgets.",
    wireframingApproach:
      "Prototyped end-to-end request lifecycle from submission to disbursement with decision trees for compliance scenarios.",
    uiDesignSystem:
      "Built modular form primitives, financial summary cards, and approval states aligned with enterprise visual standards.",
    technicalImplementation:
      "Delivered workflow modules via OutSystems with React-based reporting widgets for finance analytics.",
    challengesAndConstraints:
      "Needed to support country-specific controls while maintaining one scalable system template.",
    impactAndBusinessResults:
      "Cut approval cycle times by 42%, improved budget traceability to 100%, and accelerated go-live for critical therapeutic campaigns."
  },
  {
    slug: "clinical-data-system",
    title: "Clinical Data Operations Platform",
    sector: "Pharmaceutical",
    overview:
      "Architected a role-specific operations platform to streamline protocol data validation, issue management, and escalation workflows.",
    businessProblem:
      "Clinical teams used disconnected trackers, causing data quality issues and delayed trial milestones.",
    usersAndStakeholders:
      "Clinical data managers, trial coordinators, QA reviewers, external CRO partners, and program leadership.",
    roleAndResponsibilities:
      "Directed research synthesis, designed interaction models for exception handling, and mentored implementation team on usability standards.",
    uxStrategy:
      "Prioritized risk-first dashboards and contextual task guidance to help teams focus on highest-impact quality issues.",
    wireframingApproach:
      "Created iterative wireframes for protocol-level dashboards and issue drill-down views tested against real study scenarios.",
    uiDesignSystem:
      "Established a secure enterprise UI language with reusable data tables, alert treatments, and audit-ready interaction patterns.",
    technicalImplementation:
      "Implemented hybrid Angular and React interfaces with integration layers for clinical data repositories.",
    challengesAndConstraints:
      "Balanced strict validation, high-volume datasets, and auditability without creating heavy user friction.",
    impactAndBusinessResults:
      "Increased data issue closure velocity by 31% and reduced downstream protocol deviations through earlier intervention."
  },
  {
    slug: "insurance-claim-management",
    title: "Insurance Claim Management",
    sector: "Insurance",
    overview:
      "Transformed first-notice-of-loss to payout workflows into a unified claims cockpit for agents and assessors.",
    businessProblem:
      "Disparate systems made claim status tracking inconsistent, causing customer dissatisfaction and escalating operational costs.",
    usersAndStakeholders:
      "Claims handlers, field assessors, policyholders, fraud teams, and call center supervisors.",
    roleAndResponsibilities:
      "Drove service blueprinting, redesigned claim lifecycle interactions, and partnered with engineering on rollout strategy.",
    uxStrategy:
      "Shifted from process-centric to outcome-centric UX with prioritized work queues and intelligent document capture flows.",
    wireframingApproach:
      "Used scenario-based wireflows for standard, exception, and fraud-suspected claims to validate edge conditions early.",
    uiDesignSystem:
      "Introduced claims-specific components such as evidence timelines, decision reason chips, and payout calculators.",
    technicalImplementation:
      "Built reusable UI modules in React with workflow automations through Appian for routing and SLA governance.",
    challengesAndConstraints:
      "Had to maintain productivity during migration while training multiple regional teams on new process standards.",
    impactAndBusinessResults:
      "Improved claim turnaround by 35%, lowered rework by 27%, and materially improved NPS in post-claim feedback."
  },
  {
    slug: "smart-city-middle-east",
    title: "Smart City Service Operations",
    sector: "Smart City / Government",
    overview:
      "Designed a service orchestration platform for urban operations teams managing permits, incidents, and citizen requests.",
    businessProblem:
      "City departments lacked a common operating interface, leading to delayed response times and fragmented accountability.",
    usersAndStakeholders:
      "Municipal operators, department heads, contractors, city leadership, and residents using service channels.",
    roleAndResponsibilities:
      "Led cross-agency workshop facilitation, interaction architecture, and governance-oriented dashboard design.",
    uxStrategy:
      "Created command-center style UX with real-time KPI views, location context, and policy-driven work assignment.",
    wireframingApproach:
      "Developed dashboard-first wireframes and process maps for interdepartmental handoffs before detailed interface design.",
    uiDesignSystem:
      "Delivered an enterprise component library supporting map overlays, service cards, and operational status layers.",
    technicalImplementation:
      "Implemented with Angular dashboard modules and low-code workflow automation for permit and incident processing.",
    challengesAndConstraints:
      "Required bilingual readiness, data standardization across agencies, and phased go-live under public scrutiny.",
    impactAndBusinessResults:
      "Boosted cross-department response coordination by 46% and reduced high-priority incident response times significantly."
  },
  {
    slug: "subsidy-and-fleet-platforms",
    title: "Government Subsidy & Fleet Management Platforms",
    sector: "Government / Logistics",
    overview:
      "Delivered two high-scale workflow systems: a subsidy management platform for citizens and a fleet operations system for logistics teams.",
    businessProblem:
      "Manual approvals and disconnected operational tools slowed subsidy delivery and limited fleet utilization visibility.",
    usersAndStakeholders:
      "Government case officers, policy teams, citizens, fleet coordinators, dispatch managers, and executive leadership.",
    roleAndResponsibilities:
      "Owned UX architecture and design direction, defined role journeys, and translated business rules into implementation-ready artifacts.",
    uxStrategy:
      "Standardized workflow logic around eligibility, approvals, dispatch, and exception management using transparent status communication.",
    wireframingApproach:
      "Produced role-based wireframes for citizen portals and internal command dashboards with process flow diagrams.",
    uiDesignSystem:
      "Built scalable design tokens and reusable templates for forms, workflow trackers, asset cards, and operations dashboards.",
    technicalImplementation:
      "Leveraged Appian for workflow orchestration and React components for advanced visual reporting and operational analytics.",
    challengesAndConstraints:
      "Needed robust security, multilingual support, and strong accessibility with strict timeline constraints.",
    impactAndBusinessResults:
      "Improved subsidy processing throughput by 40% and increased fleet utilization efficiency through real-time operational visibility."
  }
];

export const experiences = [
  "Xebia IT Services",
  "QuillBot",
  "Ranosys Technologies",
  "Teramatrix Technologies (Airlinq)",
  "Planet Web Solution",
  "Career Point Pvt Ltd"
];

export const skills = [
  "Enterprise UX Architecture",
  "Low-Code Platforms (Appian, OutSystems)",
  "React & Angular Front-end Systems",
  "Design Systems for Workflow Products",
  "Process Mapping & Service Blueprinting",
  "RFP & Proposal Design Leadership"
];
