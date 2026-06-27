import { Regulation, SearchHistoryItem, Bookmark, AdminFile, Section } from "@/types";

export const REGULATIONS: Regulation[] = [
  {
    id: "1",
    title: "Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011",
    category: "Food Standards",
    type: "Regulation",
    year: 2011,
    sections: 482,
    pages: 367,
    lastUpdated: "22nd March, 2024",
    description: "Comprehensive regulations covering food product standards and permitted food additives.",
    status: "indexed",
  },
  {
    id: "2",
    title: "Food Safety and Standards (Packaging and Labelling) Regulations, 2011",
    category: "Packaging & Labelling",
    type: "Regulation",
    year: 2011,
    sections: 124,
    pages: 89,
    lastUpdated: "24th March, 2024",
    description: "Regulations governing packaging materials and labelling requirements for food products.",
    status: "indexed",
  },
  {
    id: "3",
    title: "Food Safety and Standards (Advertising and Claims) Regulations, 2018",
    category: "Advertising & Claims",
    type: "Regulation",
    year: 2018,
    sections: 76,
    pages: 54,
    lastUpdated: "23rd March, 2024",
    description: "Regulations on advertising standards and claims permissible for food products.",
    status: "indexed",
  },
  {
    id: "4",
    title: "Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011",
    category: "Food Business",
    type: "Regulation",
    year: 2011,
    sections: 98,
    pages: 72,
    lastUpdated: "20th March, 2024",
    description: "Licensing and registration requirements for food businesses operating in India.",
    status: "indexed",
  },
  {
    id: "5",
    title: "Food Safety and Standards (Laboratory and Sample Analysis) Regulations, 2011",
    category: "Laboratory",
    type: "Regulation",
    year: 2011,
    sections: 64,
    pages: 48,
    lastUpdated: "22nd March, 2024",
    description: "Standards and procedures for laboratory testing and sample analysis.",
    status: "indexed",
  },
  {
    id: "6",
    title: "Food Safety and Standards (Import) Regulations, 2017",
    category: "Import",
    type: "Regulation",
    year: 2017,
    sections: 45,
    pages: 36,
    lastUpdated: "18th March, 2024",
    description: "Regulations governing the import of food products into India.",
    status: "indexed",
  },
  {
    id: "7",
    title: "Honey Standards (Quality Control) Order, 2003",
    category: "Food Standards",
    type: "Order",
    year: 2003,
    sections: 18,
    pages: 14,
    lastUpdated: "15th March, 2024",
    description: "Quality control standards specifically for honey products.",
    status: "indexed",
  },
  {
    id: "8",
    title: "Coconut Milk Products Standards, 2018",
    category: "Food Standards",
    type: "Standard",
    year: 2018,
    sections: 22,
    pages: 18,
    lastUpdated: "19th March, 2024",
    description: "Standards for coconut milk and coconut milk-based products.",
    status: "indexed",
  },
];

export const REGULATION_SECTIONS: Section[] = [
  {
    id: "s1",
    number: "1",
    title: "Preliminary",
    children: [],
  },
  {
    id: "s2",
    number: "2",
    title: "General Provisions",
    children: [
      { id: "s2-1", number: "2.1", title: "Application" },
      { id: "s2-2", number: "2.2", title: "Definitions" },
      { id: "s2-3", number: "2.3", title: "General Principles" },
      { id: "s2-4", number: "2.4", title: "Equivalence" },
      { id: "s2-5", number: "2.5", title: "Standards" },
      { id: "s2-6", number: "2.6", title: "Food Additives" },
      {
        id: "s2-8",
        number: "2.8",
        title: "Honey Standards",
        children: [
          { id: "s2-8-2", number: "2.8.2", title: "Honey Standards" },
          { id: "s2-8-3", number: "2.8.3", title: "Edible Oils" },
          { id: "s2-8-4", number: "2.8.4", title: "Milk and Milk Products" },
        ],
      },
    ],
  },
];

