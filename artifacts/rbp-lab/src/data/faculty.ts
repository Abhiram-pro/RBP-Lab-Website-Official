export interface TimelineEntry {
  period: string;
  title?: string;
  detail: string;
  descriptionOnly?: boolean;
}

export interface Course {
  code: string;
  title: string;
  details: string;
}

export interface Talk {
  number: number;
  title: string;
  details: string;
}

export interface ProfileColumn {
  label: string;
  items: string[];
}

export const EDUCATION: TimelineEntry[] = [
  { period: '2005–2009', title: 'Ph.D.', detail: 'Institute of Molecular Medicine, Heinrich Heine University, Duesseldorf, Germany' },
  { period: '2002–2003', title: 'Diploma', detail: 'Institute Jules Guyot, University of Bourgogne, Dijon, France' },
  { period: '2000–2002', title: 'Masters in Biotechnology', detail: 'Deen Dayal Upadhyay Gorakhpur University, India' },
  { period: '1997–2000', title: 'Bachelors in Biochemistry and Vocational Biotechnology', detail: 'St. Xavier\'s College, University of Gujarat, India' },
];

export const EXPERIENCE: TimelineEntry[] = [
  { period: 'Jul 2015 – onward', title: 'Assistant Professor', detail: 'Department of Biosciences and Bioengineering, IIT Guwahati, Assam, India' },
  { period: 'Jul 2010 – Jul 2015', title: 'Postdoctoral research fellow', detail: 'Institute of Genetics, University of Cologne, Germany' },
  { period: 'Apr 2010 – Jun 2011', title: 'Postdoctoral research fellow', detail: 'Institute for Biochemistry and Molecular Biology, RWTH Aachen, Germany' },
  { period: 'Jun 2009 – Oct 2009', title: 'Postdoctoral Fellow', detail: 'Children\'s Cancer Research Institute, UTHSCSA, San Antonio, Texas, USA' },
  { period: 'Jul 2004 – Apr 2005', title: 'Research fellow', detail: 'Institute for Molecular Physiology & Biotechnology of Plants (IMBIO), University of Bonn, Germany' },
];

export const PROFILE_COLUMNS: ProfileColumn[] = [
  {
    label: 'Visiting Faculty',
    items: [
      'The Institute for Genetics, University of Cologne, Germany (Aug 2018 – Feb 2019)',
      'The Institute for Genetics, University of Cologne, Germany (May – Jul 2016)',
    ],
  },
  {
    label: 'Collaborations',
    items: [
      'Dr. Shovamayee Maharana, Dept. of Microbiology and Cell Biology, IISc Bangalore',
      'Prof. Bithiah G. Jaganathan, Dept. of Biosciences and Bioengineering, IIT Guwahati',
      'Prof. Ashish Anand, Dept. of Computer Science and Engineering, IIT Guwahati',
      'Prof. Sachin Singh Gautam, Dept. of Mechanical Engineering, IIT Guwahati',
      'Prof. Anil Mukund Limaye, Dept. of Biosciences and Bioengineering, IIT Guwahati',
      'Prof. Sachin Kumar, Dept. of Biosciences and Bioengineering, IIT Guwahati',
      'Prof. Niels H. Gehring, Institute for Genetics, University of Cologne, Germany',
    ],
  },
  {
    label: 'Professional Memberships',
    items: [
      'The RNA Society',
      'Nano and Molecular Society',
    ],
  },
];

