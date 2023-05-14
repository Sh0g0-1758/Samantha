import { getList } from "../services/redis";
import { PriorityQueue } from "../utils/priorityQueue";

export function score (app : {event : Function}) {
    app.event('app_mention', async ({ event, say } : {event : any, say : any}) => {
        let msg = event.text;
        if(msg.match(/score/)) {
            let batch = msg.match(/score (.*)/)[1];
            let list = await getList(batch);
            var PriQueue = new PriorityQueue();
            await list.forEach(async (e : any) => {
                let infolist = await getList(e);
                let score = infolist[0];
                var y : number = parseInt(score);
                PriQueue.add({"score" : score,"id" : e});
            })
            setTimeout(async () => {
                let final = [];
                while (PriQueue.peek() != null) {
                    final.push(PriQueue.remove().id);
                }
                final.reverse();
                let original = "";
                let output = "";
                let gap = "                  "
                original+="name";
                original+=gap;
                original+="score"
                original+="\n"
                output+=original;
                console.log(final);
                final.forEach(async (e) => {
                    let infolist = await getList(e);
                    let toadd = "";
                    let tempspace = "";
                    while((tempspace.length + infolist[3].length + infolist[0].length) != original.length) {
                        tempspace+=" ";
                    }   
                    toadd+=infolist[3];
                    toadd+=tempspace;
                    toadd+=infolist[0];
                    toadd+="\n"
                    output+=toadd;
                })
                setTimeout(async() => {
                    await say("```\n" + output + "\n```")
                },100);
            },100)
        }
    })
}