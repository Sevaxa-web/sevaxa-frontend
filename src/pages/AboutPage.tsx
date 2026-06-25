import "./AboutPage.css";
import PageHeader from "../components/ui/PageHeader";
import CheckMarkIcon from "../assets/icons/check.svg?react";
import IconCard from "../components/ui/IconCard";
import ShieldCheck from '../assets/icons/shield-check.svg?react'
import LayoutGrid from '../assets/icons/layout-dashboard.svg?react'
import TrendingUp from '../assets/icons/trending-up.svg?react'
import BringSystem from "../components/ui/BringSystem";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        description="Sevaxa was founded with a simple insight: if it's hard to report nonconformities, fewer people will do it. We created a system that removes the thresholds – so that every observation leads to improvement."
      />
      <div className="our-mission-section secondary-bg-color">
        <div className="right-side">
          <h6>OUR MISSION</h6>
          <p>Make reporting as easy as a message</p>
        </div>
        <div className="left-side">
          <p>
            Swedish healthcare is world-class - but reporting deviations has
            historically been cumbersome and time-consuming. The result?
            Underreporting, lost insights and missed opportunities for
            improvement.
          </p>
          <p>
            Sevaxa is here to change that. We build tools that make reporting a
            discrepancy as easy as sending a message - without compromising
            quality, traceability or security
          </p>
          <div className="check-marks">
            <div className="check-mark-container">
              <CheckMarkIcon  />
              <p>No Threshold</p>
            </div>
            <div className="check-mark-container">
              <CheckMarkIcon  />
              <p>Full Traceablitly</p>

            </div>
            <div className="check-mark-container">
              <CheckMarkIcon  />
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-values-section">
        <h2>Our Values</h2>
        <div className="icon-cards-grid">
            <IconCard icon={<ShieldCheck />} title="Patient safety first" description="Everything we do is based on making healthcare safer for patients and staff. Every report is a step towards better care." />
            <IconCard icon={<LayoutGrid />} title="Simplicity in design" description="We believe that the best technology is the one that feels invisible. Sevaxa is built to be so intuitive that no one needs a manual." />
            <IconCard icon={<TrendingUp />} title="Continuous improvement" description="We develop Sevaxa in close collaboration with healthcare professionals, based on real needs and feedback." />
        </div>
      </div>
      <div className="quote-section secondary-bg-color">
        <div className="right-side">
          <p>“We want every healthcare worker to feel that their voice makes a difference – because it does."</p>
        </div>
        <div className="left-side">
          <p>Founders of Sevaxa</p>
        </div>
      </div>
      <BringSystem/>
    </>
  );
}
