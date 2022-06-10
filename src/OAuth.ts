import {
  OAuthInitParams,
  OAuthAuthorizationUrlParams,
  OAuthRequestAccessTokenParams,
  OAuthResponseToken,
} from 'src/types/oauth.types';
import { ITransport } from 'src/types/transport.types';

const baseUrl = '/services/oauth2';
const authorizeUrl = `${baseUrl}/authorize`;
const tokenUrl = `${baseUrl}/token`;

export class OAuth {
  loginUrl: string;
  clientId: string;
  redirectUri: string;

  private transport: ITransport;

  constructor(config: OAuthInitParams) {
    const { loginUrl, clientId, redirectUri, transport } = config;

    this.loginUrl = loginUrl;
    this.clientId = clientId;
    this.redirectUri = redirectUri;
    this.transport = transport;
  }

  // this assumes we are connecting a web app
  // https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5
  getAuthorizationCodeUrl(
    userParams: OAuthAuthorizationUrlParams = {},
  ): string {
    const params = new URLSearchParams({
      ...userParams,
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
    });

    const url = new URL(authorizeUrl, this.loginUrl);
    url.search = params.toString();

    return url.toString();
  }

  // https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5
  async getAccessToken(
    code: string,
    userParams: OAuthRequestAccessTokenParams = {},
  ): Promise<OAuthResponseToken> {
    const params = new URLSearchParams({
      ...userParams,
      code,
      grant_type: 'authorization_code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
    });

    const url = new URL(tokenUrl, this.loginUrl);

    const { data } = await this.transport.httpPost<OAuthResponseToken>(
      url.toString(),
      {},
      {
        params,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return data;
  }
}
