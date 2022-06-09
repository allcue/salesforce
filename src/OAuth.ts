import {
  OAuthInitParams,
  OAuthAuthorizationUrlParams,
} from 'src/types/oauth.types';

const baseUrl = '/services/oauth2';
const authorizeUrl = `${baseUrl}/authorize`;
const tokenUrl = `${baseUrl}/token`;

export class OAuth {
  loginUrl: string;
  clientId: string;
  redirectUri: string;

  constructor(config: OAuthInitParams) {
    const { loginUrl, clientId, redirectUri } = config;

    this.loginUrl = loginUrl;
    this.clientId = clientId;
    this.redirectUri = redirectUri;
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

  async getAccessToken(code: string): Promise<any> {}
}
