import { Point } from '../src/point';

test('copy', () => {
    const p = new Point(0, 1);
    const c = p.copy();
    expect(p === c).toBe(false);
    expect(c.x).toBe(p.x);
    expect(c.y).toBe(p.y);
});

test('equals', () => {
    const p1 = new Point(0, 1);
    const p2 = new Point(0, 1);
    expect(p1.equals(p2)).toBe(true);
    const p3 = new Point(1, 1);
    expect(p1.equals(p3)).toBe(false);
});
