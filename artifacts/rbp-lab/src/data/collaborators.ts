export interface Collaborator {
  id: string;
  name: string;
  institution: string;
  description: string;
  accent: string;
  /**
   * Portrait in `public/images/collaborators/`. Sourced from each person's
   * official institutional page and stored locally, because several of those
   * pages serve content-hashed filenames that change when a photo is replaced.
   */
  image: string;
}

export const COLLABORATORS: Collaborator[] = [
  {
    id: 'prof-niels-h-gehring',
    name: 'Prof. Niels H. Gehring',
    institution: 'Institute for Genetics, University of Cologne, Germany',
    description: 'Long-standing collaboration on the Exon Junction Complex and nonsense-mediated mRNA decay — the academic home of the PI\'s postdoctoral training.',
    accent: '#134074',
    image: '/images/collaborators/prof-niels-h-gehring.jpg',
  },
  {
    id: 'dr-shovamayee-maharana',
    name: 'Dr. Shovamayee Maharana',
    institution: 'Dept. of Microbiology and Cell Biology, IISc Bangalore',
    description: 'Collaborative work on RNA-binding protein biology and ribonucleoprotein assembly.',
    accent: '#4EA8DE',
    image: '/images/collaborators/dr-shovamayee-maharana.webp',
  },
  {
    id: 'prof-bithiah-g-jaganathan',
    name: 'Prof. Bithiah G. Jaganathan',
    institution: 'Dept. of Biosciences and Bioengineering, IIT Guwahati',
    description: 'Joint research on RNPS1 and oncogenic splicing factors in cervical cancer cells.',
    accent: '#F472B6',
    image: '/images/collaborators/prof-bithiah-g-jaganathan.jpg',
  },
  {
    id: 'prof-ashish-anand',
    name: 'Prof. Ashish Anand',
    institution: 'Dept. of Computer Science and Engineering, IIT Guwahati',
    description: 'Computational collaboration on deep learning models for splice junction prediction (SpliceVec, SpliceViNCI).',
    accent: '#A78BFA',
    image: '/images/collaborators/prof-ashish-anand.jpg',
  },
  {
    id: 'prof-sachin-singh-gautam',
    name: 'Prof. Sachin Singh Gautam',
    institution: 'Dept. of Mechanical Engineering, IIT Guwahati',
    description: 'Cross-disciplinary collaboration bridging mechanical engineering approaches with cell biology assays.',
    accent: '#F59E0B',
    image: '/images/collaborators/prof-sachin-singh-gautam.webp',
  },
  {
    id: 'prof-anil-mukund-limaye',
    name: 'Prof. Anil Mukund Limaye',
    institution: 'Dept. of Biosciences and Bioengineering, IIT Guwahati',
    description: 'Collaborative research on the MAGOH paralogs and their gene regulatory functions.',
    accent: '#34D399',
    image: '/images/collaborators/prof-anil-mukund-limaye.jpg',
  },
  {
    id: 'prof-sachin-kumar',
    name: 'Prof. Sachin Kumar',
    institution: 'Dept. of Biosciences and Bioengineering, IIT Guwahati',
    description: 'Departmental collaboration supporting shared infrastructure and joint research initiatives.',
    accent: '#60A5FA',
    image: '/images/collaborators/prof-sachin-kumar.jpg',
  },
];
