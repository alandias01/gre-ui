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
  getAllWords: fetch("https://alanswork.com/api/getwords"),
  getAllWordsTest1: Promise.resolve(responseBody),
};

export default api;
