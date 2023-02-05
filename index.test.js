import { getInfo } from './index.js';


describe('getInfo', () => {
    it('returns the correct averageAge and oldestPerson', () => {
        const persons = [{
            name: 'John',
            age: 25
        }, {
            name: 'Jane',
            age: 30
        }, {
            name: 'Jim',
            age: 35
        }, ];
        const result = getInfo(persons);
        expect(result.averageAge).toBe(30);
        expect(result.oldestPerson).toBe('Jim');
    });

    it('returns correct results for single person input', () => {
        const persons = [{
            name: 'John',
            age: 25
        }];
        const result = getInfo(persons);
        expect(result.averageAge).toBe(25);
        expect(result.oldestPerson).toBe('John');
    });

    it('throws error for empty input array', () => {
        const persons = [];
        expect(() => getInfo(persons)).toThrow();
    });

    it('throws error for non-numeric ages', () => {
        const persons = [{
            name: 'John',
            age: 25
        }, {
            name: 'Jane',
            age: 'thirty'
        }, ];
        expect(() => getInfo(persons)).toThrow();
    });

    it('returns the correct result for different language input', () => {
        const persons = [{
            name: 'Иван',
            age: 25
        }, {
            name: 'Вася',
            age: 30
        }, {
            name: 'Женя',
            age: 35
        }, ];
        const result = getInfo(persons);
        expect(result.averageAge).toBe(30);
        expect(result.oldestPerson).toBe('Женя');
    });

    it('returns the correct averageAge and oldestPerson for array with duplicate max ages', () => {
        const persons = [{
            name: 'John',
            age: 25
        }, {
            name: 'Jane',
            age: 30
        }, {
            name: 'Jim',
            age: 35
        }, {
            name: 'Jack',
            age: 35
        }, ];
        const result = getInfo(persons);
        expect(result.averageAge).toBe(31.25);
        expect(result.oldestPerson).toBe('Jim');
    });
});