const firstJsonString = '{"name": "Lance", "age": 20, "city": "Davao"}'
const jsonObject = JSON.parse(firstJsonString);
const jsonString = JSON.stringify(jsonObject);

console.log(jsonString);