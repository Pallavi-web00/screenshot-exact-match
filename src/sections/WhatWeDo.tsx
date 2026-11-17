import { ArrowRight, ArrowUpRight, BrainCircuit, Check, ChevronRight, CircleCheck, Cpu, Sparkles, Workflow } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";
import { whatWeDo } from "@/content/home";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const visualIcons = {
  business: Cpu,
  workflow: Workflow,
  crm: CircleCheck,
  ai: BrainCircuit,
} as const;

export function WhatWeDo() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="what-we-do"
      ref={ref}
      className={cn("section-pad capabilities-section relative overflow-hidden", inView && "is-in")}
      aria-labelledby="what-we-do-grid-heading"
    >
      <div className="container-site relative">
        <SectionHeading
          headingId="what-we-do-grid-heading"
          eyebrow={whatWeDo.eyebrow}
          lead={whatWeDo.heading.lead}
          highlight={whatWeDo.heading.highlight}
          body={whatWeDo.body}
          className="capabilities-heading"
        />
        <div className="capability-grid">
          {whatWeDo.panels.map((panel, index) => {
            const Icon = visualIcons[panel.visual as keyof typeof visualIcons];
            return (
              <a
                key={panel.id}
                href={panel.href}
                aria-label={`Explore ${panel.title} solutions — contact DevOps Manager`}
                className={cn(
                  "capability-card",
                  `capability-card--${panel.tone}`,
                  `capability-card--${panel.visual}`,
                  index === 0 || index === 3 ? "capability-card--wide" : "capability-card--compact",
                  "reveal",
                )}
                style={{ "--d": `${180 + index * 110}ms` } as React.CSSProperties}
              >
                <div className="capability-card__copy">
                  <div className="capability-card__category">
                    <span className="capability-card__icon"><Icon aria-hidden="true" /></span>
                    {panel.title}
                    <ArrowUpRight className="capability-card__open" aria-hidden="true" />
                  </div>
                  <h3 className="capability-card__headline">{panel.headline}</h3>
                  <p className="capability-card__description">{panel.description}</p>
                </div>
                <CapabilityVisual panel={panel} />
                <span className="capability-card__cta">
                  Explore solutions <ArrowRight aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>

        <div className="section-closer section-closer--capabilities reveal" style={{ "--d": "500ms" } as React.CSSProperties}>
          <p className="section-closer__title">{whatWeDo.closing}</p>
          <p className="section-closer__body">{whatWeDo.closingBody}</p>
        </div>
      </div>
    </section>
  );
}

type Panel = (typeof whatWeDo.panels)[number];

function CapabilityVisual({ panel }: { panel: Panel }) {
  switch (panel.visual) {
    case "business":
      return <BusinessDashboard panel={panel} />;
    case "workflow":
      return <WorkflowDashboard />;
    case "crm":
      return <CrmDashboard />;
    case "ai":
      return <AiDashboard />;
    default:
      return null;
  }
}

function BusinessDashboard({ panel }: { panel: Panel }) {
  if (panel.visual !== "business") return null;

  return (
    <div className="capability-visual capability-visual--business" aria-hidden="true">
      <div className="dashboard-window">
        <div className="dashboard-window__bar">
          <span className="dashboard-window__dots"><i /><i /><i /></span>
          <span className="dashboard-window__name">Workspace overview</span>
          <span className="dashboard-window__avatar">DM</span>
        </div>
        <div className="dashboard-window__body">
          <aside className="dashboard-window__sidebar">
            <span className="dashboard-window__brand"><span /> Manager</span>
            {[
              { label: "Overview", active: true },
              { label: "Projects", active: false },
              { label: "Customers", active: false },
              { label: "Reports", active: false },
            ].map((item) => (
              <span key={item.label} className={cn("dashboard-window__nav", item.active && "is-active")}>
                <span className="dashboard-window__nav-icon" />{item.label}
              </span>
            ))}
          </aside>
          <div className="dashboard-main">
            <div className="dashboard-main__intro">
              <span><strong>Good morning, Alex</strong><small>Here’s your business at a glance.</small></span>
              <span className="dashboard-main__period">This month⌄</span>
            </div>
            <div className="dashboard-stats">
              {panel.stats?.map((item, index) => (
                <div key={item.label} className="dashboard-stat">
                  <small>{item.label}</small><strong>{item.value}</strong>
                  <span className={index === 1 ? "is-neutral" : "is-positive"}>{index === 1 ? "On track" : "↑ 12.8%"}</span>
                </div>
              ))}
            </div>
            <div className="dashboard-chart">
              <div className="dashboard-chart__title"><strong>Business activity</strong><span>Last 7 days</span></div>
              <svg viewBox="0 0 540 115" preserveAspectRatio="none">
                <path className="dashboard-chart__fill" d="M0 91 C38 85 54 56 92 64 S144 82 185 49 S239 67 276 39 S329 52 367 32 S420 55 451 24 S503 38 540 8 V115 H0 Z" />
                <path className="dashboard-chart__line" d="M0 91 C38 85 54 56 92 64 S144 82 185 49 S239 67 276 39 S329 52 367 32 S420 55 451 24 S503 38 540 8" />
              </svg>
              <div className="dashboard-chart__ticks"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowDashboard() {
  return (
    <div className="capability-visual capability-visual--workflow" aria-hidden="true">
      <div className="workflow-window">
        <div className="workflow-window__toolbar"><span>Approval workflow</span><span className="workflow-window__saved"><Check /> Active</span></div>
        <div className="workflow-flow">
          <div className="workflow-node workflow-node--start"><span className="workflow-node__icon"><Check /></span><span><small>TRIGGER</small><strong>New request</strong></span></div>
          <span className="workflow-connector"><i /></span>
          <div className="workflow-node workflow-node--step"><span className="workflow-node__icon"><ChevronRight /></span><span><small>APPROVAL</small><strong>Manager review</strong></span></div>
          <span className="workflow-connector"><i /></span>
          <div className="workflow-node workflow-node--done"><span className="workflow-node__icon"><Check /></span><span><small>AUTOMATION</small><strong>Send confirmation</strong></span></div>
        </div>
        <div className="workflow-window__footer"><span>Last run · just now</span><span><CircleCheck /> Completed successfully</span></div>
      </div>
      <div className="workflow-note"><Sparkles /><span><strong>Everything connected</strong><small>No manual handoffs needed</small></span></div>
    </div>
  );
}

function CrmDashboard() {
  return (
    <div className="capability-visual capability-visual--crm" aria-hidden="true">
      <div className="crm-window">
        <div className="crm-window__toolbar"><span>Customer profile</span><span>•••</span></div>
        <div className="crm-profile">
          <div className="crm-profile__avatar">SJ</div>
          <span><strong>Sarah Johnson</strong><small>Northstar Studios · Enterprise</small></span>
          <span className="crm-profile__status">Active</span>
        </div>
        <div className="crm-stats">
          <span><small>Open opportunities</small><strong>04 <i>↑ 2</i></strong></span>
          <span><small>Annual value</small><strong>$48,600</strong></span>
        </div>
        <div className="crm-modules">
          <div className="crm-modules__title"><strong>Connected modules</strong><small>All systems in sync</small></div>
          <span><i className="crm-modules__mark crm-modules__mark--sales"><ArrowUpRight /></i>Sales pipeline<span className="crm-modules__value">4 active</span></span>
          <span><i className="crm-modules__mark crm-modules__mark--projects"><Workflow /></i>Client projects<span className="crm-modules__value">2 on track</span></span>
        </div>
      </div>
    </div>
  );
}

function AiDashboard() {
  return (
    <div className="capability-visual capability-visual--ai" aria-hidden="true">
      <div className="ai-window">
        <aside className="ai-window__rail">
          <span className="ai-window__mark"><Sparkles /></span>
          <span className="ai-window__rail-item ai-window__rail-item--active"><BrainCircuit /></span>
          <span className="ai-window__rail-item"><Workflow /></span>
          <span className="ai-window__rail-item"><ChevronRight /></span>
        </aside>
        <div className="ai-window__main">
          <div className="ai-window__header"><span><small>INTELLIGENT OPERATIONS</small><strong>Operations copilot</strong></span><span className="ai-window__ready"><i /> Ready</span></div>
          <div className="ai-insight"><span className="ai-insight__icon"><Sparkles /></span><span><small>BUSINESS INSIGHT</small><strong>Inventory demand is trending upward</strong><p>Three product categories need attention based on recent sales activity.</p></span></div>
          <div className="ai-context"><span className="ai-context__title">Connected context</span><div className="ai-context__modules"><span><span className="ai-context__module-icon">I</span><small>Inventory</small><Check /></span><span><span className="ai-context__module-icon">S</span><small>Sales</small><Check /></span><span><span className="ai-context__module-icon">F</span><small>Forecasts</small><Check /></span></div></div>
          <div className="ai-input"><span>Ask about your operations…</span><i><ArrowRight /></i></div>
          <div className="ai-caption"><Cpu /> Grounded in your connected business data</div>
        </div>
      </div>
    </div>
  );
}