import React, { Component } from "react";
import style from "./errorBoundary.module.css";

const ErrorBoundaryFallbackComponent = () => {
    const { container, message } = style;
    return (<div className={container}>
        <div className={message}>
            <h2>
                Hey, something went wrong! .. Please refresh!
                <span role="img" aria-label="face-emoji">
                    {" "}
                    😞
                </span>
            </h2>
        </div>
    </div>)
}
    ;

class ErrorBoundary extends Component {
    state = {
        error: null,
        info: null
    };

    componentDidCatch(error, info) {
        this.setState({ error, info });
    }

    render() {
        const { error } = this.state;

        if (error) {
            return <ErrorBoundaryFallbackComponent />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
