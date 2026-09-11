export interface ContactInfo {
  labName: string;
  addressLines: string[];
  email: string;
  phone: string;
  piName: string;
  piTitle: string;
  piProfileUrl: string;
  piExternalUrl: string;
  mapEmbedUrl: string;
  mapLabel: string;
}

export const CONTACT: ContactInfo = {
  labName: 'RNA-Binding Proteins Laboratory',
  addressLines: [
    'Department of Biosciences and Bioengineering',
    'Indian Institute of Technology Guwahati',
    'Academic Complex, Room 3206',
    'Amingaon, North Guwahati, Assam 781039',
    'India',
  ],
  email: 'kusumsingh@iitg.ac.in',
  phone: '+91-361-2582250',
  piName: 'Prof. Kusum K Singh',
  piTitle: 'Assistant Professor · Department of Biosciences and Bioengineering',
  piProfileUrl: '/members/kusum-k-singh',
  /**
   * Google Maps embed. This keyless `?output=embed` form needs no API key.
   * To set a precise pin: open Google Maps, find the exact spot, choose
   * Share → Embed a map, and paste the `src` from that iframe here.
   * Coordinates also work directly, e.g. `?q=26.1866,91.6919&z=17&output=embed`.
   */
  mapEmbedUrl:
    'https://www.google.com/maps?q=Department+of+Biosciences+and+Bioengineering,+IIT+Guwahati,+Amingaon,+North+Guwahati,+Assam+781039&z=16&output=embed',
  mapLabel: 'Map showing the Department of Biosciences and Bioengineering, IIT Guwahati',
  piExternalUrl:
    'https://www.iitg.ac.in/biotech/faculty_profile.php?fname=Kusum%20K&lname=Singh&iitg=1137&mail=kusumsingh@iitg.ac.in',
};
