export default eventHandler(async (event) => {
  if (event.node.req.url?.startsWith("/api")) {
    console.log(`${event.node.req.method} ${event.node.req.url}`);
  }
});
