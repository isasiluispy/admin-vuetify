const namespaceUnderscore = 'AUTH_';

export const Types = {
  getters: {
    IS_AUTENTICATED: `${namespaceUnderscore}IS_AUTHENTICATED`
  },
  actions: {
    LOGIN: `${namespaceUnderscore}LOGIN`,
    SUCCESS: `${namespaceUnderscore}SUCCESS`,
    LOGOUT: `${namespaceUnderscore}LOGOUT`,
  }
};

