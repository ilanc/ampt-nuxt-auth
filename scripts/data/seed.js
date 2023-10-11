const { data } = require("@ampt/data");

async function main() {
  await data.set("foo", "bar");
}

main();
