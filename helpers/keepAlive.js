const RENDER_URL = "https://notes2-x2dt.onrender.com";
async function keepAlive() {
  const fetch = (await import("node-fetch")).default;

  setInterval(() => {
    fetch(RENDER_URL)
      .then((res) => console.log(`Pinged Render at ${new Date()}`))
      .catch((err) => console.error(`Error pinging Render: ${err.message}`));
  }, 14 * 60 * 1000); // Ping every 5 minutes
}

keepAlive();

module.exports = keepAlive;
