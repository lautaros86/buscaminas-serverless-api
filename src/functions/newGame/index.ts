import { handlerPath } from '@libs/handlerResolver';
import schema from "@functions/newGame/schema";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'newGame',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
