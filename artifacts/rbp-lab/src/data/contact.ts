export interface ContactInfo {
  labName: string;
  addressLines: string[];
  email: string;
  phone: string;
  piName: string;
  piTitle: string;
  piProfileUrl: string;
  piExternalUrl: string;
}

// Replace the contact placeholders with verified laboratory details before launch.
export const CONTACT: ContactInfo = {
  labName: 'RNA-Binding Proteins Laboratory',
  addressLines: [
    'Department of Biosciences and Bioengineering',
    'Indian Institute of Technology Guwahati',
    'Guwahati, Assam, India',
  ],
  email: 'rbp-lab@example.org',
  phone: '+91 00000 00000',
  piName: 'Prof. Kusum K Singh',
  piTitle: 'Principal Investigator · Assistant Professor',
  piProfileUrl: '/members/kusum-k-singh',
  piExternalUrl: 'https://www.iitg.ac.in/',
};