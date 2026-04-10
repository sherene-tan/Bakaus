

## Remove Unnecessary Lockfiles

The project has multiple lockfiles that should be cleaned up:

1. **`bun.lock`** — text-based Bun lockfile (keep if using Bun)
2. **`bun.lockb`** — binary Bun lockfile (redundant with `bun.lock`)
3. **`package-lock.json`** — npm lockfile (redundant if using Bun)

### Plan
- Delete `bun.lockb` (old binary format, superseded by `bun.lock`)
- Delete `package-lock.json` (npm lockfile, not needed when using Bun)
- Keep `bun.lock` as the single lockfile

