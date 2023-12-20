import axios from "axios";
import type {CartItem} from "../redux/slices/cartSlice.ts";

type sendProductsProps = {
    cartItems: CartItem[];
    total: number;
    totalSum: number;
    values: {
        name: string;
        age?: string;
        phone: string;
        email: string;
        comment?: string;
        postCity?:string;
        postNumber?:string;
        address?:string;
        number?:string;
        flat?:string;
    }
}

export const sendProductsToTelegram = ({cartItems, total, totalSum, values}: sendProductsProps) => {
    const TOKEN = "6256749568:AAHTtPs90MP3gNYCio0QQCbTZHkyHLv0am4";
    const CHAT_ID = "-1002036629099";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    let message = `<b>Заявка з сайту</b>\n`;

    let count = 0;

    const deliveryValue = totalSum - total;

    cartItems.forEach((item: CartItem) => count += item.quantity);

    message += `<b>Кількість замовлених товарів: ${count}</b>\n`;

    cartItems.forEach((item:CartItem, index:number) => {
        const URL = String(`${item.image}`);
        message += `<b>-------------------</b>\n`
        message += `<b>Товар ${index+1}</b>\n`
        message += `<b>Назва товару: ${item.title.ua}</b>\n`
        message += `<b>Артикул: ${item.id}</b>\n`
        message += `<b>Кількість: ${item.quantity}</b>\n`
        message += `<b>Ціна одиниці: ${item.price}</b>\n`
        if (item.size) {
            message += `<b>Розмір: ${item.size}</b>\n`
        }
        if (item.color) {
            message += `<b>Колір: ${item.color}</b>\n`
        }
        message += `<a href="${URL}">Зображення</a>\n`;
        message += `<b>-------------------</b>\n`

    })

    if (values.comment) {
        message += `<b>Коментар: ${values.comment}</b>\n`;
        message += `<b>-------------------</b>\n`
    }

    message += `<b>Вартість товарів: ${total}</b>\n`;
    message += `<b>Вартість доставки: ${deliveryValue}</b>\n`;
    message += `<b>Дані отримувача:</b>\n`;
    message += `<b>Iм'я: ${values.name}</b>\n`;
    if (values.age) {
        message += `<b>Вік: ${values.age}</b>\n`;
    }
    if (values.email) {
        message += `<b>Email: ${values.email}</b>\n`;
    }
    message += `<b>Телефон: ${values.phone}</b>\n`;

    if (!values.postCity && !values.address) {
        message += `<b>Самовивіз</b>\n`;
    }

    if (values.postCity) {
        message += `<b>Доставка Нова Пошта</b>\n`;
        message += `<b>Місто НП: ${values.postCity}</b>\n`;
    }
    if (values.postNumber) {
        message += `<b>Номер НП: ${values.postNumber}</b>\n`;
    }

    if (values.address && values.number && values.flat ) {
        message += `<b>Доставка кур'єром</b>\n`;
        message += `<b>Віддправка: місто Київ, вул. ${values.address}, ${values.number}, кв. ${values.flat} </b>\n`;
    }


    axios.post(URI_API, {
        chat_id:CHAT_ID,
        parse_mode:"html",
        text:message
    })
}