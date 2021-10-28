export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
    avatar: string
}
export type ProfilePageType = {
    posts: PostsType[]
}
export type MessagesType  = {
    id: number
    message: string
    owner: string
    avatar: string
}
export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type FriendsType = {
    id: number
    name: string
    avatar: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
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
            {id: 1, name: "Dimych", avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP2538-CUSA05620_00-AV00000000000186/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"},
            {id: 2, name: "Andrey", avatar: "https://st4.depositphotos.com/9449108/25247/i/1600/depositphotos_252470774-stock-photo-samurai-stands-circled-in-an.jpg"},
            {id: 3, name: "Sveta", avatar: "https://st.depositphotos.com/3335611/4577/i/950/depositphotos_45773093-stock-photo-samurai-standing-with-sword-pose.jpg"},
            {id: 4, name: "Sasha", avatar: "https://img.freepik.com/free-vector/samurai-silhouette-during-sunset_24381-51.jpg?size=626&ext=jpg"},
            {id: 5, name: "Viktor", avatar: "https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470688-stock-photo-a-samurai-stands-holding-his.jpg"},
            {id: 6, name: "Valera", avatar: "https://sun9-44.userapi.com/impf/c844418/v844418027/10d65/BqiDccdYqHw.jpg?size=584x480&quality=96&sign=9718ea74b989b6e0e79d3d0b1458690d&type=album"},
        ],
        messages:[
            {id:1, message: "hi", owner: "me", avatar: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg"},
            {id:2, message: "Yo", owner: "you", avatar: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"},
            {id:3, message: "How is your it-kamasutra?", owner: "me", avatar: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg"},
            {id:4, message: "Good enough, dude!", owner: "you", avatar: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"},
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: "Keanu", avatar: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dc1c5a98-300a-486e-ad41-e3c5d1a53e25/220x330"},
            {id: 2, name: "Scarlett", avatar: "https://img.kupigolos.ru/hero/5cd15729c58f3.jpg?p=bh&s=9f84b0791d5bcd96b0c37b9beace4cba"},
            {id: 3, name: "Johnny", avatar: "https://pbs.twimg.com/profile_images/3520621764/ae559e6e30a3bc4c0ddb42316f93d316_400x400.jpeg"},
            {id: 4, name: "Rachel", avatar: "https://factik.ru/wp-content/uploads/2017/07/JenniferAnistonHWoFFeb2012-e1500727232695.jpg"},
        ]
    },
}

export default state;