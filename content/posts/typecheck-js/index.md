---
title: 'Typecheck regular javascript with typescript'
description: 'Get proper autocomplete, ts flow based type analysis analysis, types definitions from d.ts files in your js files'
path: '/typecheck-regular-javascript-with-typescript'
cover: '../default.jpg'
date: '2019-09-15'
tags: ['javascript', 'typescript', 'tips']
---

## How to enable in VSCode

- Create a `jsconfig.json` file at project root.  
  with content

```json
{
  "compilerOptions": {
    "checkJs": true, // The important bit
    "target": "es2016",
    "moduleResolution": "node",
    "lib": ["es2016", "dom"],
    "strict": true,
    "noImplicitAny": false,
    "noEmit": true
  },
  "exclude": ["node_modules"]
}
```
  
  

### Alternatively

- use `//@ts-check` comment on top of the file you want to check
