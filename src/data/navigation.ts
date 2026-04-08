export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface MegaMenuSection {
  title: string;
  items: { label: string; href: string; description?: string }[];
}

export const mainNavItems: NavItem[] = [
  { label: 'Personal', href: '/' },
  { label: 'Membership', href: '/membership' },
];

export const secondaryNavItems = [
  {
    label: 'Checking & Savings',
    href: '/checking-savings'
  },
  {
    label: 'Credit Cards',
    href: '/credit-cards'
  },
  {
    label: 'Loans',
    href: '/auto-loans'
  },
  {
    label: 'Payment History',
    href: '/payment-history'
  },
];

export const footerLinks = {
  main: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Current Rates', href: '#' },
    { label: 'Forms & Brochures', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Help Center', href: '#' },
  ],
  secondary: [
    { label: 'Site Map', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Browser Support', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
};

