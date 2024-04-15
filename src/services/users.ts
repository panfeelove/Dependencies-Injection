import { HTTP } from './http';

import { type ApiConfig, type User } from '../types';
import { IOCNames, createIoCContainer } from '../ioc';
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;
  ioc: ReturnType<typeof createIoCContainer>;

  static $inject: IOCNames[] = ['config', 'http'];
  static $singleton: boolean = true;
  
  constructor(config: ApiConfig, http: HTTP) {
    this.ioc = createIoCContainer();
    
    this.http = http;
    this.apiConfig = config;
  }

  async getUsers() {
    return await this.http.get(this.apiConfig.resources.users) as User[];
  }
}
