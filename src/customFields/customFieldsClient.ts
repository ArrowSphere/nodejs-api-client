import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';

export class CustomFieldsClient extends AbstractRestfulClient {
  protected basePath = '/partners/customField';

  public async findCustomFields(
    parameters: Parameters = {},
  ): Promise<unknown[]> {
    this.setPath('/list');

    return await this.get(parameters);
  }
}
