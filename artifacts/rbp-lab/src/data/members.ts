export type MemberGroup = 'current' | 'alumni' | 'intern';

export interface Member {
  name: string;
  role: string;
  slug: string;
  group: MemberGroup;
  /**
   * Portrait source. Bundled members resolve to `public/images/members/<slug>.jpg`;
   * Studio members carry an absolute Sanity CDN URL.
   */
  portrait?: string;
}

const portraitFor = (slug: string) => `/images/members/${slug}.jpg`;

/** Bundled fallback, rendered when Sanity is empty or unreachable. */
export const PRINCIPAL_INVESTIGATOR: Member = {
  name: 'Prof. Kusum K. Singh',
  role: 'Principal Investigator · Assistant Professor',
  slug: 'kusum-k-singh',
  group: 'current',
  portrait: portraitFor('kusum-k-singh'),
};

export const MEMBERS: Member[] = [
  { name: 'Khalid Mohd Ibrahimi', role: 'Postdoctoral Researcher', slug: 'khalid-mohd-ibrahimi', group: 'current' },
  { name: 'Priyanka Yadav', role: 'PhD Scholar · NMD & UPF3B Regulation', slug: 'priyanka-yadav', group: 'current' },
  { name: 'Sourabh Chakrabarty', role: 'PhD Scholar · RNA-Protein Interactions', slug: 'sourabh-chakrabarty', group: 'current' },
  { name: 'Silpi Sikha Bora', role: 'PhD Scholar', slug: 'silpi-sikha-bora', group: 'current' },
  { name: 'Lashika Goyal', role: 'M.Tech Scholar', slug: 'lashika-goyal', group: 'current' },
  { name: 'Priya Gautam', role: 'M.Tech Scholar', slug: 'priya-gautam', group: 'current' },

  { name: 'Bhagyashree Deka', role: 'PhD Scholar', slug: 'bhagyashree-deka', group: 'alumni' },
  { name: 'Pratap Chandra', role: 'PhD Scholar', slug: 'pratap-chandra', group: 'alumni' },
  { name: 'Sweta Kumari', role: 'PhD Scholar', slug: 'sweta-kumari', group: 'alumni' },
  { name: 'Ayushi Rehman', role: 'PhD Scholar', slug: 'ayushi-rehman', group: 'alumni' },
  { name: 'Jebasingh Winston R', role: 'M.Tech', slug: 'jebasingh-winston', group: 'alumni' },
  { name: 'Harita M', role: 'M.Tech', slug: 'harita-m', group: 'alumni' },
  { name: 'Raja T', role: 'M.Tech', slug: 'raja-t', group: 'alumni' },
  { name: 'Vishal Bharti', role: 'M.Tech', slug: 'vishal-bharti', group: 'alumni' },
  { name: 'Ajay Narwade', role: 'M.Tech', slug: 'ajay-narwade', group: 'alumni' },
  { name: 'Sonali Devi', role: 'M.Tech', slug: 'sonali-devi', group: 'alumni' },
  { name: 'Harekrishna Mandal', role: 'M.Tech', slug: 'harekrishna-mandal', group: 'alumni' },
  { name: 'Nayan Jain', role: 'M.Tech', slug: 'nayan-jain', group: 'alumni' },
  { name: 'Gourab Chatterjee', role: 'M.Tech', slug: 'gourab-chatterjee', group: 'alumni' },

  { name: 'Abhiram Ganji', role: 'Summer Intern · Data Science & AI', slug: 'abhiram-ganji', group: 'intern' },
].map((member) => ({ ...member, portrait: portraitFor(member.slug) }) as Member);

/** Shape returned by MEMBERS_QUERY. */
export interface SanityMemberDoc {
  _id: string;
  name?: string;
  role?: string;
  group?: string;
  slug?: { current?: string };
  portraitUrl?: string;
  isPrincipalInvestigator?: boolean;
}

export const MEMBERS_QUERY = `*[_type == "member"] | order(order asc, name asc){
  _id, name, role, group, slug, isPrincipalInvestigator,
  "portraitUrl": portrait.asset->url
}`;

const isGroup = (value: string | undefined): value is MemberGroup =>
  value === 'current' || value === 'alumni' || value === 'intern';

/** Maps Studio documents onto the shape the members page renders. */
export function mapMemberDocs(docs: SanityMemberDoc[]): Member[] {
  return docs
    .filter((doc) => doc.name)
    .map((doc) => ({
      name: doc.name as string,
      role: doc.role ?? '',
      slug: doc.slug?.current ?? doc._id,
      group: isGroup(doc.group) ? doc.group : 'current',
      // Portraits render at roughly 420px wide; ask the CDN for that rather
      // than the original upload.
      portrait: doc.portraitUrl
        ? `${doc.portraitUrl}?w=560&h=700&fit=crop&auto=format&q=75`
        : undefined,
      isPrincipalInvestigator: doc.isPrincipalInvestigator ?? false,
    })) as (Member & { isPrincipalInvestigator: boolean })[];
}

/** Splits a flat member list into the sections the page renders. */
export function groupMembers(all: (Member & { isPrincipalInvestigator?: boolean })[]) {
  const pi = all.find((m) => m.isPrincipalInvestigator);
  const rest = all.filter((m) => !m.isPrincipalInvestigator);
  return {
    principalInvestigator: pi ?? PRINCIPAL_INVESTIGATOR,
    current: rest.filter((m) => m.group === 'current'),
    alumni: rest.filter((m) => m.group === 'alumni'),
    interns: rest.filter((m) => m.group === 'intern'),
  };
}
