const dataStorage = [
    {
        id: 1,
        name: 'Привет, как дела?'
    },
    {
        id: 2,
        name: 'Зайди, ты не понял'
    },
    {
        id: 1,
        name: 'ВЫ ЧТО ТВОРИТЕ?'
    }
]


class ContactsProvider {
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

export default ContactsProvider;