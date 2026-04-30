export enum ProtectionStatus {
  ENFORCED = "ENFORCED",
  MONITORING = "MONITORING",
  DISABLED = "DISABLED",
  PENDING = "PENDING"
}

export enum AccessRiskLevel {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  NONE = "NONE"
}

export interface ProtectionPolicy {
  id: string;
  name: string;
  type: "CONDITIONAL_ACCESS" | "MFA" | "SESSION" | "PAM";
  status: ProtectionStatus;
  priority: number;
  conditions: Record<string, any>;
  actions: string[];
}

export interface IdentitySession {
  sessionId: string;
  identityId: string;
  startTime: string;
  lastActivity: string;
  riskScore: number;
  devicePosture: "TRUSTED" | "UNTRUSTED" | "UNKNOWN";
  location: string;
}

export interface EnforcementLog {
  id: string;
  timestamp: string;
  policyId: string;
  identityId: string;
  actionTaken: string;
  result: "SUCCESS" | "FAILURE";
}
