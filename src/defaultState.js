//можно было бы генерировать имена автоматически внутри компонента, но я прописала вручную, потому что интерпретировала, что имена List 1, item 1 и так далее - плейсхолдеры и, следовательно, логичеее закрепитть их в конфиге

const defaultState = [
    {
        id: 1,
        name: 'List 1',
        items: [
            { id: 1, name: 'Item 1', quantity: 7, color: '#FF6347' },
            { id: 2, name: 'Item 2', quantity: 5, color: '#FFA500' },
            { id: 3, name: 'Item 3', quantity: 10, color: '#FFD700' },
            { id: 4, name: 'Item 4', quantity: 6, color: '#FF69B4' }
        ]
    },
    {
        id: 2,
        name: 'List 2',
        items: [
            { id: 1, name: 'Item 1', quantity: 4, color: '#FF6347' },
            { id: 2, name: 'Item 2', quantity: 8, color: '#FFA500' },
            { id: 3, name: 'Item 3', quantity: 7, color: '#FFD700' },
            { id: 4, name: 'Item 4', quantity: 5, color: '#FF69B4' },
            { id: 5, name: 'Item 5', quantity: 9, color: '#FF8C00' }
        ]
    },
    {
        id: 3,
        name: 'List 3',
        items: [
            { id: 1, name: 'Item 1', quantity: 6, color: '#FF6347' },
            { id: 2, name: 'Item 2', quantity: 7, color: '#FFA500' },
            { id: 3, name: 'Item 3', quantity: 9, color: '#FFD700' },
            { id: 4, name: 'Item 4', quantity: 4, color: '#FF69B4' },
            { id: 5, name: 'Item 5', quantity: 8, color: '#FF8C00' },
            { id: 6, name: 'Item 6', quantity: 10, color: '#20B2AA' }
        ]
    },
    {
        id: 4,
        name: 'List 4',
        items: [
            { id: 1, name: 'Item 1', quantity: 10, color: '#FF6347' },
            { id: 2, name: 'Item 2', quantity: 6, color: '#FFA500' },
            { id: 3, name: 'Item 3', quantity: 5, color: '#FFD700' },
            { id: 4, name: 'Item 4', quantity: 9, color: '#FF69B4' },
            { id: 5, name: 'Item 5', quantity: 8, color: '#FF8C00' }
        ]
    },
    {
        id: 5,
        name: 'List 5',
        items: [
            { id: 1, name: 'Item 1', quantity: 8, color: '#FF6347' },
            { id: 2, name: 'Item 2', quantity: 9, color: '#FFA500' },
            { id: 3, name: 'Item 3', quantity: 7, color: '#FFD700' },
            { id: 4, name: 'Item 4', quantity: 6, color: '#FF69B4' },
            { id: 5, name: 'Item 5', quantity: 5, color: '#FF8C00' },
            { id: 6, name: 'Item 6', quantity: 4, color: '#20B2AA' },
            { id: 7, name: 'Item 7', quantity: 10, color: '#00CED1' }
        ]
    }
];


export default defaultState;