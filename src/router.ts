import {ping} from './scripts/ping'
import {lab} from './scripts/lab'
import { mention } from './scripts/lab_mention';
import { greet } from './scripts/greet';
import { roles } from './scripts/roles';

export function routing (app : any) : any {
  ping(app);
  lab(app);
  mention(app);
  greet(app);
  roles(app);
};