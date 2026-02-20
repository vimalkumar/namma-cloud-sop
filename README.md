# Namma Cloud — Private Cloud Infrastructure SOP

Standard Operating Procedures for setting up and managing our private cloud data center infrastructure.

**Designed for workers with zero technical background** — all procedures include visual guides, plain-language explanations, and step-by-step instructions.

## 📖 What's Inside

A comprehensive Quarto book covering:

- **Vision & Foundations** — Mission, principles (AI-first, curiosity-driven), team structure, hardware visual guide, power & electrical basics
- **Standard Operating Procedures** — Hardware transportation, rack fitting, power & network connections, server verification (with two-tier structure for different skill levels)
- **Quality & Governance** — Maker-Checker process, Root Cause Analysis (RCA), issue tracking & ticketing
- **Learning & Technology** — Upskilling modules, Namma DSL integration
- **Appendices** — Printable checklists, glossary (62 terms), One Point Lessons (visual quick-reference cards)

### Key Features

- **19 chapters** covering complete datacenter setup and operations
- **28 images** with detailed captions showing hardware, cables, connectors, and equipment
- **10 checklists** including universal Pre-Work Safety checklist
- **6 One Point Lessons** (OPL) templates for visual quick-reference
- **62 glossary terms** organized by topic with cross-references
- **Accessibility-first** — all jargon explained with analogies, visual diagrams throughout

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

- [Quarto](https://quarto.org/docs/get-started/) v1.6.30+
- Chromium (for Mermaid diagram rendering)

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
├── images/                           # Visual assets (28 images)
│   ├── README.md                     # Image documentation
│   ├── server-*.jpg                  # Server photos
│   ├── cable-*.jpg                   # Cable and connector photos
│   ├── rack-*.jpg                    # Rack and datacenter photos
│   ├── module-*.png/jpg              # Network module photos
│   └── [other equipment photos]
└── chapters/
    # Part 1: Vision & Foundations
    ├── vision.qmd                    # Vision & Introduction
    ├── principles.qmd                # Principles & Culture
    ├── team-structure.qmd            # Team Structure & Departments
    ├── hardware-visual-guide.qmd     # Hardware & Equipment Visual Guide (NEW)
    ├── power-basics.qmd              # Power & Electrical Basics (NEW)

    # Part 2: Standard Operating Procedures
    ├── sop-transportation.qmd        # SOP: Hardware Transportation (hardware-agnostic)
    ├── sop-rack-fitting.qmd          # SOP: Rack Fitting & Installation (with cage nuts, blank panels)
    ├── sop-power-network.qmd         # SOP: Power & Network Connections (inline troubleshooting)
    ├── sop-server-verification.qmd   # SOP: Server Hardware Verification (two-tier structure)

    # Part 3: Quality & Governance
    ├── maker-checker.qmd             # Maker-Checker Process
    ├── rca-module.qmd                # Root Cause Analysis Module
    ├── issue-tracking.qmd            # Issue Tracking & Ticketing

    # Part 4: Learning & Technology
    ├── learning-module.qmd           # Learning & Upskilling Module
    ├── namma-dsl.qmd                 # Namma DSL Integration

    # Part 5: Appendices
    ├── appendix-checklists.qmd       # Printable Checklists (10 total)
    ├── appendix-glossary.qmd         # Glossary of Terms (62 terms, topic-grouped)
    └── appendix-opl.qmd              # One Point Lessons - Visual Quick Reference (NEW)
```

## 📊 Content Statistics

- **19 chapters** (14 original + 5 new)
- **28 images** with detailed captions
- **10 checklists** (including Pre-Work Safety)
- **6 One Point Lessons** (OPL) templates + blank template
- **62 glossary terms** organized by 6 topics
- **47 cross-references** (all validated)

## 🎯 Design Philosophy

This SOP book is designed for **workers with zero technical background**:

- **Visual-first** — Mermaid diagrams, photos with annotated captions, ASCII art
- **Plain language** — Every technical term explained with real-world analogies
- **Inline troubleshooting** — Solutions positioned where problems occur
- **Multi-tier procedures** — Basic tasks for any team member, advanced tasks for Team Lead
- **One Point Lessons** — Single-page visual quick-reference cards (80% visual / 20% text)
- **Safety-critical** — Clear warnings with consequences of violations

## 🔄 Updating

1. Edit the `.qmd` files
2. Preview locally with `quarto preview`
3. Commit and push — Cloudflare auto-deploys on every push to `main`

### Adding Images

Place new images in `images/` folder and reference them in chapters:

```markdown
![Description](../images/filename.jpg){width=600px}

*Caption with details. Notice: (1) Key feature, (2) Another feature.*
```

## 🤝 Contributing

When creating new content:

- Follow the established tone (direct, concise, accessibility-first)
- Use analogies for all technical concepts
- Add inline troubleshooting for steps that can fail
- Include visual aids (Mermaid diagrams, tables, photos)
- Cross-reference related chapters using `#sec-*` anchors
- Test with someone unfamiliar with the topic

## 📝 License

Internal use only — Namma Cloud Infrastructure Team
