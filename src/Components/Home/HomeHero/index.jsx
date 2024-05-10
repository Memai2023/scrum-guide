import { useEffect, useState } from 'react';
import styles from './HomeHero.module.css';
import { Home } from '../../../data/data';

const HomeHero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoaded(true);
        };
        img.src = Home.heroImgSource;
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={`${styles.background} ${loaded ? styles.show : ''}`} style={{ backgroundImage: `url(${Home.heroImgSource})` }}></div>
            <div className={`${styles.content} ${loaded ? styles.show : ''}`}>
                <h1 className={styles.header}>{Home.heroTitle}</h1>
                <hr className={styles.heroLine}></hr>
            </div>
        </div>
    );
};

export default HomeHero;