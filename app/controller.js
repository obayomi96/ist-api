const FastSpeedTest = require("fast-speedtest-api");
require('dotenv').config();

exports.getInternetSpeed = async (req, res) => {
  try {
    let speedtest = new FastSpeedTest({
      token: process.env.token, // required
      verbose: false, // default: false
      timeout: 10000, // default: 5000
      http: true, // default: true
      urlCount: 5, // default: 5
      bufferSize: 8, // default: 8
      unit: FastSpeedTest.UNITS.Mbps, // default: Bps
    });

    speedtest
      .getSpeed()
      .then((s) => {
        console.log(`Speed: ${Math.round(s)}`)
        return res.status(200).send({ speed: Math.round(s) })
      });
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};
