import { ITransport } from 'src/types/transport.types';

export type OAuthInitParams = {
  loginUrl: string;
  clientId: string;
  redirectUri: string;

  transport: ITransport;
};

// https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5
export type OAuthAuthorizationUrlParams = {
  scope?: string;
  state?: string;
  immediate?: 'true' | 'false';
  code_challenge?: string;
  display?: 'page' | 'popup' | 'touch' | 'mobile';
  login_hint?: string;
  nonce?: string;
  prompt?: 'login' | 'consent' | 'select_account';
};

export type OAuthRequestAccessTokenParams = {} & Record<string, any>;

export type OAuthResponseToken = {
  access_token: string;
  signature: string;
  scope: string;
  id_token: string;
  instance_url: string;
  id: string;
  token_type: string;
  issued_at: string;
  content_domain?: string;
  content_sid?: string;
  lightning_domain?: string;
  lightning_sid?: string;
  visualforce_domain?: string;
  visualforce_sid?: string;
  csrf_token?: string;
  refresh_token?: string;
  sfdc_site_url?: string;
  sfdc_site_id?: string;
  state?: string;
};
