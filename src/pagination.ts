import { AbstractEntity } from './abstractEntity';

export enum PaginationFields {
  COLUMN_PER_PAGE = 'per_page',
  COLUMN_CURRENT_PAGE = 'current_page',
  COLUMN_TOTAL_PAGE = 'total_page',
  COLUMN_TOTAL = 'total',
  COLUMN_NEXT = 'next',
  COLUMN_PREVIOUS = 'previous',
}

export type PaginationData = {
  [PaginationFields.COLUMN_PER_PAGE]: number;
  [PaginationFields.COLUMN_CURRENT_PAGE]: number;
  [PaginationFields.COLUMN_TOTAL_PAGE]: number;
  [PaginationFields.COLUMN_TOTAL]: number;
  [PaginationFields.COLUMN_NEXT]: string | null;
  [PaginationFields.COLUMN_PREVIOUS]: string | null;
};

export class Pagination extends AbstractEntity<PaginationData> {
  readonly #perPage: number;
  readonly #currentPage: number;
  readonly #totalPage: number;
  readonly #total: number;
  readonly #next: string | null;
  readonly #previous: string | null;

  public constructor(paginationDataInput: PaginationData) {
    super(paginationDataInput);

    this.#perPage = paginationDataInput[PaginationFields.COLUMN_PER_PAGE];
    this.#currentPage =
      paginationDataInput[PaginationFields.COLUMN_CURRENT_PAGE];
    this.#totalPage = paginationDataInput[PaginationFields.COLUMN_TOTAL_PAGE];
    this.#total = paginationDataInput[PaginationFields.COLUMN_TOTAL];
    this.#next = paginationDataInput[PaginationFields.COLUMN_NEXT];
    this.#previous = paginationDataInput[PaginationFields.COLUMN_PREVIOUS];
  }

  get perPage(): number {
    return this.#perPage;
  }

  get currentPage(): number {
    return this.#currentPage;
  }

  get totalPage(): number {
    return this.#totalPage;
  }

  get total(): number {
    return this.#total;
  }

  get next(): string | null {
    return this.#next;
  }

  get previous(): string | null {
    return this.#previous;
  }

  public toJSON(): PaginationData {
    return {
      [PaginationFields.COLUMN_PER_PAGE]: this.perPage,
      [PaginationFields.COLUMN_CURRENT_PAGE]: this.currentPage,
      [PaginationFields.COLUMN_TOTAL_PAGE]: this.totalPage,
      [PaginationFields.COLUMN_TOTAL]: this.total,
      [PaginationFields.COLUMN_NEXT]: this.next,
      [PaginationFields.COLUMN_PREVIOUS]: this.previous,
    };
  }
}
