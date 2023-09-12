#!/usr/bin/node

//create a square of w and h
// 
module.exports = class Rectangle {
    constructor(w, h) {
        if(w <= 0 || h <= 0 || h == undefined || w == undefined) {
            return null;
        } else {
            this.width = w;
            this.height = h;
        }
    }
    
    // print square from recttangle
    print(x = 'X') {
        for (let i = 0; i < this.height; i++) {
            console.log(x.repeat(this.width));
        };
    }

    // rotate the rect

    rotate() {
        let w = this.width;
        let h = this.height;
        this.width = h;
        this.height = w;
    }

    double() {
        let w = this.width * 2;
        let h = this.height * 2;
        this.width = w;
        this.height = h; 
    }
}