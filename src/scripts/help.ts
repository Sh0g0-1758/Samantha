export function help(app: {event: Function}) {
  app.event('app_mention', async ({event, say}: {event: any; say: any}) => {
    let response: object = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'What samantha can do',
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `>*samantha greet* : will greet you according to the time`,
            },
            {
              type: 'mrkdwn',
              text: '>*ping* : *pong*',
            },
            {
              type: 'mrkdwn',
              text: '>*is lab open* : tells whether lab is open',
            },
            {
              type: 'mrkdwn',
              text: '>*@samantha score <group_name/guy_name>* : tells the score',
            },
            {
              type: 'mrkdwn',
              text: '>@<guy_name> is : to assign roles ;) full on bkc',
            },
            {
              type: 'mrkdwn',
              text: '>@<guy_name++/--> : will increase his/her score',
            },
            {
              type: 'mrkdwn',
              text: '>i am bored / get a meme / mdg ka dhoom dhadhaka : full on bkc ;) ',
            },
          ],
        },
      ],
      text: `Info`,
    };
  });
}
