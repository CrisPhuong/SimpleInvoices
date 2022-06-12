import {MASTER_DATA} from 'actionsType';

export const getMasterDataHandle = payload => ({
  type: MASTER_DATA.GET_ALL.HANDLER,
  payload,
});

export const getMasterDataSuccess = payload => ({
  type: MASTER_DATA.GET_ALL.SUCCESS,
  payload,
});

export const getMasterDataFailure = payload => ({
  type: MASTER_DATA.GET_ALL.FAILURE,
  payload,
});
