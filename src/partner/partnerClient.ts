import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';

export class PartnerClient extends AbstractRestfulClient {
  protected basePath = '/partners';

  public async deletePartner(
    partnerReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${partnerReference}`;

    return this.delete(parameters);
  }
}
