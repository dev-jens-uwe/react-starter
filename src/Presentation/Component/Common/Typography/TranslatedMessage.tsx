import React from 'react';
import { FormattedMessage } from 'react-intl';
import type { en_US } from '../../../Translation/Resources/en_US';

interface IProps {
    id: keyof typeof en_US;
}

export const TranslatedMessage = ({ id }: IProps) => {
    return (
        <FormattedMessage id={id}/>
    );
};