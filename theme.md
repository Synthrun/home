# Synthrun — Brand Theme & Vibe Guide

## Brand Essence

Synthrun is an **architecture & app reliability studio** for the vibe-coding era. We take apps built fast and make them work reliably. The brand sits at the intersection of a high-end architecture firm, a design studio, and a hardcore engineering consultancy. Minimal. Editorial. Restrained.

> **Tagline**: *"Vibe-coded apps that actually ship."*
> **Domain**: synthrun.site
> **Est.** 2026

---

## Design Vibe (5 Words)

Minimal, monochrome, editorial, architectural, deliberate.

## Visual Language

- **Monochromatic palette** — Everything lives in shades of one neutral scale. No accent colors. No gradients except ambient glows.
- **Border-heavy grid** — Every section is framed by thin rules. The layout breathes through deliberate padding and column gaps.
- **Restrained motion** — Subtle fade-in reveals, gentle hover lifts, slow marquee. Nothing is bouncy or playful.
- **Custom cursor** — Fine crosshair dot with cross-lines. Signals precision and craft.
- **Dark/light mode** — Both treated equally via CSS custom properties. Auto follows system preference; user can manually cycle (Auto → Dark → Light) with a toggle or pressing `T`.
- **Ambient glow** — A single soft radial gradient drifts slowly in the background. Never loud.
- **Loader** — Simple spinning ring with logo. Disappears on load.

---

## Color Palette

### Light Mode
| Token | Hex | Use |
|-------|-----|-----|
| `--white` | `#fafaf8` | Page background |
| `--off` | `#f2f1ee` | Hover/surface background |
| `--ink` | `#111110` | Primary text, headings, accents |
| `--ink2` | `#3a3a38` | Body text, descriptions |
| `--ink3` | `#888884` | Secondary labels, muted text |
| `--ink4` | `#c4c4be` | Numbers, borders, decorative |
| `--rule` | `#e0dfd9` | Borders, dividers, strokes |
| `--surface` | `rgba(255,255,255,0.75)` | Card/panel overlays |
| `--nav-bg` | `rgba(250,250,248,0.94)` | Sticky nav with blur |

### Dark Mode
| Token | Hex | Use |
|-------|-----|-----|
| `--white` | `#101114` | Page background (deep charcoal) |
| `--off` | `#181a1f` | Hover/surface background |
| `--ink` | `#eceae2` | Primary text (warm off-white) |
| `--ink2` | `#c4c0b5` | Body text |
| `--ink3` | `#989388` | Secondary labels |
| `--ink4` | `#646055` | Numbers, borders |
| `--rule` | `#2b2e35` | Borders, dividers |
| `--surface` | `rgba(24,26,31,0.82)` | Card/panel overlays |
| `--nav-bg` | `rgba(16,17,20,0.9)` | Sticky nav with blur |

---

## Typography

### Primary Font: DM Mono
- **Weights used**: 300, 400, 500
- **Used for**: All UI text, navigation, labels, body copy, descriptions, stat labels, tags, buttons.
- **Why**: Monospace signals code, precision, engineering. The lighter weights (300) keep it airy and readable at small sizes.
- **Size range**: `0.5rem` (tags) to `0.8rem` (body copy). Everything is intentionally small — it expects the reader to lean in.

### Display Font: Fraunces
- **Weights used**: 300 (italic), 400 (regular)
- **Optical size axis**: `opsz 9..144`
- **Used for**: Hero headings, section titles, service names, team names, stat numbers, pull quotes.
- **Why**: Soft serif with variable optical sizing brings editorial warmth and contrast to the monospace UI. The italic cut is the "voice" — used for emphasis and emotional texture.
- **Key CSS**: `font-family: 'Fraunces', serif; font-weight: 300; letter-spacing: -0.03em;`

### Pairing Principle
- **Headings** → Fraunces (serif, editorial, italic for emphasis)
- **Everything else** → DM Mono (monospace, technical, restrained)

---

## Voice & Tone

### Personality Archetype
*The Quiet Expert* — Confident but never loud. Technical but not academic. Speaks in short, declarative sentences. No marketing fluff.

### Tone Guidelines
| Quality | Always | Never |
|---------|--------|-------|
| Direct | Short sentences. Few adjectives. | No buzzwords ("synergy", "leverage", "paradigm") |
| Technical | Use real terms (CI/CD, ADR, SLI). | Don't explain basics. Assume the reader knows. |
| Human | "We fix broken flows." | "We provide comprehensive solutions." |
| Honest | "Architecture-first." | "We transform your business." |
| Warm | "Vibe-coded apps that actually ship." | Corporate jargon. Robotic formality. |
| Specific | "Audit, fix, tune, deploy." | "End-to-end services." |

### Key Phrases That Define the Voice
- "Vibe-coded" — Our term for AI-assisted / rapid-built apps
- "Architecture-first" — Our operating principle
- "...that actually ship" — Our promise (appears in tagline)
- "Clear outcomes" — Section subtitle
- "Built by practitioners" — Team section subtitle
- "No fluff, no long discovery cycles" — Process description
- "We pick what ships fastest and runs hardest, not what looks impressive on a slide." — Stack pull quote

