// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    constructor() {
        this._name = this.getName();
    }

    get name() {
        return this._name;
    }

    nameDB = [];

    getName() {
        const letterNumObj = {
            '1':'A', '2':'B', '3':'C', '4':'D', '5':'E','6':'F', 
            '7':'G', '8':'H', '9':'I', '10':'J', '11':'K', '12':'L',
            '13':'M', '14':'N', '15':'O', '16':'P', '17':'Q', '18':'R',
            '19':'S', '20':'T', '21':'U', '22':'V', '23':'W', '24':'X', 
            '25':'Y', '26':'Z'
        }
        let str;
        do {
            str = '';
            for (let i = 0; i < 5; i++) {
                if (i < 2) {
                    //get random letter
                    const randomLetter = letterNumObj[Math.ceil(Math.random()*26)];
                    str += randomLetter;
                } else {
                    //get random number
                    const randomNumber = Math.floor(Math.random()*10);
                    str += randomNumber;
                }
            }
        } while(this.nameAlreadyUsed(str));
        this.nameDB.push(str);
        return str;
    }

    nameAlreadyUsed(str) {
        if (this.nameDB.find(ele => ele === str) !== undefined) {return true}
        else {return false}
    }

    reset() {
        this._name = this.getName();
    }
}

Robot.releaseNames = () => { };
