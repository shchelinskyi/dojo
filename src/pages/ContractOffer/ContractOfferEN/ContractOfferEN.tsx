import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import logo from "../../../assets/images/main/logo.webp";
import {Image} from "react-bootstrap";
import s from "../ContractOffer.module.scss";
import {useEffect} from "react";

const ContractOfferUA = () => {
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
                <h3 className={s.mainTitle}>User agreement</h3>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        This agreement, addressed to an indefinite circle of persons — individuals and legal entities —
                        visitors of the site on the Internet: misakdojo.com (hereinafter referred to as the Site), is an
                        official and public offer of the Public Organization KKSC (Kyokushinkai Karate Sports Club)
                        "MISAK DOJO", hereinafter referred to as the Public Organization, represented by Misak
                        Arzumanyan, publishes this Agreement, which is the terms of charitable voluntary donation
                        (hereinafter referred to as the Agreement) by an individual or legal entity (hereinafter
                        referred to as the Benefactor), the subject and conditions of which are specified below:
                    </p>
                </div>
                <h5 className={s.title}>Terms and definitions:</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Acceptance</b> — full and unconditional acceptance of the user agreement by doing actions to
                        carry out a money transfer using payment forms and funds posted on the Site, as well as by
                        transferring funds to the Fund's current account through banking institutions. The moment of
                        Acceptance is the date when funds are credited to the Fund's current account.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        The <b>payment</b> is a voluntary charitable donation.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Voluntary charitable donation </b> is the implementation of a money transfer by the
                        Benefactor in order to achieve the goals, objectives, directions and types of statutory
                        activities.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Benefactor</b> — an individual or legal entity placing Orders on the Site, or indicated as
                        the recipient of the Goods, which he receives in return for a charitable money transfer. By
                        agreeing to the terms of the agreement, the BENEFACTOR confirms that he is a capable citizen who
                        has reached the age of 18, or is a representative of an active company and has the necessary
                        documents to act on behalf of this legal entity.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Public Organization</b> — PO KKSC (Kyokushinkai Karate Sports Club) "MISAK DOJO".
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Online store</b> — an Internet site that is located and has an Internet address
                        misakdojo.com. It presents the GOODS offered by the PUBLIC ORGANIZATION to its Benefactors, as
                        well as the terms of delivery and money transfer.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Website</b> — misakdojo.com .
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Order</b> - a duly completed request of the Benefactor for the delivery of GOODS to the
                        specified address, posted by the Benefactor independently on the Website or by phone, in return
                        for a voluntary charitable donation;
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Goods</b> — an object of the material world, not withdrawn from civil circulation and
                        presented for exchange on the Site for a voluntary monetary donation. GOODS are presented on the
                        Site in the form of photo samples, which are the property of the Public Organization.
                    </p>
                </div>
                <h5 className={s.title}>1. Subject of the offer agreement</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        1.1. The PUBLIC ORGANIZATION undertakes to transfer the ownership to the BENEFACTOR, and the
                        BENEFACTOR undertakes to make a voluntary charitable donation and accept the GOODS ordered in
                        the online store.
                    </p>
                    <p className={s.text}>
                        1.2 The subject of this agreement is the transfer of funds by the BENEFACTOR to the PUBLIC
                        ORGANIZATION in order to achieve the goals, objectives, directions and types of statutory
                        activities of the PUBLIC ORGANIZATION.
                    </p>
                    <p className={s.text}>
                        1.3 Acceptance of the Agreement means that the BENEFACTOR agrees with all of its provisions and
                        is fully aware of the subject of the Аgreement and the purpose of collecting voluntary
                        charitable donations.
                    </p>
                    <p className={s.text}>
                        1.4 The Agreement is concluded by the unconditional and full accession of the BENEFACTOR to this
                        Agreement and acceptance of all current terms of the Agreement.
                    </p>
                    <p className={s.text}>
                        1.5 THE BENEFACTOR AND THE PUBLIC ORGANIZATION, guided by Art. 207, part 2 of Art. 639, Art.
                        641, 642 of the Civil Code of Ukraine, Art. 7 of the Law of Ukraine "On Charitable Activities
                        and Charitable Organizations", agree that the Agreement is considered to be concluded in writing
                        without signing a written copy by the Parties from the moment the BENEFACTOR performs the
                        actions provided for in the Agreement, which indicate agreement to comply with the terms of the
                        Agreement.
                    </p>
                    <p className={s.text}>
                        1.6 The Agreement is posted on the misakdojo.com website in the public domain and in such a way
                        as to ensure that everyone who contacts the PUBLIC ORGANIZATION is familiar with the contents of
                        this Agreement.
                    </p>
                    <p className={s.text}>
                        1.7 The BENEFACTOR cannot offer his terms of the Agreement.
                    </p>
                </div>

                <h5 className={s.title}>2. The moment of the contact conclusion</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        2.1. The text of this Agreement is a public offer (in accordance with Art. 638 and Art. 641 of
                        the Civil Code of Ukraine).
                    </p>
                    <p className={s.text}>
                        2.2. In accordance with Art. 642 of the Civil Code of Ukraine, in case the conditions set out
                        below are accepted and a voluntary charitable donation is made, a legal entity or individual who
                        accepts this offer becomes a Benefactor (in accordance with Part 2 of Art. 642 of the Civil Code
                        of Ukraine, acceptance of an offer is equivalent to concluding an agreement on the terms stated
                        in the offer), and the PUBLIC ORGANIZATION and the BENEFACTOR become the parties to the offer
                        agreement.
                    </p>
                    <p className={s.text}>
                        2.3. The fact of MAKING THE MONEY TRANSFER TO THE PUBLIC ORGANIZATION is the unconditional
                        acceptance of this Agreement, and the BENEFACTOR is considered as a person who entered into a
                        contractual relationship with the PUBLIC ORGANIZATION. If the BENEFACTOR does not agree with the
                        terms, or with any clause of the conditions, the PUBLIC ORGANIZATION invites the BENEFACTOR to
                        refuse to conclude the Offer Agreement and use the services of the PUBLIC ORGANIZATION.
                    </p>
                    <p className={s.text}>
                        <b>2.4. Ordering procedure:</b><br/>

                        The BENEFACTOR goes through the registration procedure on the PUBLIC ORGANIZATION WEBSITE with
                        the obligatory confirmation of familiarization with the terms of this Offer Agreement. The
                        BENEFACTOR is responsible for the veracity of the information provided when registering and
                        ordering. Otherwise, the PUBLIC ORGANIZATION is not responsible for timely delivery.<br/><br/>

                        The registered BENEFACTOR of the online store has the right to receive in return for a
                        charitable money transfer the Goods presented on the Site and available in the warehouse of a
                        PUBLIC ORGANIZATION. By making a CHARITABLE MONEY TRANSFER on the Website of the Internet store,
                        the BENEFACTOR assumes the obligation to accept the GOODS, and the PUBLIC ORGANIZATION accepts
                        the obligations to deliver and transfer the GOODS to the benefactor. Orders are accepted by the
                        PUBLIC ORGANIZATION through the ORDER acceptance system integrated into the PUBLIC ORGANIZATION
                        Website, as well as by phone.<br/><br/>

                        The PUBLIC ORGANIZATION has the right to limit the number of GOODS that the benefactor places in
                        the order in return for a charitable money transfer, informing the BENEFACTOR about it. After
                        receiving the Order, the PUBLIC ORGANIZATION provides a responsible manager who, on behalf of
                        the Public organization, agrees with the Benefactor all essential conditions, including
                        delivery.<br/><br/>

                        In the absence of the GOODS in the PUBLIC ORGANIZATION warehouse, the latter is obliged to
                        inform the BENEFACTOR about this in writing (via e-mail) or orally (via telephone). In this
                        case, the Benefactor has the right to replace the missing GOODS with similar GOODS.<br/><br/>

                        The PUBLIC ORGANIZATION reserves the right to unilaterally terminate the acceptance of Orders
                        from the benefactor and the shipment of the GOODS to the BENEFACTOR, as well as to restrict the
                        granting of the BENEFACTOR’S right to participate in promotions held by the PUBLIC ORGANIZATION
                        if the BENEFACTOR systematically violates the terms of this Offer Agreement or has a negative
                        impact on the operation of the Internet store by excessive downloads of online store services.
                        Confirmation of the agreed terms of shipment, delivery and payment of the GOODS will be sent by
                        the PUBLIC ORGANIZATION via e-mail. On the basis of the received Order and the agreed
                        conditions, the PUBLIC ORGANIZATION ships the Goods to the BENEFACTOR.<br/><br/>

                        The collection of voluntary charitable donations continues until the PUBLIC ORGANIZATION is
                        liquidated, unless another period is determined by the PUBLIC ORGANIZATION.<br/>
                    </p>
                </div>

                <h5 className={s.title}>3. Price of the GOODS</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        3.1. Prices in the online store are indicated in UAH per unit of GOODS.
                    </p>
                    <p className={s.text}>
                        3.2. Tariffs for the provision of services for delivery, loading and unloading, lifting the
                        GOODS are indicated in the online store for each unit of GOODS, depending on its
                        characteristics.
                    </p>
                    <p className={s.text}>
                        3.3. In case of an incorrectly indicated price, the PUBLIC ORGANIZATION undertakes to inform the
                        Benefactor as soon as possible. If it is impossible to contact the Benefactor, the Order is
                        considered canceled.
                    </p>
                    <p className={s.text}>
                        3.4. The PUBLIC ORGANIZATION reserves the right to change prices unilaterally. At the same time,
                        the price of the GOODS paid by the Benefactor cannot be changed.
                    </p>
                    <p className={s.text}>
                        3.5. All expenses related to the transferring of charitable money transfer are borne by the
                        BENEFACTOR.
                    </p>
                </div>

                <h5 className={s.title}>4. Payment for the GOODS</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        4.1. In the case of cash payment, the BENEFACTOR is obliged to pay the PUBLIC ORGANIZATION a
                        charitable money transfer in the amount of the price of the GOODS at the time of its transfer,
                        and the PUBLIC ORGANIZATION is obliged to provide the BENEFACTOR with a cash or sales receipt,
                        or other document confirming the fact of making a charitable money transfer in exchange for the
                        GOODS.
                    </p>
                    <p className={s.text}>
                        4.2. The total cost of the Order consists of the GOODS' price in the online store and the
                        delivery price.
                    </p>
                    <p className={s.text}>
                        4.3. The BENEFACTOR makes a voluntary charitable donation in any way selected in the online
                        store.
                    </p>
                    <p className={s.text}>
                        4.4. In the case of a non-cash form of making a charitable monetary donation, the obligation of
                        the Benefactor to pay the price of the GOODS is considered fulfilled from the moment the funds
                        are received to the account of the Public Organization in the amount of 100% (one hundred
                        percent) of the prepayment.
                    </p>
                    <p className={s.text}>
                        4.5. With a non-cash form of making charitable funds transfer in exchange for the Goods, the
                        Benefactor's delay in payment of the price of the GOODS for a period of more than 3 (three) days
                        is a significant violation of this Agreement. In this case, the PUBLIC ORGANIZATION has the
                        right to unilaterally, without the application of penalties to the Benefactor, refuse to execute
                        this Agreement, notifying the Benefactor about it.
                    </p>
                    <p className={s.text}>
                        4.6. GOODS are supplied to the BENEFACTOR at prices, names, in quantities corresponding to the
                        BENEFACTOR’S ORDER.
                    </p>
                </div>

                <h5 className={s.title}>5. Delivery of the GOODS</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        5.1. The PUBLIC ORGANIZATION delivers the GOODS using its own or external delivery service.
                    </p>
                    <p className={s.text}>
                        5.2. The exact cost of delivery of the GOODS is determined by the manager of the PUBLIC
                        ORGANIZATION when placing the Order and cannot be changed after the Order has been agreed with
                        the Benefactor.
                    </p>
                    <p className={s.text}>
                        5.3. Delivery costs may vary depending on the weight, size of the GOODS, as well as the region
                        and method of delivery.
                    </p>
                    <p className={s.text}>
                        5.4. When transferring the GOODS to the BENEFACTOR, a representative of the delivery service has
                        the right to demand a document proving the identity of the benefactor in order to counter fraud.
                    </p>
                    <p className={s.text}>
                        5.5. The PUBLIC ORGANIZATION undertakes to make every effort to deliver the GOODS ordered by the
                        Benefactor within the time frame indicated on the Site. However, the PUBLIC ORGANIZATION does
                        not assume responsibility for delays that have occurred through no fault of the PUBLIC
                        ORGANIZATION.
                    </p>
                    <p className={s.text}>
                        5.6. Ownership of the PRODUCT and all risks associated with the right of ownership pass to the
                        BENEFACTOR at the time of receipt of the GOODS by the BENEFACTOR, which is confirmed by the
                        BENEFACTOR'S signature in the shipping documents confirming delivery.
                    </p>
                    <p className={s.text}>
                        5.7. In case of a change in the delivery time, the PUBLIC ORGANIZATION undertakes to immediately
                        inform the BENEFACTOR about the change in the delivery conditions in order to obtain consent to
                        the new conditions for the execution of the Order. The PUBLIC ORGANIZATION informs the
                        BENEFACTOR by telephone or electronic communication.
                    </p>
                    <p className={s.text}>
                        5.8. Delivery of the GOODS to the BENEFACTOR is carried out at the address and within the terms
                        agreed by the BENEFACTOR and the PUBLIC ORGANIZATION'S manager when placing the ORDER.
                    </p>
                    <p className={s.text}>
                        5.9. The failure to appear of the benefactor or failure to perform other necessary actions to
                        accept the GOODS may be considered by the PUBLIC ORGANIZATION as the BENEFACTOR’S refusal to
                        perform the Agreement.
                    </p>
                </div>

                <h5 className={s.title}>6. Rights and obligations of the parties</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>6.1. The PUBLIC ORGANIZATION undertakes:</b> <br/>
                    </p>
                    <p className={s.text}>
                        6.1.1. Prior to the conclusion of the Agreement, provide the BENEFACTOR on the website of the
                        online store with information about the main consumer properties of the GOODS, about the address
                        (location) of the PUBLIC ORGANIZATION, about the manufacturer of the GOODS, about the full
                        corporate name of the PUBLIC ORGANIZATION, about the terms of transfer of the GOODS in exchange
                        for a voluntary charitable donation, about its delivery, expiration date, storage rules, the
                        procedure for making voluntary charitable donations in the amount of the price of the GOODS, as
                        well as the period during which the proposal to conclude an Agreement is valid.
                    </p>
                    <p className={s.text}>
                        6.1.2. Do not disclose any personal information of the BENEFACTOR and do not provide access to
                        this information to third parties, except as provided by Ukrainian law.
                    </p>
                    <p className={s.text}>
                        6.1.3. To provide the BENEFACTOR with the opportunity to receive free telephone consultations by
                        the phones indicated on the Website of the Internet store. The scope of consultations is limited
                        to specific issues related to the implementation of the ORDER.
                    </p>
                    <p className={s.text}>
                        6.1.4. Receive voluntary charitable donations and use them to achieve the goals, objectives,
                        directions and types of statutory activities of the Public Organization in accordance with the
                        Agreement and the Law of Ukraine "On Charitable Activities and Charitable Organizations".
                    </p>
                    <p className={s.text}>
                        6.1.5. At the request of the BENEFACTOR, provide a report on the received voluntary charitable
                        donation and its use.
                    </p>
                    <p className={s.text}>
                        6.1.6. The PUBLIC ORGANIZATION reserves the right to unilaterally amend this AGREEMENT until the
                        moment of its conclusion.
                    </p>
                    <p className={s.text}>
                        <b>6.2. The Buyer undertakes:</b> <br/>
                    </p>
                    <p className={s.text}>
                        6.2.1. Before the conclusion of the Agreement, see the content of the Offer Agreement, the terms
                        of transfer of voluntary charitable donation in the amount of the price of the Goods and
                        delivery on the Website of the Internet store.
                    </p>
                    <p className={s.text}>
                        6.2.2. Provide accurate information about yourself (name, contact numbers, email address) and
                        details for the delivery of the GOODS.
                    </p>
                    <p className={s.text}>
                        6.2.3. Accept GOODS and make a voluntary charitable donation in the amount of the price of the
                        Goods within the terms specified in this AGREEMENT.
                    </p>
                </div>

                <h5 className={s.title}>7. Responsibility of the Parties and Dispute Resolution</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        7.1. The parties are responsible for the non-performance or improper performance of this
                        Agreement in accordance with the terms outlined in this Agreement and the current legislation of
                        Ukraine.
                    </p>
                    <p className={s.text}>
                        7.2. The Public Organization is not responsible for the delivery of the Order if the Benefactor
                        provides an incorrect delivery address.
                    </p>
                    <p className={s.text}>
                        7.3. The PUBLIC ORGANIZATION is not liable if the BENEFACTOR'S expectations about the consumer
                        properties of the GOODS were not met.
                    </p>
                    <p className={s.text}>
                        7.4. The Benefactor, when placing the Order, is responsible for the accuracy of the information
                        provided about himself, and also confirms that he is familiar and agrees with the terms of this
                        Agreement.
                    </p>
                    <p className={s.text}>
                        7.5. The PUBLIC ORGANIZATION is not responsible for the inability to service the BENEFACTOR for
                        any reasons beyond its control, including disruption of communication lines, equipment
                        malfunction, failure to fulfill the obligations of the suppliers of certain services.
                    </p>
                    <p className={s.text}>
                        7.6. If, for any reason, the PUBLIC ORGANIZATION does not ship the goods to the Benefactor or
                        ship the GOODS out of time, the liability of the PUBLIC ORGANIZATION for the violation of the
                        Offer Agreement is limited solely to the extension of the delivery time of the Goods.
                    </p>
                    <p className={s.text}>
                        7.7. The PUBLIC ORGANIZATION shall under no circumstances be liable under the Offer Agreement
                        for: a) any actions and / or omissions that are a direct or indirect result of the actions /
                        omissions of any third parties; b) any consequential losses and / or lost profits of the
                        Benefactor and / or third parties, regardless of whether the PUBLIC ORGANIZATION could have
                        foreseen the possibility of such losses or not; c) use (impossibility of use) and any
                        consequences of the use (impossibility of use) by the Benefactor of the form of payment chosen
                        by him for the GOODS under the Offer Agreement.
                    </p>
                    <p className={s.text}>
                        7.8. The aggregate liability of the Public Organization under the Offer Agreement, for any claim
                        or claim under the Offer Agreement or its execution, is limited to the amount of payment paid by
                        the Benefactor to the PUBLIC ORGANIZATION under the Offer Agreement.
                    </p>
                    <p className={s.text}>
                        7.9. Without conflicting with the above, the PUBLIC ORGANIZATION is released of liability for
                        violation of the terms of the Offer Agreement if such violation is caused by force majeure
                        circumstances (force majeure), including: actions of state authorities, fire, flood, earthquake,
                        other acts of nature, absence of electricity and / or computer network failures, strikes, civil
                        disturbances, riots, any other circumstances, not limited to the above, that may affect the
                        PUBLIC ORGANIZATION'S performance of the Offer Agreement.
                    </p>
                    <p className={s.text}>
                        7.10. All disputes and disagreements arising from the performance by the Parties of their
                        obligations under this Agreement shall be resolved through negotiations. If it is impossible to
                        eliminate them, the PARTIES have the right to apply for judicial protection of their interests.
                    </p>
                </div>

                <h5 className={s.title}>8. Повернення і обмін товару8. Goods return and exchange</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        8.1. The GOODS received by the Benefactor from the PUBLIC ORGANIZATION in exchange for a
                        voluntary charitable donation cannot be exchanged or returned.
                    </p>
                    <p className={s.text}>
                        8.2. Donation is voluntary and non-refundable.
                    </p>

                </div>

                <h5 className={s.title}>9. Force majeure circumstances</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        9.1. The parties are exempt from liability for non-performance or improper performance of
                        obligations under the Agreement during the period of force majeure. Force majeure refers to
                        extraordinary and insurmountable circumstances that hinder the performance of obligations by the
                        parties under this Agreement. These include natural disasters (earthquakes, floods, etc.),
                        societal circumstances (war, states of emergency, major strikes, epidemics, etc.), prohibitive
                        measures of state authorities (transportation bans, currency restrictions, international
                        sanctions, trade bans, etc.). During this time, the PARTIES have no mutual claims, and each
                        party assumes the risk of the consequences of force majeure circumstances.
                    </p>
                </div>

                <h5 className={s.title}>10. Duration of the contract</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        10.1. This Agreement enters into force from the moment the Benefactor contacts the online store
                        and makes an ORDER by making a voluntary charitable donation in exchange for the Goods, and ends
                        when the Parties fully fulfill their obligations.
                    </p>
                </div>

                <h5 className={s.title}>11. Personal data</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        11.1. The PUBLIC ORGANIZATION collects and processes the personal data of the BENEFACTORS
                        (namely: surname, name, patronymic/middle name; delivery address; contact phone number) in order
                        to: - Fulfill the terms of this Agreement; - Deliver the ordered Goods to the Benefactor.
                    </p>
                    <p className={s.text}>
                        11.2. By ordering the GOODS in the online store, the Benefactor consents to the collection and
                        processing of his personal data in order to deliver the ordered GOODS and fulfill the terms of
                        this Agreement.
                    </p>
                    <p className={s.text}>
                        11.3. When collecting and processing personal data of BENEFACTORS, the PUBLIC ORGANIZATION does
                        not pursue other goals, except for those established in clause 11.1 of this Agreement.
                    </p>
                    <p className={s.text}>
                        11.4. Only persons directly involved in the execution of ORDERS have access to personal data of
                        BENEFACTORS.
                    </p>
                    <p className={s.text}>
                        11.5. Information about the BENEFACTOR can be transferred to the official authorities strictly
                        in accordance with the requirements of the legislation of Ukraine.
                    </p>
                    <p className={s.text}>
                        11.6. The PUBLIC ORGANIZATION has the right to send advertising or information messages to the
                        BENEFACTOR. The Benefactor has the right to refuse advertising and informational messages by
                        sending a written notice to the PUBLIC ORGANIZATION.
                    </p>
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

export default ContractOfferUA;
