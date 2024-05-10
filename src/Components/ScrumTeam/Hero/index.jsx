import { useEffect, useState } from 'react';
import styles from './ScrumTeam.module.css';
import { ScrumTeam } from '../../../data/data';

const ScrumHero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoaded(true);
        };
        img.src = ScrumTeam.heroImgSource;
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={`${styles.background} ${loaded ? styles.show : ''}`} style={{ backgroundImage: `url(${ScrumTeam.heroImgSource})` }}></div>
            <div className={`${styles.content} ${loaded ? styles.show : ''}`}>
                <h1 className={styles.header}>{ScrumTeam.heroTitle}</h1>
                <hr className={styles.heroLine}></hr>
            </div>
        </div>
    );
};

export default ScrumHero;
