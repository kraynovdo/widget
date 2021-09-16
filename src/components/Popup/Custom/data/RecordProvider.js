import {AbstractSource} from './AbstractSource';

const data = [
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


export default new AbstractSource({data});