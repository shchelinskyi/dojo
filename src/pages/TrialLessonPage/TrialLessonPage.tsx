import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { openForm } from '../../redux/slices/formTrialSessionSlice.ts';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
import CustomButton from '../../components/CustomButton';
import girl from '../../assets/images/trial/girl.svg';
import boy from '../../assets/images/trial/boy.svg';
import cloudLeft from '../../assets/images/trial/cloud-trial-left.svg';
import cloudRT from '../../assets/images/trial/cloud-trial-rt.svg';
import cloudRB from '../../assets/images/trial/cloud-trial-rb.svg';
import s from './TrialLessonPage.module.scss';

interface Position {
    x: number;
    y: number;
}

const TrialLessonPage: FC = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e:MouseEvent) => {
            requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calculateParallax = (position: Position, strength: number): { transform: string } => ({
        transform: `translateX(${position.x / strength}px)`,
    });

    return (
        <div className={s.container}>
            <div className={s.block}>
                {/*<Image className={s.girlImg} src={girl}/>*/}
                <Image className={s.girlImg} src={girl} style={calculateParallax(mousePosition, 50)} />
                <div className={s.centerItem}>
                    <h5 className={s.centerItemTitle}>
                        {t('free')} <br /> {t('freeTask')}
                    </h5>
                    <p className={s.centerItemDescription}>
                        {t('freeSlogan1')} <br /> {t('freeSlogan2')}
                    </p>
                    <div className={s.btnBlock}>
                        <CustomButton onClick={() => dispatch(openForm())}>{t('signUpforClasses')}</CustomButton>
                    </div>
                    <Image className={s.cloudLeftImg} src={cloudLeft} />
                    <Image className={s.cloudRightTopImg} src={cloudRT} />
                    <Image className={s.cloudRightBottomImg} src={cloudRB} />
                </div>
                {/*<Image className={s.boyImg} src={boy}/>*/}
                <Image className={s.boyImg} src={boy} style={calculateParallax(mousePosition, -50)} />
            </div>
        </div>
    );
};

export default TrialLessonPage;
