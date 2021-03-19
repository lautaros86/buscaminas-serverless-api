import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import {GameClass} from "@libs/gameClass";
import {GameModel} from "@libs/gameSchema";

const toogleFlag: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  const x: number = +(event.body.x || 0)
  const y: number = +(event.body.y || 0)
  const code: any = event.body.code;
  const game = await updateGame(x, y, code);
  return formatJSONResponse({
    msg: 'toogle Flag',
    game: game.getDataFront(),
    event,
  });
}

const updateGame = async (x: number, y: number, code: string): Promise<GameClass> => {
  const gameData = await GameModel.findById(code);
  const game = GameClass.restoreOldGame(gameData)
  game.toogleFlag({x, y})
  GameModel.updateOne({ _id: code }, game.getDataDb(), { multi: false }, function(err: any) {
    if(err) { throw err; }
  })
  return game;
}


export const main = middyfy(toogleFlag);
