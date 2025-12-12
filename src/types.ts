export interface Property {
  id: number;
  name: string;
  img: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  price: string;
  location: string;    
  yearBuilt: number;   
}


export interface PropertyStore {
  properties: Property[];
  filteredProperties: Property[];
  loading: boolean;
  error: string | null;

  ITEMS_PER_PAGE: number;
  page: number;

  fetchProperties: () => Promise<void>;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  filterProperties: (filters: {
    location?: string;
    propertyType?: string;
    priceRange?: string;
    rooms?: number;
    buildYear?: number;
  }) => void;
}

export interface Comment {
  id: number;
  rating: number;     
  summary: string;      
  description: string;  
  img: string;         
  name: string;         
  location: string;      
}

export interface CommentStore {
  comments: Comment[];
  loading: boolean;
  page: number;
  ITEMS_PER_PAGE: number;
  fetchComments: () => Promise<void>;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

export interface FAQStore {
  faq: FAQ[];              // list of FAQ items
  loading: boolean;
  page: number;
  ITEMS_PER_PAGE: number;
  fetchFAQs: () => Promise<void>;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: IconType; 
}
type IconType = "star" | "graduation" | "users" | "shield";

export interface Step {
  id: number;
  step: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface AchievementItem {
  id: number;
  title: string;
  description: string;
}

