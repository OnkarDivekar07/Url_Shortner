const { nanoid } = require("nanoid");
const URL = require("../Model/url");

exports.genrateshorturl = async (req, res) => {
  const body = req.body;
  if (!req.body.url) {
    res.status(400).json({ error: "url required" });
  }
  const shortID = nanoid(8);
  await URL.create({
    shortid: shortID,
    RedirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
};
