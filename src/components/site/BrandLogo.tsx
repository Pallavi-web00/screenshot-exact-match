import { cn } from "@/lib/utils";

const logo = "/images/devops-manager-logo.png";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={cn("brand-wordmark", className)} role="img" aria-label="DevOps Manager LLP">
      <img
        src={logo}
        alt=""
        width={64}
        height={64}
        className="brand-wordmark__mark"
        draggable={false}
      />
      <span className="brand-wordmark__type" aria-hidden="true">
        <span className="brand-wordmark__devops">DevOps</span>
        <span className="brand-wordmark__manager">MANAGER LLP</span>
      </span>
    </span>
  );
}
