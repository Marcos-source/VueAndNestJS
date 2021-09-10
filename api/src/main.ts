import { NestFactory } from '@nestjs/core';
import { createConnection } from 'typeorm';
import { App } from '@slack/bolt';

import { events } from './app.events';
import { AppModule } from './app.module';

const {
  SLACK_BOT_TOKEN,
  SLACK_APP_TOKEN,
  SLACK_SIGNING_SECRET,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
} = process.env;

const slack = new App({
  token: SLACK_BOT_TOKEN,
  signingSecret: SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: SLACK_APP_TOKEN,
});

events(slack);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await slack.start();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    );
    next();
  });
  await createConnection({
    type: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: ['dist/entity/**/*.js'],
    synchronize: true,
  });
  await app.listen(3000);
}
bootstrap();
