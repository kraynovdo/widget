const dataStorage = [
   {
      id: 1,
      name: 'Велосипед',
      documentKey: 1
   },
   {
      id: 2,
      name: 'Костыль',
      documentKey: 1
   },
   {
      id: 3,
      name: 'Молоток',
      documentKey: 2
   },
   {
      id: 4,
      name: 'Самовар',
      documentKey: 2
   },
   {
      id: 5,
      name: 'Лада калина',
      documentKey: 3
   },
   {
      id: 6,
      name: 'Апельсин',
      documentKey: 3
   }
];

function compare(item, filter) {
   return Object.keys(filter).reduce((reducer, key) => {
      return reducer && item[key] === filter[key];
   }, true);
}

class ProductProvider {
   query(filter) {
      return dataStorage.filter((item) => {
         return compare(item, filter);
      });
   }
   toString() {
      return '';
   }
}

export default new ProductProvider();