- [ ] Update `.github/workflows/ci-pipeline.yml`
  - [ ] Fix matrix to only test/build `frontend`
  - [ ] Add backend smoke job that uses root `package.json` dependencies (since `backend/` has no `package.json`)
  - [ ] Wait for Mongo service readiness before running backend checks
  - [ ] Improve caching paths (frontend lockfile vs root lockfile)
- [ ] Validate by running CI-equivalent commands locally (root install, frontend install/build, backend smoke)

