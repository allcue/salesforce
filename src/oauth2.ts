import { OAuth2InitParams } from 'src/types/oauth2.types';

export class OAuth2 {
  loginUrl: string;
  clientId: string;
  redirectUri: string;

  constructor(config: OAuth2InitParams) {
    const { loginUrl, clientId, redirectUri } = config;

    this.loginUrl = loginUrl;
    this.clientId = clientId;
    this.redirectUri = redirectUri;
  }
}
