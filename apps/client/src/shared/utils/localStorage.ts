interface ILocalStorage {
  key: string;
  value?: unknown;
}

/**
 * Sets a value in the local storage for a given key.
 *
 * @param {ILocalStorage} object - The key and value to set in local storage.
 */
export const setKeyInLocalStorage = ({ key, value }: ILocalStorage) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Retrieves the value associated with the specified key from the local storage.
 *
 * @param {ILocalStorage} object - The key used to retrieve the value from the local storage.
 */
export const getKeyFromLocalStorage = ({ key }: ILocalStorage) => {
  return localStorage.getItem(key);
};

/**
 * Removes a key from the local storage.
 * @param {ILocalStorage} object - The key to be removed from the local storage.
 */
export const removeKeyFromLocalStorage = ({ key }: ILocalStorage) => {
  localStorage.removeItem(key);
};
