const SetTemp = require("../models/setTemp");

exports.setTemp = async (req, res) => {
  const { setTemp } = req.body;
  const setTemperature = await SetTemp({
    setTemp,
  });
  await setTemperature.save();
  res.json({ success: true, setTemperature });
};
