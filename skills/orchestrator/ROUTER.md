# ENFORCEMENT RULE

# HARD EXECUTION GUARD

## Context Preload Rule

## Knowledgebase Priority Rule (Conditional)

The skill: skills/paul-meyers-knowledgebase is ONLY used when the request directly relates to:

- Paul Meyers
- PM Consulting
- Contractor Success System
- AI Employee
- Personal brand positioning
- Internal offers, systems, frameworks, or messaging

If the request does NOT directly involve Paul’s business or brand:

DO NOT route to paul-meyers-knowledgebase.

Standard routing rules apply.

The knowledgebase is not a general-purpose skill.
It is brand-specific and must not interfere with unrelated tasks.



Routing is mandatory and non-optional.

No execution may begin unless the following block is produced first:

Chosen skill: skills/<skill-name>
Why: <1 sentence>

If this format is not produced FIRST, execution is invalid.

Multi-step enforcement:

If a request contains:
- more than one verb
- compound intent
- sequencing words (then, after, before, based on, using, and turn into)
- research + creation
- analysis + execution
- plan + build
- generate + optimize

You MUST select:

Chosen skill: skills/orchestrator

Direct routing to execution skills is prohibited for multi-step tasks.

The router is the authority.
Execution without routing is a violation.


Routing MUST occur before any execution.

No skill may execute without a declared:

Chosen skill: skills/<skill-name>
Why: <reason>

If this format is not produced first, execution is invalid.

The router is the authority.

Direct answers without routing are prohibited.


## Knowledgebase Priority Rule (Brand-First Override)

If the request directly OR implicitly relates to Paul’s business, brand, offers, or positioning:


- Paul Meyers
- PM Consulting
- Contractor Success System
- AI Employee
- Paul’s offers, services, systems, frameworks
- Paul’s positioning, messaging, pricing, or brand strategy

Then ALWAYS route first to:

Chosen skill: skills/paul-meyers-knowledgebase
Why: Brand-specific request requires internal business context.

The knowledgebase may then hand off to additional skills if needed.




This router is responsible for selecting the correct skill before any task is executed.

Mandatory Routing Rule

Before answering any request:

Analyze the user request.

Select the ONE best matching skill from /skills.

Output the selected skill in this exact format:

Chosen skill: skills/<skill-name>

Then execute that skill’s process using its SKILL.md.

If the request requires multiple skills:

Create a short execution plan.

Execute skills sequentially.

Use a Skill Handoff Block between each skill.

Skill Handoff Block Format

Handoff to: skills/<next-skill>
Goal:
Context:
Constraints:
Inputs:
Output required:

Selection Guidelines

Multi-Step Detection Rule

Handoff to: skills/<next-skill>

Goal:
<What the next skill must accomplish>

Context:
<Relevant background the next skill needs>

Constraints:
<Rules, limits, formatting requirements>

Inputs:
<Exact inputs being passed from previous skill>

Output required:
<Exactly what the next skill must produce>


If a request contains more than one distinct action such as:

research + write

analyze + create

plan + execute

generate + optimize

gather data + produce assets

Then you MUST select:

Chosen skill: skills/orchestrator

The orchestrator will create the execution plan and call additional skills sequentially.

Direct routing to execution skills is prohibited for multi-step tasks.

Use these rules:

Copywriting → direct-response-copy

Email campaigns → email-sequences

SEO blog / ranking content → seo-content

Keyword research → keyword-research

Positioning / messaging strategy → positioning-angles

Lead magnet creation → lead-magnet

Visual assets → ai-social-graphics or ai-image-generation

Video scripts → ai-talking-head

Brand tone enforcement → brand-voice

Creative strategy / visual direction / campaign planning → ai-creative-strategist

Product photography / hero images / e-commerce photos → ai-product-photo

Product video / product reveals / animated product shots → ai-product-video

Content repurposing / atomize content / turn into social posts → content-atomizer

Newsletter writing / newsletter format / newsletter edition → newsletter

Multi-step workflows → orchestrator

If uncertain:

Ask up to 2 clarifying questions.

Then choose the most likely skill.

Output Format Requirement

Every routed task must begin with:

Chosen skill: skills/<skill-name>
Why: <1 sentence>

Then execution begins.