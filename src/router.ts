import {lab} from './scripts/lab'
import { mention } from './scripts/lab_mention';
import { greet } from './scripts/greet';
import { roles } from './scripts/roles';
import { test } from './scripts/test';

export function routing (app : any) : any {
  test(app);
  lab(app);
  mention(app);
  greet(app);
  roles(app);
};