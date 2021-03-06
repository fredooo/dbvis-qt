import { Quadtree } from '../src/quadtree';
import { Rectangle } from '../src/rectangle';
import { Point } from '../src/point';

test('retrieve', () => {
    const qt = Quadtree.createQuadtree<number>(100, 100);
    qt.insert(new Rectangle(0, 10, 5, 5), 6);
    let n = qt.retrieve(new Point(0, 10));
    expect(n).toBe(6);
    n = qt.retrieve(new Point(0, 5));
    expect(n).toBeUndefined();
});

test('retrieve', () => {
    const qt = Quadtree.createQuadtree<number>(100, 100);
    qt.insert(new Rectangle(0, 10, 5, 5), 6);
    let n = qt.retrieve(new Point(0, 10));
    expect(n).toBe(6);
    n = qt.retrieve(new Point(0, 5));
    expect(n).toBeUndefined();
});

test('remove', () => {
    const qt = Quadtree.createQuadtree<number>(100, 100);
    qt.insert(new Rectangle(0, 10, 5, 5), 6);
    let i = qt.remove(new Rectangle(0, 10, 5, 5));
    expect(i).toBeDefined();
    const n = i !== undefined ? i.object : undefined;
    expect(n).toBe(6);
    i = qt.remove(new Rectangle(0, 10, 5, 5));
    expect(i).toBeUndefined();
});

test('remove object', () => {
    const qt = Quadtree.createQuadtree<number>(100, 100);
    qt.insert(new Rectangle(0, 10, 5, 5), 6);
    const i = qt.removeObject(6);
    expect(i).toBeDefined();
    const n = i !== undefined ? i.object : undefined;
    expect(n).toBe(6);
    expect(qt.removeObject(6)).toBeUndefined();
});

test('clean', () => {
    const qt = Quadtree.createQuadtree<number>(100, 100);
    qt.insert(new Rectangle(0, 10, 10, 10), 6);
    qt.insert(new Rectangle(30, 35, 10, 10), 6);
    qt.insert(new Rectangle(50, 55, 15, 15), 6);
    qt.clear();
    expect(qt.retrieve(new Point(1, 11))).toBeUndefined();
    expect(qt.retrieve(new Point(21, 26))).toBeUndefined();
    expect(qt.retrieve(new Point(51, 51))).toBeUndefined();
});
