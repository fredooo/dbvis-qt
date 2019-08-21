import { Quadtree } from '../src/quadtree';
import { Rectangle } from '../src/rectangle';
import { Point } from '../src/point';

test('retrieve', () => {
    const qt = Quadtree.createQuadtree<number>(100, 100);
    qt.insert(new Rectangle(0, 10, 5, 5), 6);
    let n = qt.retrieve(new Point(0, 10));
    expect(n).toBe(6);
    n = qt.retrieve(new Point(0, 5));
    expect(n).toBe(undefined);
});
