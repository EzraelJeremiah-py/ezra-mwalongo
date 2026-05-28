// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://ezra-mwalongo.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="min-vh-100 bg-light text-dark d-flex flex-column">
      {/* Hero */}
      <header
        className="py-5 shadow-lg text-center"
        style={{
          backgroundColor: "#1e3d59", // deep analytic blue
          borderRadius: "0px",        // rectangular full-width card
          margin: "0",
          boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
          color: "white",
          width: "100%"
        }}
      >
        <h1 className="fw-bold mb-2">{portfolio.name}</h1>
        <h3 className="fw-light mb-3">{portfolio.title}</h3>
        <p className="mt-3">{portfolio.profile}</p>
      </header>

      <main className="container py-5 flex-grow-1">
        {/* Education & Qualifications */}
        <section className="mb-5 text-center">
          <h2 className="text-warning mb-3">Education & Qualifications</h2>
          <div
            className="shadow-lg p-4 mx-auto"
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
              width: "100%",
              minHeight: "250px"
            }}
          >
            <ul className="list-group">
              {portfolio.qualifications.map((q, i) => (
                <li key={i} className="list-group-item bg-light text-dark border-dark">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-5 text-center">
          <h2 className="text-info mb-3">Core Competencies</h2>
          <div
            className="shadow-lg p-4 mx-auto"
            style={{
              backgroundColor: "#1e3d59",
              color: "white",
              borderRadius: "10px",
              width: "100%",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
            }}
          >
            <ul className="list-unstyled">
              {portfolio.competencies.map((c, i) => (
                <li key={i} className="mb-2">{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-5 text-center">
          <h2 className="text-success mb-3">Technical Skills</h2>
          <div
            className="shadow-lg p-4 mx-auto"
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              maxWidth: "900px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
              width: "100%",
              minHeight: "300px"   // 👈 ensures card is taller
            }}
          >
            <div className="row justify-content-center">
              {portfolio.skills.map((s, i) => (
                <div key={i} className="col-md-4 mb-3">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: "#1e3d59",
                      color: "white",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      fontWeight: "500",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                    }}
                  >
                    {s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-5 text-center">
          <h2 className="text-primary mb-3">Experience</h2>
          <div
            className="shadow-lg p-4 mx-auto"
            style={{
              backgroundColor: "#1e3d59",
              color: "white",
              borderRadius: "10px",
              width: "100%",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
            }}
          >
            <ul className="list-unstyled">
              {portfolio.experience.map((e, i) => (
                <li key={i} className="mb-2">{e}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-danger mb-3">Contact</h2>
          <p>Email: {portfolio.contact.email}</p>
          <p>Phone: {portfolio.contact.phone}</p>
          <p>Location: {portfolio.contact.location}</p>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-3 bg-dark text-light"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <small>
          &copy; {new Date().getFullYear()} {portfolio.name} | Data Science Portfolio
        </small>
      </footer>
    </div>
  );
}

