export class RemoteClass {
    private _counter: number;

    constructor(init = 0) {
        console.log(init);
        this._counter = init;
    }

    get counter() {
        return this._counter;
    }

    increment(delta = 1) {
        this._counter += delta;
    }
}
