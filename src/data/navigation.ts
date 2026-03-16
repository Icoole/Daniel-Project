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
  { label: 'Business', href: '/business' },
  { label: 'Membership', href: '/membership' },
];

export const secondaryNavItems = [
  {
    label: 'Checking & Savings',
    href: '/checking-savings',
    sections: [
      {
        title: 'Savings Accounts',
        items: [
          { label: 'Retirement Savings', href: '#' },
          { label: 'Certificates', href: '#' },
          { label: 'Education Savings', href: '#' },
          { label: 'Money Market Accounts', href: '#' },
          { label: 'Emergency Savings', href: '#' },
        ],
      },
      {
        title: 'Checking & Debit',
        items: [
          { label: 'Checking Protections', href: '#' },
          { label: 'Checking Resources', href: '#' },
          { label: 'Order Checks', href: '#' },
          { label: 'Make a Deposit', href: '#' },
          { label: 'Set up Direct Deposit', href: '#' },
        ],
      },
      {
        title: 'Prepaid & Gift Cards',
        items: [
          { label: 'GO Prepaid Card', href: '#' },
          { label: 'Gift Cards', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Credit Cards',
    href: '/credit-cards',
    sections: [
      {
        title: 'All Credit Cards',
        items: [
          { label: 'cashRewards', href: '#' },
          { label: 'cashRewards Secured', href: '#' },
          { label: 'More Rewards American Express', href: '#' },
          { label: 'Visa Signature Flagship Rewards', href: '#' },
          { label: 'GO REWARDS', href: '#' },
          { label: 'Platinum Card', href: '#' },
        ],
      },
      {
        title: 'Card Services',
        items: [
          { label: 'Prequalify for a Card', href: '#' },
          { label: 'Balance Transfer', href: '#' },
          { label: 'Card Features', href: '#' },
          { label: 'Special Offers', href: '#' },
          { label: 'Cardholder Resources', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Loans',
    href: '/auto-loans',
    sections: [
      {
        title: 'Mortgages',
        items: [
          { label: 'Mortgage Rates', href: '#' },
          { label: 'Mortgage Refinancing', href: '#' },
          { label: 'Mortgage Preapproval', href: '#' },
          { label: 'Learn How to Buy a Home', href: '#' },
          { label: 'Mortgage Calculators', href: '#' },
        ],
      },
      {
        title: 'Auto Loans',
        items: [
          { label: 'Auto Loan Rates', href: '#' },
          { label: 'Auto Refinancing', href: '#' },
          { label: 'Auto Preapproval', href: '#' },
          { label: 'Auto Loan Calculator', href: '#' },
          { label: 'Shop for a Car Online', href: '#' },
        ],
      },
      {
        title: 'Other Loans',
        items: [
          { label: 'Student Loans', href: '#' },
          { label: 'Personal Loans', href: '#' },
          { label: 'Motorcycle Loans', href: '#' },
          { label: 'Boat Loans', href: '#' },
          { label: 'RV Loans', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Services & Security',
    href: '#',
    sections: [
      {
        title: 'Security Center',
        items: [
          { label: 'Report Fraud', href: '#' },
          { label: 'Digital Security', href: '#' },
          { label: '2-Step Verification', href: '#' },
        ],
      },
      {
        title: 'Transfer Funds',
        items: [
          { label: 'Cash Transfers', href: '#' },
          { label: 'Wire Transfers', href: '#' },
          { label: 'Zelle', href: '#' },
        ],
      },
      {
        title: 'Mobile & Online Banking',
        items: [
          { label: 'Mobile Deposits', href: '#' },
          { label: 'Manage Username & Password', href: '#' },
          { label: 'Account Notification', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Smart Money Strategies',
    href: '#',
    sections: [
      {
        title: 'Browse All Topics',
        items: [
          { label: 'Credit & Debt', href: '#' },
          { label: 'Savings & Budgeting', href: '#' },
          { label: 'Retirement', href: '#' },
          { label: 'Home Ownership', href: '#' },
          { label: 'Auto', href: '#' },
        ],
      },
      {
        title: 'Investing',
        items: [
          { label: 'Investing Basics', href: '#' },
          { label: 'Investment Strategies', href: '#' },
        ],
      },
      {
        title: 'Military Life',
        items: [
          { label: 'Military Families', href: '#' },
          { label: 'New Recruits', href: '#' },
          { label: 'Transitioning Military', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Investments',
    href: '#',
    sections: [
      {
        title: 'Navy Federal Investment Services',
        items: [
          { label: 'Financial Planning', href: '#' },
          { label: 'Investments', href: '#' },
          { label: 'Estate Planning', href: '#' },
          { label: 'Digital Investor', href: '#' },
          { label: 'Life Insurance', href: '#' },
        ],
      },
    ],
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