/** Credit structure is L-T-P-C; term is the session most recently taught. */
export const COURSES: Course[] = [
  { code: 'BT-211', title: 'Basic Biotechnology Laboratory', details: '0-0-6-6 · Jan – May 2026' },
  { code: 'BT-637', title: 'Genome Editing and Engineering', details: '3-0-0-6 · Jul – Nov 2025' },
  { code: 'BT-642', title: 'Alternative Splicing and Diseases', details: '3-0-0-6 · Jan – May 2025' },
  { code: 'BT-205', title: 'Cellular and Molecular Biology', details: '3-0-0-6' },
  { code: 'BT-101', title: 'Introductory Biology', details: '3-0-0-6 · Jan – May 2024' },
  { code: 'BT-208', title: 'Molecular Biology and Genetic Engineering', details: '3-1-0-8' },
  { code: 'BT-503', title: 'Advanced Genetic Engineering', details: '3-0-0-6' },
  { code: 'BT-604', title: 'Enzymology', details: '3-0-0-6' },
  { code: 'BT-510', title: 'Analytical Biotechnology Laboratory', details: '0-0-6-6' },
  { code: 'BT-290', title: 'Biomolecular Analysis Laboratory', details: '0-0-6-6' },
  { code: 'BT-380', title: 'Molecular Biotechnology Laboratory', details: '0-0-6-6' },
  { code: 'BT-600', title: 'M.Tech Seminar', details: '0-0-2-2' },
  { code: 'BT-520', title: 'Applied Biology & Bioengineering Laboratory', details: '0-0-6-6' },
];

export const AWARDS: TimelineEntry[] = [
  { period: '2025', detail: 'Selected for NASI membership', descriptionOnly: true },
  { period: '2024', detail: 'FASEB\'s Science Research Conference Travel Award', descriptionOnly: true },
  { period: '2018', detail: 'NER-DBT Overseas Associateship, Govt. of India (Aug 2018 – Feb 2019)', descriptionOnly: true },
  { period: '2016', detail: 'Albert\'s Reunion Grant, University of Cologne, Germany (May – Jul 2016)', descriptionOnly: true },
  { period: '2012', detail: 'Fritz Thyssen Stiftung Grant, Cologne, Germany (Jul 2012 – Jun 2015)', descriptionOnly: true },
  { period: '2007', detail: 'GRK1089 Travel Grant, Cold Spring Harbor, USA (Sep 2007)', descriptionOnly: true },
  { period: '2005', detail: 'DFG-GRK1089 Fellowship, Duesseldorf, Germany (Apr 2005 – Mar 2008)', descriptionOnly: true },
  { period: '2002', detail: 'Campus France Fellowship, Dijon, France (Nov 2002 – Dec 2003)', descriptionOnly: true },
  { period: '2000', detail: 'Xavier Research Foundation Fellowship, Ahmedabad, India (Mar 2000)', descriptionOnly: true },
  { period: '1995', detail: 'Inter-State Talent Tests in Mathematics, Belgaum, India (Jan 1995)', descriptionOnly: true },
];

