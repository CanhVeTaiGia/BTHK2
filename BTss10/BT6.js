"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name() {
        return this._name;
    }
    get length() {
        return this._length;
    }
    set name(value) {
        this._name = value;
    }
    set length(value) {
        this._length = value;
    }
}
let song1 = new Song(1, "How long", 5);
console.log(song1.name);
console.log(song1.length);
song1.name = "The Longest";
song1.length = 6;
console.log(song1.name);
console.log(song1.length);
