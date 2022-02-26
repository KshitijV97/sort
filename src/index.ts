import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1000, -5, 3, 0]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log('NumbersCollection.data is', numbersCollection.data);
console.log('Sorted collection is', sorter.collection);
