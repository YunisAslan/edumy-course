import React from 'react'

const CustomRadioBox = ({radio_title, selectedOption, handleOptionChange}) => {

    // const [selectedOption, setSelectedOption] = useState('');

    // const handleOptionChange = (e) => {
    //     setSelectedOption(e.target.value);
    // };

    return (
        <>
            <div className="radio-box">
                <label> 
                    <input
                        type="radio"
                        value={radio_title}
                        checked={selectedOption === radio_title}
                        onChange={handleOptionChange}
                    />
                    <span>{radio_title}</span>
                </label>
            </div>
        </>
    )
}

export default CustomRadioBox