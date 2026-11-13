
 import { useEffect } from 'react';

import type { PortfolioProject } from '../types/portfolio';

 interface LightboxProps {
    project: PortfolioProject | null;
    onClose: () => void;
    getImageUrl: (path: string) => string;
 }

 function Lightbox({
    project,
    onClose,
    getImageUrl
 }: LightboxProps) {

    useEffect(() => {
        if (!project) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key == 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
    <div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={onClose}
        >
        <button
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="Close image viewer"
        >
            &times;
        </button>

        <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
        >
            <img
            src={getImageUrl(project.image)}
            alt={project.alt}
            />

            <div className="lightbox-caption">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            </div>
        </div>
    </div>

 );
}

export default Lightbox;
