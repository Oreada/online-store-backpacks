const products = [
    {
        name: 'Deuter AC Lite',
        brand: 'Deuter',
        volume: '23',
        color: 'blue',
        price: '1990',
        popular: 'no',
        storage: '1',
    },
    {
        name: 'Deuter Aircontact',
        brand: 'Deuter',
        volume: '75',
        color: 'blue',
        price: '5690',
        popular: 'yes',
        storage: '3',
    },
    {
        name: 'Deuter GoGo',
        brand: 'Deuter',
        volume: '25',
        color: 'black',
        price: '1090',
        popular: 'yes',
        storage: '7',
    },
    {
        name: 'Deuter GoGo',
        brand: 'Deuter',
        volume: '25',
        color: 'green',
        price: '1090',
        popular: 'yes',
        storage: '6',
    },
    {
        name: 'Deuter GoGo',
        brand: 'Deuter',
        volume: '25',
        color: 'grey',
        price: '1090',
        popular: 'yes',
        storage: '4',
    },
    {
        name: 'Deuter Race',
        brand: 'Deuter',
        volume: '8',
        color: 'grey',
        price: '1490',
        popular: 'no',
        storage: '3',
    },
    {
        name: 'Spokey Bolzano',
        brand: 'Spokey',
        volume: '25',
        color: 'black',
        price: '950',
        popular: 'yes',
        storage: '10',
    },
    {
        name: 'Spokey Kobe',
        brand: 'Spokey',
        volume: '28',
        color: 'black',
        price: '800',
        popular: 'no',
        storage: '9',
    },
    {
        name: 'Tucano Mister',
        brand: 'Tucano',
        volume: '29',
        color: 'blue',
        price: '1200',
        popular: 'yes',
        storage: '5',
    },
    {
        name: 'Tucano Mister',
        brand: 'Tucano',
        volume: '29',
        color: 'red',
        price: '1200',
        popular: 'yes',
        storage: '6',
    },
    {
        name: 'Tucano Tugo',
        brand: 'Tucano',
        volume: '39',
        color: 'black',
        price: '1300',
        popular: 'yes',
        storage: '4',
    },
    {
        name: 'Tucano Tugo',
        brand: 'Tucano',
        volume: '39',
        color: 'green',
        price: '1300',
        popular: 'yes',
        storage: '8',
    },
];

export const testCasesFiltrate = [
    {
        productsArr: products,
        filtersArr: [
            { key: 'color', type: 'include', value: ['blue'] },
            { key: 'brand', type: 'include', value: ['deuter'] },
            { key: 'storage', type: 'range', value: { from: 1, to: 100 } },
            { key: 'volume', type: 'range', value: { from: 1, to: 100 } },
            { key: 'price', type: 'range', value: { from: 1, to: 10000 } },
        ],
        expected: [
            {
                name: 'Deuter AC Lite',
                brand: 'Deuter',
                volume: '23',
                color: 'blue',
                price: '1990',
                popular: 'no',
                storage: '1',
            },
            {
                name: 'Deuter Aircontact',
                brand: 'Deuter',
                volume: '75',
                color: 'blue',
                price: '5690',
                popular: 'yes',
                storage: '3',
            },
        ],
    },
    {
        productsArr: products,
        filtersArr: [
            { key: 'color', type: 'include', value: ['black'] },
            { key: 'brand', type: 'include', value: ['spokey'] },
            { key: 'name', type: 'search', value: 'zano' },
            { key: 'popular', type: 'isPopular', value: 'yes' },
        ],
        expected: [
            {
                name: 'Spokey Bolzano',
                brand: 'Spokey',
                volume: '25',
                color: 'black',
                price: '950',
                popular: 'yes',
                storage: '10',
            },
        ],
    },
];

// { color: { type: 'include', value: [] }, brand: { type: 'include', value: [] } },
// { brand: { type: 'include', value: [] }, brand: { type: 'include', value: [] } },
