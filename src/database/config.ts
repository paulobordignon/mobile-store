import * as SQLite from 'expo-sqlite';

import Cart from './entities/Cart';

const config = {
  database: 'dbmobilestore',
  driver: SQLite,
  entities: [Cart],
  synchronize: true,
  type: 'expo',
};

export default config;
