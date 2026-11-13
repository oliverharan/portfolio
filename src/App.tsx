
import { useRef, useState } from 'react';

import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

import './App.css';

import Sidebar from './components/Sidebar';
import GallerySection from './components/GallerySection';
import Lightbox from './components/Lightbox';

import portfolioData from './data/portfolio.json';

import type {
  PortfolioCategory,
  PortfolioData,
  PortfolioProject
} from './types/portfolio';

function App() {
  const portfolio = portfolioData as PortfolioData;

  const [activeCategory, setActiveCategory] = useState(
    portfolio.categories[0]?.id ?? ''
  );

  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const galleryRef = useRef<HTMLDivElement>(null);

  // Handles image paths on both local development and GitHub Pages.
  const getImageUrl = (path: string) => {
    if (/^https?:\/\//i.test(path)) {
      return path;
    }

    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
  };

  // Smoothly scroll to the selected portfolio category.
  const handleNavigate = (categoryId: string) => {
    setActiveCategory(categoryId);

    const section = galleryRef.current?.querySelector(
      `#${categoryId}`
    );

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Resume download links.
  const resumeDocx = `${import.meta.env.BASE_URL}docs/Oliver_Haran_Resume_2026.docx`;
  const resumePdf = `${import.meta.env.BASE_URL}docs/Oliver_Haran_Resume_2026.pdf`;

  return (
    <>
      {/* EXISTING HERO SECTION */}
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />

          <img
            src={reactLogo}
            className="framework"
            alt="React logo"
          />

          <img
            src={viteLogo}
            className="vite"
            alt="Vite logo"
          />
        </div>

        <div>
          <h1>Oliver Haran</h1>

          <p>
            Welcome to the portfolio site! For any questions,
            please email to{' '}
            <a href="mailto:oliverharan@live.com?subject=Github%20Portfolio:%20">
              oliverharan@live.com
            </a>
          </p>
        </div>

        <div className="d-flex gap-15">
          <a
            href={resumeDocx}
            download="Oliver_Haran_Resume_2026.docx"
            className="resume"
          >
            Download resume .docx
          </a>

          <a
            href={resumePdf}
            download="Oliver_Haran_Resume_2026.pdf"
            className="resume"
          >
            Download resume .pdf
          </a>
        </div>
      </section>

      <div className="ticks"></div>

      {/* NEW PORTFOLIO SECTION */}
<section id="next-steps">
        <div id="nav" className="portfolio-layout">
        <Sidebar
          categories={portfolio.categories}
          activeCategory={activeCategory}
          onNavigate={handleNavigate}
        />
        </div>
        <div id="social">
                  <main
          className="portfolio-content"
          ref={galleryRef}
        >
          <div className="portfolio-intro">
            <h2>Selected Work</h2>
            <p>
              A collection of design, development, branding,
              and photography projects.
            </p>
          </div>

          {portfolio.categories.map(
            (category: PortfolioCategory) => (
              <GallerySection
                key={category.id}
                category={category}
                onImageClick={setSelectedProject}
                getImageUrl={getImageUrl}
              />
            )
          )}
        </main>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      {/* FULL-SIZE IMAGE VIEWER */}
      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        getImageUrl={getImageUrl}
      />
    </>
  );
}

export default App;

