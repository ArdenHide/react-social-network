let state = {
    profilePage: {
        postsData: [
            {
                id: 1,
                img_path: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                title: "Post 1",
                text: "С другой стороны понимание сущности ресурсосберегающих технологий требует анализа укрепления демократической системы.",
                like_count: 3
            },
            {
                id: 2,
                img_path: "https://docs.microsoft.com/ru-ru/windows/apps/design/controls/images/image-licorice.jpg",
                title: "Post 2",
                text: "С другой стороны понимание сущности ресурсосберегающих технологий требует анализа укрепления демократической системы.",
                like_count: 33
            }
        ],
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, userName: "Санек" },
            { id: 2, userName: "Оля" },
            { id: 3, userName: "Яна" },
            { id: 4, userName: "Аня" }
        ],
        messagesData: [
            { id: 1, message: "Привет Санек" },
            { id: 2, message: "Привет Оля" },
            { id: 3, message: "Привет Яна" },
            { id: 4, message: "Привет Аня" },
            { id: 5, message: "Привет Стасян" },
        ]
    }
}

export default state;