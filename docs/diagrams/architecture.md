# Architecture & Flow Diagrams

## 11. Risk-Based Access Flow (Detailed)
*How the protection engine evaluates every access attempt against real-time risk.*

```mermaid
graph TD
    Auth[Access Request] --> Context[Gather Context: IP, Device, Time]
    Context --> Policy[Evaluate Policy Set]
    Policy --> Risk[Calculate Risk Score]
    Risk -->|Score < 20| Grant[Allow]
    Risk -->|Score 21-60| Step[Step-up MFA]
    Risk -->|Score > 60| Deny[Block & Alert]
```

## 13. Conditional Access Enforcement Loop
```mermaid
graph LR
    IDP[Identity Provider] --> Engine[Protection Engine]
    Engine --> Policy[Policy Logic]
    Policy --> Result[Enforcement Action]
    Result --> IDP
```

## 20. Identity Protection Kill Chain
```mermaid
graph TD
    Attack[Credential Theft] --> Detect[Detection]
    Detect --> Protect[Protection: Revoke Token]
    Protect --> Remediate[Password Reset Force]
```
