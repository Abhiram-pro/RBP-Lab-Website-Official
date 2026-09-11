export interface NewsItem {
  id: string;
  category: string;
  title: string;
  description: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'placeholder-news-04',
    category: 'Publication · Journal Name · 2026',
    title: 'Placeholder news headline one',
    description: 'Placeholder description for a publication, grant, or laboratory milestone.',
  },
  {
    id: 'placeholder-news-03',
    category: 'Grant · Funding Body · 2025',
    title: 'Placeholder news headline two',
    description: 'Placeholder description for a recent laboratory achievement.',
  },
  {
    id: 'placeholder-news-02',
    category: 'Milestone · Laboratory · 2024',
    title: 'Placeholder news headline three',
    description: 'Placeholder description for a department or research milestone.',
  },
  {
    id: 'placeholder-news-01',
    category: 'Event · Conference Name · 2023',
    title: 'Placeholder news headline four',
    description: 'Placeholder description for a talk, conference, or community event.',
  },
];