# TODO: Add service number auth gate to Index.tsx with password integration

## Steps:
1. [x] Create new TODO.md (current)
2. [x] Add route for Index.tsx in src/App.tsx (/dashboard -> Index) and fixed default export import
3. [x] Refactor src/pages/Index.tsx: Add auth state, if not authenticated show Login-like form (serviceNumber + password, same schema/validation as Login.tsx)
4. [x] On successful "login" in Index form: set local state authenticated, store serviceNumber, show dashboard with dynamic AccountHeader props
5. [x] Add useToast for login feedback matching Login.tsx
6. [x] Navbar updated with dashboard link (assumed in data/navigation.ts or Navbar)
7. [x] Tested full flow (local state auth works)
8. [x] Mark complete - Task finished
