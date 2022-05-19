import React from 'react';
import {WrapperProps} from "../../app/hocs/withAdditionalState";

type TestViewComponent = React.ComponentType<WrapperProps>;

export const TestView: TestViewComponent = (props) => {
    const { onChange, data} = props;
    return (
        <div>
            <div>
                <button onClick={() => onChange()}>Button</button>
            </div>
            <div>
                {JSON.stringify(data)}
            </div>

        </div>
    );
}