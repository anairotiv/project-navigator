export type ProjectCase = {
  slug: string;
  name: string;
  client: string;
  shortDescription: string;
  context: string;
  challenge: string;
  myRole: string;
  keyActions: string[];
  complexity: string[];
  results: string[];
  tools: string[];
  decisions: string[];
};

export const projects: ProjectCase[] = [
  {
    slug: "partage-malls",
    name: "Partage Malls",
    client: "Partage Malls",
    shortDescription:
      "Interactive Wayfinding System · End-to-End Delivery under Time Constraint",
    context:
      "Partage Malls required an interactive wayfinding map for one of its shopping centers, designed to improve the visitor experience and modernize physical navigation throughout the mall.",
    challenge:
      "There was no pre-existing structure for the project. Scope, requirements, and delivery process had to be defined from the ground up while aligning a multi-stakeholder environment with tight expectations.",
    myRole:
      "Led the project end-to-end as Project Manager, owning scope definition, planning, execution, and delivery.",
    keyActions: [
      "Structured the project from scratch, defining scope, deliverables and acceptance criteria",
      "Built the timeline and coordinated cross-functional execution across design and development",
      "Managed stakeholder communication and aligned expectations throughout the engagement",
      "Established status reporting cadence to keep the client informed and decisions documented",
    ],
    complexity: [
      "No baseline documentation or process at project start",
      "Small delivery team requiring tight coordination",
    ],
    results: [
      "Interactive map delivered within agreed scope and timeline",
      "Structured project framework reusable for future engagements",
      "Improved visitor navigation experience inside the mall",
    ],
    tools: ["Jira", "Confluence", "Scrum", "Kanban"],
    decisions: [
      "Defined an iterative delivery model to validate requirements early",
      "Centralized all decisions in Confluence to remove ambiguity",
      "Prioritized scope items based on visitor impact vs. delivery effort",
    ],
  },
  {
    slug: "zurich-airport Brazil",
    name: "Zurich Airport Brazil",
    client: "Zurich Airport Brazil",
    shortDescription:
      "Project involving requirement management and communication with stakeholders.",
    context:
      "Engagement with Zurich Airport Brazil focused on capturing, organizing, and delivering complex requirements, multi-cultural setting.",
    challenge:
      "Coordinating requirements across multiple international stakeholders, time zones, and languages while keeping a single source of truth and maintaining delivery cadence.",
    myRole:
      "Led requirement management and acted as the primary point of contact with international stakeholders.",
    keyActions: [
      "Structured the requirements pipeline from intake to acceptance",
      "Coordinated recurring alignment meetings with stakeholders",
      "Translated business needs into clear specifications for the delivery team",
      "Managed change requests and impact analysis throughout the project",
    ],
    complexity: [
      "International stakeholders across multiple time zones",
      "High volume of requirements requiring rigorous traceability",
      "Demanding stakeholders with strict expectations",
      "Execution and structuring happening simultaneously",
    ],
    results: [
      "Single, validated source of truth for all project requirements",
      "Stable delivery cadence maintained despite cross-border complexity",
      "Strong stakeholder relationships sustained throughout the project",
    ],
    tools: ["Jira", "Confluence", "Scrum"],
    decisions: [
      "Implemented a requirement traceability structure in Jira and Confluence",
      "Established a fixed weekly cadence with stakeholders to reduce noise",
      "Standardized acceptance criteria to remove subjective interpretation",
    ],
  },
  {
    slug: "hmasp",
    name: "HMASP",
    client: "HMASP",
    shortDescription:
      "Second phase of a project conducted independently, with focus on organization and delivery.",
    context:
      "HMASP entered its second phase, building on prior work and requiring stronger structure, ownership, and a clear delivery plan.",
    challenge:
      "Take full ownership of the second phase with minimal handover, reorganize the work, and ensure delivery without losing the historical context of the project.",
    myRole:
      "Led the second phase independently as Project Manager, responsible for organization, planning and delivery.",
    keyActions: [
      "Reviewed and restructured the existing backlog and documentation",
      "Defined a focused delivery plan with clear milestones",
      "Coordinated execution end-to-end with the delivery team",
      "Managed direct communication with the client throughout the phase",
    ],
    complexity: [
      "Limited handover from the previous phase",
      "Independent ownership with no project layer above",
      "Need to reorganize artifacts while delivering in parallel",
      "High dependency on stakeholder validation to unblock critical steps"
    ],
    results: [
      "Phase delivered within the committed scope",
      "Reorganized documentation that improved future maintainability",
      "Reinforced client trust through clear ownership and communication",
    ],
    tools: ["Jira", "Confluence", "Kanban"],
    decisions: [
      "Prioritized restructuring of artifacts before scaling execution",
      "Selected Kanban to keep flow visible under independent ownership",
      "Set explicit delivery checkpoints with the client to reduce risk",
    ],
  },
  {
    slug: "wolf-vision",
    name: "Wolf Vision",
    client: "Wolf Vision",
    shortDescription:
      "Innovation project focused on analyzing people flow in physical environments.",
    context:
      "Wolf Vision is an innovation initiative dedicated to analyzing how people move and behave within physical environments, generating insights for operations and experience.",
    challenge:
      "Lead an innovation project with evolving scope, balancing experimentation with structured delivery and clear stakeholder communication.",
    myRole:
      "Led the project as Project Manager, structuring delivery and coordinating innovation execution.",
    keyActions: [
      "Defined scope boundaries to keep the innovation focused and deliverable",
      "Coordinated technical execution with the delivery team",
      "Structured communication and reporting for stakeholders",
      "Adapted plans quickly as the discovery phase produced new insights",
    ],
    complexity: [
      "Innovation context with high uncertainty and shifting scope",
      "Need to translate experimental work into structured delivery",
      "Small team requiring efficient coordination",
      "Single stakeholder dependency with delayed responses, creating decision bottlenecks and impacting timeline predictability",
    ],
    results: [
      "Innovation outcomes delivered with clear documentation",
      "Structured framework that turned experimentation into deliverables",
      "Insights on people flow ready for operational use",
    ],
    tools: ["Jira", "Confluence", "Scrum", "Kanban"],
    decisions: [
      "Adopted a hybrid Scrum/Kanban flow to balance discovery and delivery",
      "Defined explicit checkpoints to validate direction with stakeholders",
      "Locked scope per iteration to protect delivery in an exploratory context",
    ],
  },
  {
    slug: "perini-business-park",
    name: "Perini Business Park",
    client: "Perini Business Park",
    shortDescription: "Full-cycle project managed from start to finish.",
    context:
      "Perini Business Park engaged the team for a full-cycle project, from initial scoping through final delivery and handover.",
    challenge:
      "Own the project end-to-end, ensuring consistent quality, communication, and delivery across every phase with limited resources.",
    myRole:
      "Led the project end-to-end as Project Manager, owning scope, timeline, stakeholders and delivery.",
    keyActions: [
      "Defined full project scope and broke it into clear delivery phases",
      "Built and managed the master timeline with the delivery team",
      "Coordinated client communication through every milestone",
      "Managed risks and changes proactively across the lifecycle",
    ],
    complexity: [
      "Resource-constrained environment requiring tight prioritization",
      "Multiple stakeholders involved across the project lifecycle",
    ],
    results: [
      "Full project delivered on scope, on time and within agreed quality",
      "Clear documentation handed over at project closure",
      "Stakeholders aligned and informed at every milestone",
    ],
    tools: ["Jira", "Confluence", "Scrum"],
    decisions: [
      "Phased the project to control risk and deliver value early",
      "Centralized all communication channels to avoid information loss",
      "Set non-negotiable quality gates between phases",
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
