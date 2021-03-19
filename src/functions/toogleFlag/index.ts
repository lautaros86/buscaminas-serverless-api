import { handlerPath } from '@libs/handlerResolver';
import schema from "@functions/toogleFlag/schema";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'toogleFlag',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
