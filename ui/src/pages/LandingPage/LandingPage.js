import { useTranslation } from "react-i18next";
import React from "react";

export default () => {

    const { t } = useTranslation();

    return (
        <>
            <h1>{t('hello')}</h1>
        </>
    )
}