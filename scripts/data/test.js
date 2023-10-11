const { data } = require("@ampt/data");

async function main() {
  const x = await data.get("foo");
  console.log("x =", x);
}

main();
