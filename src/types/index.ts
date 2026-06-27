export interface Regulation {
  id: string;
  title: string;
  category: string;
  type: string;
  year: number;
  sections: number;
  pages: number;
  lastUpdated: string;
  description?: string;
  status?: "indexed" | "indexing" | "pending";
}

export interface Section {
  id: string;
  number: string;
  title: string;
  children?: Section[];
}

export interface SearchHistoryItem {
  id: string;
  query: string;
  date: string;
  time: string;
}

export interface Bookmark {
  id: string;
  type: "regulation" | "answer";
  regulationTitle: string;
  section?: string;
  bookmarkedDate: string;
  query?: string;
  answer?: string;
}

export interface AdminFile {
  id: string;
  name: string;
  category: string;
  uploadedDate: string;
  status: "Indexed" | "Indexing" | "Pending";
}

export interface NavItem {
  label: string;
  href: string;
}
