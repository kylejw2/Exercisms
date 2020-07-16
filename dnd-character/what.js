class Foo {
    constructor() {
        this._name = this.myName();
    }

    static myName() {
        return 'Me';
    }
}

const classObj = new Foo();
console.log(classObj);
// To call a static method from inside the constructor, you have to supply
// the name of the class instead of using "this."