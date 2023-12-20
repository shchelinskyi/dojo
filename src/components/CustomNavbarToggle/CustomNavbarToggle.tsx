import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './CustomNavbarToggle.module.scss';


const CustomNavbarToggle  = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Button variant="outline-light" onClick={handleClick}
            className={`${styles.customToggle} ${isOpen ? styles.open : ''}`}
        >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </Button>
    );
};

export default CustomNavbarToggle;