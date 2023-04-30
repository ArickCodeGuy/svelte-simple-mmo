import { ServerController } from '../..';
import { useFightAttack } from './attack';
import { useFightEnd } from './end';
import { useGetFightInfo } from './getInfo';
import { useGetTeamExp } from './getTeamExp';
import { useFightInit } from './init';
import { useFightLeave } from './leave';
import { useFightTurn } from './turn';

export const useFightActions = (serverController: ServerController) => ({
  attack: useFightAttack(serverController),
  end: useFightEnd(serverController),
  info: useGetFightInfo(serverController),
  getTeamExp: useGetTeamExp(serverController),
  turn: useFightTurn(serverController),
  init: useFightInit(serverController),
  leave: useFightLeave(serverController),
});
