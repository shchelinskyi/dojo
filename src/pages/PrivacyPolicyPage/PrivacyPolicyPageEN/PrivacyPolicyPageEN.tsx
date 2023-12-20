import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import logo from "../../../assets/images/main/logo.webp";
import {Image} from "react-bootstrap";
import s from "../PrivacyPolicyPage.module.scss";
import {useEffect} from "react";

const PrivacyPolicyPageEN = () => {
    const {t} = useTranslation();
    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.logoBlock}>
                    <Link to="/misak-dojo/">
                        <Image className={s.logo} src={logo}/>
                    </Link>
                    <div>
                        <Link to="/misak-dojo/">
                            <button className={s.btn}>
                                {t("return")}
                            </button>
                        </Link>
                    </div>
                </div>
                <h3 className={s.mainTitle}>Privacy Policy</h3>
                <h5 className={s.title}>1. General Provisions</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        This policy for the processing of personal data was created in accordance with the requirements
                        of the Law of Ukraine dated 01.06.2010 No. 2297-VI "On the protection of personal data" and
                        determines the procedure for processing personal data and measures to ensure the security of
                        personal data of PO (Public Organization) KKSC (Kyokushinkai Karate Sports Club) "Misak Dojo"
                        (hereinafter – Operator).</p>
                    <ol className={s.list}>
                        <li className={s.text}>
                            The operator sets the most important goal and condition of its activities to respect the
                            rights and freedoms of man and citizen during the processing of his personal data, including
                            the protection of the right to privacy, personal and family secrets.
                        </li>
                        <li className={s.text}>
                            The Operator's policy on personal data processing (hereinafter - the Policy) applies to all
                            information that the Operator may receive about visitors to the website <a
                            href="https://misakdojo.com/" className={s.link}>https://misakdojo.com/</a>.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>2. Basic concepts used in Politics</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Automated processing of personal data – processing of personal data using computer
                            technology;
                        </li>
                        <li className={s.text}>
                            Blocking of personal data – temporary cessation of personal data processing (unless the
                            processing is necessary to clarify personal data);
                        </li>
                        <li className={s.text}>
                            Website – a set of graphics and information materials, as well as computer programs and
                            databases that provide their availability on the Internet at the network address
                            <a href="https://misakdojo.com/" className={s.link}>https://misakdojo.com/</a>;
                        </li>
                        <li className={s.text}>
                            Information system of personal data — a set of personal data contained in databases, and
                            information technology and technical means that ensure the processing of personal data;
                        </li>
                        <li className={s.text}>
                            Depersonalization of personal data — actions as a result of which it is impossible to
                            determine the affiliation of personal data to a particular User or other subject of personal
                            data without the use of additional information;
                        </li>
                        <li className={s.text}>
                            Processing of personal data – any action (operation) or set of actions (operations) carried
                            out by means of automation or without the use of such means with personal data, including
                            collection, recording, systematization, accumulation, storage, clarification (update,
                            change), extraction, use, transfer (distribution, provision, access), depersonalization,
                            blocking, deletion, destruction of personal data;
                        </li>
                        <li className={s.text}>
                            Operator – a state body, municipal body, legal or natural person who independently or
                            together with other persons organizes and (or) carries out the processing of personal data,
                            as well as the main purposes of personal data processing, the composition of personal data
                            to be processed, actions (operations) occurring with personal data;
                        </li>
                        <li className={s.text}>
                            Personal data – any information that directly or indirectly relates to the User of the
                            website <a href="https://misakdojo.com/"
                                       className={s.link}>https://misakdojo.com/</a>, which has already been identified
                            or is being determined;
                        </li>
                        <li className={s.text}>
                            User – any visitor to the website <a href="https://misakdojo.com/"
                                                                 className={s.link}>https://misakdojo.com/</a>;
                        </li>
                        <li className={s.text}>
                            Provision of personal data – actions aimed at disclosing personal data to a certain person
                            or a certain group of persons;
                        </li>
                        <li className={s.text}>
                            Dissemination of personal data – any actions aimed at disclosing personal data to an
                            indefinite number of persons (transfer of personal data) or access to personal data of an
                            unlimited number of persons, including the disclosure of personal data in the media,
                            placement in information and telecommunications networks or provision access to personal
                            data by any other means;
                        </li>
                        <li className={s.text}>
                            Cross-border transfer of personal data – transfer of personal data to the territory of a
                            foreign state to a foreign authority, foreign natural or foreign legal entity;
                        </li>
                        <li className={s.text}>
                            Destruction of personal data – any actions as a result of which personal data are
                            permanently destroyed with the impossibility of further recovery of the content of personal
                            data in the personal data information system and (or) as a result of which material personal
                            data carriers are destroyed.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>3. The Operator may process the following personal data of the User</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Full Name;
                        </li>
                        <li className={s.text}>
                            E-mail address;
                        </li>
                        <li className={s.text}>
                            Telephone numbers;
                        </li>
                        <li className={s.text}>
                            The site also collects and processes impersonal user data (including cookies) using Internet
                            statistics services (Yandex Metrika, Google Analytics, etc.).
                        </li>
                        <li className={s.text}>
                            The above data are further in the text of the Policy combined with the general concept of
                            Personal Data.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>4. The purpose of personal data processing</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            The purpose of processing the User's personal data is to inform the User by sending e-mails.
                        </li>
                        <li className={s.text}>
                            The Operator also has the right to send the User notifications about new products and
                            services, special offers and various events. The User can always refuse to receive
                            information messages by sending an email to the Operator to the e-mail address
                            MisakDojo@gmail.com marked "Refusal to notify about new products and services, special
                            offers."
                        </li>
                        <li className={s.text}>
                            Depersonalized Users' data, obtained through Internet statistics services, are used to
                            collect information about the actions of Users on the site, to improve the quality of the
                            site and its content.
                        </li>

                    </ol>
                </div>
                <h5 className={s.title}>5. Legal grounds for personal data processing</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            The Operator processes the User's personal data only in the case of a special form filled in
                            and / or sent by the User, located on the website <a
                            href="https://misakdojo.com/" className={s.link}>https://misakdojo.com/</a>. By filling in
                            the
                            appropriate form and / or sending their personal data to the Operator, the User agrees with
                            this Policy.
                        </li>
                        <li className={s.text}>
                            The Operator processes depersonalized data about the User if this is allowed in the User's
                            browser settings (saving cookies and the use of JavaScript technology is enabled).
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>
                    6. Procedure for collection, storage, transfer and other types of personal data processing
                </h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        The security of personal data processed by the Operator is ensured by implementing the legal,
                        organizational and technical measures necessary to fully comply with the requirements of current
                        legislation in the field of personal data protection.</p>
                    <ol className={s.list}>
                        <li className={s.text}>
                            The operator ensures the storage of personal data and takes all necessary measures to
                            exclude access to personal data by unauthorized persons.
                        </li>
                        <li className={s.text}>
                            The User's personal data will never, under any circumstances, be transferred to third
                            parties, except in cases related to the implementation of applicable law.
                        </li>
                        <li className={s.text}>
                            In case of inaccuracies in personal data, the User can update them independently by sending
                            a message to the Operator to the e-mail address of the Operator MisakDojo@gmail.com marked
                            "Update of personal data".
                        </li>
                        <li className={s.text}>
                            The term of personal data processing is unlimited. The User may at any time revoke his
                            consent to the processing of personal data by sending an e-mail to the Operator to the
                            e-mail address of the Operator MisakDojo@gmail.com marked "Withdrawal of consent to the
                            processing of personal data".
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>7. Cross-border transfer of personal data</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Prior to the cross-border transfer of personal data, the operator must ensure that the
                            foreign state to whose territory the transfer of personal data is intended to be carried out
                            provides reliable protection of the rights of personal data subjects.
                        </li>
                        <li className={s.text}>
                            Cross-border transfer of personal data to foreign countries that do not meet the above
                            requirements may be carried out only if the subject of personal data agrees in written to
                            cross-border transfer of his personal data and / or contract performance where the subject
                            of personal data is being a party of.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>8. Final provisions</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            The user can get any clarification on issues related to the processing of his personal data
                            by contacting the Operator by e-mail MisakDojo@gmail.com.
                        </li>
                        <li className={s.text}>
                            This document will show any changes in the policy of personal data processing by the
                            Operator. The policy is valid indefinitely until it is replaced by a new version.
                        </li>
                        <li className={s.text}>
                            The current version of the Policy is freely available on the Internet at  <a
                            href="https://misakdojo.com/privacy-policy"
                            className={s.link}>https://misakdojo.com/privacy-policy</a>.
                        </li>
                    </ol>
                </div>
                <div className={s.logoBlock}>
                    <Link to="/misak-dojo/">
                        <Image className={s.logo} src={logo}/>
                    </Link>
                    <div>
                        <Link to="/misak-dojo/">
                            <button className={s.btn}>
                                {t("return")}
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicyPageEN;
