import { useEffect, useState } from "react";
import { getMe, getSupportContacts } from "./mock";
import { SupportContact } from "./types";
import './styles.css';

export const OrmcoMainComponent = () => {
    const [region, setRegion] = useState("");
    const [contacts, setContacts] = useState<SupportContact | null>(null);

    useEffect(() => {
        Promise.all([getMe(), getSupportContacts()]).then(
            ([regionData, contactsData]) => {
                console.log(regionData, contactsData);
                setRegion(regionData.region);
                setContacts(regionData.region === "EUROPE" ? contactsData : {});
            }
        );
    }, []);


    return (
        <div className="ormco-main-container">
            <div>
                <a target="_blank" rel="noreferrer" href="https://disk.yandex.ru/i/waUOOQNWxVBtsA">
                    Условие задачиcdwcvwdcwd
                </a>
            </div>

            <div>user location: {region}</div>

            <div>
                <h5>contacts:</h5>
                <ul>
                    {contacts &&
                        Object.entries(contacts).map(([key, value]) => (
                            <li key={key}>
                                {key}
                                <ul>
                                    <li>phone: {value.phone}</li>
                                    <li>address: {value.address}</li>
                                </ul>
                            </li>
                        ))}

                    {contacts &&
                        (Object.keys(contacts) as (keyof SupportContact)[]).map(key => (
                            <li key={key}>
                                {key}
                                <ul>
                                    <li>phone: {contacts[key]?.phone}</li>
                                    <li>address: {contacts[key]?.address}</li>
                                </ul>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};
