export function events(slack: any) {
  slack.message('chiquitita', async ({ say }) => {
    await say(`_tell me whats wrong_`);
  });

  slack.message('!HenryBot', async ({ say }) => {
    await say(`Hola, soy el HenryBot, en que puedo ayudarte`);
  });

  slack.message(async ({ say, client }) => {
    const { user } = await client.users.lookupByEmail({
      token: client.token,
      email: 'mc060966@gmail.com',
    });
    await say(`<@${user.id}>! que paso?`);
  });

  slack.event('app_mention', async ({ event, client }) => {
    await client.users.profile.get({
      token: process.env.SLACK_BOT_TOKEN,
    });

    await slack.client.chat.postMessage({
      token: process.env.SLACK_BOT_TOKEN,
      channel: event?.user,
      text: 'en que puedo ayudarte?',
    });
  });

  slack.event('team_join', async ({ event, say }) => {
    try {
      await say(`Welcome, <@${event.user}>! 🎉`);
    } catch (error) {
      console.error(error);
    }
  });
}
