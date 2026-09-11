export type PublicationType = "journals" | "conferences" | "books" | "bookChapters";

export interface Publication {
  id: string;
  citation: string;
  venue: string;
  year: string;
  doi?: string;
  extra?: string;
  type: PublicationType;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'placeholder-journal-2026',
    citation: 'Author A, Author B — Placeholder publication title one',
    venue: 'Journal Name',
    year: '2026',
    doi: 'doi.org/10.0000/example.2026.000001',
    extra: 'Volume 1 · Pages 1–10',
    type: 'journals',
  },
  {
    id: 'placeholder-journal-2025',
    citation: 'Author C — Placeholder publication title two',
    venue: 'Example Journal',
    year: '2025',
    type: 'journals',
  },
  {
    id: 'placeholder-conference-2025',
    citation: 'Author D, Author E — Placeholder conference paper one',
    venue: 'Conference Name',
    year: '2025',
    extra: 'Pages 11–18',
    type: 'conferences',
  },
  {
    id: 'placeholder-conference-2024',
    citation: 'Author F — Placeholder conference paper two',
    venue: 'Annual Meeting Name',
    year: '2024',
    type: 'conferences',
  },
  {
    id: 'placeholder-book-2023',
    citation: 'Author G — Placeholder book title one',
    venue: 'Publisher Name',
    year: '2023',
    extra: 'ISBN 000-0-00-000000-0',
    type: 'books',
  },
  {
    id: 'placeholder-chapter-2022',
    citation: 'Author H, Author I — Placeholder book chapter title one',
    venue: 'Edited Volume Name',
    year: '2022',
    extra: 'Chapter 2 · Pages 20–35',
    type: 'bookChapters',
  },
];