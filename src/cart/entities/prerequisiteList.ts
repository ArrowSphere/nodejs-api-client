import { AbstractEntity } from '../../abstractEntity';
import { PrerequisiteResult, PrerequisiteResultData } from './prerequisite';

export enum GetPrerequisitesListResultFields {
  PREREQUISITES = 'prerequisites',
}

export type GetPrerequisitesListResultData = {
  [GetPrerequisitesListResultFields.PREREQUISITES]: PrerequisiteResultData[];
};

export class GetPrerequisitesListResult extends AbstractEntity<GetPrerequisitesListResultData> {
  readonly #prerequisites: PrerequisiteResult[];

  public constructor(input: GetPrerequisitesListResultData) {
    super(input);

    this.#prerequisites = input[
      GetPrerequisitesListResultFields.PREREQUISITES
    ].map(
      (prerequisite: PrerequisiteResultData) =>
        new PrerequisiteResult(prerequisite),
    );
  }

  getPrerequisites(): PrerequisiteResult[] {
    return this.#prerequisites;
  }

  public toJSON(): GetPrerequisitesListResultData {
    return {
      [GetPrerequisitesListResultFields.PREREQUISITES]: this.#prerequisites.map(
        (prerequisite: PrerequisiteResult) => prerequisite.toJSON(),
      ),
    };
  }
}