/** Most recent first; numbering counts down from the total. */
export const TALKS: Talk[] = [
  { number: 33, title: 'Invited talk on "Unmasking divergent gene regulatory roles of MAGOH paralogs in cell proliferation"', details: 'RNA India Meeting 2026, IISc Bangalore, 27–29 Apr 2026' },
  { number: 32, title: 'Presented talk on "Role of UPF3B in the nonsense-mediated mRNA Decay Surveillance Pathway"', details: 'Dynamics and Evolution of RNA Functions, ICTS, IISc Bangalore, 22 Sep – 03 Oct 2025' },
  { number: 31, title: 'Presented talk on "BioID proximity mapping reveals novel SAP18 interactome in prespliceosomal complex"', details: 'India|EMBO Lecture Course, NCCS Pune, 24–28 Feb 2025' },
  { number: 30, title: '"Regulation of RNA Binding Proteins via microRNAs"', details: 'Nobel Lecture Series 2025, Tezpur University, 29 Jan 2025' },
  { number: 29, title: 'Invited speaker — "Role of Nonsense-Mediated Decay factor in faulty transcripts degradation"', details: 'NC-ABB 2024, Gorakhpur University, 11–12 Nov 2024' },
  { number: 28, title: '"Impairment of NMD upon UPF3B-KO cells"', details: 'FASEB Science Research Conferences, Lisbon, Portugal, 18–22 Aug 2024' },
  { number: 27, title: 'Invited talk — "Transcriptome analysis of UPF3B KO cells"', details: 'University of Lisbon, Caparica Portugal, 18 Jul 2023' },
  { number: 26, title: 'Invited oral presentation — "Role of RNPS1 in cervical cancer"', details: 'National Centre for Cell Science, Pune, 1–3 Dec 2022' },
  { number: 25, title: 'EMBO/EMBL Symposium: The complex life of RNA (virtual)', details: '12–15 Oct 2022' },
  { number: 24, title: 'Cold Spring Harbor Laboratory Conference on Regulatory and Noncoding RNAs (virtual)', details: '17–21 May 2022' },
  { number: 23, title: 'EMBO-INDIA NCCS Pune RNA Binding Proteins: from RNA binding to condensation and Aggregation Conference (virtual)', details: '07–11 Feb 2022' },
  { number: 22, title: 'EMBL Conference on The Non-Coding Genome (virtual)', details: '13–15 Oct 2021' },
  { number: 21, title: '26th Annual Meeting of the RNA Society (virtual)', details: '25 May – 04 Jun 2021' },
  { number: 20, title: '25th Annual Meeting of the RNA Society (virtual)', details: '25–31 May 2020' },
  { number: 19, title: 'Invited oral presentation — "Protection splice sites"', details: 'World Congress on Cancer, Mahatma Gandhi Medical College & Hospital, Jaipur, 4 Feb 2020' },
  { number: 18, title: 'Invited talk — "Transcriptome integrity via RNPS1-EJC"', details: 'St. Xavier\'s College, Ahmedabad, 3 Jan 2020' },
  { number: 17, title: 'Talk — "RNPS1 interaction partners"', details: 'Cancer Biology Conference, ILS Bhubaneswar, 30 Nov 2019' },
  { number: 16, title: 'Invited talk — "Role of RNPS1 and EJC in protecting transcriptome"', details: 'International conference, Cotton College, Guwahati University, 1 Jun 2019' },
  { number: 15, title: 'Talk — "EJC suppresses spurious splice sites"', details: '9th RNA Group Meeting, BHU Varanasi, 27 Oct 2017' },
  { number: 14, title: 'Talk — "RNA binding proteins"', details: 'NIAS-DST Programme for Women Scientists, Bengaluru, 02 Mar 2017' },
  { number: 13, title: 'Splicing dependent mRNA binding of ASAP complexes', details: '8th RNA Group Meeting, CSIR-CCMB Hyderabad, 8–10 Jan 2016' },
  { number: 12, title: 'SFB Meeting on RNA life span', details: 'Cologne University, Germany, 12–13 Jun 2013' },
  { number: 11, title: 'Quality Control – From molecules to Organelles', details: 'EMBL Heidelberg, Germany, 19–22 Sep 2012' },
  { number: 10, title: 'SFB Meeting on post-transcriptional gene regulation', details: 'Dresden University, Germany, 17–19 Oct 2012' },
  { number: 9, title: 'RNA Meeting', details: 'RWTH Aachen University, Germany, 16–18 Apr 2012' },
  { number: 8, title: 'Talk — "Functional characterization of p27 acetylation"', details: 'ETH Zurich, Switzerland, 27 May 2011' },
  { number: 7, title: 'Cell death meeting', details: 'Cold Spring Harbor Laboratory, NY, USA, 26–30 Sep 2007' },
  { number: 6, title: 'Autumn session of SFB612, SFB688 and GRK1089', details: 'Kaiserwerth, Duesseldorf, Germany, 30 Sep – 2 Oct 2007' },
  { number: 5, title: 'Symposium on "Day of Scientific Talent"', details: 'Heinrich-Heine University of Duesseldorf, Germany, 22 Jul 2007' },
  { number: 4, title: 'Talk on cardiovascular diseases and alternative splicing', details: 'Spring workshop of GRK1089, Muenster, Germany, 29–30 Jun 2007' },
  { number: 3, title: 'Autumn session of SFB612 and GRK1089', details: 'Wermelskirchen, Germany, 11–12 Dec 2006' },
  { number: 2, title: 'Talk and poster on alternative splicing and cardiovascular diseases', details: 'Spring workshop of GRK1089, Bensberg, Germany, 9–10 Jun 2006' },
  { number: 1, title: 'Autumn session of SFB612 and GRK1089', details: 'Wermelskirchen, Germany, 4–5 Nov 2005' },
];
