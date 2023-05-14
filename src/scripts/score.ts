import { getList } from "../services/redis";


export function score (app : {event : Function}) {
    app.event('app_mention', async ({ event, say } : {event : any, say : any}) => {
        let msg = event.text;
        if(msg.match(/score/)) {
            let batch = msg.match(/score (.*)/)[1];
            let people = batch + "p";
            let score = batch + "s";
            let plist = await getList(people);
            let slist = await getList(score);
            let size = plist.length;
            let table = new Map();
            for(let i = 0; i < size;i++) {
                table.set(slist[i],plist[i]);
            }
            slist.sort();
            let original = "";
            let output = "";
            let gap = "                  "
            original+="name";
            original+=gap;
            original+="score"
            original+="\n"
            output+=original
            for(let i = 0; i < size;i++) {
                let toadd = "";
                let tempspace = "";
                while((tempspace.length + table.get(slist[i]).length + slist[i].length) != original.length) {
                    tempspace+=" ";
                }   
                toadd+=table.get(slist[i]);
                toadd+=tempspace;
                toadd+=slist[i];
                toadd+="\n"
                output+=toadd;
            }
            await say("```\n" + output + "\n```")
        }
    })
}