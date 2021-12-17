import React from 'react';
import s from './users.module.css'
import user1 from './../../assets/users/user1.jpg'
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render(){

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
           pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => <span
                        className={this.props.currentPage === p ? s.selectedPage : s.usual}
                        onClick={(e) => this.onPageChanged(p)}
                    >{p}</span>)}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img alt="ava" src={u.photos.small != null ? u.photos.small : user1} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {'u.location.country'}
                        </div>
                        <div>
                            {'u.location.city'}
                        </div>
                    </span>
                </span>
                </div>)}
            </div>
        )
    }
}
