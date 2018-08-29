import React from 'react';
import {Link} from 'react-router';

const MissingPage = ({list, activeItemId}) => (
    <div>
        <h2>Oops the page is missing</h2>
        <p>Try to <Link to="/">go home</Link>.</p>
    </div>
);

export default MissingPage;