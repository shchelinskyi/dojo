import {useState} from 'react';
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import { Form as BootstrapForm} from "react-bootstrap";
import {sendMessageToTelegram} from "../../tools/sendMessageToTelegram.ts";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../hooks.tsx";
import {closeForm, openInfoModal} from "../../redux/slices/formTrialSessionSlice.ts";
import CustomPhoneInput from "../CustomPhoneInput";
import s from "./FormBlock.module.scss";

type TypeValue = {
    name: string;
    phone: string;
    comment: string
}



const initialValues: TypeValue = {
    name: "",
    phone: "",
    comment: ""
};

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomTextarea = ({field, form, ...props}) => (
    <>
        <BootstrapForm.Control as="textarea" rows={3} {...field} {...props} />
    </>
);


const FormBlock = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleOpenPrivacy = () => {
        dispatch(closeForm());
    };

    const handleSubmit = (values: TypeValue, {setSubmitting, resetForm}:  FormikHelpers<TypeValue>) => {
        setSubmitting(false);
        sendMessageToTelegram(values);
        resetForm();
        dispatch(openInfoModal());
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("fieldRequired")),
        phone: Yup.string().required(t("fieldRequired"))
            .test('isValidPhone', t("validationPhone"), (value) => {
                const phoneNumber = value.replace(/\D/g, '');
                return phoneNumber.length === 12;
            }),
        comment: Yup.string().required(t("fieldRequired"))
    });

    return (
        <div className={s.formBlock}>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h4 className={s.formTitle}>{t("formTitle1")} <br className={s.wrap}/> {t("formTitle2")}</h4>
                        <BootstrapForm.Group className="mb-3" controlId="formBasicName">
                            <Field type="text" name="name" as={BootstrapForm.Control}
                                   placeholder={t("formName")} className={s.field}/>
                            <ErrorMessage name="name" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>

                        <BootstrapForm.Group className="mb-3" controlId="formBasicPhone">
                            <Field type="tel" name="phone" as={CustomPhoneInput} className={s.field}/>
                            <ErrorMessage name="phone" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>

                        <BootstrapForm.Group className="mb-3" controlId="formBasicComment">
                            <Field type="text" name="comment" as={CustomTextarea}
                                   placeholder={t("formComment")}
                                   style={{minHeight: "130px"}}
                                   className={s.field}
                            />
                            <ErrorMessage name="comment" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>


                        <label className={s.label}>
                            <input type="checkbox" checked={isChecked}
                                   onChange={handleCheckboxChange} className={s.checkbox}
                                   name="agree"/>
                            <span className={s.box}></span>
                            <p className={s.checkboxLabel}>
                                <span className={s.footerLabel1}>{t("formFooter1")}</span>
                                {/*<br className={s.wrap}/>*/}
                                <Link className={s.link} to="privacy-policy" onClick={handleOpenPrivacy}>
                                    <span className={s.footerLabel2}>{t("formFooter2")}</span>
                                </Link>
                            </p>
                        </label>


                        <div  className={s.btnBlock}>
                            <button type="submit" className={s.btnSubmit}
                                    disabled={!isChecked || isSubmitting}>
                                {t('sendBtn')}
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>


        </div>
    );
};

export default FormBlock;