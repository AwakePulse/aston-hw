import React from 'react';

const PostLengthFilter = ({children, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {children}
        </select>
    );
};

PostLengthFilter.Option = ({value, children}) => {
    return <option key={value} value={value}>{children}</option>
}

export default PostLengthFilter;