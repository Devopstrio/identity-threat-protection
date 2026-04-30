<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="150" alt="Identity Threat Protection Logo" />

<h1>Identity Threat Protection Platform</h1>

<p><strong>The Institutional-Grade Proactive Enforcement Engine for Zero-Trust Access, Adaptive Authentication, and Real-Time Threat Mitigation</strong></p>

[![Standard: NIST--800--207](https://img.shields.io/badge/Standard-NIST--800--207-blue.svg?style=for-the-badge&labelColor=000000)]()
[![Status: Production--Ready](https://img.shields.io/badge/Status-Production--Ready-indigo.svg?style=for-the-badge&labelColor=000000)]()
[![Security: Zero--Trust](https://img.shields.io/badge/Security-Zero--Trust-green.svg?style=for-the-badge&labelColor=000000)]()
[![Platform: Multi--Cloud](https://img.shields.io/badge/Platform-Multi--Cloud-0078d4?style=for-the-badge&labelColor=000000)]()

<br/>

> **"Identity is the primary vector; protection is the only defense."** 
> Identity Threat Protection is a flagship platform designed to go beyond detection by enforcing real-time proactive controls. By orchestrating adaptive authentication and conditional access across hybrid environments, it stops identity-based attacks before they impact the business.

</div>

---

## 🏛️ Executive Summary

The **Identity Threat Protection Platform** is a specialized flagship solution designed for CISOs, Security Architects, and IAM Leaders. While threat detection identifies attacks in progress, **Threat Protection** focuses on prevention and real-time mitigation. In a world of credential theft and MFA bypass, traditional "allow/deny" policies are no longer sufficient.

This platform provides an **Adaptive Enforcement Plane**. It demonstrates how to orchestrate real-time risk-based access using **FastAPI**, **React 18**, and **Terraform**. By integrating **Continuous Authentication**, **Device Posture Scoring**, and **Automated Session Revocation**, it ensures that every access attempt is verified against the current risk context, effectively enforcing Zero Trust principles across AWS, Azure, GCP, and on-premises environments.

---

## 📉 The "Protection Gap" Problem

Enterprises relying on legacy identity controls face significant defensive gaps:
- **Static Access Policies**: Policies that don't adapt to real-time risk (e.g., granting access to a "standard" user who is currently logging in from a high-risk geo).
- **Session Hijacking Vulnerability**: Once a session is established, it is often trusted indefinitely, allowing attackers to reuse stolen session tokens.
- **MFA Fatigue & Bypass**: Traditional MFA being defeated through "push bombardment" or adversary-in-the-middle (AiTM) proxies.
- **Privileged Shadow Access**: Lack of "Just-in-Time" (JIT) controls leading to excessive administrative accounts with perpetual access.

---

## 🚀 Strategic Drivers & Business Outcomes

### 🎯 Strategic Drivers
- **Zero Trust Implementation**: Moving from "Trust then Verify" to "Never Trust, Always Verify."
- **Cyber Resilience**: Proactively reducing the attack surface by hardening authentication flows and reducing dormant access.
- **Regulatory Compliance**: Meeting executive orders and regulatory requirements for "Phishing-Resistant MFA" and "Least Privilege."

### 💰 Business Outcomes
- **90% Reduction in Breach Impact**: Automated containment (account lock/token revocation) stops lateral movement in seconds.
- **Frictionless User Experience**: Reducing MFA prompts for low-risk scenarios while increasing security for high-risk attempts.
- **Unified Protection Policy**: Consistent enforcement of security baselines across heterogeneous cloud and SaaS providers.

---

## 📐 Architecture Storytelling: 30+ Advanced Diagrams

### 1. Executive Protection Architecture
*The orchestration of risk telemetry into proactive enforcement actions.*
```mermaid
graph TD
    subgraph "Identity Protection Platform"
        Portal[Protection Dashboard]
        Policy[Policy Engine]
        Enforce[Enforcement Engine]
        Session[Session Guardian]
        DB[(Policy Ledger)]
    end

    subgraph "Telemetry & Risk Ingest"
        IDP[Entra / Okta]
        EDR[CrowdStrike / SentinelOne]
        Device[Intune / Jamf]
    end

    IDP --> Policy
    EDR --> Policy
    Device --> Policy
    Policy --> Enforce
    Enforce --> Session
    Enforce --> DB
    Portal --> Policy
```

### 2. Hybrid Protection Topology
*Enforcing Zero Trust from the corporate datacenter to the cloud edge.*
```mermaid
graph LR
    subgraph "On-Prem"
        AD[Active Directory]
    end
    subgraph "Protection Hub"
        GW[Identity Proxy / Gateway]
    end
    subgraph "Cloud / SaaS"
        Cloud[AWS / Azure / SaaS]
    end
    User --> GW
    GW -->|Verify Policy| Cloud
    GW -->|Sync Baseline| AD
```

### 3. Risk-Based Access Control (RBAC 2.0)
*The path from auth request to adaptive enforcement.*
```mermaid
sequenceDiagram
    participant User
    participant IDP
    participant Protect
    participant App

    User->>IDP: Login Request
    IDP->>Protect: Fetch Risk Score
    Protect-->>Protect: Evaluate (Geo, IP, Device, Time)
    Protect->>IDP: Decision: Force Step-up MFA
    User->>IDP: Complete Strong MFA
    IDP->>App: Grant Access
```

### 4. Adaptive MFA Enforcement Flow
*Scaling authentication strength based on real-time risk.*
```mermaid
graph TD
    Req[Access Request] --> Risk{Risk Score?}
    Risk -- "Low (0-20)" --> S1[Standard SSO]
    Risk -- "Medium (21-60)" --> S2[Push MFA]
    Risk -- "High (61-100)" --> S3[Phishing-Resistant MFA]
    Risk -- "Critical" --> Block[Deny Access]
```

### 5. Conditional Access Strategy
*Standardizing policy enforcement across clouds.*
```mermaid
graph LR
    subgraph "Policy Conditions"
        User[Who?]
        Dev[Device Posture?]
        Loc[Location?]
        App[Sensitivity?]
    end
    subgraph "Enforcement"
        Decision{Policy Engine}
    end
    User --> Decision
    Dev --> Decision
    Loc --> Decision
    App --> Decision
    Decision --> Action[Allow / Block / Step-up]
```

### 6. Continuous Session Guardian
*Monitoring active sessions for anomalous behavior.*
```mermaid
graph TD
    Session[Active Session] --> Monitor[Real-time Analysis]
    Monitor -->|Detect: IP Switch| Alert[Risk Spike]
    Alert --> Action[Terminate Session Tokens]
    Action --> ReAuth[Force Re-Authentication]
```

### 7. Just-in-Time (JIT) PAM Protection
*Preventing permanent privileged access.*
```mermaid
sequenceDiagram
    Admin->>Portal: Request Admin Access (2h)
    Portal->>Manager: Approval Required
    Manager-->>Portal: Approved
    Portal->>Cloud: Provision Temp Role
    Portal->>Portal: Set 2h Timer
    Portal->>Cloud: Revoke Role (Timer Expiry)
```

### 8. Token Protection & Revocation Flow
*Invalidating stolen tokens immediately.*
```mermaid
graph LR
    Log[Threat Log] --> Detect[Detection: Token Stolen]
    Detect --> Trigger[Protection Trigger]
    Trigger --> Revoke[POST /revoke_tokens]
    Revoke --> Cloud[AWS/Azure IDP]
```

### 9. Device Trust Evaluation Model
*Integrating device health into access decisions.*
```mermaid
graph TD
    MDM[Intune/Jamf] --> Health[Device Health Check]
    Health -->|Compliant| Trust[Add Trust Token]
    Health -->|Non-Compliant| Untrust[Remove Trust Token]
    Trust --> Access[Grant Access]
```

### 10. Automated Account Quarantine
*Isolating compromised identities from the ecosystem.*
```mermaid
graph TD
    Threat[Critical Risk Detected] --> Lock[Disable AD Account]
    Lock --> Kill[Kill Cloud Sessions]
    Kill --> Notify[Alert SOC & User]
```

### 11. Phishing-Resistant MFA Path
```mermaid
graph LR
    User[User] --> FIDO[FIDO2 Security Key]
    FIDO --> Auth[Hardware Verification]
    Auth --> IDP[Secure Login]
```

### 12. Passwordless Readiness Model
```mermaid
graph TD
    Audit[Inventory] --> Enable[Hello/FaceID]
    Enable --> Rollout[Phased User Migration]
    Rollout --> Final[Remove Password Support]
```

### 13. Hybrid Identity Security Baseline
```mermaid
graph TD
    AD[AD Forest] --> Hard[Hardening: No NTLM]
    Hard --> Sync[Sync Secure Attributes]
    Sync --> Cloud[Cloud Protection]
```

### 14. OIDC Client Protection Workflow
```mermaid
sequenceDiagram
    App->>IDP: Register Client
    IDP-->>App: Secure Client ID
    App->>IDP: Validate URI
```

### 15. SAML Signature Verification Flow
```mermaid
sequenceDiagram
    SP->>SP: Validate Cert Thumbprint
    SP-->>IDP: Accept Response
```

### 16. Token Life-cycle Protection
```mermaid
graph LR
    Issue[Issue Token] --> AT[Short-lived Access]
    Issue --> RT[Protected Refresh]
```

### 17. API Key Rotation Automation
```mermaid
graph LR
    Key[API Key] --> Expiry[90% Life]
    Expiry --> Rotator[AWS/Azure Rotator]
```

### 18. Conditional Access (Geo-Blocking)
```mermaid
graph TD
    Login[Login: IP Country X] --> Policy{Is Country Blocked?}
    Policy -- Yes --> Deny[Immediate Block]
```

### 19. Privileged Session Recording & Lock
```mermaid
graph TD
    Admin[Admin] --> Proxy[Session Proxy]
    Proxy --> Record[Record Feed]
    Proxy -->|Sus| Lock[Force Disconnect]
```

### 20. Identity Risk Score aggregation
```mermaid
graph LR
    L[Logins] --> S[Score Engine]
    B[Behavior] --> S
    S --> V[Visual Dash]
```

### 21. Real-time Enforcement Ingest
```mermaid
graph LR
    IDP[Okta] --> API[Protection API]
    API --> Enforce[Enforcement Logic]
```

### 22. Policy Versioning & Rollback
```mermaid
graph TD
    V1[Policy v1] --> Edit[Edit]
    Edit --> V2[Policy v2 (Draft)]
    V2 --> Deploy[Promote to Prod]
```

### 23. Zero Trust Posture Calculation
```mermaid
graph LR
    Metrics[MFA, JIT, Posture] --> Model[Stats Model]
    Model --> Maturity[Maturity Score]
```

### 24. SIEM Feedback Loop
```mermaid
graph LR
    SIEM[Alerts] --> API[Protection API]
    API --> Action[Auto-Remediate]
```

### 25. EDR Device Compliance Integration
```mermaid
graph LR
    EDR[CrowdStrike] --> API[Protection API]
    API -->|High Risk Host| Block[Block Identity Login]
```

### 26. MFA Bypass Prevention (FIDO)
```mermaid
graph TD
    Push[Push Bombardment] --> Deny[User Deny]
    Deny --> Lockdown[Enforce FIDO-Only]
```

### 27. Token Theft Prevention (Binding)
```mermaid
graph TD
    Token[Token] --> Bind[Bind to Device Hardware]
    Bind --> Usage[Usage: Valid Device Only]
```

### 28. Identity Lifecycle Hardening
```mermaid
stateDiagram-v2
    Creation --> Verification: MFA Setup
    Verification --> Usage: Daily RBAC
    Usage --> Termination: Auto-Cleanup
```

### 29. Regional Enforcement Availability
```mermaid
graph LR
    US[US Engine] <->|Global Policy Sync| EU[EU Engine]
```

### 30. Strategic Protection Roadmap
```mermaid
graph TD
    Now[Conditional Access] --> Goal[Continuous Trust Engine]
```

---

## 🛠️ Technical Stack & Implementation

### Protection Engine
- **Processing**: Python 3.11+ / FastAPI
- **Enforcement**: Real-time integration with IDP APIs (Okta, Entra ID, AWS).
- **State**: Redis (Session monitoring and risk-state windowing).

### Frontend (Policy Management)
- **Framework**: React 18 / Vite
- **Visuals**: Lucide Icons / Indigo Protection Theme.
- **Charts**: Recharts (Enforcement Trends & Risk Analytics).

### Infrastructure
- **IaC**: Terraform (Global EKS/DB deployment).
- **Secrets**: AWS Secrets Manager / HashiCorp Vault.

---

## 🚀 Deployment Guide

### Local Development
```bash
# Clone the repository
git clone https://github.com/devopstrio/identity-threat-protection.git
cd identity-threat-protection

# Setup environment
cp .env.example .env

# Launch services
make up
```
Access the Management Portal at `http://localhost:3000`.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
