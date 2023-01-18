import Race from './Race';

export default class Orc extends Race {
  readonly _life: number;
  public static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 74;
    Orc.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  public static createdRacesInstances() {
    return Orc.instanceCount;
  }
}