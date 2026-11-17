import { describe, expect, it } from "vitest";

import { industries, whatWeDo } from "@/content/home";

const solutionPanelIds = [
  "business-software",
  "workflow-automation",
  "crm-erp",
  "ai-systems",
];

describe("homepage industry and solution sections", () => {
  it("lists education, start-ups, and e-commerce & retail", () => {
    expect(industries.panels.map((panel) => panel.name)).toEqual([
      "Education",
      "Start-ups",
      "E-commerce & Retail",
    ]);
  });

  it("lists each of the four business capabilities", () => {
    expect(whatWeDo.panels.map((panel) => panel.id)).toEqual(solutionPanelIds);
  });

  it("includes four focus areas per industry and contact links on all seven panels", () => {
    expect(industries.panels).toHaveLength(3);
    expect(whatWeDo.panels).toHaveLength(4);
    expect(industries.panels.map((panel) => panel.areas.length)).toEqual([4, 4, 4]);
    expect([...industries.panels, ...whatWeDo.panels].map((panel) => panel.href)).toEqual(
      Array.from({ length: 7 }, () => "#contact"),
    );
  });
});