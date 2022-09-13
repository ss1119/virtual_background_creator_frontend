const storagePrefix = "virtual_background_creator_";

const storage = {
  getToken: () => {
    if (!!window.localStorage.getItem(`${storagePrefix}token`)) {
      return JSON.parse(
        window.localStorage.getItem(`${storagePrefix}token`) as string
      );
    } else {
      return null;
    }
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  getGuest: () => {
    if (!!window.localStorage.getItem(`${storagePrefix}guest`)) {
      return window.localStorage.getItem(`${storagePrefix}guest`) as string;
    } else {
      return null;
    }
  },
  setGuest: (guest: string) => {
    window.localStorage.setItem(`${storagePrefix}guest`, guest);
  },
  getUid: () => {
    if (!!window.localStorage.getItem(`${storagePrefix}uid`)) {
      return window.localStorage.getItem(`${storagePrefix}uid`) as string;
    } else {
      return null;
    }
  },
  setUid: (uid: string) => {
    window.localStorage.setItem(`${storagePrefix}uid`, uid);
  },
  getClient: () => {
    if (!!window.localStorage.getItem(`${storagePrefix}client`)) {
      return window.localStorage.getItem(`${storagePrefix}client`) as string;
    } else {
      return null;
    }
  },
  setClient: (client: string) => {
    window.localStorage.setItem(`${storagePrefix}client`, client);
  },
};

export default storage;
