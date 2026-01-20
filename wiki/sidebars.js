// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    {type: 'doc', id: 'index', label: 'Головна'},
    {type: 'doc', id: 'modules'},
    {type: 'doc', id: 'modules/script'},
    {type: 'doc', id: 'modules/visual'},
    {type: 'doc', id: 'modules/audio'},
    {type: 'doc', id: 'modules/assembly'},
    {type: 'doc', id: 'modules/upload'},
    {type: 'doc', id: 'architecture'},
    {type: 'doc', id: 'pipeline'},
    {type: 'doc', id: 'notes'},
  ],
};

export default sidebars;
