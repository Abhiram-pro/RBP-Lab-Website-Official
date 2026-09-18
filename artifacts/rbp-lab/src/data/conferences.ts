export type ConferenceKind = 'Award' | 'Oral' | 'Poster' | 'Workshop' | 'Attended';

export interface Conference {
  id: string;
  year: number;
  kind: ConferenceKind;
  /** Verbatim entry as supplied by the lab. Not reformatted. */
  entry: string;
}

/**
 * Conference presentations and workshops, transcribed verbatim from the lab's
 * "Conferences and Workshops" record (66 entries).
 *
 * `year` is the latest four-digit year in each entry; `kind` is derived from
 * the trailing parenthetical. One entry ("Research Conclave'19") carries no
 * four-digit year and is pinned to 2019 from its position in the list.
 */
export const CONFERENCES: Conference[] = [
  {
    id: 'conf-1',
    year: 2026,
    kind: 'Workshop',
    entry:
      'Sourabh Chakrabarty. Hands-on Workshop India Bioimaging’-IIT Guwahati Microscopy and Image Analysis Training Course 2026, June 8-12, 2026, Indian Institute of Technology Guwahati (IITG), Guwahati, Assam., India',
  },
  {
    id: 'conf-2',
    year: 2026,
    kind: 'Workshop',
    entry:
      'Silpi Sikha Borah. Attended India Bioimaging - IIT Guwahati Microscopy and Image Analysis Training Course, June 8th-12th 2026. Indian Institute of Technology Guwahati, Assam, India.',
  },
  {
    id: 'conf-3',
    year: 2026,
    kind: 'Attended',
    entry:
      'Silpi Sikha Borah. Participated in the 13th RNA India Meeting (RIM 2026), April 27th-29th 2026, Indian Institute of Sciences, Bangalore, India.',
  },
  {
    id: 'conf-4',
    year: 2026,
    kind: 'Poster',
    entry:
      'Sourabh Chakrabarty, Pratap Chandra, Akanksha Singh and Kusum K. Singh. Chronic UPR and ISR Activation in UPF3B-Deficient Cells Drives Adaptive Cytoprotection, April 27-29, 2026, RNA India Meet 2026 (Poster presentation)',
  },
  {
    id: 'conf-5',
    year: 2026,
    kind: 'Poster',
    entry:
      'Priyanka Yadav, and Kusum K. Singh. Spatiotemporal regulation of UPF3B by miR-874-3p during neuronal differentiation modulates TGF-β signalling. 13th RNA-Meet, April 27-29, 2026, Indian Institute of Science, Bangalore, India (Poster Presentation)',
  },
  {
    id: 'conf-6',
    year: 2026,
    kind: 'Workshop',
    entry:
      'Silpi Sikha Borah. Attended Fluorescence Assisted Cell Sorting : Techniques and Applications Workshop, February 3rd-6th 2026. Department of Chemistry and Jyoti and Bhupat Mehta School of Health Science and Technology, Indian Institute of Technology Guwahati, Assam, India.',
  },
  {
    id: 'conf-7',
    year: 2025,
    kind: 'Attended',
    entry:
      'Sourabh Chakrabarty. Participated in the 95th Annual Session and Symposium on “Healthy Brain, Mind, and Cognition: From Computers to Clinics”, December 8-10, 2025, Indian Institute of Technology Guwahati (IITG), Guwahati, Assam., India.',
  },
  {
    id: 'conf-8',
    year: 2025,
    kind: 'Poster',
    entry:
      'Sourabh Chakrabarty, Kusum K. Singh. Harnessing the UPF3B-Stress Pathway: Investigating Mechanism for Cellular Stress Resilience, October 10-12, 2025, Research & Industrial Conclave – Synergy ’25 (Poster presentation)',
  },
  {
    id: 'conf-9',
    year: 2025,
    kind: 'Poster',
    entry:
      'Silpi Sikha Borah, Jebasingh Winston R and Kusum K. Singh. RNA-Binding Protein in Cancer: From Molecular Mechanisms to Liquid Biopsy applications, October 10-12 2025, Research & Industrial Conclave- Synergy’25, Indian Institute of Technology Guwahati, Assam, India (Poster Presentation).',
  },
  {
    id: 'conf-10',
    year: 2025,
    kind: 'Poster',
    entry:
      'Priyanka Yadav, and Kusum K. Singh. From Bench to Bedside: The Translational Potential of microRNAs in Diagnostics and Therapeutics. Research Industrial Conclave, October 10-12, 2025, Indian Institute of Technology Guwahati (Poster Presentation).',
  },
  {
    id: 'conf-11',
    year: 2025,
    kind: 'Workshop',
    entry:
      'Sourabh Chakrabarty. Online Hands-on Workshop on “RNA-Seq Data Analysis”, August 11-14, 2025, Centre for Advanced Training and Research (CATR), Lucknow, U.P., India',
  },
  {
    id: 'conf-12',
    year: 2025,
    kind: 'Workshop',
    entry:
      'Jebasingh Wingston, Online Hands-on Workshop on “RNA-Seq Data Analysis”, August 11-14, 2025, Centre for Advanced Training and Research (CATR), Lucknow, U.P., India.',
  },
  {
    id: 'conf-13',
    year: 2025,
    kind: 'Poster',
    entry:
      'Priyanka Yadav, and Kusum K. Singh. Identification of microRNA that post-transcriptionally controls UPF3B expression during neuronal cell differentiation. Gene regulation: one molecule at a time, July 14–18, 2025, Heidelberg, Germany (Poster presentation).',
  },
  {
    id: 'conf-14',
    year: 2025,
    kind: 'Poster',
    entry:
      'Ayushi Rehman, Raja Tamilselvan, Henrique Baeta, and Kusum K. Singh. Dissecting isoform dynamics of MAGOH and its alternatively spliced isoform: new perspectives on their cellular function. The expanding world of RBPs: from posttranscriptional control to riboregulation, March 11-14, 2025, EMBL Heidelberg, Germany (Poster presentation).',
  },
  {
    id: 'conf-15',
    year: 2025,
    kind: 'Attended',
    entry:
      'Sweta Kumari, Kusum K. Singh. attended the EMBL Conference: The expanding world of RBPs: from posttranscriptional control to riboregulation (Virtual) 11 - 14 March 2025, EMBL Heidelberg, Germany.',
  },
  {
    id: 'conf-16',
    year: 2025,
    kind: 'Workshop',
    entry:
      'Nayan Jain, An online hands-on workshop on machine learning for genomics. Max Delbruck Center Germany. March 3rd – 14th, 2025.',
  },
  {
    id: 'conf-17',
    year: 2024,
    kind: 'Oral',
    entry:
      'Ayushi Rehman, Ajay Narwade, and Kusum K. Singh. CRISPR-based genome editing to endogenously distinguish the paralogs MAGOH and MAGOHB, August 9-11, 2024, Research and Industrial Conclave, IIT Guwahati, India (Oral Presentation).',
  },
  {
    id: 'conf-18',
    year: 2024,
    kind: 'Poster',
    entry:
      'Priyanka Yadav and Kusum K. Singh. miR-874 mediated regulation of UPF3B for the development of novel therapeutics. Research and Industrial Conclave, August 9-11, 2024, Indian Institute of Technology, Guwahati, Assam, India. (Poster presentation).',
  },
  {
    id: 'conf-19',
    year: 2024,
    kind: 'Poster',
    entry:
      'Nayan Jain, Kusum K. Singh. Comparative analysis of microRNA profiles in UPF3B wildtype and knockout cells. Research Industry Conclave, IIT Guwahati. August 9-11, 2024 (Poster presentation).',
  },
  {
    id: 'conf-20',
    year: 2024,
    kind: 'Workshop',
    entry:
      'Ayushi Rehman. Online workshop on Proteomics Data Analysis, June 29, 2024, RGCB Thiruvananthapuram, Kerala, India.',
  },
  {
    id: 'conf-21',
    year: 2024,
    kind: 'Poster',
    entry:
      'Ayushi Rehman and Kusum K. Singh. The paralog dilemma – characterizing exon junction complex proteins MAGOH and MAGOHB. India|EMBO Lecture Course on Post-transcriptional regulation in ageing and age-related diseases, June 10-15, 2024, SNIOE and IIIT Delhi, Greater Noida, Uttar Pradesh and New Delhi, India (Poster Presentation).',
  },
  {
    id: 'conf-22',
    year: 2024,
    kind: 'Poster',
    entry:
      'Priyanka Yadav and Kusum K. Singh. miR-874 mediated regulation of UPF3B for the development of novel therapeutics. Post-transcriptional regulation in ageing and age-related diseases. June 10-15, 2024, Greater Noida, Uttar Pradesh, India.(Poster presentation).',
  },
  {
    id: 'conf-23',
    year: 2024,
    kind: 'Poster',
    entry:
      'Ayushi Rehman and Kusum K. Singh. The paralog dilemma – characterizing exon junction complex proteins MAGOH and MAGOHB. 12th RNA-Meet, May 22-24, 2024, IIT Guwahati, India (Poster Presentation).',
  },
  {
    id: 'conf-24',
    year: 2024,
    kind: 'Poster',
    entry:
      'Priyanka Yadav and Kusum K. Singh. miR-874 regulates nonsense-mediated mRNA decay factor UPF3B. RNA Meeting, May 22-24, 2024, Indian Institute of Technology, Guwahati, Assam, India. (Poster Presentation).',
  },
  {
    id: 'conf-25',
    year: 2024,
    kind: 'Attended',
    entry:
      'Nayan Jain, Participated in The 12th RNA Group Meet India, May 22-24, 2024, Indian Institute of Technology, Guwahati, Assam, India.',
  },
  {
    id: 'conf-26',
    year: 2024,
    kind: 'Attended',
    entry:
      'Gourab Chatterjee, Participated in The 12th RNA Group Meet India, May 22-24, 2024, Indian Institute of Technology, Guwahati, Assam, India.',
  },
  {
    id: 'conf-27',
    year: 2024,
    kind: 'Attended',
    entry:
      'Sourabh Chakraborty, Participated in The 12th RNA Group Meet India, May 22-24, 2024, Indian Institute of Technology, Guwahati, Assam, India.',
  },
  {
    id: 'conf-28',
    year: 2024,
    kind: 'Workshop',
    entry:
      'Nayan Jain, Workshop on Foundation of Python in Data Science. March 16-17, 2024. Indian Institute of Technology, Guwahati, Assam, India.',
  },
  {
    id: 'conf-29',
    year: 2024,
    kind: 'Attended',
    entry:
      'Sourabh Chakraborty, Applications of Fluorescence-Activated Cell Sorting (FACS). Indian Institute of Technology, Guwahati, Assam, India. March 04-07, 2024',
  },
  {
    id: 'conf-30',
    year: 2024,
    kind: 'Attended',
    entry:
      'Ayushi Rehman. Biostatistics – a user’s perspective (Virtual), January 6-7 and 13-14, 2024, IISER Pune, India.',
  },
  {
    id: 'conf-31',
    year: 2024,
    kind: 'Attended',
    entry:
      'Priyanka Yadav. Biostatistics – a user’s perspective (Virtual), January 6-7 and 13-14, 2024, IISER Pune, India.',
  },
  {
    id: 'conf-32',
    year: 2023,
    kind: 'Workshop',
    entry:
      'Ayushi Rehman. Hands-on workshop on basic flow cytometry. January 18, 2023, BioNEST, IIT Guwahati, India.',
  },
  {
    id: 'conf-33',
    year: 2023,
    kind: 'Workshop',
    entry:
      'Priyanka Yadav. Hands-on workshop on basic flow cytometry. January 18, 2023, BioNEST, IIT Guwahati, India.',
  },
  {
    id: 'conf-34',
    year: 2022,
    kind: 'Poster',
    entry:
      'Ayushi Rehman, Raja Tamilselvan, and Kusum K. Singh. Et tu..MAGOHB! The paralog dilemma. December 1-3, 2022, 11th RNA Meet, NCCS, Pune, India (Poster Presentation).',
  },
  {
    id: 'conf-35',
    year: 2022,
    kind: 'Poster',
    entry:
      'Pratap Chandra, Bhagyashree Deka, Sweta Kumari, Kusum K. Singh. Transcriptome-wide analysis of UPF3B KO HEK-293 cells generated by CRISPR/Cas9 gene-editing method. 11th RNA Group Meeting organized by National Centre for Cell Science, Pune during December 1-3, 2022. (Poster Presentation)',
  },
  {
    id: 'conf-36',
    year: 2022,
    kind: 'Poster',
    entry:
      'Sweta Kumari, Kusum K Singh. "Deciphering the Novel spliceosomal interactions of SAP18 by proximity-dependent approach." 11th RNA Group Meeting. 2022. (Poster presentation).',
  },
  {
    id: 'conf-37',
    year: 2022,
    kind: 'Poster',
    entry:
      'Sweta Kumari, Kusum K Singh "Proximity-dependent approach to identify novel spliceosomal factors involved in the recruitment of SAP18 protein on pre-mRNA." India EMBO Lecture Course RNA binding proteins: From RNA binding to condensation and aggregation. 2022. (Poster presentation).',
  },
  {
    id: 'conf-38',
    year: 2022,
    kind: 'Poster',
    entry:
      'Priyanka Yadav, Kusum K Singh. “MicroRNA-874 regulates nonsense-mediated mRNA decay factor UPF3B” EMBO Lecture Course RNA binding proteins: From RNA binding to condensation and aggregation. 2022. (Poster presentation).',
  },
  {
    id: 'conf-39',
    year: 2022,
    kind: 'Workshop',
    entry:
      'Raja Tamilselvan, Hands-on workshop on CRISPR/Cas technology and genome editing, National Center for Biological Sciences, Bangalore. 2022',
  },
  {
    id: 'conf-40',
    year: 2022,
    kind: 'Poster',
    entry:
      'Priyanka Yadav and Kusum K. Singh. MicroRNA-mediated regulation of UPF3 for the development of novel therapeutics. RNA Meeting. November 30-December 2, 2022, IISER Pune, India. (Poster Presentation)',
  },
  {
    id: 'conf-41',
    year: 2022,
    kind: 'Poster',
    entry:
      'Priyanka Yadav and Kusum K. Singh. MicroRNA-mediated regulation of UPF3B for the development of novel therapeutics. Functional nucleic acids: Recent landscape and therapeutic application, August 16-19, 2022, Faridabad, India.(Poster presentation).',
  },
  {
    id: 'conf-42',
    year: 2022,
    kind: 'Poster',
    entry:
      'Ayushi Rehman, Anil Mukund Limaye, and Kusum K. Singh. Investigating the characteristics and functions of MAGOH paralogs. North East Research Conclave – Sustainable Science and Technology, May 20-22, 2022, IIT Guwahati, Guwahati, India (Poster presentation).',
  },
  {
    id: 'conf-43',
    year: 2022,
    kind: 'Poster',
    entry:
      'Pratap Chandra, Bhagyashree Deka, Sweta Kumari, Ayushi Rehman, Priyanka Yadav, Kusum K. Singh. UPF3B-KO in HEK 293 cells delays cell proliferation and deregulates the expression of neuron-specific genes. North-East Research Conclave: Sustainable Science and Technology organized by Indian Institute of Technology, Guwahati during May 20-22, 2022. (Poster presentation).',
  },
  {
    id: 'conf-44',
    year: 2022,
    kind: 'Poster',
    entry:
      'Pratap Chandra, Bhagyashree Deka, Sweta Kumari, Ayushi Rehman, Priyanka Yadav, Kusum K. Singh. CRISPR/Cas9 mediated gene-knockout of UPF3B in HEK-293 cells alters the expression of cell cycle and axon guidance genes. Systems Biology: Global Regulation of Gene Expression organized by Cold Spring Harbor Laboratory (CSHL) during March 9-12, 2022 in virtual mode. (Poster Presentation)',
  },
  {
    id: 'conf-45',
    year: 2022,
    kind: 'Poster',
    entry:
      'Bhagyashree Deka, Pratap Chandra, Kusum K. Singh. RNPS1 functions as an oncogenic splicing factor in cervical carcinoma. 41st Annual conference of the Indian Association for Cancer Research 2022, Amity University. (Poster presentation).',
  },
  {
    id: 'conf-46',
    year: 2022,
    kind: 'Poster',
    entry:
      'Bhagyashree Deka, Rehman A, Kusum K. Singh. Understanding the Role of microRNAs in the Post Transcriptional Regulation of RNPS1 gene. Cold Spring Harbor meeting: Regulatory & Non-Coding RNAs 2022. (Poster presentation).',
  },
  {
    id: 'conf-47',
    year: 2022,
    kind: 'Poster',
    entry:
      'Deka B, Rehman A, Singh KK. Understanding the Role of microRNAs in the Post Transcriptional Regulation of RNPS1 gene. North-East Research Conclave, IIT Guwahati 2022. (Poster presentation).',
  },
  {
    id: 'conf-48',
    year: 2021,
    kind: 'Award',
    entry:
      'Pratap Chandra, Bhagyashree Deka, Sweta Kumari, Kusum K. Singh. CRISPR/Cas9-mediated gene-knockout of UPF3B in HEK-293 cells alters the expression of cell-cycle and axon guidance genes. CRISPR/Cas: From Biology to Technology organized by the Institute of Bioinformatics and Applied Biology (IBAB) and SRM University during November 25-27, 2021 in virtual mode. (Best Poster Award)',
  },
  {
    id: 'conf-49',
    year: 2021,
    kind: 'Workshop',
    entry:
      'Attended online workshop on Nuclear Magnetic Resonance: Technique and its Application, Indian Institute of Technology Guwahati, Guwahati held from August 23- 24, 2021.',
  },
  {
    id: 'conf-50',
    year: 2021,
    kind: 'Workshop',
    entry:
      'Attended online workshop on Scanning Electron Microscopy: Technique and its Application, Indian Institute of Technology Guwahati, Guwahati held from July 29- 30, 2021.',
  },
  {
    id: 'conf-51',
    year: 2021,
    kind: 'Attended',
    entry:
      'Attended a Mini symposium on Emerging viral diseases and animals in India, Indian Institute of Technology Guwahati, Guwahati on June 26th, 2021.',
  },
  {
    id: 'conf-52',
    year: 2021,
    kind: 'Workshop',
    entry:
      'Attended workshop on Biosafety and Biosecurity Procedures, Indian Institute of Technology, Guwahati, Guwahati on June 11th, 2021.',
  },
  {
    id: 'conf-53',
    year: 2021,
    kind: 'Attended',
    entry:
      'Pratap Chandra. Participated in “2nd Departmental Retreat (Biotech Express)” organized by the Department of Biosciences and Bioengineering, Indian Institute of Technology Guwahati. 2021 August 21 (virtual mode).',
  },
  {
    id: 'conf-54',
    year: 2021,
    kind: 'Workshop',
    entry:
      'Sweta Kumari. Participated in 15-days workshop on “Advanced Bioinformatics & NGS - Ref Based RNA Seq Data Analysis” organized by ArrayGen Technologies Pvt. Ltd, Pune, India during 17th February-3rd March, 2021 (Virtual mode).',
  },
  {
    id: 'conf-55',
    year: 2020,
    kind: 'Workshop',
    entry:
      'Sweta Kumari. Participated in 2 days online workshop on “Flow Cytometry Techniques and Applications” organized by North East Centre for Biological Sciences and Healthcare Engineering, Indian Institute of Technology Guwahati, Assam in collaboration with Becton, Dickinson and Company-BD during 21-22 December, 2020.',
  },
  {
    id: 'conf-56',
    year: 2019,
    kind: 'Attended',
    entry:
      'Pratap Chandra. Participated in “1st Departmental Retreat (Biotech Express)” organized by the Department of Biosciences and Bioengineering, Indian Institute of Technology Guwahati. 2019 December 17.',
  },
  {
    id: 'conf-57',
    year: 2019,
    kind: 'Workshop',
    entry:
      'Pratap Chandra. Participated in three-day workshop on “Genome/Transcriptome Sequence Analysis” organized by Accelerator program for Discovery in Brain disorders using Stem cells (ADBS) and Institute of Bioinformatics and Applied Biotechnology (IBAB) during November 13-15, 2019, at NCBS, Bangalore.',
  },
  {
    id: 'conf-58',
    year: 2019,
    kind: 'Attended',
    entry:
      'Sweta Kumari. Participated in “1st Departmental Retreat (Biotech Express)” organized by the Department of Biosciences and Bioengineering, Indian Institute of Technology Guwahati. 2019.',
  },
  {
    id: 'conf-59',
    year: 2019,
    kind: 'Poster',
    entry:
      'Sweta Kumari, Kusum K Singh. "Comparative transcriptome analysis of SAP18 splicing regulator." Research Conclave, Indian Institute of Technology Guwahati. 2019. (Poster presentation).',
  },
  {
    id: 'conf-60',
    year: 2019,
    kind: 'Oral',
    entry:
      'Bhagyashree Deka, Kusum K. Singh. Understanding the Role of RNA-binding proteins in the Post transcriptional regulation of RNPS1 gene. 1st Departmental Retreat (Biotech Express) organized by Department of Biosciences and Bioengineering, Indian Institute of Technology Guwahati, 2019 (Oral presentation).',
  },
  {
    id: 'conf-61',
    year: 2019,
    kind: 'Poster',
    entry:
      'Bhagyashree Deka, Kusum K. Singh. Elucidating the role of microRNA and RBP-mediated modulation of RNPS1 gene expression. Research Conclave’19, Indian Institute of Technology Guwahati. (Poster presentation).',
  },
  {
    id: 'conf-62',
    year: 2019,
    kind: 'Workshop',
    entry:
      'Bhagyashree Deka. Participated in three-day workshop on “Genome/Transcriptome Sequence Analysis”, organized by ADBS and IBAB, Bangalore, 2019.',
  },
  {
    id: 'conf-63',
    year: 2019,
    kind: 'Attended',
    entry:
      'Glory Basumata and Kusum K.Singh "Knockdown effect of MAGOHB on Alternative splicing via RNA-Seq Analysis", International Conference on Molecular Basis of Diseases and Therapeutics. 2019.',
  },
  {
    id: 'conf-64',
    year: 2019,
    kind: 'Attended',
    entry:
      'Glory Basumata and Kusum K.Singh "Effects of MAGOHB knockdown on Alternative splicing via RNA-Seq Analysis", Galaxy Community Conference 2019.',
  },
  {
    id: 'conf-65',
    year: 2019,
    kind: 'Workshop',
    entry:
      'Glory Basumata "Training on RNA-Seq data analysis and gene ontology studies using various tools", International Workshop: Introduction to RNA-Seq and Functional Interpretation, EMBL-EBI, Hinxton, UK. 2019.',
  },
  {
    id: 'conf-66',
    year: 2016,
    kind: 'Workshop',
    entry:
      'Bhagyashree Deka. Participated in three-day Flow Cytometry workshop on “Flow Applications in Basics, Applied and Clinical Biology”, organized by Indian Institute of Technology Guwahati and Dr. B. Borooah Cancer Institute, Guwahati. 2016.',
  },
];

/** Years present, newest first. */
export const CONFERENCE_YEARS = [...new Set(CONFERENCES.map((c) => c.year))].sort((a, b) => b - a);
