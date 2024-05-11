import { useEffect, useState } from 'react';
import styles from './Artifacts.module.css';
import { Artifacts } from '../../../data/data';

const ArtifactHero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoaded(true);
        };
        img.src = Artifacts.heroImgSource;
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={`${styles.background} ${loaded ? styles.show : ''}`} style={{ backgroundImage: `url(${Artifacts.heroImgSource})` }}></div>
            <div className={`${styles.content} ${loaded ? styles.show : ''}`}>
                <h1 className={styles.header}>{Artifacts.heroTitle}</h1>
                <hr className={`${styles.heroLine} ${loaded ? styles.animateHr : ''}`} />
            </div>
        </div>
    );
};

export default ArtifactHero;
