export interface EquipmentItem {
  id: string;
  name: string;
  model: string;
  description: string;
  funding: string;
  imageSrc: string;
  accent: string;
}

/** Lab instrumentation, with the grant each item was procured under. */
export const EQUIPMENT: EquipmentItem[] = [
  {
    id: 'chemidoc-imaging-system',
    name: 'ChemiDoc Imaging System',
    model: 'BioRad ChemiDoc — ₹10,80,625',
    description: 'Procured under "To investigate how ASAP complex interfaces with splicing and connects the Exon Junction Complex" [ECR/2015/000166]. Used for western blot imaging and quantitative gel documentation.',
    funding: 'SERB · DST (ECR/2015/000166)',
    imageSrc: '/images/equipment/chemidoc.jpeg',
    accent: '#4EA8DE',
  },
  {
    id: 'real-time-pcr-system',
    name: 'Real-Time PCR System',
    model: 'Agilent AriaMx G8830A — ₹10,32,770',
    description: 'Procured under "Understanding the regulation of RNPS1 by miRNAs and RNA-Binding proteins under ER stress" [BT/PR27877/NER/95/1653/2018]. Multi-colour qRT-PCR for gene expression and splicing quantification.',
    funding: 'Dept. of Biotechnology (BT/PR27877/NER/95/1653/2018)',
    imageSrc: '/images/equipment/pcr-system.jpeg',
    accent: '#7A9E7E',
  },
  {
    id: 'microplate-reader',
    name: 'Microplate Reader',
    model: 'GloMax Microplate Reader — ₹12,21,700',
    description: 'Procured under "Understanding the regulation of RNPS1 by miRNAs and RNA-Binding proteins under ER stress" [BT/PR27877/NER/95/1653/2018]. Supports luminescence, fluorescence, and absorbance detection.',
    funding: 'Dept. of Biotechnology (BT/PR27877/NER/95/1653/2018)',
    imageSrc: '/images/equipment/microplate-reader.jpeg',
    accent: '#A78BFA',
  },
  {
    id: 'chromatography-system',
    name: 'Chromatography System',
    model: 'Cytiva Akta Start — ₹9,75,500',
    description: 'Procured under "Deciphering the assembly of RNPS1 into the spliceosomal machinery" [CRG/2019/001352]. Used for purification of recombinant RBPs and EJC components via FPLC.',
    funding: 'SERB · DST (CRG/2019/001352)',
    imageSrc: '/images/equipment/chromatography.jpeg',
    accent: '#C4956A',
  },
  {
    id: 'transfer-blot-system',
    name: 'Transfer Blot System',
    model: 'BioRad Transfer Blot with Power Pac — ₹4,99,836',
    description: 'Procured under "Construction of a minigene to analyze the alternative splicing regulation of UPF3B variable exon" [CSIR-37/(1729)/19/EMR-II]. Protein transfer system for western blotting.',
    funding: 'CSIR (CSIR-37/(1729)/19/EMR-II)',
    imageSrc: '/images/equipment/transfer-blot.jpeg',
    accent: '#F472B6',
  },
  {
    id: 'co-incubator',
    name: 'CO₂ Incubator',
    model: 'CO₂ Incubator — ₹5,00,000',
    description: 'Procured under "Identification of interactions between ASAP components and SR proteins" [SuG]. Maintains controlled environment for propagation of cancer cell lines used in EJC perturbation studies.',
    funding: 'IITG (SuG)',
    imageSrc: '/images/equipment/co2-incubator.jpeg',
    accent: '#F59E0B',
  },
  {
    id: 'refrigerated-centrifuge',
    name: 'Refrigerated Centrifuge',
    model: 'Thermo ST16R Centrifuge — ₹2,61,800',
    description: 'Procured under "To investigate how ASAP complex interfaces with splicing and connects the Exon Junction Complex" [ECR/2015/000166]. Used for cell pelleting, RNA/protein extraction, and IP workflows.',
    funding: 'SERB · DST (ECR/2015/000166)',
    imageSrc: '/images/equipment/centrifuge.jpeg',
    accent: '#34D399',
  },
  {
    id: 'thermomixer',
    name: 'Thermomixer',
    model: 'Eppendorf Thermomixer — ₹2,80,000',
    description: 'Procured under "Deciphering the assembly of RNPS1 into the spliceosomal machinery" [CRG/2019/001352]. Temperature-controlled mixing for enzymatic reactions and RNA pull-down incubations.',
    funding: 'SERB · DST (CRG/2019/001352)',
    imageSrc: '/images/equipment/thermomixer.jpeg',
    accent: '#FB923C',
  },
  {
    id: 'biosafety-cabinet',
    name: 'Biosafety Cabinet',
    model: 'BSL-I — ₹3,00,000',
    description: 'Procured under "Identification of interactions between ASAP components and SR proteins" [SuG]. Class I biosafety cabinet for sterile cell culture manipulation and transfection workflows.',
    funding: 'IITG (SuG)',
    imageSrc: '/images/equipment/biosafety-cabinet.jpeg',
    accent: '#60A5FA',
  },
  {
    id: 'mini-centrifuge',
    name: 'Mini Centrifuge',
    model: 'Eppendorf Minicentrifuge — ₹3,00,000',
    description: 'Procured under "Deciphering the assembly of RNPS1 into the spliceosomal machinery" [CRG/2019/001352]. Compact benchtop centrifuge for rapid spin-downs in daily molecular biology workflows.',
    funding: 'SERB · DST (CRG/2019/001352)',
    imageSrc: '/images/equipment/mini-centrifuge.jpeg',
    accent: '#E879F9',
  },
  {
    id: 'elanpro-20-c-freezer',
    name: 'ElanPro -20°C Freezer',
    model: 'ElanPro -20°C Freezer — ₹1,38,200',
    description: 'Procured under "To investigate how ASAP complex interfaces with splicing and connects the Exon Junction Complex" [ECR/2015/000166]. Primary -20°C storage for reagents, antibodies, and RNA stocks.',
    funding: 'SERB · DST (ECR/2015/000166)',
    imageSrc: '/images/equipment/freezer-elanpro.jpeg',
    accent: '#94A3B8',
  },
  {
    id: 'deep-fridge-20-c',
    name: 'Deep Fridge -20°C',
    model: '-20°C Freezer — ₹50,200',
    description: 'Procured under "To investigate how ASAP complex interfaces with splicing and connects the Exon Junction Complex" [ECR/2015/000166]. Secondary -20°C storage for overflow reagents and cell stocks.',
    funding: 'SERB · DST (ECR/2015/000166)',
    imageSrc: '/images/equipment/deep-fridge.jpeg',
    accent: '#7DD3FC',
  },
];
