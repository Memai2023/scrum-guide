import { useEffect, useState } from 'react';
import styles from './HeroImage.module.css';
import { Essence } from '../../../data/data';

const HomeImage = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoaded(true);
        };
        img.src = Essence.heroImgSource;
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={`${styles.background} ${loaded ? styles.show : ''}`} style={{ backgroundImage: `url(${Essence.heroImgSource})` }}></div>
            <div className={`${styles.content} ${loaded ? styles.show : ''}`}>
                <h1 className={styles.header}>{Essence.heroTitle}</h1>
                <hr className={`${styles.heroLine} ${loaded ? styles.animateHr : ''}`} />
            </div>
        </div>
    );
};

export default HomeImage;