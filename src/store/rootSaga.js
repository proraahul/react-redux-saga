import { all } from "redux-saga/effects";
import counterSaga from "./counter/Saga";
export default function* rootSaga() {
  yield all([...counterSaga]);
}
