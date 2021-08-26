const dataStorage = [
    {
        id: 1,
        name: 'Первый',
        done: false
    },
    {
        id: 2,
        name: 'Второй',
        done: true
    },
    {
        id: 1,
        name: 'Третий',
        done: false
    }
]


class DataLoader {
    query() {
        return dataStorage;
    }

    searchQuery (searchValue) {
        return dataStorage.filter((elem) => {
            return elem.name.toLowerCase().indexOf(searchValue.toLowerCase())>=0
        })
    }
}

export default DataLoader;