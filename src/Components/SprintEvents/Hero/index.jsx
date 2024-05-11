import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { SprintEvents } from '../../../data/data';

const EventsHero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoaded(true);
        };
        img.src = SprintEvents.heroImgSource;
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={`${styles.background} ${loaded ? styles.show : ''}`} style={{ backgroundImage: `url(${SprintEvents.heroImgSource})` }}></div>
            <div className={`${styles.content} ${loaded ? styles.show : ''}`}>
                <h1 className={styles.header}>{SprintEvents.heroTitle}</h1>
                <hr className={`${styles.heroLine} ${loaded ? styles.animateHr : ''}`} />
            </div>
        </div>
    );
};

export default EventsHero;