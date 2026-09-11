export interface Funder {
  id: string;
  name: string;
  logoSrc: string;
}

/** Agencies that have funded the laboratory's work. */
export const FUNDERS: Funder[] = [
  { id: 'dbt', name: 'Department of Biotechnology, Government of India', logoSrc: '/images/funders/dbt.jpg' },
  { id: 'serb', name: 'Science and Engineering Research Board', logoSrc: '/images/funders/serb.png' },
  { id: 'csir', name: 'Council of Scientific and Industrial Research', logoSrc: '/images/funders/csir.jpg' },
  { id: 'icmr', name: 'Indian Council of Medical Research', logoSrc: '/images/funders/icmr.png' },
  { id: 'bsbe', name: 'Department of Biosciences and Bioengineering, IIT Guwahati', logoSrc: '/images/funders/bsbe.png' },
];
