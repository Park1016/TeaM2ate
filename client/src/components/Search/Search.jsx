import React from 'react';
import Select from 'react-select';

function Search({ data, tag, setTag }) {

    return (
        <div>
            <Select
                defaultValue={tag}
                onChange={setTag}
                isMulti={true}
                placeholder={'태그를 선택하세요'}
                options={data}
            /> 
        </div>
    );
}

export default Search;