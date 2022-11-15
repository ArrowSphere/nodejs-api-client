import { AbstractEntity } from '../../../abstractEntity';
import { SecurityResources, SecurityResourcesType } from './securityResources';

export enum ResourcesFields {
  COLUMN_DESCRIPTION = 'description',
  COLUMN_METADATA = 'metadata',
  COLUMN_NAME = 'name',
  COLUMN_RESOURCES = 'resources',
  COLUMN_UPDATED_AT = 'updatedAt',
}

export type ResourcesType = {
  [ResourcesFields.COLUMN_DESCRIPTION]: string;
  [ResourcesFields.COLUMN_METADATA]: Array<string>;
  [ResourcesFields.COLUMN_NAME]: string;
  [ResourcesFields.COLUMN_RESOURCES]: Array<SecurityResourcesType>;
  [ResourcesFields.COLUMN_UPDATED_AT]: string;
};

export class Resources extends AbstractEntity<ResourcesType> {
  readonly #description: string;
  readonly #metadata: Array<string>;
  readonly #name: string;
  readonly #resources: Array<SecurityResources>;
  readonly #updatedAt: string;

  public constructor(resources: ResourcesType) {
    super(resources);

    this.#description = resources[ResourcesFields.COLUMN_DESCRIPTION];
    this.#metadata = resources[ResourcesFields.COLUMN_METADATA];
    this.#name = resources[ResourcesFields.COLUMN_NAME];
    this.#resources = resources[ResourcesFields.COLUMN_RESOURCES].map(
      (securityResources: SecurityResourcesType) =>
        new SecurityResources(securityResources),
    );
    this.#updatedAt = resources[ResourcesFields.COLUMN_UPDATED_AT];
  }

  get description(): string {
    return this.#description;
  }

  get metadata(): Array<string> {
    return this.#metadata;
  }

  get name(): string {
    return this.#name;
  }

  get resources(): Array<SecurityResources> {
    return this.#resources;
  }

  get updatedAt(): string {
    return this.#updatedAt;
  }

  public toJSON(): ResourcesType {
    return {
      [ResourcesFields.COLUMN_DESCRIPTION]: this.description,
      [ResourcesFields.COLUMN_METADATA]: this.metadata,
      [ResourcesFields.COLUMN_NAME]: this.name,
      [ResourcesFields.COLUMN_RESOURCES]: this.resources.map(
        (securityResources: SecurityResources) => securityResources.toJSON(),
      ),
      [ResourcesFields.COLUMN_UPDATED_AT]: this.updatedAt,
    };
  }
}
