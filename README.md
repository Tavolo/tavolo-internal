# Tavolo Internal Tools

Internal scripts and utilities for the Tavolo team.

## Scripts

### `sync-demo-data.ts`
Syncs demo account data for sales presentations.

### `generate-report.ts`
Generates weekly metrics report for team standup.

### `import-opentable-bulk.ts`
Bulk import tool for migrating multiple locations from OpenTable.

## Usage

```bash
npx ts-node scripts/sync-demo-data.ts
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:
- `DATABASE_URL`
- `TAVOLO_API_KEY`
