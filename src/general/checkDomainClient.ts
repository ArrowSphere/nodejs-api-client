import { AxiosResponse } from 'axios';
import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';

export type CheckDomainData = { isDomainAvailable: boolean };

/**
 * Class CheckDomainClient
 */
export class CheckDomainClient extends AbstractRestfulClient {
  /**
   * @param vendorName - The vendor's name
   * @param domainName - The domain to check
   * @param parameters - Optional parameters to add to the URL
   *
   * @returns Promise\<AxiosResponse\<{@link CheckDomainData}\>\>
   */
  public checkDomainRaw(
    vendorName: string,
    domainName: string,
    parameters: Parameters = {},
  ): Promise<AxiosResponse<CheckDomainData>> {
    this.path = encodeURI(`/vendors/${vendorName}/checkDomain/${domainName}`);
    return this.get(parameters);
  }

  /**
   * @param vendorName - Vendor's name
   * @param domainName - Domain to check
   * @param parameters - Optional parameters to add to the URL
   *
   * @returns Promise\<boolean\>
   */
  public async checkDomain(
    vendorName: string,
    domainName: string,
    parameters: Parameters = {},
  ): Promise<boolean> {
    const { data } = await this.checkDomainRaw(
      vendorName,
      domainName,
      parameters,
    );

    return data.isDomainAvailable;
  }
}
