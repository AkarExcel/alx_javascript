#!/usr/bin/node

const Sq = require("./5-square");

module.exports = class Square extends Sq {
    constructor(value){
        super(value);
    }

    charPrint(c){
        if(c == null){
            super.print();
        } else {
            super.print(c);
        }
    }

}

