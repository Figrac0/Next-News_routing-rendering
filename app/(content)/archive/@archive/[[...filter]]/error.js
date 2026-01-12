"use client";

function FilterError({ error }) {
    return (
        <div id="error">
            <h2>An error occurre</h2>
            <p>{error.message}</p>
        </div>
    );
}

export default FilterError;
