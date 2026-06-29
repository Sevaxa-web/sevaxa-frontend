import "./HomePage.css";
import BringSystem from "../components/ui/BringSystem";
export default function HomePage() {
  return (
    <>
      <div className="home-page">
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
          </div>

          <div className="hero__image">
            <img
              src="/src/assets/Hero-Picture.png"
              alt="Sevaxa reports dashboard"
            />
          </div>
        </section>
      </div>

      <section className="report-incident-section">
        <div className="report-incident-section__content">
          <h2 className="section-title">Capture the full picture of every incident</h2>
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

      <section className="risk-assesment-section">
        <div className="risk-assesment-section__content">
          <h2 className="section-title">
            See what's major at a glance
          </h2>
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
      </section>
      <BringSystem/>
    </>
  );
}
