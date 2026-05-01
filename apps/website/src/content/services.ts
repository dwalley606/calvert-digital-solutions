export type Service = {
  title: string;
  desc: string;
  href: string;
};

export const services: Service[] = [
  {
    title: 'Custom Websites',
    desc: 'Fully custom Next.js websites built around your business and your customers. Fast, clean, and designed to convert.',
    href: '/services/custom-websites',
  },
  {
    title: 'CMS Websites',
    desc: 'Wix, Squarespace, and WordPress — built right or migrated from whatever you have now. Manageable by you, no developer required.',
    href: '/services/cms-websites',
  },
  {
    title: 'Monthly Retainer',
    desc: 'Ongoing maintenance, updates, and hosting management. One flat rate, no surprises, nothing falls through the cracks.',
    href: '/services/monthly-retainer',
  },
];
