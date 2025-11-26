export interface Property {
  id: number;
  name: string;
  img: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  price: string;
}

export interface PropertyStore {
  properties: Property[];
  loading: boolean;
  error: string | null;

  ITEMS_PER_PAGE: number;
  page: number;

  fetchProperties: () => Promise<void>;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
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
