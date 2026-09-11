export interface Collaborator {
  id: string;
  name: string;
  institution: string;
  description: string;
  accent: string;
}

export const COLLABORATORS: Collaborator[] = [
  {
    id: 'placeholder-collaborator-01',
    name: 'Placeholder Collaborator One',
    institution: 'Placeholder Institution One',
    description: 'Placeholder description for a research partnership.',
    accent: '#c58b34',
  },
  {
    id: 'placeholder-collaborator-02',
    name: 'Placeholder Collaborator Two',
    institution: 'Placeholder Institution Two',
    description: 'Placeholder description for a genetics collaboration.',
    accent: '#53756a',
  },
  {
    id: 'placeholder-collaborator-03',
    name: 'Placeholder Collaborator Three',
    institution: 'Placeholder Institution Three',
    description: 'Placeholder description for a computer science collaboration.',
    accent: '#9c5c45',
  },
  {
    id: 'placeholder-collaborator-04',
    name: 'Placeholder Collaborator Four',
    institution: 'Placeholder Institution Four',
    description: 'Placeholder description for an engineering collaboration.',
    accent: '#63719a',
  },
  {
    id: 'placeholder-collaborator-05',
    name: 'Placeholder Collaborator Five',
    institution: 'Placeholder Institution Five',
    description: 'Placeholder description for a departmental partnership.',
    accent: '#876c3f',
  },
  {
    id: 'placeholder-collaborator-06',
    name: 'Placeholder Collaborator Six',
    institution: 'Placeholder Institution Six',
    description: 'Placeholder description for an external research partnership.',
    accent: '#5d7e82',
  },
];