### Sentence Style
- Start sentences with verbs: "Audit your app." / "Ship safely." / "Triage, fix, and harden."
- Use em dashes for emphasis: "Architecture-first delivery. — Clear outcomes."
- Italicize the emotional word in section headers: `Architecture-first delivery.<br><em>Clear outcomes.</em>`
- Keep paragraphs to 1-3 sentences max.

---

## Imagery & Media

- **No photography** — Profile photos are the only images on the site.
- **Icons** — Custom inline SVGs only. Thin stroke (1.4–1.5px), matching `--ink3` color. Geometric, minimal.
- **Profile photos** — Two variants per person: `*_light.png` and `*_dark.png`. Swapped via JS on theme change.
- **Logo** — Simple circular mark (unfilled circle + wavy arc). Used as `.ico` and `.png`.

---

## Content Structure

### Services (5 offerings, always enumerated)
| # | Name | Tags |
|---|------|------|
| 01 | Architecture Review & System Design | System Design, ADR, Risk Review, Roadmap |
| 02 | Stability & Bug Fixing | Debugging, QA, Logging, Testing |
| 03 | Performance & Reliability | Profiling, Caching, Database, Observability |
| 04 | Deployment & Handoff | CI/CD, Docker, Environments, Runbooks |
| 05 | AI Search & Visibility | Search Visibility, Prompt Intelligence, Content Lab, Analytics |

### AI Search & Visibility Sub-Services (8)
| Service | Description |
|---------|-------------|
| Search Visibility | Daily tracking of brand visibility, position, and sentiment across LLMs |
| Page Optimization | Six-dimension audits for AI citation readiness |
| Prompt Intelligence | Maps buyer questions to your content presence in AI answers |
| Content Lab | From visibility gap to published, citable content |
| Competitor Benchmarking | Share of voice, positioning, and gap analysis vs competitors in AI |
| Action Center | Impact-ranked actions tracked to completion |
| Source Analytics | Identifies domains AI trusts and how to become one |
| Visitor Analytics | AI bot and human visitor traffic that GA4 misses |

### Process (4 steps)
01. Audit & Align
02. Architecture Plan
03. Stabilize & Optimize
04. Deploy & Own

### Team Members
| Name | Role |
|------|------|
| Aditya Srivastava | ML Engineer and MLOps Practitioner |
| Ashray Singh | Product Management and AI |
| Ayush Verma | AI/ML Engineer and Full-Stack Developer |
| Devansh Singh | AI/ML Engineer and Generative AI Practitioner |
| Saniya Saw | AI & ML Developer and Android Engineer |

### Stack (7 categories)
| Category | Technologies |
|----------|-------------|
| Languages & Runtimes | Python, TypeScript, JavaScript, Go, Rust, Node.js |
| Frontend & Fullstack | React, Next.js, Svelte, Vue, Tailwind |
| Backend & API | FastAPI, Django, Express, GraphQL, REST, WebSockets |
| AI / ML & LLMs | PyTorch, TensorFlow, LangChain, Hugging Face, OpenAI, Vector DBs |
| Databases & Storage | PostgreSQL, SQLite, MongoDB, Redis, S3 |
| Cloud & Infrastructure | AWS, Cloudflare, GCP, Vercel, Linux |
| DevOps & Observability | Docker, GitHub Actions, Terraform, MLflow, Sentry |

---

## Writing Examples

### Problem statements (for case cards)
- "Small changes break unrelated pages"
- "No clear data flow across frontend, backend, and APIs"
- "Launch traffic overwhelms the current stack"
- "Secrets and permissions are scattered across environments"
- "Checkout or signup fails intermittently"
- "Landing pages take 8+ seconds to render"
- "Infra costs rise without growth"
- "Releases are manual and error-prone"
- "Bad deploys take hours to revert"
- "No docs or handoff for new devs"

### Solution statements (for case cards)
- "Map dependencies, set module boundaries, and define contracts so changes stay contained."
- "Create architecture diagrams, API contracts, and data ownership for every domain."
- "Capacity planning, caching, queueing, and fallback paths before launch."
- "Reproduce, patch edge cases, and add tests for critical paths."
- "Bundle split, image optimization, and server-side caching."
- "Right-size resources, remove hot loops, and cache hot paths."
- "Automate builds, staging, and approvals with repeatable pipelines."
- "Versioned releases with rollback scripts and checkpoints."
- "Runbooks, architecture docs, and onboarding notes."

### Impact tags (1-2 words)
- "Predictable updates" / "Faster handoffs" / "Stable launches" / "Safer releases"
- "Fewer failed sessions" / "Trustworthy UI" / "Downtime minimized" / "Reliable automations"
- "Faster first paint" / "Consistent response times" / "Lean operations" / "Early detection"
- "Repeatable releases" / "Fast recovery" / "Predictable behavior" / "Smooth handoff"

---

## Anti-Patterns (What Not to Do)

- **No emoji** anywhere in content, UI, or social copy
- **No exclamation marks** (except in the tagline)
- **No stock photography** or illustrations
- **No primary colors** (blue links, green buttons, etc.)
- **No gradient backgrounds** except the ambient glow
- **No rounded corners** (borders are all sharp)
- **No carousels** or sliders (horizontal scroll with snap for case cards only)
- **No "we're passionate"** or similar platitudes
- **No testimonials** or social proof bars
- **No blog** or content marketing section
