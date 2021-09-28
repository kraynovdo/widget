let maxId = 3;
const ASYNC_TIMEOUT = 500;

export interface IItem extends Record<string, unknown> {
   id: string | number;
}

interface IReadItem extends IItem {
   additionalText: string;
   buttons: string[];
}

interface ISourceProps<T> {
   data: T[];
   keyProperty: string;
}

function wrapAsync<T> (result: T): Promise<T> {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(result);
      }, ASYNC_TIMEOUT);
   });
}

function compare<T extends IItem>(item: T, filter: Record<string, unknown>) {
   return Object.keys(filter).reduce((reducer, key) => {
      return reducer && item?.[key] === filter[key];
   }, true);
}

export class AbstractSource<T extends IItem> {
   data: T[];
   maxId: number;
   keyProperty: string;
   constructor(props: ISourceProps<T>) {
      this.data = props.data || [];
      this.keyProperty = props.keyProperty;
      this.maxId = 3;
   }

   query(filter: Record<string, unknown> = {}): Promise<T[]> {
      return wrapAsync<T[]>(this.data.filter((item) => {
         return compare(item, filter);
      }));
   }

   read(key: string | number): Promise<T & IReadItem | void> {
      const item = this.data.find((item) => {
         return item.id === key;
      });
      return wrapAsync<T & IReadItem | void>(
          item ? {
            ...item,
            additionalText: 'It\'s item from read',
            buttons: ['button1', 'button2']
          } : void 0
      );
   }

   delete(key: string | number): Promise<true> {
      let deleteIndex = -1;
      this.data.forEach((item, index) => {
         if (item.id === key) {
            deleteIndex = index;
         }
      });
      if (deleteIndex > -1) {
         this.data.splice(deleteIndex, 1);
      }
      return wrapAsync(true);
   }

   create() {
      return wrapAsync({
         id: ++maxId,
         name: '',
         title: ''
      });
   }

   update(item: T) {
      let key = item.id;
      let updateIndex = -1;
      this.data.forEach((item, index) => {
         if (item.id === key) {
            updateIndex = index;
         }
      });
      if (updateIndex > -1) {
         this.data.splice(updateIndex, 1, item);
      } else {
         this.data.push(item);
      }
      return wrapAsync(true);
   }
}
