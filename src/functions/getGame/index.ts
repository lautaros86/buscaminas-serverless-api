import { handlerPath } from '@libs/handlerResolver';
import schema from "@functions/getGame/schema";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'getGame',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
