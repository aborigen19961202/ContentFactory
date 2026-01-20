// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    {type: 'doc', id: 'index', label: 'Головна'},
    {
      type: 'category',
      label: 'Модулі',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'modules/index'},
      items: [
        'modules/script',
        'modules/visual',
        'modules/audio',
        'modules/assembly',
        'modules/upload',
      ],
    },
    {type: 'doc', id: 'architecture'},
    {type: 'doc', id: 'pipeline'},
    {type: 'doc', id: 'notes'},
  ],
};

export default sidebars;
