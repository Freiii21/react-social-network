export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: PostsType[]
}
export type MessagesType  = {
    id: number
    message: string
}
export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

let state:StateType = {
    profilePage: {
        posts:[
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post!', likesCount: 11},
        ],
    },
    messagesPage: {
        dialogs:[
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"},
        ],
        messages:[
            {id:1, message: "hi"},
            {id:2, message: "How is your it-kamasutra?"},
            {id:3, message: "Yo"},
        ],
    },
}

export default state;