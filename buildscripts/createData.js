const fs = require("fs");
const fetch = require("node-fetch");

(async () => {
  try {

    const result = await fetch('YOUR-ENDPOINT-HERE', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer YOUR-API-KEY-HERE`,
        accept: "application/json",
      },
      body: JSON.stringify({
        query: `query{
          getProductList{
            items{
              name
              price
            }
          }
        }`,
      }),
    });
    const resultJSON = await result.json();
    const jsonString = JSON.stringify(resultJSON);

    fs.writeFile("./data/takeshape.json", jsonString, (err) => {
      if (!err) {
        return console.log("Pre build script succeeded!");
      }

      throw err;
    });
  } catch (err) {
    console.log("Pre build script failed!", err);
  }
})();
