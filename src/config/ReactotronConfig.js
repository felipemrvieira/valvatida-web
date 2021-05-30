import Reactoton from 'reactotron-react-js';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactoton.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();
  console.tron = tron;
}
