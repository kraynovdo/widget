const dataStorage = [
    {
        id: 1,
        name: 'Василий Вакуленко',
        age: 41
    },
    {
        id: 2,
        name: 'Витя АК',
        age: 12
    },
    {
        id: 1,
        name: 'Фифти Сент',
        age: 55
    }
]


class PeopleProvider {
    query() {
        return dataStorage;
    }

    searchQuery (searchValue) {
        if (searchValue) {
            return dataStorage.filter((elem) => {
                return elem.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
            })
        } else {
            return this.query();
        }
    }
}

export default PeopleProvider;