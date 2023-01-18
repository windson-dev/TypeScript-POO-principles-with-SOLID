import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  public static instanceCount = 0;
  public stamina: EnergyType;

  constructor(name: string) {
    super(name);
    this.stamina = 'stamina';
    Ranger.instanceCount += 1;
  }

  public get energyType(): EnergyType {
    return this.stamina;
  }

  public static createdArchetypeInstances():number {
    return Ranger.instanceCount;
  }
}
