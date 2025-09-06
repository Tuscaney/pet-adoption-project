import { Link } from "react-router-dom";

export default function Home() {
  // Swap this URL for any photo you prefer
  const HERO_IMG =
    "https://dogtraininggeek.com/wp-content/uploads/2025/02/t-1.png";

  return (
    <section className="container">
      <div className="hero-card">
        <img
          className="hero-img"
          src={HERO_IMG}
          alt="Happy dog ready for adoption"
        />
        <div className="hero-text">
          <h2>Welcome</h2>
          <p>Browse available pets, add new ones, and mark them as adopted.</p>
          <div className="home-actions">
            <Link to="/pets" className="btn btn-primary">View Pets</Link>
            <Link to="/add" className="btn btn-primary">Add a Pet</Link>
          </div>
        </div>
      </div>
    </section>
  );
}



