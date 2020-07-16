//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (num) => {
  if (num < 3) {throw 'Ability scores must be at least 3'}
  if (num > 18) {throw 'Ability scores can be at most 18'}
  return Math.floor((num - 10) / 2)
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }

  static rollAbility() {
    const dice = [];
    dice.push(Math.ceil(Math.random() * 6));
    for (let i = 0; i < 3; i++) {
      const thisRoll = Math.ceil(Math.random() * 6);
      const length = dice.length;
      for (let j = 0; j < length; j++) {
        if (thisRoll > dice[j]) {dice.splice(j, 0, thisRoll); break;}
        if (j === dice.length - 1) {dice.push(thisRoll);}
      }
    }
    return dice[0] + dice[1] + dice[2];
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}
