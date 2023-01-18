import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  public static instanceCount = 0;
  public mana: EnergyType;

  constructor(name: string) {
    super(name);
    this.mana = 'mana';
    Necromancer.instanceCount += 1;
  }

  public get energyType(): EnergyType {
    return this.mana;
  }

  public static createdArchetypeInstances():number {
    return Necromancer.instanceCount;
  }
}
