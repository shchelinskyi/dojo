import {useState} from 'react';
import {Link} from "react-router-dom";
import * as Yup from 'yup';
import {useAppDispatch} from "../../hooks";
import {closeForm, openInfoModal} from "../../redux/slices/formTrialSessionSlice"
import {useTranslation} from "react-i18next";
import {Form as BootstrapForm} from 'react-bootstrap';
import {Formik, Field, Form, ErrorMessage, FormikHelpers} from 'formik';
import {sendMessageToTelegram} from "../../tools/sendMessageToTelegram.ts";
import CustomTextarea from "../CustomTextArea";
import CustomPhoneInput from "../CustomPhoneInput";
import s from "./FormTrialSession.module.scss"

type TypeValue = {
    name: string;
    age: number;
    phone: string;
    comment: string;
}

const initialValues: TypeValue = {
    name: '',
    age: 18,
    phone: '',
    comment: ''
};

const FormTrialSession = () => {

    const [isChecked, setIsChecked] = useState(false);
    const {t} = useTranslation();
    const dispatch = useAppDispatch();


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleCloseForm = () => {
        dispatch(closeForm());
    }

    const handleOpenPrivacy = () => {
        dispatch(closeForm());
    }

    const handleSubmit = (values: TypeValue, {setSubmitting, resetForm}:  FormikHelpers<TypeValue>) => {
        setSubmitting(false);
        sendMessageToTelegram(values);
        dispatch(closeForm());
        resetForm();
        dispatch(openInfoModal())
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("fieldRequired")),
        age: Yup.number().required(t("fieldRequired")).min(4, t("validationAge"))
            .max(99, t("validationAge")),
        phone: Yup.string().required(t("fieldRequired"))
            .test('isValidPhone', t("validationPhone"), (value) => {
                const phoneNumber = value.replace(/\D/g, '');
                return phoneNumber.length === 12;
            }),
    });

    return (

        <div className={s.overlay} onClick={handleCloseForm}>
            <div className={s.contentWrapper} onClick={(e) => e.stopPropagation()}>
                <div className={s.content}>
                    <div className={s.titleBlock}>
                        <h4 className={s.title}>{t("freeTrial")}</h4>
                        <span className={s.closeBtn} onClick={handleCloseForm}>&times;</span>
                    </div>
                    <div className={s.description}>
                        {t("freeTrialLabel1")} {t("freeTrialLabel2")}
                    </div>
                    <div className={s.line}></div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicName">
                                    <BootstrapForm.Label
                                        className={s.formLabel}>{t("formTrialName")}</BootstrapForm.Label>
                                    <Field type="text" name="name" as={BootstrapForm.Control}
                                           className={s.field}/>
                                    <ErrorMessage name="name" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>

                                <BootstrapForm.Group className="mb-3" controlId="formBasicAge">
                                    <BootstrapForm.Label
                                        className={s.formLabel}>{t("formTrialAge")}</BootstrapForm.Label>
                                    <Field type="text" name="age" as={BootstrapForm.Control}
                                           className={s.field}/>
                                    <ErrorMessage name="age" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>

                                <BootstrapForm.Group className="mb-3" controlId="formBasicPhone">
                                    <BootstrapForm.Label
                                        className={s.formLabel}>{t("formTrialPhone")}</BootstrapForm.Label>
                                    <Field type="tel" name="phone" as={CustomPhoneInput} className={s.field}/>
                                    <ErrorMessage name="phone" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>

                                <BootstrapForm.Group className="mb-3" controlId="formBasicComment">
                                    <BootstrapForm.Label
                                        className={s.formLabel}>{t("formTrialComment")}</BootstrapForm.Label>
                                    <Field type="text" name="comment" as={CustomTextarea}
                                           style={{minHeight: "50px"}}
                                           className={s.field}/>
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
                                        <br className={s.wrap}/>
                                        <Link className={s.link} to="privacy-policy" onClick={handleOpenPrivacy}>
                                            <span className={s.footerLabel2}>{t("formFooter2")}</span>
                                        </Link>
                                    </p>
                                </label>

                                <div className={s.btnBlock}>
                                    <button type="submit" className={s.btnSubmit}
                                            disabled={!isChecked || isSubmitting}>
                                        {t('sendBtn')}
                                    </button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    );
};

export default FormTrialSession;
