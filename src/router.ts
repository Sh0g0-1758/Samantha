import {ping} from './scripts/ping'
import {lab} from './scripts/lab'
import { mention } from './scripts/mention';
import { greet } from './scripts/greet';

export function routing (app : any) : any {
  ping(app);
  lab(app);
  mention(app);
  greet(app);
};