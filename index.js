export const getInfo = persons => {
    const ages = persons.map(person => person.age);
    const averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;
    const maxAge = Math.max(...ages);
    const oldestPerson = persons.find(person => person.age === maxAge);
    return {
        averageAge,
        oldestPerson: oldestPerson.name,
    }
}