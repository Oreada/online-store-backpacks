export const testCasesSort = [
    {
        arr: [
            { name: 'Osprey Daylite' },
            { name: 'Deuter Race' },
            { name: 'Black Diamond Blitz' },
            { name: 'Tucano Mister' },
        ],
        parameter: 'name-ascending',
        expected: [
            { name: 'Black Diamond Blitz' },
            { name: 'Deuter Race' },
            { name: 'Osprey Daylite' },
            { name: 'Tucano Mister' },
        ],
    },
    {
        arr: [
            { name: 'Osprey Daylite' },
            { name: 'Deuter Race' },
            { name: 'Black Diamond Blitz' },
            { name: 'Tucano Mister' },
        ],
        parameter: 'name-descending',
        expected: [
            { name: 'Tucano Mister' },
            { name: 'Osprey Daylite' },
            { name: 'Deuter Race' },
            { name: 'Black Diamond Blitz' },
        ],
    },
    {
        arr: [{ price: '2000' }, { price: '1000' }, { price: '1900' }, { price: '1300' }],
        parameter: 'price-ascending',
        expected: [{ price: '1000' }, { price: '1300' }, { price: '1900' }, { price: '2000' }],
    },
    {
        arr: [{ price: '2000' }, { price: '1000' }, { price: '1900' }, { price: '1300' }],
        parameter: 'price-descending',
        expected: [{ price: '2000' }, { price: '1900' }, { price: '1300' }, { price: '1000' }],
    },
    {
        arr: [{ storage: '20' }, { storage: '10' }, { storage: '19' }, { storage: '13' }],
        parameter: 'storage-ascending',
        expected: [{ storage: '10' }, { storage: '13' }, { storage: '19' }, { storage: '20' }],
    },
    {
        arr: [{ storage: '20' }, { storage: '10' }, { storage: '19' }, { storage: '13' }],
        parameter: 'storage-descending',
        expected: [{ storage: '20' }, { storage: '19' }, { storage: '13' }, { storage: '10' }],
    },
    {
        arr: [{ volume: '20' }, { volume: '10' }, { volume: '19' }, { volume: '13' }],
        parameter: 'volume-ascending',
        expected: [{ volume: '10' }, { volume: '13' }, { volume: '19' }, { volume: '20' }],
    },
    {
        arr: [{ volume: '20' }, { volume: '10' }, { volume: '19' }, { volume: '13' }],
        parameter: 'volume-descending',
        expected: [{ volume: '20' }, { volume: '19' }, { volume: '13' }, { volume: '10' }],
    },
];
