import Race from './Race';

export default class Halfling extends Race {
  readonly _life: number;
  public static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 60;
    Halfling.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  public static createdRacesInstances() {
    return Halfling.instanceCount;
  }
}