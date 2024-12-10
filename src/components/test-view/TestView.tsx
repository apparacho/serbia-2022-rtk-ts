import React from 'react';
import {WrapperProps} from "../../hocs/withAdditionalStateFuncComponent";

import { withAdditionalStateFuncComponent } from "../../hocs/withAdditionalStateFuncComponent";

import './testview.css';

type TestViewComponent = React.ComponentType<WrapperProps>;

export const TestView: TestViewComponent = React.memo((props) => {
    const { onChange, data} = props;
    return (
        <div>
            <div className={'outer'}> Test View FC </div>
            <div>
                <button onClick={() => onChange()}>Change Data</button>
            </div>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    );
});

export default React.memo(withAdditionalStateFuncComponent<any>(TestView));

