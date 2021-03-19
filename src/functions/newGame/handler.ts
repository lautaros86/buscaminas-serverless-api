import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import {GameClass} from "@libs/gameClass";
import {GameModel} from "@libs/gameSchema";

const newGame: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  const x: number = +(event.body.x || 0)
  const y: number = +(event.body.y || 0)
  const mines: number = +(event.body.mines || 0)
  const game = new GameClass(x, y, mines)

  const gameModel: any = saveGame(game);
  game.code = gameModel._id.toString();
  return formatJSONResponse({
    msg: 'newGames',
    game: game.getDataFront(),
    event,
  });
}

const saveGame = (game: GameClass): any => {
  GameModel.init();
  const gameModel = new GameModel(game.getDataDb());
  gameModel.save(function (err: any, game: any) {
    if (err) throw Error('Fallo chango: ' + err);
  });
  return gameModel;
}

export const main = middyfy(newGame);
