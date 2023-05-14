import {options as getdata,options2 as getdata2} from "../services/api"
import axios from "axios"

export function bkc(app : any) {

    app.message('i am bored', async ({ message,say} : {message : {user : string},say : Function}) => {
    const response : {data : {body : [{setup : string,punchline : string}]}} = await axios.request(getdata2);
    await say(`${response.data.body[0].setup}`);
    await say(`${response.data.body[0].punchline}`);
    await say({
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `Hey there <@${message.user}>!, you are bored eh ? well click the button for a suprise .. `
            },
            "accessory": {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Click Me"
              },
              "action_id": "button_click"
            }
          }
        ]
      });
});



app.message("mdg ka dhoom dhadaka", async ({ message,say} : {message : {user : string},say : Function}) => {
    await say({
        blocks: [
            {
                "type":"section",
                "text": {
                    "type": "mrkdwn",
                    "text" : ">*HOO HAA HOO HAA !!*"
                }
            }
        ]
    })
})

app.message('get a meme', async({message,say} : {message : object,say : Function}) => {
    const response : {data : [{image : string}]} = await axios.request(getdata);
    const img_url = response.data[0].image;
    await say({
        blocks: [
            {
                type: 'section',
                text: {
                  type: 'plain_text',
                  text: 'here is your meme, you lazy programmer 👨‍💻'
                }
              },
              {
                type: 'image',
                image_url: `${img_url}`,
                alt_text: 'jaake coding karo beta/beti !!'
              }
        ]

    })
})

app.action('button_click', async ({ack,say} : {ack : Function,say : Function}) => {
    // Acknowledge the action
    await ack();
    await say({
        blocks: [
            {
                type: 'section',
                text: {
                  type: 'plain_text',
                  text: 'you just got RICK ROLLED 😈'
                }
              },
              {
                type: 'image',
                image_url: `https://media.tenor.com/kGekz062mwgAAAAd/hugs-rickroll.gif`,
                alt_text: 'jaake coding karo beta/beti !!'
              }
        ]
    })
    });

}