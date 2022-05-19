import React from 'react';
import s from "./New.module.css"
import news1 from "./../../assets/news/imageNews1.jpg"

export const News = () => {
    const news = [
        {image:news1,area:"",title:"",news:""}
    ]

    // const newsList;

    return (
        <div className={s.newsTab}>
            <div className={s.newsTitle}>
                <div>Daily news</div>
            </div>
            <div className={s.newsRows}>
                <div className={s.singleNewsFiled}>
                      <div className={s.newsTextFiled}>
                          <div></div>
                          <div></div>
                          <div></div>
                      </div>
                    <img src={news1} alt="" className={s.newsImage}/>
                </div>
                <div className={s.singleNewsFiled}>
                    <div className={s.newsTextFiled}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img src={news1} alt="" className={s.newsImage}/>
                </div>
                <div className={s.singleNewsFiled}>
                    <div className={s.newsTextFiled}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img src={news1} alt="" className={s.newsImage}/>
                </div>
                <div className={s.singleNewsFiled}>
                    <div className={s.newsTextFiled}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img src={news1} alt="" className={s.newsImage}/>
                </div>
                <div className={s.singleNewsFiled}>
                    <div className={s.newsTextFiled}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img src={news1} alt="" className={s.newsImage}/>
                </div>
            </div>
        </div>
    )
}