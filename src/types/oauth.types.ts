export type OAuthInitParams = {
  loginUrl: string;
  clientId: string;
  redirectUri: string;
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
