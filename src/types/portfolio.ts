
export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
  alt: string;
}

export interface PortfolioCategory {
  id: string;
  title: string;
  description: string;
  projects: PortfolioProject[];
}

export interface PortfolioData {
  categories: PortfolioCategory[];
}
