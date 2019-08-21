export class Point {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public equals(other: Point): boolean {
        return this.x === other.x && this.y === other.y;
    }

    public copy(): Point {
        return new Point(this.x, this.y);
    }

    public static createFromXyObject(o: { x: number; y: number }): Point {
        return new Point(o.x, o.y);
    }
}
