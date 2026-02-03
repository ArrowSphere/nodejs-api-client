import { AbstractEntity } from '../../abstractEntity';
import { UserApiKey, UserApiKeyData } from './userApiKey';

export type GetUserApiKeysResultData = UserApiKeyData[];

export class GetUserApiKeysResult extends AbstractEntity<GetUserApiKeysResultData> {
  readonly #apiKeys: UserApiKey[];

  public constructor(dataInput: GetUserApiKeysResultData) {
    super(dataInput);

    this.#apiKeys =
      dataInput?.map((result: UserApiKeyData) => new UserApiKey(result)) ?? [];
  }

  get apiKeys(): UserApiKey[] {
    return this.#apiKeys;
  }

  public toJSON(): GetUserApiKeysResultData {
    return this.apiKeys.map((result: UserApiKey) => result.toJSON());
  }
}
