import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    static getDerivedStateFromError(error) {
        return { error: true };
    }
    render() {
        if (this.state.error) {
            return <h4>Something went wrong. Please try again.</h4>;
        }

        return this.props.children;
    }
}