const isProduction = process.env.NODE_ENV === "production";

const baseUrl = isProduction ? "https://alanswork.com/api/" : "http://localhost:3001/api/";
console.log("baseUrl:" + baseUrl);
export const apikeys = { accessToken: undefined };

const authHeader = () => `Authorization: Bearer ${apikeys.accessToken}`;

const api = {
  getWords: fetch(`${baseUrl}getwords`).then((response) => response.clone().json()),
  getwordsCount: fetch(`${baseUrl}getwordsCount`),
  getlists: fetch(`${baseUrl}getlists`),
  getuserlists: (list: string) =>
    fetch(`${baseUrl}getuserlists?list=${list}`, {
      headers: { Authorization: `Bearer ${apikeys.accessToken}` },
    }).then((response) => response.clone().json()),
  getUserListsDistinct: (distinctField: string) =>
    fetch(`${baseUrl}getUserListsDistinct?distinctfield=${distinctField}`, {
      headers: { Authorization: `Bearer ${apikeys.accessToken}` },
    }).then((response) => response.clone().json()),
  login: (email: string, password: string) =>
    fetch(`${baseUrl}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => response.clone().json()),
  getUserListCount: () =>
    fetch(`${baseUrl}getUserListCount`, {
      headers: { Authorization: `Bearer ${apikeys.accessToken}` },
    }).then((response) => response.clone().json()),
};

export default api;
