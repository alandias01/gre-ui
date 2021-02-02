const jsonObj = [
  { word: "test1", definition: "definition1", type: "adj" },
  { word: "test2", definition: "definition2", type: "adj" },
  { word: "test3", definition: "definition3", type: "adj" },
  { word: "test4", definition: "definition4", type: "adj" },
  { word: "test5", definition: "definition5", type: "adj" },
  { word: "test6", definition: "definition6", type: "adj" },
  { word: "test7", definition: "definition7", type: "adj" },
];

const responseBody = new Response(JSON.stringify(jsonObj));

const api = {
  getWords: Promise.resolve(responseBody),
  getwordsCount: Promise.resolve(new Response(JSON.stringify(5000))),
  // getlists: fetch(`${baseUrl}getlists`),
  // getuserlists: fetch(`${baseUrl}getuserlists`),
  // getUserListsDistinct: fetch(`${baseUrl}getUserListsDistinct`),
};

export default api;
