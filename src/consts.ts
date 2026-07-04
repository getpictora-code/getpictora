// Site-wide constants — single source of truth for GetPictora
export const SITE = {
  name: 'GetPictora',
  domain: 'getpictora.com',
  tagline: 'Powerful image tools, zero friction.',
  description:
    'Free online image editing, conversion, compression, and enhancement tools. No upload required — process images right in your browser.',
  url: 'https://getpictora.com',
  ogImage: '/og-default.png',
  twitter: '@imagetools',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Tools', href: '/tools' },
  { label: 'Resize', href: '/resize' },
  { label: 'Compress', href: '/compress' },
  { label: 'PDF Compress', href: '/compress-pdf' },
  { label: 'Convert', href: '/convert' },
  { label: 'Crop', href: '/crop' },
  { label: 'Rotate', href: '/rotate' },
  { label: 'Filters', href: '/filters' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  Product: [
    { label: 'All Tools', href: '/tools' },
    { label: 'Resize', href: '/resize' },
    { label: 'Compress', href: '/compress' },
    { label: 'PDF Compress', href: '/compress-pdf' },
    { label: 'Convert', href: '/convert' },
    { label: 'Crop', href: '/crop' },
    { label: 'Rotate', href: '/rotate' },
    { label: 'Filters', href: '/filters' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;
