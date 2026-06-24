import "./HomePage.css";

export default function HomePage(){
    return (
        <>

    <div className="home-page">
      <section className="hero">
        <div className="hero__content">
          <h1>
            Take control <br />
            of every <span>incident.</span>
          </h1>

          <p>
            Give your team the clarity to act - capture incidents in seconds,
            assess the risk as you go, and track every case through to closure.
          </p>

        </div>

        <div className="hero__image">
          <img src="/src/assets/Hero-Picture.png" alt="Sevaxa reports dashboard" />
        </div>
      </section>
    </div>
  );

        </>
    );
}