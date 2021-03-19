import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import {GameClass} from "@libs/gameClass";
import {GameModel} from "@libs/gameSchema";

const getGame: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  const {id} = event.path.code;
  try {
    const gameData = await GameModel.findById(id);
    const game = GameClass.restoreOldGame(gameData);
    return formatJSONResponse({
      msg: 'juego previo',
      game: game.getDataFront(),
      event,
    });
  } catch (err: any) {
    console.log('Fallo ' + err)
    throw new Error(err)
  }
}

export const main = middyfy(getGame);
