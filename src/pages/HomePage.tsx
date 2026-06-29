import "./HomePage.css";
import BookDemoButton from "../components/ui/BookDemoButton";
import IconCard from "../components/ui/IconCard";
import BringSystem from "../components/ui/BringSystem";
import FileText from "../assets/icons/file-text.svg?react";
import IconShield from "../assets/icons/shield.svg?react";
import IconLineChart from "../assets/icons/line-chart.svg?react";
import MetricCard from "../components/ui/MetricCard";
import Divider from "../components/ui/Divider";
import { motion } from "motion/react";


export default function HomePage() {
  return (
    <>
      <motion.div className="home-page" initial={{opacity: 0}} animate={{opacity: 1}}>
        <section className="hero two-column-layout">
          <div className="hero__content">
            <h1>
              Take control <br />
              of every <span>incident.</span>
            </h1>

            <p className="text-color-secondary">
              Give your team the clarity to act - capture incidents in seconds,
              assess the risk as you go, and track every case through to
              closure.
            </p>
            <BookDemoButton />
          </div>

          <div className="hero__image">
            <img
              src="/src/assets/Hero-Picture.png"
              alt="Sevaxa reports dashboard"
            />
          </div>
        </section>
      </motion.div>

      <section className="why-it-matters-section">
        <p className="text-center">Why it matters</p>

        <h2 className="text-center">
          Most harm in healthcare is preventable but only if issues are{" "}
          <span>seen.</span>
          <br />A culture of reporting is a culture of safety.
        </h2>

        <div className="why-it-matters__cards">
          <IconCard
            icon={<FileText />}
            title="Reduce Exposure"
            description="Catch deviations early and investigate them properly before they become incidents, claims or regulatory findings."
          />

          <IconCard
            icon={<IconShield />}
            title="Security & GDPR"
            description="All data is encrypted and managed according to GDPR. Role-based access protects sensitive information."
          />

          <IconCard
            icon={<IconLineChart />}
            title="Insights & Analysis"
            description="Clear statistics drawn straight from your reported data, so you can see the trends and decide where to act."
          />
        </div>
      </section>

      <section className="report-incident-section">
        <div className="report-incident-section__content">
          <h2 className="section-title">
            Capture the full picture of every incident
          </h2>
          <p className="text-center text-body text-color-secondary">
            Teams log what happened in a structured, step-by-step report —
            capturing the incident description, corrective actions taken, and
            preventive recommendations, all in one place while the details are
            still fresh.
          </p>
        </div>

        <div className="report-incident-section__image">
          <img
            src="/src/assets/report-incident.png"
            alt="Report incident overview"
          />
        </div>
      </section>
      <Divider/>
      <section className="risk-assesment-section">
        <div className="risk-assesment-section__content">
          <h2 className="section-title">See what's major at a glance</h2>
          <p className="text-center text-body text-color-secondary">
            Every report is scored on severity and likelihood, then colour-coded
            by risk level, so major incidents stand out from minor ones, and
            your team always knows what to act on first.
          </p>
        </div>
        <div className="risk-assessment-section__image">
          <img
            src="/src/assets/risk-assesment.png"
            alt="Risk assessment overview"
          />
        </div>

        <section className="metric-card-section">
          <MetricCard value="150+" label="Active users" />

          <MetricCard value=">2 minutes" label="Reporting incident" />

          <MetricCard value="100%" label="of reports tracked ro resolution" />
        </section>
      </section>
      <Divider/>
      
      <BringSystem />
    </>
  );
}
