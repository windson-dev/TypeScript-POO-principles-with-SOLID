import Race from './Race';

class Dwarf extends Race {
  readonly _life: number;
  public static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 80;
    Dwarf.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  public static createdRacesInstances() {
    return Dwarf.instanceCount;
  }
}

export default Dwarf;