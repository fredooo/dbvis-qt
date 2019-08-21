import { Rectangle } from '../src/rectangle';

test('copy', () => {
    const r = new Rectangle(0, 1, 100, 200);
	const c = r.copy();
    expect(r === c).toBe(false);
    expect(c.x).toBe(r.x);
    expect(c.y).toBe(r.y);
    expect(c.width).toBe(r.width);
    expect(c.height).toBe(r.height);
});
