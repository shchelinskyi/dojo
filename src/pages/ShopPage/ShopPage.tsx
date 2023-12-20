import {useEffect, useState, SetStateAction, Dispatch} from "react";
import {Container, Stack, Tab, Nav} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import ProductCard from "../../components/ProductCard";
import {useTranslation} from "react-i18next";
import {products} from "../../utils/shop";
import cn from "classnames";
import s from "./ShopPage.module.scss";
import type {ProductItemType} from "../../components/ProductCard/ProductCard";

const ShopPage = () => {

    const {t} = useTranslation();
    const [currentIndexAll, setCurrentIndexAll] = useState<number>(0);
    const [currentIndexCasuals, setCurrentIndexCasuals] = useState<number>(0);
    const [currentIndexBackpacks, setCurrentIndexBackpacks] = useState<number>(0);
    const [currentIndexKimonos, setCurrentIndexKimonos] = useState<number>(0);
    const [currentIndexBelts, setCurrentIndexBelts] = useState<number>(0);
    const [currentIndexCovers, setCurrentIndexCovers] = useState<number>(0);
    const [currentIndexProtections, setCurrentIndexProtections] = useState<number>(0);
    const [currentIndexSupports, setCurrentIndexSupports] = useState<number>(0);

    const [allProducts, setAllProducts] = useState<ProductItemType[]>([]);
    const [allCasuals, setAllCasuals] = useState<ProductItemType[]>([]);
    const [allBackpacks, setAllBackpacks] = useState<ProductItemType[]>([]);
    const [allKimonos, setAllKimonos] = useState<ProductItemType[]>([]);
    const [allBelts, setAllBelts] = useState<ProductItemType[]>([]);
    const [allCovers, setAllCovers] = useState<ProductItemType[]>([]);
    const [allProtections, setAllProtections] = useState<ProductItemType[]>([]);
    const [allSupports, setAllSupports] = useState<ProductItemType[]>([]);

    const [activeKey, setActiveKey] = useState('all');

    const filterItems = (category: string): ProductItemType[] => {
        return products.filter((item: ProductItemType) => item.category === category)
    }

    useEffect(() => {
        if (products.length > 0 && products.length > allProducts.length) {
            const someArr: ProductItemType[] =(products as ProductItemType[]).slice(0, currentIndexAll + 3);
            setAllProducts([...someArr]);
        }
    }, [currentIndexAll])

    useEffect(() => {
        const filteredProducts = filterItems("casual");
        if (filteredProducts.length > 0 && filteredProducts.length > allCasuals.length) {
            const someArr: ProductItemType[] = filteredProducts.slice(0, currentIndexCasuals + 3);
            setAllCasuals([...someArr]);
        }
    }, [currentIndexCasuals])

    useEffect(() => {
        const filteredProducts = filterItems("backpack");
        if (filteredProducts.length > 0 && filteredProducts.length > allBackpacks.length) {
            const someArr: ProductItemType[] = filteredProducts.slice(0, currentIndexBackpacks + 3);
            setAllBackpacks([...someArr]);
        }
    }, [currentIndexBackpacks])

    useEffect(() => {
        const filteredProducts = filterItems("kimono");
        if (filteredProducts.length > 0 && filteredProducts.length > allKimonos.length) {
            const someArr: ProductItemType[] = filteredProducts.slice(0, currentIndexKimonos + 3);
            setAllKimonos([...someArr]);
        }
    }, [currentIndexKimonos])

    useEffect(() => {
        const filteredProducts = filterItems("belt");
        if (filteredProducts.length > 0 && filteredProducts.length > allBelts.length) {
            const someArr: ProductItemType[] = filteredProducts.slice(0, currentIndexBelts + 3);
            setAllBelts([...someArr]);
        }
    }, [currentIndexBelts])

    useEffect(() => {
        const filteredProducts = filterItems("case");
        if (filteredProducts.length > 0 && filteredProducts.length > allCovers.length) {
            const someArr: ProductItemType[] = filteredProducts.slice(0, currentIndexCovers + 3);
            setAllCovers([...someArr]);
        }
    }, [currentIndexCovers])

    useEffect(() => {
        const filteredProducts = filterItems("protection");
        if (filteredProducts.length > 0 && filteredProducts.length > allProtections.length) {
            const someArr: ProductItemType[] = filteredProducts.slice(0, currentIndexProtections + 3);
            setAllProtections([...someArr]);
        }
    }, [currentIndexProtections])

    useEffect(() => {
        const filteredProducts = filterItems("support");
        if (filteredProducts.length > 0 && filteredProducts.length > allSupports.length) {
            const someArr: ProductItemType[] = filteredProducts.slice(0, currentIndexSupports + 3);
            setAllSupports([...someArr]);
        }
    }, [currentIndexSupports])

    const handleShowMore = (category: string, currentIndex: number,  setCurrentIndex: Dispatch<SetStateAction<number>>) => {
        if (category === "all") {
            const newIndex: number = currentIndex + 3;
            setCurrentIndex(newIndex >= products.length ? 0 : newIndex);
        } else {
            const filteredProducts = filterItems(category);
            const newIndex = currentIndex + 3;
            setCurrentIndex(newIndex >= filteredProducts.length ? 0 : newIndex);
        }
    };

    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("shop")}</h3>
                    <Tab.Container defaultActiveKey="all" activeKey={activeKey} onSelect={(k: string | null) => setActiveKey(k as string)}>
                        <Nav className={s.tabsList}>
                            <Nav.Item>
                                <Nav.Link eventKey="all"
                                          className={cn(s.tab, {[s.active]: activeKey === "all"})}>{t("all")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="casual"
                                          className={cn(s.tab, {[s.active]: activeKey === "casual"})}>{t("clothes")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="backpacks"
                                          className={cn(s.tab, {[s.active]: activeKey === "backpacks"})}>{t("backpacks")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="kimonos"
                                          className={cn(s.tab, {[s.active]: activeKey === "kimonos"})}>{t("kimono")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="belts"
                                          className={cn(s.tab, {[s.active]: activeKey === "belts"})}>{t("belts")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="covers"
                                          className={cn(s.tab, {[s.active]: activeKey === "covers"})}>{t("covers")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="protection"
                                          className={cn(s.tab, {[s.active]: activeKey === "protection"})}>{t("protection")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="support"
                                          className={cn(s.tab, {[s.active]: activeKey === "support"})}>{t("support")}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="all">
                                <div className={s.content}>
                                    {allProducts.length > 0 && allProducts.map((productItem: ProductItemType) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {(products.length > allProducts.length) &&
                                    <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                        <CustomButton onClick={() => handleShowMore("all", currentIndexAll, setCurrentIndexAll )}>{t("showMore")}</CustomButton>
                                    </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="casual">
                                <div className={s.content}>
                                    {allCasuals.length > 0 && allCasuals.map((productItem: ProductItemType) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("casual").length > allCasuals.length) &&

                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("casual", currentIndexCasuals, setCurrentIndexCasuals)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="backpacks">
                                <div className={s.content}>
                                    {allBackpacks.length > 0 && allBackpacks.map((productItem: ProductItemType) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("backpack").length > allBackpacks.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("backpack", currentIndexBackpacks, setCurrentIndexBackpacks)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="kimonos">
                                <div className={s.content}>
                                    {allKimonos.length > 0 && allKimonos.map((productItem: ProductItemType) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("kimono").length > allKimonos.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("kimono", currentIndexKimonos, setCurrentIndexKimonos)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="belts">
                                <div className={s.content}>
                                    {allBelts.length > 0 && allBelts.map((productItem: ProductItemType) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("belt").length > allBelts.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton onClick={() => handleShowMore("belt", currentIndexBelts, setCurrentIndexBelts)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="covers">
                                <div className={s.content}>
                                    {allCovers.length > 0 && allCovers.map((productItem: ProductItemType) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("case").length > allCovers.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("case", currentIndexCovers, setCurrentIndexCovers)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="protection">
                                <div className={s.content}>
                                    {allProtections.length > 0 && allProtections.map((productItem: ProductItemType) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("protection").length > allProtections.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("protection", currentIndexProtections, setCurrentIndexProtections)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="support">
                                <div className={s.content}>
                                    {allSupports.length > 0 && allSupports.map((productItem: ProductItemType) => <ProductCard
                                        key={productItem.id}
                                        productItem={productItem}/>)}
                                </div>
                                {
                                    (filterItems("support").length > allSupports.length) &&
                                <Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                                    <CustomButton
                                        onClick={() => handleShowMore("support", currentIndexSupports, setCurrentIndexSupports)}>{t("showMore")}</CustomButton>
                                </Stack>
                                }
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </Container>
        </>
    );
};

export default ShopPage;
