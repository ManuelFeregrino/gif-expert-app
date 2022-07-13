import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (value) => {
        console.log('onAddCategory', value);
        if (categories.includes(value)) return;

        setCategories([value, ...categories]);
    };

    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory aria-label="textbox"
            // setCategories={setCategories}
            onNewCategory={(value) => onAddCategory(value)}
        />

        {/* Listado de Gifs */}
        {
            categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))
        }

    </>
    )
}
