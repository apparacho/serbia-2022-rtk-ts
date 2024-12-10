import React from 'react';

export type AdditionalState = {
    data: Array<string>;
    x: number;
    y: string
}

export type WrapperProps = {
    onChange: () => void;
    data: AdditionalState;
}

export const withAdditionalState = <P extends object> (Component: React.ComponentType<P>) => {
    return class extends React.Component<P & AdditionalState> {
        constructor(props: P & AdditionalState) {
            super(props);
            const { data, x, y } = props;
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data,
                x,
                y
            };
        }

        handleChange() {
            this.setState({
                data: ['aaaa1', 'bbbb2', 'bbbbb3'],
                x: 0,
                y: 'yyyy225'
            })
        }

        render() {
            const { data, x, y, ...restProps } = this.props;
            return <Component
                onChange={() => this.handleChange()}
                data={this.state}
                {...restProps as P}
            />
        }
    }
}