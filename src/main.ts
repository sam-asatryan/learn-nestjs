import { NestFactory } from "@nestjs/core";
import { AppModule }   from "./app.module";
import * as config     from "config";
import { Logger }      from "@nestjs/common";

async function bootstrap() {
  const logger       = new Logger("bootstrap");
  const serverConfig = config.get("server");

  const app = await NestFactory.create(AppModule);

  if ("development" === process.env.NODE_ENV) {
    app.enableCors();
  }

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Application is listening port ${port}`);
}

bootstrap().then(() => {
  return;
});
