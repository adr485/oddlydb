import { useMemo, useState } from "react";
import "./App.css";

const TOTAL = 100000;

function getLabel(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

function App() {
  const [search, setSearch] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const preview = useMemo(() => {
    const start = search === "" ? 1 : Math.max(1, Number(search) || 1);

    return Array.from({ length: 8 }, (_, i) => {
      const number = start + i;
      return { number, label: getLabel(number) };
    });
  }, [search]);

  function downloadDataset() {
    const rows = ["number,label"];

    for (let i = 1; i <= TOTAL; i++) {
      rows.push(`${i},${getLabel(i)}`);
    }

    const csv = rows.join("\n");
    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "oddlydb_dataset.csv";
    link.click();

    URL.revokeObjectURL(url);
    setDownloaded(true);
  }

  return (
    <div className="app">
      
      <header className="navbar">
        <nav className="nav-container">
          <a className="logo" href="#">
            <span className="logo-icon">O</span>
            OddlyDB
            <span className="beta">BETA</span>
          </a>

          <div className="nav-links">
            <a href="#datasets">Datasets</a>
            <a href="#about">About</a>
            <a href="#sponsors">Sponsors</a>
          </div>

          <button
            className="nav-button"
            onClick={downloadDataset}
          >
            Get Dataset ↓
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="announcement">
            ✨ Trusted by 2 researchers worldwide
          </div>

          <h1>
            Data for the <span>next generation</span> of AI.
          </h1>

          <p>
            Discover high-quality, scientifically curated
            datasets for cutting-edge machine learning research.
          </p>

          <div className="hero-buttons">
            <a href="#datasets" className="primary-btn">
              Explore datasets →
            </a>
            <a href="#about" className="secondary-btn">
              Learn more
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>100K+</strong>
              <span>Data samples</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Classes</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Confidence*</span>
            </div>
          </div>
          <small className="disclaimer">
            * Confidence not independently verified.
          </small>
        </section>

        <section className="ad-section" id="sponsors">
          <div className="ad-label">ADVERTISEMENT · SPONSORED</div>
          <div className="ad-content">
            <div>
              <span className="ad-tag">MODULOGPT</span>
              <h3>Still using modulo? That's so 2025.</h3>
              <p>
                Let artificial intelligence calculate
                remainders for you. Revolutionize your workflow.
              </p>
            </div>
            <button className="ad-button">
              Explore ModuloGPT ↗
            </button>
          </div>
          <small>Fictional sponsor. No actual product exists.</small>
        </section>

        <section className="dataset-section" id="datasets">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FEATURED COLLECTION</span>
              <h2>Our datasets</h2>
              <p>Carefully curated. Extremely important.</p>
            </div>
            <span className="status">● Available</span>
          </div>

          <div className="dataset-card">
            <div className="dataset-top">
              <div className="dataset-icon">01</div>
              <span className="tag">CLASSIFICATION</span>
            </div>

            <h3>Odd-Even Classification Dataset</h3>
            <p>
              A comprehensive collection of numerical
              observations designed to train intelligent
              systems in the identification of numerical parity.
            </p>

            <div className="metadata">
              <div>
                <span>DATASET ID</span>
                <strong>ODB-69420</strong>
              </div>
              <div>
                <span>RECORDS</span>
                <strong>100,000</strong>
              </div>
              <div>
                <span>FORMAT</span>
                <strong>CSV</strong>
              </div>
              <div>
                <span>LICENSE</span>
                <strong>MIT</strong>
              </div>
            </div>

            <button
              className="download-btn"
              onClick={downloadDataset}
            >
              ↓ Download dataset (CSV)
            </button>

          </div>
        </section>

        <section className="sponsors-section" id="sponsors">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR ESTEEMED PARTNERS</span>
              <h2>Our Sponsors</h2>
              <p>Companies that believe in the future of parity.</p>
            </div>
            <span className="status">● 3 Partners</span>
          </div>

          <div className="sponsor-grid">
            <div className="sponsor-card">
              <span className="sponsor-icon">2</span>
              <span className="sponsor-type">FINTECH</span>
              <h3>OddCoin</h3>
              <p>
                The world's first cryptocurrency that is
                definitely not divisible by 2.
              </p>
              <button>Invest Now ↗</button>
            </div>

            <div className="sponsor-card featured-sponsor">
              <span className="sponsor-icon">∑</span>
              <span className="sponsor-type">EDTECH</span>
              <h3>Parity University</h3>
              <p>
                Earn your PhD in Odd-Even classification.
                Only 7 years of rigorous research.
              </p>
              <button>Apply Now ↗</button>
            </div>

            <div className="sponsor-card">
              <span className="sponsor-icon">AI</span>
              <span className="sponsor-type">ARTIFICIAL INTELLIGENCE</span>
              <h3>ModuloGPT</h3>
              <p>
                Tired of using modulo? Let our AI
                calculate remainders for you.
              </p>
              <button>Try for Free ↗</button>
            </div>
          </div>
          <p className="sponsor-disclaimer">
            All sponsors are fictional. Please don't invest in OddCoin.
          </p>
        </section>

        <section className="ad-section second-ad">
          <div className="ad-label">ADVERTISEMENT · SPONSORED</div>
          <div className="ad-content">
            <div>
              <span className="ad-tag">EVENIFY PREMIUM</span>
              <h3>Is your number feeling odd?</h3>
              <p>
                Subscribe today. We cannot make it even,
                but we can make your wallet lighter.
              </p>
            </div>
            <button className="ad-button">
              Subscribe Now ↗
            </button>
          </div>
          <small>Fictional sponsor. No actual product exists.</small>
        </section>

        <section className="about-section" id="about">
          <span className="eyebrow">OUR MISSION</span>
          <h2>Making numerical intelligence accessible to everyone.</h2>
          <p>
            At OddlyDB, we believe every number deserves
            to be understood. Our researchers work tirelessly
            to push the boundaries of odd and even classification.
          </p>
          <div className="research-note">
            "We spent 6 months developing this dataset.
            It took 0.000001 seconds to solve the problem."
            <span>— Chief Research Scientist, OddlyDB</span>
          </div>
        </section>
      </main>
            
      <footer className="footer">
        <div className="footer-content">
          <div className="logo">
            <span className="logo-icon">O</span>
            OddlyDB
          </div>

          <p>© 2026 OddlyDB Technologies. All rights reserved.</p>
          <p>Advancing parity. One number at a time.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
