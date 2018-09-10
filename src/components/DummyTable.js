import React from 'react';

const DummyTable = ({data}) => (
    <section>
        <h1>{data.title}</h1>
        <table>
            <tbody>
            <tr>
                <td>Dummy</td>
                <td>Table</td>
            </tr>
            </tbody>
        </table>
    </section>
);

export default DummyTable;
