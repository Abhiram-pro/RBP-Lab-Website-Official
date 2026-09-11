export interface EquipmentItem {
  id: string;
  name: string;
  model: string;
  description: string;
  funding: string;
  imageSrc: string;
  accent: string;
}

const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 4 3%22%3E%3Crect width=%224%22 height=%223%22 fill=%22%23e7e5df%22/%3E%3C/svg%3E';

export const EQUIPMENT: EquipmentItem[] = [
  {
    id: 'placeholder-instrument-01',
    name: 'Placeholder Instrument One',
    model: 'Manufacturer Name · Model One · Price Placeholder',
    description: 'Placeholder description for a core laboratory instrument.',
    funding: 'Funding Body · Grant Number Placeholder',
    imageSrc: PLACEHOLDER_IMAGE,
    accent: '#c58b34',
  },
  {
    id: 'placeholder-instrument-02',
    name: 'Placeholder Instrument Two',
    model: 'Manufacturer Name · Model Two · Price Placeholder',
    description: 'Placeholder description for an instrument supporting RNA biology research.',
    funding: 'Funding Body · Grant Number Placeholder',
    imageSrc: PLACEHOLDER_IMAGE,
    accent: '#53756a',
  },
  {
    id: 'placeholder-instrument-03',
    name: 'Placeholder Instrument Three',
    model: 'Manufacturer Name · Model Three · Price Placeholder',
    description: 'Placeholder description for a proteomics research instrument.',
    funding: 'Funding Body · Grant Number Placeholder',
    imageSrc: PLACEHOLDER_IMAGE,
    accent: '#9c5c45',
  },
  {
    id: 'placeholder-instrument-04',
    name: 'Placeholder Instrument Four',
    model: 'Manufacturer Name · Model Four · Price Placeholder',
    description: 'Placeholder description for a cell biology research instrument.',
    funding: 'Funding Body · Grant Number Placeholder',
    imageSrc: PLACEHOLDER_IMAGE,
    accent: '#63719a',
  },
  {
    id: 'placeholder-instrument-05',
    name: 'Placeholder Instrument Five',
    model: 'Manufacturer Name · Model Five · Price Placeholder',
    description: 'Placeholder description for a shared department instrument.',
    funding: 'Funding Body · Grant Number Placeholder',
    imageSrc: PLACEHOLDER_IMAGE,
    accent: '#876c3f',
  },
  {
    id: 'placeholder-instrument-06',
    name: 'Placeholder Instrument Six',
    model: 'Manufacturer Name · Model Six · Price Placeholder',
    description: 'Placeholder description for an instrument used in molecular biology.',
    funding: 'Funding Body · Grant Number Placeholder',
    imageSrc: PLACEHOLDER_IMAGE,
    accent: '#5d7e82',
  },
];