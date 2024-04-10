class Song{
    public readonly id: number;
    private _name: string;
    private _length: number;
    constructor(id: number, name: string, length: number) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name():string{
        return this._name
    }
    get length():number{
        return this._length
    }
    set name(value: string){
        this._name = value;
    }
    set length(value: number){
        this._length = value
    }
}

let song1 = new Song(1, "How long", 5);
console.log(song1.name);
console.log(song1.length);
song1.name = "The Longest";
song1.length = 6;
console.log(song1.name);
console.log(song1.length);
