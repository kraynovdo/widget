const dataStorage = [
   {
      id: 1,
      number: '1234',
      title: 'Привет, как дела?'
   },
   {
      id: 2,
      number: '2345',
      title: 'Зайди, ты не понял'
   },
   {
      id: 3,
      number: '3456',
      title: 'ВЫ ЧТО ТВОРИТЕ?'
   }
];

let maxId = 3;


class RecordProvider {
   query() {
      return dataStorage;
   }

   read(key) {
      const item = dataStorage.find((item) => {
         return item.id === key;
      });
      return item ? {
         ...item,
         additionalText: 'It\'s item from read',
         buttons: ['button1', 'button2']
      } : null;
   }

   delete(key) {
      let deleteIndex = -1;
      dataStorage.forEach((item, index) => {
         if (item.id === key) {
            deleteIndex = index;
         }
      });
      if (deleteIndex > -1) {
         dataStorage.splice(deleteIndex, 1);
      }
   }

   create() {
      return {
         id: ++maxId,
         name: '',
         title: ''
      };
   }

   update(item) {
      let key = item.id;
      let updateIndex = -1;
      dataStorage.forEach((item, index) => {
         if (item.id === key) {
            updateIndex = index;
         }
      });
      if (updateIndex > -1) {
         dataStorage.splice(updateIndex, 1, item);
      } else {
         dataStorage.push(item);
      }
   }
   toString() {
      return '';
   }
}

export default new RecordProvider();