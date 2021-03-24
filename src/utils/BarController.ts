export class BarController {
    private arrayBars: HTMLDivElement[];
    public constructor() {
        this.arrayBars = Array.from(document.querySelectorAll(".array-bar"));
    }

    public getHeight(barIdx: number) {
        return this.arrayBars[barIdx].style.height;
    }

    public setHeight(barIdx: number, barHeight: number | string) {
        if (typeof barHeight == "string") this.arrayBars[barIdx].style.height = barHeight;
        else this.arrayBars[barIdx].style.height = `${barHeight}%`;
    }

    public setColor(barIdx: number, color: string) {
        this.arrayBars[barIdx].style.backgroundColor = color;
    }
}
