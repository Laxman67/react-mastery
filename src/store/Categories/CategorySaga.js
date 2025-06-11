import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from './CategoryActions';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';
import { CATEGORIES_ACTION_TYPES } from './CategoriesTypes';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
