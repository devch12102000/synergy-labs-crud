import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: {},
        info: {},
    };

    processError = () => {
        this.setState({
            hasError: false,
            error: {},
            info: {},
        })
    };

    componentDidCatch(error = {}, info = {}) {
        this.setState({
            hasError: true,
            error,
            info,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    Something went wrong
                </div>
            );
        }

        return this.props.children;
    }
}