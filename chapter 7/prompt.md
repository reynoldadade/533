# Chapter 7 Prompts — Thinking Like a Professional

Every AI prompt from chapter 7, in the order it appears in the chapter, grouped
under the same section headings. Copy any one of these into your AI tool of
choice along with the relevant part of your project (folder structure, a
component, or a full file) to run that section's review yourself against
`ecommerce-app-legacy`, `ecommerce-app-refactored`, `RecipeBox`, or your own
project.

## Scaling Applications

### Using AI to Evaluate Scaling

```
Act as a senior frontend engineer.

Analyze this Vue application architecture and identify potential scaling issues if the application grows significantly in users and features.
Explain which parts of the architecture may struggle and suggest improvements. Base your recommendations on the impact of the optimization on performance and efficiency so we can better prioritize what is most important.
```

## Component Reuse Strategies

### AI Prompt for Identifying Reusable Components

```
Review these Vue components and identify patterns that could be extracted into reusable UI components.
Explain which components appear duplicated and how they could be generalized.
```

## Global State vs Local State

### State Architecture Review

```
Analyze the state management approach in this Vue application.
Identify any state that appears incorrectly scoped and recommend improvements.
```

## Predicting Failure Points

### Using AI to Simulate Failures

```
Identify potential failure scenarios in this Vue application.
Suggest improvements to make the application more resilient.
```

## Performance Bottlenecks

### AI-Assisted Performance Review

```
Analyze this Vue code for potential performance bottlenecks.
Explain which patterns may become problematic at scale.
```

## Avoiding Maintainability Risks

### Maintainability Review

```
Review this Vue project for maintainability risks.
Identify code smells and suggest improvements.
```

## AI-Led Architecture Audit of ShopVue

### Prompting the AI for an Architecture Review

```
Act as a senior frontend engineer reviewing a Vue 3 application.

Here is the project structure:

[project structure]

Identify potential issues related to:
- scalability
- performance
- maintainability
- component design
- state management

Explain the risks and suggest improvements.
```

## Component Boundaries

### Component Responsibility Review

```
Review these Vue components and identify any that appear to have too many responsibilities.
Suggest how they could be refactored.
```

## Documentation for Teams

### Documentation Generation

```
Generate developer documentation for this Vue project explaining the architecture, state management approach, and component structure.
```

## Senior Engineer Code Review Simulation

### Code Review Prompt

```
Act as a senior frontend engineer reviewing a pull request.

Review the following Vue 3 component and provide feedback on:

- readability
- maintainability
- performance
- architecture
- adherence to best practices

Provide constructive suggestions for improvement.
```

## The Professional Developer Checklist

Eleven prompts meant to be reused throughout a project's life, not just once.
The chapter suggests turning these into hooks, skills, or agents so they're
easy to reach for at any stage.

### Architecture Review Prompt

```
Act as a senior frontend engineer reviewing a Vue 3 application.

Analyze the architecture of this project and identify potential issues related to:

- scalability
- maintainability
- component design
- state management
- folder structure

Explain the risks and suggest improvements.
```

### Scalability Analysis Prompt

```
Analyze this Vue application and identify areas that may struggle to scale if the number of users or data increases significantly.

Focus on:
- data fetching
- rendering large lists
- state management
- component structure
- API communication

Suggest improvements for better scalability.
```

### Performance Bottleneck Prompt

```
Review this Vue code and identify potential performance bottlenecks.

Focus on:
- unnecessary re-renders
- inefficient computed properties
- heavy watchers
- large reactive objects
- expensive operations in templates

Explain why these patterns may cause problems and suggest optimizations.
```

### Maintainability Audit Prompt

```
Evaluate this Vue project for maintainability risks.

Look for:
- overly large components
- duplicated logic
- unclear naming
- inconsistent patterns
- tight coupling between modules

Provide specific recommendations for improving maintainability.
```

### Component Design Review Prompt

```
Review these Vue components and identify any that violate the single responsibility principle.

Suggest ways to split large components into smaller, more focused components.
```

### State Management Review Prompt

```
Analyze the state management approach in this Vue application.

Identify:
- state that should be local but is global
- state that should be global but is local
- unnecessary dependencies between components

Recommend improvements to the state architecture.
```

### Reusability Analysis Prompt

```
Analyze this project and identify UI elements or logic that could be extracted into reusable components or composables.

Explain how these abstractions would improve the architecture.
```

### Failure Scenario Prompt

```
Identify possible failure scenarios in this Vue application.

Consider:
- API failures
- network latency
- missing data
- invalid user input
- race conditions

Suggest defensive programming techniques to handle these situations.
```

### Documentation Generation Prompt

```
Generate developer documentation for this Vue project.

Include:
- architecture overview
- explanation of folder structure
- state management approach
- component responsibilities
- instructions for adding new features
```

### Senior Engineer Code Review Prompt

```
Act as a senior frontend engineer reviewing a pull request.

Evaluate the following Vue code for:

- readability
- maintainability
- performance
- adherence to best practices
- potential bugs

Provide constructive feedback and improvement suggestions.
```

### Security Awareness Prompt

```
Review this Vue application for potential security concerns.

Look for:
- unsafe handling of user input
- exposure of sensitive information
- improper API usage
- client-side vulnerabilities

Explain any risks and suggest improvements.
```

## Mini-Project Exercise: Architecture and Scalability Audit

### Step 2 — Request an Architectural Review

Run against `RecipeBox`, the project this exercise is built around.

```
Act as a senior frontend engineer.

Review this Vue 3 project and identify:

- scaling risks
- performance bottlenecks
- maintainability concerns
- state management issues
- component boundary problems

Provide detailed recommendations for improvement.
```
