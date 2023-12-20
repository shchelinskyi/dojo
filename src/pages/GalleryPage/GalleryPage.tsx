import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Container, Stack, Placeholder, Card} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import GalleryCard from "../../components/GalleryCard";
import {gallery} from "../../utils/gallery";
import s from "./GalleryPage.module.scss";

type GalleryItem = {
    title: {
        en: string;
        ru: string;
        ua: string;
    };
    date: string;
    images: string[]
}


const GalleryPage = () => {
    const {t} = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [galleryArray, setGalleryArray] = useState<GalleryItem[] | []>([]);
    const [showGalleryCard, setShowGalleryCard] = useState(false);

    useEffect(() => {
        if (gallery.length > 0 && gallery.length > galleryArray.length) {
            const someArr = gallery.slice(0, currentIndex + 3);
            setGalleryArray([...someArr]);
        }
    }, [currentIndex])

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowGalleryCard(true);
        }, 3000);

        return () => {
            clearInterval(timer)
        };

    }, [currentIndex]);


    const handleShowMore = () => {
        const newIndex = currentIndex + 3;
        setCurrentIndex(newIndex >= gallery.length ? 0 : newIndex);
        setShowGalleryCard(false);
    };


    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("gallery")}</h3>
                    <div className={s.content}>
                        {gallery.length > 0 && galleryArray.map((galleryItem, index: number) => {

                            if (index < currentIndex) {
                                return <GalleryCard key={galleryItem.title.en} galleryItem={galleryItem}/>
                            } else {
                                return <div key={galleryItem.title.en}>
                                    {!showGalleryCard &&
                                        <div className={s.placeholderContainer}>
                                            <Placeholder as={Card.Text} animation="glow">
                                                <Placeholder className={s.placeholderImg} bg="primary"/>
                                            </Placeholder>
                                            <div>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder className={s.placeholderDate} bg="primary"/>
                                                    <Placeholder className={s.placeholderTitle} bg="primary"/>
                                                </Placeholder>
                                            </div>
                                        </div>
                                    }
                                    {showGalleryCard &&
                                        <GalleryCard key={galleryItem.title.en} galleryItem={galleryItem}/>}
                                </div>
                            }
                        })}
                    </div>
                    {
                        (galleryArray.length !== gallery.length) &&
                        (<Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                            <CustomButton onClick={handleShowMore}>{t("showMore")}</CustomButton>
                        </Stack>)
                    }
                </div>
            </Container>
        </>
    );
};

export default GalleryPage;
