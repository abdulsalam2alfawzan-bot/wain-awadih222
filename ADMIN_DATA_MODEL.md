# مخطط بيانات بوابة الإدارة

## الجداول الجديدة

### `wa_admin_users`

- `id`
- `name`
- `username`
- `role`
- `passwordSalt`
- `passwordHash`
- `status`
- `mustChangePassword`
- `failedAttempts`
- `lockedUntil`
- `lastLoginAt`
- `createdAt`
- `updatedAt`

### `wa_admin_sessions`

- `id`
- `token`
- `userId` → `wa_admin_users.id`
- `createdAt`
- `lastActivityAt`
- `expiresAt`
- `userAgent`
- `revokedAt`

### `wa_audit_logs`

- `id`
- `userId` → `wa_admin_users.id`
- `userName`
- `userRole`
- `action`
- `entityType`
- `entityId`
- `before`
- `after`
- `reason`
- `metadata`
- `at`
- `createdAt`
- `updatedAt`

## العلاقات المستخدمة في الإدارة

```text
wa_customers 1 ─── * wa_vehicles
wa_customers 1 ─── * wa_requests
wa_vehicles  1 ─── * wa_requests
wa_requests  1 ─── * wa_referrals
wa_partners  1 ─── * wa_referrals
wa_referrals 1 ─── 0..1 wa_ratings
wa_referrals 1 ─── 0..1 wa_fees
wa_referrals 1 ─── * wa_objections
wa_partners  1 ─── * wa_discounts
wa_partners  1 ─── * wa_invoices
wa_invoices  1 ─── * wa_payments
wa_admin_users 1 ─── * wa_admin_sessions
wa_admin_users 1 ─── * wa_audit_logs
```

## سلامة العلاقات

تم توسيع `WA.Storage.integrityCheck()` للتحقق من:

- أن كل جلسة إدارة مرتبطة بمستخدم موجود.
- أن كل سجل تدقيق يحتوي على مستخدم موجود عندما يكون الإجراء بشريًا.
- استمرار الفحوص السابقة للعملاء والمركبات والطلبات والإحالات والرسوم والفواتير والمدفوعات.
