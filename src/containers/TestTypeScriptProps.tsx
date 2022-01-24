import React from 'react';
interface Data {
    hello: string;
    year: number;
    count: number;
    increment: () => void;
}

interface DataType {
    data: Data;
}

const TestTypeScriptProps: React.FC<DataType> = ({ data }) => {
    return (
        <div>
            <p>{data.hello}</p>
        </div>
    );
};

export default TestTypeScriptProps;
