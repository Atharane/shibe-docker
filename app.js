const superagent = require("superagent");
(async () => {
  try {
    const { body } = await superagent.get("http://shibe.online/api/shibes");
    console.log(body[0]);
  } catch (err) {
    console.error(err);
  }
})();
