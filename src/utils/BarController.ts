export class BarController {
    private arrayBars: HTMLDivElement[];
    constructor() {
        this.arrayBars = Array.from(document.querySelectorAll(".array-bar"));
    }

    getHeight(barIdx: number) {
        return this.arrayBars[barIdx].style.height;
    }

    setHeight(barIdx: number, barHeight: number | string) {
        if (typeof barHeight == "string") this.arrayBars[barIdx].style.height = barHeight;
        else this.arrayBars[barIdx].style.height = `${barHeight}%`;
    }

    setColor(barIdx: number, color: string) {
        this.arrayBars[barIdx].style.backgroundColor = color;
    }
}
