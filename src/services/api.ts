const baseUrl = "https://alanswork.com/api/";
const api = {
  getWords: fetch(`${baseUrl}getwords`).then((response) =>
    response.clone().json()
  ),
  getwordsCount: fetch(`${baseUrl}getwordsCount`),
  getlists: fetch(`${baseUrl}getlists`),
  getuserlists: (email: string) =>
    fetch(`${baseUrl}getuserlists?email=${email}`).then((response) =>
      response.clone().json()
    ),
  getUserListsDistinct: fetch(`${baseUrl}getUserListsDistinct`),
};

export default api;
