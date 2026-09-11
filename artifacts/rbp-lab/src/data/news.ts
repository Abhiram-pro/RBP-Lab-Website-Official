export interface NewsItem {
  id: string;
  category: string;
  title: string;
  description: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'new-publication-magoh-magohb-paralog-proteomics',
    category: 'Publication · BBA Gene Regulatory Mechanisms · 2026',
    title: 'New Publication: MAGOH/MAGOHB Paralog Proteomics',
    description: 'Rehman, Tamilselvan, Yadav, Chakrabarty, Huesgen & Singh report proteomics uncovering distinct gene-regulatory functions of the MAGOH/MAGOHB paralogs in cell proliferation.',
  },
  {
    id: 'crispr-based-method-to-distinguish-magoh-paralog',
    category: 'Publication · Gene Reports · 2025',
    title: 'CRISPR-Based Method to Distinguish MAGOH Paralogs',
    description: 'Rehman, Narwade & Singh publish a CRISPR-based genome-editing approach to endogenously distinguish the paralogs MAGOH and MAGOHB.',
  },
];
