dbvis-qt
========

[![npm version](https://badge.fury.io/js/dbvis-qt.svg)](https://badge.fury.io/js/dbvis-qt) [![Build Status](https://travis-ci.org/fredooo/dbvis-qt.svg?branch=master)](https://travis-ci.org/fredooo/dbvis-qt) [![codecov](https://codecov.io/gh/fredooo/dbvis-qt/branch/master/graph/badge.svg)](https://codecov.io/gh/fredooo/dbvis-qt) [![dependencies Status](https://david-dm.org/fredooo/dbvis-qt/status.svg)](https://david-dm.org/fredooo/dbvis-qt) [![devDependencies Status](https://david-dm.org/fredooo/dbvis-qt/dev-status.svg)](https://david-dm.org/fredooo/dbvis-qt?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript implementation of the quadtree data structure.

The current version does not support overlapping rectangles yet.

### Install

Install with `npm`:

```bash
npm install --save dbvis-qt
```

This package requires module resolution by Node in `tsconfig.json`:

```json
{
    "compilerOptions": {
        "moduleResolution": "node"
    }
}
```

### Usage

Example:

```javascript
import { Point, Quadtree, Rectangle } from 'dbvis-qt';

// Create a quadtree of size 100x100
const qt = Quadtree.createQuadtree<number>(100, 100);
const r = new Rectangle(0, 10, 5, 5);
const d = 6;
// Insert an object (d) associated with an area (r) 
qt.insert(r, d);
const p = new Point(2, 12);
// Retrieve an object with a point, i.e., return the area and the associated
// object if the tree contains a rectangle that encloses the point
let i = qt.retrieve(p);
// i.object = 6; i.rectangle = Rectangle(0, 10, 5, 5)
i = qt.remove(r);
// i.object = 6; i.rectangle = Rectangle(0, 10, 5, 5)
let i = qt.retrieve(p);
// i = undefined;

// ...

qt.clear();

```
