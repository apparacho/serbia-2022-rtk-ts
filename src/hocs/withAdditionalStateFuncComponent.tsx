import React, { useState } from 'react';

export type AdditionalState = {
    data: Array<string>;
    x: number;
    y: string
}

export type WrapperProps = {
    onChange: () => void;
    data: AdditionalState;
}

export const withAdditionalStateFuncComponent = <P extends object> (Component: React.ComponentType<P>) => {
    return (props: P & AdditionalState) => {
        const { data, x, y, ...restProps } = props;
        const [allData, setAllData] = useState({ data, x, y });

        console.log(data, x, y, '1312312');

        const handleChange = () => {
            setAllData({
                data: ['aaaa1', 'bbbb2', 'bbbbb3'],
                x: 0,
                y: 'yyyy225'
            })
        }

        return <Component
            onChange={handleChange}
            data={allData}
            {...restProps as P}
        />;
    }
}