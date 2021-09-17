let maxId = 3;
const ASYNC_TIMEOUT = 500;

const wrapAsync = (result) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(result);
      }, ASYNC_TIMEOUT);
   });
};

function compare(item, filter) {
   return Object.keys(filter).reduce((reducer, key) => {
      return reducer && item[key] === filter[key];
   }, true);
}

export class AbstractSource {
   constructor(props) {
      this.data = props.data || [];
      this.maxId = 3;
   }

   query(filter = {}) {
      return wrapAsync(this.data.filter((item) => {
         return compare(item, filter);
      }));
   }

   read(key) {
      const item = this.data.find((item) => {
         return item.id === key;
      });
      return wrapAsync(item ? {
         ...item,
         additionalText: 'It\'s item from read',
         buttons: ['button1', 'button2']
      } : null);
   }

   delete(key) {
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

   update(item) {
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