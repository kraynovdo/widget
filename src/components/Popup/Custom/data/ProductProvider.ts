import {AbstractSource, IItem as IDefaultItem} from '../../Platform/data/AbstractSource';

export interface IItem extends IDefaultItem {
   id: number;
   name: string;
   documentKey: number;
}

const data: IItem[] = [
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

export default new AbstractSource<IItem>({data, keyProperty: 'id'});
