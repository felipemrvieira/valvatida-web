export const TOKEN_KEY = '@StarFish-Token';
export const EXPIRY = 'expiry';
export const UID = 'uid';
export const CLIENT = 'client';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getExpiry = () => localStorage.getItem(EXPIRY);
export const getUid = () => localStorage.getItem(UID);
export const getClient = () => localStorage.getItem(CLIENT);

export const login = (token, expiry, client, uid) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(EXPIRY, expiry);
  localStorage.setItem(CLIENT, client);
  localStorage.setItem(UID, uid);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EXPIRY);
  localStorage.removeItem(CLIENT);
  localStorage.removeItem(UID);
};

export const isAuthenticated = () => {
  if (getToken() !== null && getExpiry() > Date.now() / 1000) {
    return true;
  }
  logout();
  return false;
};
