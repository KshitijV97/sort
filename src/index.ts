import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1000, -5, 3, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
