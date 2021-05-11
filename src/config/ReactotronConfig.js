import Reactoton from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactoton.configure().connect();

  tron.clear();
  console.tron = tron;
}
