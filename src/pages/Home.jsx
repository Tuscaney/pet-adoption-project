import { Link } from "react-router-dom";

export default function Home() {
  // Swap this URL for any photo you prefer
  const HERO_IMG =
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop";

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
            <Link to="/add" className="btn">Add a Pet</Link>
          </div>
        </div>
      </div>
    </section>
  );
}



