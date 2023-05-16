import {getList} from '../services/redis';
import {setlist} from '../services/redis';
import {setValue} from '../services/redis';
import * as types from '../types'

export async function registerUsers(app: types.App) {
  const result: {members : {      profile: {email: string; real_name: string; display_name: string},
  is_email_confirmed: boolean,
  id: string,
  real_name: string,
  display_name: string,
  email: string}[]} = await app.client.users.list({
    authorization: process.env.SLACK_APP_TOKEN,
  });
  result.members.forEach(
    async (e: {
      profile: {email: string; real_name: string; display_name: string},
      is_email_confirmed: boolean,
      id: string,
      real_name: string,
      display_name: string,
      email: string
    }) => {
      if (e.is_email_confirmed) {
        let id : string = e.id;
        let rname : string = e.profile.real_name;
        let dname : string = e.profile.display_name;
        let email : string = e.profile.email;
        let for_rolls : string = 'rol' + dname;
        let score : string = '0';
        if (dname == undefined) {
          dname = rname;
        }
        let list : string[] = await getList(id);
        if (list.length == 0) {
          setlist(id, rname);
          setlist(id, dname);
          setlist(id, email);
          setlist(id, score);
          setValue(dname, id);
          setlist(for_rolls, 'none');
        }
      }
    }
  );
}