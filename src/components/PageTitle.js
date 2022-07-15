import React, {Fragment, useEffect} from 'react';

const PageTitle = (props) => {

    useEffect(() => {
        document.title = props.title
        window.scrollTo(0, 0);

    }, [])

    return (
        <Fragment title={props.title}>
            {props.children}
        </Fragment>
    );
};

export default PageTitle;