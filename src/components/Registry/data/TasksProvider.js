const dataStorage = [
    {
        id: 1,
        name: 'Надо починить защелку в туалете',
        done: false
    },
    {
        id: 2,
        name: '[ГОТОВО] Собрать демку списков',
        done: true
    },
    {
        id: 1,
        name: 'Ошибка: все криво, комментарии устно',
        done: false
    }
]


class TasksProvider {
    query() {
        return dataStorage;
    }

    searchQuery (searchValue) {
        if (searchValue) {
            return dataStorage.filter((elem) => {
                return elem.name.toLowerCase().indexOf(searchValue.toLowerCase())>=0
            })
        } else {
            return this.query();
        }
    }
}

export default TasksProvider;