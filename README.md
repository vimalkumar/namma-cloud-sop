# Namma Cloud — Private Cloud Infrastructure SOP

Standard Operating Procedures for setting up and managing our private cloud data center infrastructure.

## 📖 What's Inside

A comprehensive Quarto book covering:

- **Vision & Foundations** — Mission, principles (AI-first, curiosity-driven), team structure
- **Standard Operating Procedures** — Server transportation, rack fitting, power & network connections, hardware verification
- **Quality & Governance** — Maker-Checker process, Root Cause Analysis (RCA), issue tracking & ticketing
- **Learning & Technology** — Upskilling modules, Namma DSL integration
- **Appendices** — Printable checklists, glossary of terms

## 🚀 Quick Start

### Local Development

```bash
# Preview the book locally (hot-reload)
quarto preview

# Build the book
quarto render
```

Output goes to `_book/`.

### Requirements

- [Quarto](https://quarto.org/docs/get-started/) v1.4+

## ☁️ Deployment (Cloudflare Pages)

The site is deployed to Cloudflare Pages with password protection.

### Build Configuration

| Setting | Value |
|---------|-------|
| Build command | `bash build.sh` |
| Build output directory | `_book` |
| Production branch | `main` |

### Environment Variables

Set in **Cloudflare Dashboard → Workers & Pages → Settings → Environment variables**:

| Variable | Description |
|----------|-------------|
| `CFP_PASSWORD` | Password to access the site (HTTP Basic Auth) |

### Password Protection

The `functions/_middleware.js` file acts as a Cloudflare Pages Function that enforces HTTP Basic Auth on every page. Username can be anything — only the password is validated against `CFP_PASSWORD`.

## 📁 Project Structure

```
namma-cloud-sop/
├── _quarto.yml                       # Quarto book configuration
├── index.qmd                         # Preface
├── custom.css                        # Mermaid diagram styling fixes
├── build.sh                          # Cloudflare Pages build script
├── functions/
│   └── _middleware.js                # Password protection middleware
└── chapters/
    ├── vision.qmd                    # Vision & Introduction
    ├── principles.qmd                # Principles & Culture
    ├── team-structure.qmd            # Team Structure & Departments
    ├── sop-transportation.qmd        # SOP: Server Transportation
    ├── sop-rack-fitting.qmd          # SOP: Rack Fitting & Installation
    ├── sop-power-network.qmd         # SOP: Power & Network Connections
    ├── sop-server-verification.qmd   # SOP: Server Hardware Verification
    ├── maker-checker.qmd             # Maker-Checker Process
    ├── rca-module.qmd                # Root Cause Analysis Module
    ├── issue-tracking.qmd            # Issue Tracking & Ticketing
    ├── learning-module.qmd           # Learning & Upskilling Module
    ├── namma-dsl.qmd                 # Namma DSL Integration
    ├── appendix-checklists.qmd       # Printable Checklists
    └── appendix-glossary.qmd         # Glossary of Terms
```

## 🔄 Updating

1. Edit the `.qmd` files
2. Preview locally with `quarto preview`
3. Commit and push — Cloudflare auto-deploys on every push to `main`

