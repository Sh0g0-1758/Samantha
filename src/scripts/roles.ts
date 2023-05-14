import { getList } from "../services/redis";
import { setlist } from "../services/redis";

export function roles (app : {event : Function}) {
    app.event('app_mention', async ({ event, say } : {event : any, say : any}) => {
        let msg = event.text;
        if (msg.match(/ who is /)) {
            let person = msg.match(/ who is (.*)/)[1];
            let rolperson = "rol" + person;
            let list = await getList(rolperson);
            let size = list.length;
            if (size == 0) {
                await say(`${person} ? Never heard of them !`)
            } else {
                let output = "";
                for(let i = 0; i < size-1;i++) {
                    if(i != size-2)
                    output+=list[i] + ", ";
                    else
                    output+=list[i] + " .";
                }
                if(output == "") {
                    await say(`${person} is nothing to me !`)
                } else
                await say(`${person} is ${output}`)
            }
        } else if (msg.match(/[a-zA-Z]* is [a-zA-Z]*/)) {
            let person = msg.match(/\<.*\> (.*) is/)[1];
            let tags = msg.match(/is (.*)/)[1];
            let rolperson = "rol" + person;
            let list = await person.getList(rolperson);
            if(list.length == 0) {
                await say(`${person} ? Never heard of them !`) 
            } else {
                await setlist(rolperson,tags);
                await say(`ok, ${person} is ${tags}`);
            }
        }
  });
}