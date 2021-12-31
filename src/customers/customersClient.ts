import { AbstractClient } from '../abstractClient';
import { AxiosResponse } from 'axios';
import { Invitation, InvitationData } from './entities/invitation';

export class CustomersClient extends AbstractClient {
  /**
   * The base path of the customers API
   */
  private ROOT_PATH = '/customers';

  protected basePath = this.ROOT_PATH;

  private GET_INVITATION_PATH = '/invitations';

  /**
   * Gets and returns the raw invitation response data.
   *
   * @param keycode - The keycode of the invitation
   * @returns Promise<InvitationData>
   */
  public async getInvitationRaw(
    keycode: string,
  ): Promise<AxiosResponse<InvitationData>> {
    this.path = `${this.GET_INVITATION_PATH}/${keycode}`;

    return this.get();
  }

  /**
   * Gets and returns the invitation.
   *
   * @param keycode - The keycode of the invitation
   * @returns Promise<Invitation>
   */
  public async getInvitation(keycode: string): Promise<Invitation> {
    const response = await this.getInvitationRaw(keycode);

    return new Invitation(response.data);
  }
}
