import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  public static instanceCount = 0;
  public stamina: EnergyType;

  constructor(name: string) {
    super(name);
    this.stamina = 'stamina';
    Warrior.instanceCount += 1;
  }

  public get energyType(): EnergyType {
    return this.stamina;
  }

  public static createdArchetypeInstances():number {
    return Warrior.instanceCount;
  }
}
