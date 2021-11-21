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
    newPostText: string
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
        newPostText: "it-kamasutra",
    },
    messagesPage: {
        dialogs:[
            {id: 1, name: "Dimych", avatar: "/images/Redux/State/dialogs/Dimych.jpg"},
            {id: 2, name: "Andrey", avatar: "/images/Redux/State/dialogs/Andrey.jpg"},
            {id: 3, name: "Sveta", avatar: "/images/Redux/State/dialogs/Sveta.jpg"},
            {id: 4, name: "Sasha", avatar: "/images/Redux/State/dialogs/Sasha.jpg"},
            {id: 5, name: "Viktor", avatar: "/images/Redux/State/dialogs/Viktor.jpg"},
            {id: 6, name: "Valera", avatar: "/images/Redux/State/dialogs/Valera.jpg"},
        ],
        messages:[
            {id:1, message: "hi", owner: "me", avatar: "/images/Redux/State/messages/me.jpg"},
            {id:2, message: "Yo", owner: "you", avatar: "/images/Redux/State/messages/you.jpg"},
            {id:3, message: "How is your it-kamasutra?", owner: "me", avatar: "/images/Redux/State/messages/me.jpg"},
            {id:4, message: "Good enough, dude!", owner: "you", avatar: "/images/Redux/State/messages/you.jpg"},
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: "Keanu", avatar: "/images/Redux/State/friends/Keanu.jpg"},
            {id: 2, name: "Scarlett", avatar: "/images/Redux/State/friends/Scarlett.jpg"},
            {id: 3, name: "Johnny", avatar: "/images/Redux/State/friends/Johnny.jpg"},
            {id: 4, name: "Rachel", avatar: "/images/Redux/State/friends/Rachel.jpg"},
            {id: 5, name: "Ross", avatar: "/images/Redux/State/friends/Ross.jpg"},
        ]
    },
}

export const addPost = () => {
    let newPost:PostsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const sendMessage = (message: string) => {
    let newMessage:MessagesType = {
        id:99,
        message: message,
        owner: "me",
        avatar: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg",
    };
    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree(state);
};

let rerenderEntireTree = (state: StateType) => {
    console.log("State has changed. ");
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer;
}

export default state;