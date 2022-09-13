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
};

export default storage;