export const SEARCH_HISTORY: SearchHistoryItem[] = [
  { id: "h1", query: "Can honey contain added sugar?", date: "Today", time: "10:30 AM" },
  { id: "h2", query: "What are the labelling requirements for packaged food?", date: "Today", time: "09:15 AM" },
  { id: "h3", query: "What is the shelf life criteria for milk products?", date: "Yesterday", time: "04:30 PM" },
  { id: "h4", query: "Which additives are allowed in carbonated beverages?", date: "Yesterday", time: "11:45 AM" },
  { id: "h5", query: "What are the hygiene requirements for food businesses?", date: "12 May 2024", time: "" },
  { id: "h6", query: "Is titanium dioxide allowed in food?", date: "11 May 2024", time: "" },
];

export const BOOKMARKS: Bookmark[] = [
  {
    id: "b1",
    type: "regulation",
    regulationTitle: "Food Safety and Standards (Packaging and Labelling) Regulations, 2011",
    section: "Section: 2.1.1 Packaging Requirements",
    bookmarkedDate: "25 May 2024",
  },
  {
    id: "b2",
    type: "answer",
    regulationTitle: "Can honey contain added sugar?",
    query: "Can honey contain added sugar?",
    answer: "According to FSSAI regulations, honey shall not contain added sugar, starch, dextrin, glucose, artificial sweeteners or any other similar substances.",
    bookmarkedDate: "25 May 2024",
  },
  {
    id: "b3",
    type: "regulation",
    regulationTitle: "Food Safety and Standards (Advertising and Claims) Regulations, 2018",
    section: "Section: 4.2 General Advertising Requirements",
    bookmarkedDate: "24 May 2024",
  },
];

export const ADMIN_FILES: AdminFile[] = [
  { id: "af1", name: "Food_Additives_Regulations_2011.pdf", category: "Food Standards", uploadedDate: "25 May 2024", status: "Indexed" },
  { id: "af2", name: "Packaging_Regulations_2011.pdf", category: "Packaging & Labelling", uploadedDate: "24 May 2024", status: "Indexed" },
  { id: "af3", name: "Advertising_Claims_Regulations_2018.pdf", category: "Advertising & Claims", uploadedDate: "23 May 2024", status: "Indexed" },
  { id: "af4", name: "Lab_Sample_Regulations_2018.pdf", category: "Laboratory", uploadedDate: "22 May 2024", status: "Indexing" },
];

export const SUGGESTED_QUESTIONS = [
  "Can honey contain added sugar?",
  "What are the labelling requirements for packaged food?",
  "What is the shelf life criteria for milk products?",
  "What are the additives allowed in beverages?",
];

export const CATEGORIES = [
  "All Categories",
  "Food Standards",
  "Packaging & Labelling",
  "Advertising & Claims",
  "Food Business",
  "Laboratory",
  "Import",
];

export const YEARS = ["All Years", "2024", "2023", "2022", "2020", "2018", "2017", "2011", "2003"];

export const REGULATION_TYPES = ["All Types", "Regulation", "Order", "Standard", "Guideline"];

export const STATS = [
  { value: "28", label: "Regulations\nAvailable" },
  { value: "12,542", label: "Regulation Sections\nIndexed" },
  { value: "98.7%", label: "AI Accuracy\n(Verified)" },
  { value: "24/7", label: "Always Here\nto Help" },
];

export const ADMIN_STATS = [
  { value: "28", label: "Total Regulations" },
  { value: "12,542", label: "Total Sections" },
  { value: "28", label: "Indexed Regulations" },
  { value: "98.7%", label: "Indexing Success" },
];

export const HONEY_PAGE_CONTENT = {
  title: "2.8.2 Honey Standards",
  body: `Honey shall be the food prepared by honey bees from the nectar of flowers or from secretions of living parts of plants or from excretions of plant sucking insects on the living parts of plants which these collect, transform by combining with specific substances of their own, deposit, dehydrate, store and leave in the honey comb to mature and ripen.`,
  highlighted: `Honey shall not contain added sugar, starch, dextrin, glucose, artificial sweeteners or any other similar substances.`,
  page: "Page 147 of 367",
};
