import { AbstractEntity } from '../../abstractEntity';
import { Program, ProgramType } from './program';

export type ProgramsType = Array<ProgramType>;

export class Programs extends AbstractEntity<ProgramsType> {
  readonly #list: Program[];
  constructor(input: ProgramsType) {
    super(input);

    this.#list = input.map((input) => new Program(input));
  }

  get list(): Program[] {
    return this.#list;
  }

  public toJSON(): ProgramsType {
    return this.list.map((item) => item.toJSON());
  }
}
