import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (error) {
    const errors = yield select(state => state.error);
    console.tron.log(errors);
    yield put(ErrorActions.setError('Não foi possível obter as playlists'));
  }
}
