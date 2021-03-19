import { handlerPath } from '@libs/handlerResolver';
import schema from "@functions/clickCell/schema";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'clickCell',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
