import { BarController } from "./BarController";
import { sleep } from "./utilFunctions";
import { Animation } from "../algorithms";

export class Animator {
    private barController: BarController;

    public constructor() {
        this.barController = new BarController();
    }

    public async animate(animation: Animation) {
        if (animation.action === "comparison") this.compare(animation.items[0], animation.items[1]);
        if (animation.action === "swap") this.swap(animation.items[0], animation.items[1]);
        if (animation.action === "mod") this.mod(animation.items[0], animation.items[1]);
    }

    public async compare(item1: number, item2: number) {
        this.barController.setColor(item1, "var(--compare-color1)");
        this.barController.setColor(item2, "var(--compare-color2)");
        await sleep(50);
        this.barController.setColor(item1, "var(--primary-color)");
        this.barController.setColor(item2, "var(--primary-color)");
    }

    public async swap(item1: number, item2: number) {
        const tempHeight = this.barController.getHeight(item1);
        this.barController.setHeight(item1, this.barController.getHeight(item2));
        this.barController.setHeight(item2, tempHeight);
    }

    public async mod(item: number, height: number) {
        this.barController.setHeight(item, height);
    }
}
