# Unstop.com — Design Patterns Memorization (v2025-10)

## Information Architecture (IA)
- **Global Nav (sticky):** Opportunities, Jobs/Internships, Competitions, Hackathons, Quizzes, Scholarships, Courses, Companies; utility: Search, Auth, Profile.
- **Homepage flow:** Hero → featured opportunities → category gateways → carousels (by type) → value props → app promo → footer.
- **Detail pages:** Left main content (overview, timeline, rewards/benefits), right rail (deadline, eligibility, CTA, share, save), tabs for About, Rules, FAQs, Winners.
- **Account areas:** Dashboard (saved/applied), Applications tracker, Certificates/Badges, Notifications.

## Reusable Layout Patterns
- **Sticky header with condensing behavior:** transparent on top → solid on scroll.
- **Search-first header:** prominent global search with autosuggest and category scoping.
- **Card grids with horizontal carousels:** responsive rows, snap-x scrolling on mobile, arrows on desktop.
- **Two-column detail layout:** content + actionable right rail with sticky within viewport.
- **Filter toolbar over result grid:** type, eligibility, location, deadline, sort; chips for active filters; clear-all.
- **Auth modal flow:** sign in/sign up modal with OAuth providers; continues in-place.
- **Notification toasts/banners:** deadline reminders, success states after apply/register.

## Card Component Pattern
- Thumbnail (16:9) → badges (type, remote/online) → title → org/company → meta row (deadline, prizes, participants) → CTA.
- States: default, hover lift+shadow, saved (bookmark filled), disabled (after deadline), featured (accent border).
- Micro-interactions: hover reveals secondary CTA; bookmark is instant, optimistic update.

## Discovery/Search Patterns
- Global search with suggestions: recent searches, popular categories, entities (events, companies).
- Facets: Category, Mode (online/offline), Team size, Experience, Rewards, Location; deadline range slider; sort by Latest/Ending Soon/Popularity.
- Empty state: friendly illustration + reset filters button + top categories.

## CTA & Conversion Patterns
- Primary CTAs: "Register / Apply / Participate"; secondary: "Save", "Share", "View details".
- Deadline urgency: countdown timers; color-coded states (safe/warn/danger).
- Stepper for multi-step registration (team details → eligibility → review → confirm).

## Visual & Brand Patterns
- Palette: deep blue/purple primary with bright accents; white surfaces; soft gray backgrounds.
- Typography: bold display for headlines; readable sans for body; clear hierarchy.
- Iconography: line icons; badges/chips for meta.
- Imagery: real event/product shots or illustrative banners.

## Feedback & Status
- Skeleton loaders for cards and rails.
- Shimmer placeholders during fetch.
- Inline validation on forms; success pages with share prompts.

## Accessibility & Responsiveness
- Keyboard focus rings on card and carousel controls.
- Min touch target 40px; drag-scroll on mobile carousels.
- Reduced motion preference respected on hover/transitions.

## Performance Practices
- Lazy-load carousels below fold; SSR/streaming for above-the-fold hero + first rail.
- Responsive images with `srcset`; prefetch detail pages on hover.

## Components To Reuse/Inspire for Originn
- Sticky header with global search and category mega-menu.
- Opportunity/Campaign card with meta badges and deadline timer.
- Filter bar with chips + result grid.
- Detail page right-rail with sticky CTA and key facts.
- Horizontal carousels with snap scrolling and arrows.
- Countdown + progress indicators.
- Save/bookmark and share interactions.

## Copy/UX Notes
- Uses action-oriented labels (Participate, Apply Now).
- Surfaces social proof: participants count, winners, company logos.
- Encourages exploration with category gateways and "View All" links.

---
This memo captures observable patterns for ideation and should guide building Originn’s discovery-first, trust-focused UX without cloning Unstop’s branding.


