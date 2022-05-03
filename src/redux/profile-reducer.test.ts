import profileReducer, {addPostActionCreator, deletePostAC} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
    ],
    profile: null,
    status: ""
}

test('length of posts should be incremented', ()=>{
    let action = addPostActionCreator("it-kamasutra.com");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})

test('message of the new post should be correct', ()=>{
    let action = addPostActionCreator("it-kamasutra.com");
    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("it-kamasutra.com");
})

test('after deleting length of posts should be decremented', ()=>{
    let action = deletePostAC(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
})


