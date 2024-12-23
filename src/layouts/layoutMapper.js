import React from "react";

const layoutMapper = (LayoutComponent) => (WrappedComponent) => {
    return (props) => (
        <LayoutComponent>
            <WrappedComponent {...props} />
        </LayoutComponent>
    );
};

export default layoutMapper;
