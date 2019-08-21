import { Point } from './point';
import { Rectangle } from './rectangle';

interface QuadtreeItem<T> {
    rectangle: Rectangle;
    object: T;
}

export class Quadtree<T> extends Rectangle {
    private nwChild: Quadtree<T> | undefined;
    private neChild: Quadtree<T> | undefined;
    private seChild: Quadtree<T> | undefined;
    private swChild: Quadtree<T> | undefined;
    private children: Quadtree<T>[];
    private hasChildren: boolean;
    private items: QuadtreeItem<T>[];

    private constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
        this.nwChild = undefined;
        this.neChild = undefined;
        this.seChild = undefined;
        this.swChild = undefined;
        this.children = [];
        this.items = [];
        this.hasChildren = false;
    }

    public clear(): void {
        this.nwChild = undefined;
        this.neChild = undefined;
        this.seChild = undefined;
        this.swChild = undefined;
        this.children = [];
        this.items = [];
        this.hasChildren = false;
    }

    public hasObjects(): boolean {
        return this.items.length > 0;
    }

    public insert(rectangle: Rectangle, object: T): void {
        if (!this.hasChildren) {
            this.appendChildren();
        }
        const child = this.children.find(c => c.fitsRectangle(rectangle));
        if (child === undefined) {
            this.items.push({ rectangle, object });
        } else {
            child.insert(rectangle, object);
        }
    }

    public remove(r: Rectangle): QuadtreeItem<T> | undefined {
        const child = this.children.find(c => c.fitsRectangle(r));
        if (child === undefined) {
            const index = this.items.findIndex(i => i.rectangle.equals(r));
            if (index === -1) {
                return undefined;
            }
            return this.items.splice(index, 1)[0];
        } else {
            return child.remove(r);
        }
    }

    public removeObject(o: T): QuadtreeItem<T> | undefined {
        const index = this.items.findIndex(i => i.object === o);
        if (index > -1) {
            return this.items.splice(index, 1)[0];
        }
        for (const c of this.children) {
            const r = c.removeObject(o);
            if (r !== undefined) {
                return r;
            }
        }
        return undefined;
    }

    public retrieve(point: Point): T | undefined {
        const rect = this.items.find(e => e.rectangle.pointInside(point));
        if (rect !== undefined) {
            return rect.object;
        }
        const child = this.children.find(c => c.pointInside(point));
        if (child !== undefined) {
            return child.retrieve(point);
        }
        return undefined;
    }

    private appendChildren(): void {
        if (this.hasChildren) {
            return;
        }
        const childWidth = this.width / 2;
        const childHeight = this.height / 2;
        this.nwChild = new Quadtree(this.x, this.y, childWidth, childHeight);
        this.neChild = new Quadtree(this.x + childWidth, this.y, childWidth, childHeight);
        this.seChild = new Quadtree(this.x + childWidth, this.y + childHeight, childWidth, childHeight);
        this.swChild = new Quadtree(this.x, this.y + childHeight, childWidth, childHeight);
        this.children = [this.nwChild, this.neChild, this.seChild, this.swChild];
        this.hasChildren = true;
    }

    public static createQuadtree<T>(width: number, height: number): Quadtree<T> {
        return new Quadtree<T>(0, 0, width, height);
    }
}
