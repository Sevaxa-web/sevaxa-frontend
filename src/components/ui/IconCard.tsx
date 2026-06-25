import type { ReactNode } from "react";

type IconCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function IconCard({ icon, title, description }: IconCardProps) {
  return (
    <div className="icon-card">
      <div className="icon-container">{icon}</div>
      <h3>{title}</h3>
      <p className="text-color-secondary">{description}</p>
    </div>
  );
}
