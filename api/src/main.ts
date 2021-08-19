import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from "typeorm";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) =>{
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "*")
      res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
      next();
  });
  await createConnection()
  await app.listen(3000);
}
bootstrap();
