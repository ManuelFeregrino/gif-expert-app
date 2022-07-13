import { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault(); // Evita que el componente se vuelva a recargar
        const newValue = inputValue.trim();
        if (newValue.length <= 1) return;

        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(newValue);
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit } aria-label="form">

            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onChange }
            />

        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
