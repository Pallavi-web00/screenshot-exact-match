import { ArrowRight, Check, GraduationCap, ShoppingBag, Sparkles, Users } from "lucide-react";

import educationImage from "@/assets/education-industry.jpg";
import retailImage from "@/assets/retail-industry.jpg";
import startupImage from "@/assets/startup-industry.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { industries } from "@/content/home";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const imageByTone = {
  education: { src: educationImage, Icon: GraduationCap, number: "1,284" },
  startups: { src: startupImage, Icon: Users, number: "84%" },
  retail: { src: retailImage, Icon: ShoppingBag, number: "248" },
} as const;

export function Industries() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.12 });

  return (
    <section
      id="industries"
      ref={ref}
      className={cn("section-pad industry-section relative overflow-hidden", inView && "is-in")}
      aria-labelledby="industries-heading"
    >
      <div className="container-site">
        <SectionHeading
          align="center"
          stacked
          headingId="industries-heading"
          className="industry-heading"
          eyebrow={industries.eyebrow}
          lead={industries.heading.lead}
          highlight={industries.heading.highlight}
          body={industries.body}
        />
        <div className="industry-grid">
          {industries.panels.map((industry, index) => {
            const visual = imageByTone[industry.tone as keyof typeof imageByTone];
            return (
              <a
                key={industry.name}
                href={industry.href}
                aria-label={`Explore ${industry.name} solutions — contact DevOps Manager`}
                className={cn(
                  "industry-card",
                  `industry-card--${industry.tone}`,
                  "reveal",
                )}
                style={{ "--d": `${240 + index * 110}ms` } as React.CSSProperties}
              >
                <div className="industry-card__photo">
                  <img
                    src={visual.src}
                    alt={industry.imageAlt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="industry-card__image"
                  />
                  <div className="industry-ui" aria-hidden="true">
                    <div className="industry-ui__top">
                      <span className="industry-ui__icon">
                        <visual.Icon />
                      </span>
                      <span className="industry-ui__status">Live overview</span>
                      <span className="industry-ui__dots">···</span>
                    </div>
                    <p className="industry-ui__title">{industry.preview[0]}</p>
                    <p className="industry-ui__number">{visual.number}</p>
                    <div className="industry-ui__rule" />
                    <div className="industry-ui__rows">
                      {industry.preview.slice(1).map((item, rowIndex) => (
                        <span key={item} className="industry-ui__row">
                          <span className="industry-ui__row-icon">
                            {rowIndex === 0 ? <Check /> : <Sparkles />}
                          </span>
                          {item}
                          <span className="industry-ui__row-mark" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="industry-card__content">
                  <div className="industry-card__title-row">
                    <p className="industry-card__index">0{index + 1}</p>
                    <h3 className="industry-card__name">{industry.name}</h3>
                  </div>
                  <p className="industry-card__headline">{industry.headline}</p>
                  <p className="industry-card__description">{industry.description}</p>
                  <ul className="industry-card__areas" aria-label={`${industry.name} focus areas`}>
                    {industry.areas.map((area) => (
                      <li key={area}>
                        <Check aria-hidden="true" />
                        {area}
                      </li>
                    ))}
                  </ul>
                  <span className="industry-card__link">
                    Explore solutions <ArrowRight aria-hidden="true" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="section-closer reveal" style={{ "--d": "460ms" } as React.CSSProperties}>
          <p className="section-closer__title">{industries.closing}</p>
          <p className="section-closer__body">{industries.closingBody}</p>
        </div>
      </div>
    </section>
  );
}