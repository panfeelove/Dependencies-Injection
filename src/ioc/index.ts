import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import { ApiConfig } from '../types';
import { getConfig } from '../services/config';


export type IOCType = {
  config: ApiConfig,
  http: typeof HTTP,
  logger: typeof Logger,
  users: typeof Users,
};

export type IOCNames = keyof IOCType


export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<IOCType>();
  const config = getConfig();
  
  ioc.register('config', config.api)
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users)
  return ioc;
};
