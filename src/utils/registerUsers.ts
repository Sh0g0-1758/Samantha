import { getList } from '../services/redis';
import { setlist } from '../services/redis';
import { setValue } from '../services/redis';

export async function registerUsers (app : any) {
    const result : any = await app.client.users.list({
        authorization: process.env.SLACK_APP_TOKEN
      });  
      result.members.forEach(async (e : {profile : {email : string,real_name : string,display_name : string},is_email_confirmed : boolean,id : string,real_name : string,display_name : string,email : string}) => {
        if(e.is_email_confirmed) {
            let id = e.id;
            let rname = e.profile.real_name;
            let dname = e.profile.display_name;
            let email = e.profile.email;
            let for_rolls = "rol" + dname;
            let score = "0";
            if(dname == undefined) {
                dname = rname;
            }
            let list = await getList(id);
            if(list.length == 0) {
              setlist(id,rname);
              setlist(id,dname);
              setlist(id,email);
              setlist(id,score);
              setValue(dname,id);
              setlist(for_rolls,"none");
            }
        }
      })
}