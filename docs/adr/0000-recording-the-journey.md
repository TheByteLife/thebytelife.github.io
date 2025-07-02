---
number: "0000"
title: Recording the Journey of the "The Byte Life"
drafted: 2026-09-15
accepted: 2026-09-15
status: Accepted
tags: [meta, process]
---

# ADR 0000: Recording the Journey of the "The Byte Life"

## Purpose

This project is maintained by a single person, and these ADRs exist to document
the evolution of the project and the reasoning of its sole maintainer — not to
gate or coordinate changes. They serve two readers:

1. **Future me**, who will not remember why things are the way they are.
2. **Anyone evaluating this project**, as evidence of deliberate decision-making
   over time — including the decisions that were wrong and later reversed.

Every consequential change to the project is recorded here: project structure,
language and tooling choices, CI/CD, dependencies, and process decisions like
this one.

## Format

Each ADR is a single Markdown file in `docs/adr/`. Drafts are named
`XXXX-short-title.md`; a sequential number is allocated only upon
acceptance, by renaming the file to `NNNN-short-title.md`. Numbers are
never consumed by drafts, so the accepted sequence is unbroken.

Each ADR contains front matter — number, title, drafted, accepted, status,
tags — and these sections:

- **Context** — the situation and forces at play when the decision was made.
- **Decision** — what was chosen, stated plainly.
- **Alternatives considered** — what was rejected and why. Honest reasons
  count: "it felt premature" and "I didn't understand the tradeoff yet" are
  legitimate entries. This is the most important section.
- **Consequences** — expected effects, positive and negative. Updated later if
  reality disagreed (appended, never rewritten — see below).

Sections that don't apply to a given decision may be omitted. Half a page to
one page is the target; if writing the ADR takes longer than thinking about
the decision, something is wrong.

## Lifecycle

- **Draft** — committed as `XXXX-...` and free to iterate. Drafts are
  deliberately not indexed in `docs/adr/README.md`; a draft is a
  candidate, not a decision. A draft that never reaches acceptance is
  simply dropped — git history retains it, the index never knew it.
- **Accepted** — the file is renamed to the next sequential number and
  the index gains a row. The number reflects the order in which
  decisions were *committed*, not the order in which drafts began;
  the `drafted` and `accepted` dates preserve the true chronology.
- Reversals are welcome. An ADR chain that shows a decision made, learned
  from, and undone is a success story, not a failure.

## Immutability

Accepted ADRs are immutable, with three exceptions:

1. **Observed later** — a dated note appended to Consequences when
   reality disagrees with a prediction. Predictions are never edited.
2. **Supersession** — a new ADR reversing the old one, with a dated
   *Observed later* note appended to the superseded ADR summarising
   what played out, before its status changes to `Superseded by NNNN`.
   Multiple ADRs may supersede a single decision if different aspects
   failed separately; each must specify which aspect it replaces.
   Both link forward and back.
3. **Typos and metadata** — non-substantive fixes only.

## Chronicle Conventions

- `docs/adr/README.md` maintains an index of all ADRs: number, date, title,
  one-line summary, status, tags. This is the project's autobiography at
  a glance.
- The ADR file's own git history is the provenance record; no separate
  commit-stamping is performed. `git log -- docs/adr/NNNN-*` recovers when
  a decision landed.
- Tags in front matter (e.g. `tooling`, `ci-cd`, `structure`, `language`)
  allow filtering the record by category.

## Decision Threshold

An ADR is written when a change **expands or shifts** the set of
architectural boundaries. Routine implementation work within the space
authorized by existing ADRs does not need one.

The question is not "is this change important?" but "does this change
require a new rule, or can it be expressed using rules we already have?"

When in doubt, write it — but if ADRs start being written for
minor and mundane changes, dial it back.

## Consequences

- Positive: the repository carries its own history of reasoning; future me
  inherits context instead of archaeology; evaluators see judgment in
  action, including its corrections.
- Negative: an ongoing writing obligation that competes with building the
  project itself, mitigated by the one-page cap.
- Neutral: this ADR governs itself without exception. Amendments follow the
  supersession mechanism defined above, like any other ADR. Numbers are
  never re-ordered to group related ADRs; the `supersedes` links carry
  relationships, numbers carry only sequence.
