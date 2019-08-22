import * as e from '../src/index';

test('exposed', () => {
    expect(e.Point).toBeDefined();
    expect(e.Quadtree).toBeDefined();
    expect(e.Rectangle).toBeDefined();
});
