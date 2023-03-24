import React, { useState } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectBox = () => {

    const [sortValue, setSortValue] = useState('');

    const handleChange = (e) => {
        setSortValue(e.target.value);
    };

    // function getSort(data) {
    //     return data
    // }

    return (
        <>


            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Sırala</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={sortValue}
                    label="Sırala"
                    onChange={handleChange}
                >

                    <MenuItem value="">
                        <em>Heç biri</em>
                    </MenuItem>
                    <MenuItem value={10}>Artan sıra</MenuItem>
                    <MenuItem value={20}>Azalan sıra</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default SelectBox