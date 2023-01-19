import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _name: string;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race() {
    return this._race;
  }

  public get archetype() {
    return this._archetype;
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  public get strength() {
    return this._strength;
  }

  public get defense() {
    return this._defense;
  }

  public get dexterity() {
    return this._dexterity;
  }

  public get energy() {
    return {
      type_: this.archetype.energyType,
      amount: this._energy.amount,
    };
  }

  public receiveDamage(attackPoints: number) {
    const result = attackPoints - this._defense;
    if (result > 0) {
      this._lifePoints -= result;
    }
    if (result <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  public attack(enemy: Fighter) {
    enemy.receiveDamage(this._strength);
  }

  public levelUp() {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }
} 