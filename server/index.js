const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const Router = require("koa-router");

const app = new Koa();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = "../dist";
const isDev = process.env.NODE_ENV === "development";
const port = isDev ? "3000" : 80;

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  // console.log(ctx);
  console.log(
    `${ctx.method} ${ctx.url} - ${rt} - ${ctx.response.status} - ${
      ctx.response.message
    }`
  );
});
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});
// app.use(static(path.join(__dirname, staticPath)));
app.use(async ctx => {
  let url = ctx.request.url;
  debugger;
  if (url === "/index.html") {
    ctx.body = url;
  }
});
app.listen(port);
