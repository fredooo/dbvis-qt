import { Point } from './point';

export class Rectangle {
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    public constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public pointInside(point: Point): boolean {
        return (
            this.x <= point.x && this.y <= point.y && this.x + this.width >= point.x && this.y + this.height >= point.y
        );
    }

    public fitsRectangle(rectangle: Rectangle): boolean {
        return (
            this.x <= rectangle.x &&
            this.y <= rectangle.y &&
            this.x + this.width >= rectangle.x + rectangle.width &&
            this.y + this.height >= rectangle.y + rectangle.height
        );
    }

    public copy(): Rectangle {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }

    public equals(other: Rectangle): boolean {
        return this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
    }
}
