export function events(slack: any) {
  slack.message('chiquitita', async ({ message, say }) => {
    await say(`_tell me whats wrong_`);
  });
}
