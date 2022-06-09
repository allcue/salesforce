import { OAuth } from 'src/OAuth';

describe('OAuth', () => {
  let oauth: OAuth;

  const loginUrl = 'https://login.salesforce.com';
  const clientId =
    '3MVG9IHf89I1t8hrvswazsWedXWY0i1qK20PSFaInvUgLFB6vrcb9bbWFTSIHpO8G2jxBLJA6uZGyPFC5Aejq';
  const redirectUri = 'https://allcue.app';

  beforeEach(() => {
    oauth = new OAuth({
      loginUrl,
      clientId,
      redirectUri,
    });
  });

  describe('getAuthorizationUrl', () => {
    it('builds a url with no user params', () => {
      const result = oauth.getAuthorizationCodeUrl();
      const resultUrl = new URL(result);

      expect(resultUrl.origin).toEqual(loginUrl);
      expect(resultUrl.searchParams.get('response_type')).toEqual('code');
      expect(resultUrl.searchParams.get('client_id')).toEqual(clientId);
      expect(resultUrl.searchParams.get('redirect_uri')).toEqual(redirectUri);
      expect(Array.from(resultUrl.searchParams.keys()).length).toEqual(3);
    });

    it('build a url with user params', () => {
      const result = oauth.getAuthorizationCodeUrl({
        display: 'page',
        scope: 'api',
      });
      const resultUrl = new URL(result);

      expect(resultUrl.searchParams.get('display')).toEqual('page');
      expect(resultUrl.searchParams.get('scope')).toEqual('api');
      expect(Array.from(resultUrl.searchParams.keys()).length).toEqual(5);
    });
  });
});
