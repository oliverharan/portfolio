import type { PortfolioCategory } from '../types/portfolio';


 interface SidebarProps {
    categories: PortfolioCategory[];
    activeCategory: string;
    onNavigate: (categoryId: string) => void;
 }

 function Sidebar({
    categories,
    activeCategory,
    onNavigate
 }: SidebarProps) {
    return (
        <aside className="portfolio-sidebar">
            <h2>Portfolio</h2>
            <p className="sidebar-intro">
                Selected Work
            </p>
            <nav aria-label="Portfolio categories">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        type="button"
                        className={`sidebar-link ${
                            activeCategory === category.id ? 'active' : ''
                        }`}
                        onClick={() => onNavigate(category.id)}>
                            {category.title}
                        </button>
                )

                )}
            </nav>
        </aside>

    );
 }

 export default Sidebar;