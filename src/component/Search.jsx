import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from './Api';

function Search({ onSearchChange }) {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}&minPopulation=1000000`, geoApiOptions)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name},${city.countryCode}`
                        };
                    })
                };
            })
            .catch((err) => console.error(err))
    };

    const onHandleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={onHandleChange}
            loadOptions={loadOptions}
        />
    )
};
export default Search;