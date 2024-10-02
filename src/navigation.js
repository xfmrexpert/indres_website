import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Services', href: getPermalink('/services')},
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact')},
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/timothyraymond' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/xfmrexpert' },
  ],
  footNote: `
    All rights reserved.
  `,
};
