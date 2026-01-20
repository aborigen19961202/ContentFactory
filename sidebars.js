// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    {type: 'doc', id: 'index'},
    {type: 'doc', id: 'modules'},
    {type: 'doc', id: 'architecture'},
    {type: 'doc', id: 'pipeline'},
    {type: 'doc', id: 'notes'},
  ],
};

export default sidebars;