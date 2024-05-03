import { StorageService } from "./storage.service";
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { Injectable, OnDestroy } from "@angular/core";

/**
 * Service to interact with Client-Side Datastore
 *
 * @author J. R. Smith
 * @since 3rd May 2024
 */
// @Injectable({
//   providedIn: 'root',
// })
// export class DatastoreService implements StorageService, OnDestroy {
//
//   // private db = await open({
//   //   driver: sqlite3.Database,
//   //   filename: ':memory'
//   // });
//
//   private db = await open({driver: undefined, filename: ""});
//
//   async constructor() {
//     await this.db.exec('CREATE TABLE token (col token)');
//     // https://github.com/kriasoft/node-sqlite?tab=readme-ov-file#creating-a-table-and-inserting-data
//     // TODO :: continue building this out another time...
//   }
//
//   async ngOnDestroy() {
//     await this.db.close();
//   }
//
//   get(key: string): string | null {
//     const result = this.db.get('SELECT col FROM authorisation WHERE col = ?', key);
//
//     return null;
//   }
//
//   set(key: string, _value: string): void {
//     this.db.exec('INSERT INTO key VALUES (_value)').then(
//       () => console.log('setting... ' + key) // TODO :: TRACE log
//     )
//   }
//
//   delete(key: string): void {
//     this.db.exec('DELETE FROM key WHERE VALUE = (key)').then(
//       () => console.log('setting... ' + key) // TODO :: TRACE log
//     )
//   }
//
//}

export class DatastoreService {

}
