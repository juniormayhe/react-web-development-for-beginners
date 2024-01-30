import React, { Component } from 'react';

class CustomErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        const { hasError, error } = this.state;
        const { FallbackComponent } = this.props;

        if (hasError) {
            return <FallbackComponent error={error} />;
        }

        return this.props.children;
    }
}

export default CustomErrorBoundary;
