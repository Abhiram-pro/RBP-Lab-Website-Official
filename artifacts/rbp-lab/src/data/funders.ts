export interface Funder {
  id: string;
  name: string;
  logoSrc: string;
}

function placeholderLogo(label: string, width: number) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="120" viewBox="0 0 ${width} 120">
      <rect width="${width}" height="120" fill="#d8d6cf"/>
      <rect x="12" y="12" width="${width - 24}" height="96" fill="none" stroke="#9d9b94"/>
      <text x="${width / 2}" y="67" fill="#62645e" font-family="monospace" font-size="13" text-anchor="middle" letter-spacing="1">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// Neutral blocks are intentional placeholders until verified funder marks are supplied.
export const FUNDERS: Funder[] = [
  { id: 'funder-01', name: 'Funding partner placeholder one', logoSrc: placeholderLogo('FUNDER 01', 220) },
  { id: 'funder-02', name: 'Funding partner placeholder two', logoSrc: placeholderLogo('FUNDER 02', 260) },
  { id: 'funder-03', name: 'Funding partner placeholder three', logoSrc: placeholderLogo('FUNDER 03', 190) },
  { id: 'funder-04', name: 'Funding partner placeholder four', logoSrc: placeholderLogo('FUNDER 04', 240) },
  { id: 'funder-05', name: 'Funding partner placeholder five', logoSrc: placeholderLogo('FUNDER 05', 205) },
];