import { AbstractRestfulClient } from '../abstractRestfulClient';
import { AxiosResponse } from 'axios';
import { WhoAmIOutput } from './types/WhoAmIOutput';

export type GetInfosExtraHeader = {
  headerName: string;
  headerValue: string;
};

export class UserClient extends AbstractRestfulClient {
  protected basePath = '/partners/users';

  private getInfosRaw(): Promise<AxiosResponse<WhoAmIOutput>> {
    this.path = '/rights';

    return this.get();
  }

  public async getInfos(
    extraHeader: GetInfosExtraHeader,
  ): Promise<WhoAmIOutput> {
    const header: Record<string, string> = {
      [extraHeader.headerName]: extraHeader.headerValue,
    };
    this.setHeaders(header);

    const response = await this.getInfosRaw();

    return response.data;
  }
}
