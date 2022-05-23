import React from 'react';
import s from "./New.module.css"
import news1 from "./../../assets/news/imageNews1.jpg"
import news2 from "./../../assets/news/imageNews2.jpg"
import news3 from "./../../assets/news/imageNews3.jpg"
import news4 from "./../../assets/news/imageNews4.jpg"
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import { Navigate } from 'react-router-dom';

export const News = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

    const news = [
        {id: 1, image:news1,title:"Taco Bell is bringing back the Mexican pizza - and South Asians are rejoicing",
            news:"Taco Bell's Mexican Pizza was a staple comfort food for South Asians across the country. Now the" +
                "fast food chain is bring the favorite back to its menu."},
        {id: 2, image:news2,title:"Will Elon Musk turn activist at Twitter?",
            news:"Musk is now Twitter's largest shareholder. That gives him a legal right to coerce and cajole" +
                "and persuade and shout about what the company does."},
        {id: 3, image:news3,title:"The French fry lover in your life may go head over peels for this perfume",
            news:"Looking for a last-minute Valentine's Day gift? Idaho's potato commission is giving away French" +
                "fry-scented perfume for Valentine's Day."},
        {id: 4, image:news4,title:"A veteran won a $4 million lottery prize using the numbers from a fortune cookie",
            news:"The North Carolina man turned his meal at an Asian restaurant into a Mega Millions jackpot when " +
                "his cookies turned out to be extra fortunate."},
    ]

    const newsList = news.map(n =>  <div key={n.id} className={s.singleNewsFiled}>
        <div className={s.newsTextFiled}>
            <div className={s.singleNewsTitle}>{n.title}</div>
            <div className={s.singleNewsText}>{n.news}</div>
        </div>
        <img src={n.image} alt="" className={s.newsImage}/>
    </div>)

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className={s.newsTab}>
            <div className={s.newsTitle}>
                <div>Daily news</div>
            </div>
            <div className={s.newsRows}>
                {newsList}
            </div>
        </div>
    )
}