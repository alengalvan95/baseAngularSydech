import { Injectable } from '@angular/core';
// import SecureStorage from 'secure-web-storage';
// import SecureStorage from 'secure-web-storage/src/secure-storage.js';
import * as CryptoJS from 'crypto-js'
declare var require: any
const SecureStorage = require('secure-web-storage');

const SECRET_KEY: any = 'aaaaaa';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  public secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key: any) {
      key = CryptoJS.SHA256(key, SECRET_KEY);
      return key.toString();
    },

    encrypt: function encrypt(data: any) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      data = data.toString();
      return data;
    },

    decrypt: function decrypt(data: any) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    }
  });

  public encryptString(data: any): string {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY);
    data = data.toString();
    return data;
  }
}
