import React from 'react'

export default function FlexContainer({className, centreHorizontal, centreVertical, flexDirection, children, ...props}) {
    className = "container"
    className = centreHorizontal ? `${className} container-center-horizontal` : className;
    className = centreVertical ? `${className} container-center-vertical` : className;
    className = flexDirection === 'column' ? `${className} container-column` : className;
    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}
