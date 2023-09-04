const { v4: uuidv4 } = require("uuid");

// controller method api to generate and send uuid
const generateUuids = (req, res) => {
  const { count } = req.params;
  const uuids = [];
  for (let i = 0; i < +count; i++) {
    uuids.push(uuidv4());
  }

  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(uuids));
};

module.exports = generateUuids;
