import React from 'react';
import { useSelector } from 'react-redux';
import { giveNews } from '../../redux/selectors';
import classes from './news.module.css';

const News: React.FC = React.memo(() => {

    const news = useSelector(giveNews);

    return (
        <div>
            <h1>History Star Wars</h1>
            {news.map(n => {
                return (
                    <div className={classes.newsItem}>
                        <div className={classes.title}>{n.title}</div>
                        <div className={classes.flex}>
                            {n.images.map(image => <div><img src={image}/></div>)}
                        </div>
                        <div>
                            {n.text}
                        </div>
                    </div>
                )
            })}
        </div>
    )
})

export default News;