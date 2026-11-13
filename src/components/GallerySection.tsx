import type { PortfolioCategory, PortfolioProject } from '../types/portfolio';


 interface GallerySectionProps {
    category: PortfolioCategory;
    onImageClick: (project: PortfolioProject) => void;
    getImageUrl: (path: string) => string;
 }

 function GallerySection({
    category,
    onImageClick,
    getImageUrl
 }: GallerySectionProps) {
    return (
        <section
            id={category.id}
            className="gallery-section"
            >
                <div className="gallery-heading">
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                </div>
                {category.projects.length > 0 ? (
        <div className="gallery-grid">
          {category.projects.map((project: any) => (
            <button
              key={project.id}
              type="button"
              className="gallery-card"
              onClick={() => onImageClick(project)}
              aria-label={`View ${project.title}`}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={getImageUrl(project.thumbnail)}
                  alt={project.alt}
                  className="gallery-thumbnail"
                  loading="lazy"
                />

                <div className="gallery-overlay">
                  <span>View Project</span>
                </div>
              </div>

              <div className="gallery-card-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <p className="empty-gallery">
          Projects coming soon.
        </p>
      )}
            </section>
    );

 }

 export default GallerySection;