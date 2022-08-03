import React, { createRef } from "react";
import styles from "./search.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const handleSearch = (event) => {
        event.preventDefault();
        const targetData = inputRef.current.value;
        // console.log(targetData);
        targetData && props.handleSearch(targetData);
        formRef.current.reset();
    };

    return (
        <form
            ref={formRef}
            className={styles.searchForm}
            onSubmit={handleSearch}
        >
            <input
                ref={inputRef}
                type='text'
                placeholder='Search..'
                className={styles.searchInput}
            />
            <button>
                <AiOutlineSearch size='30px' />
            </button>
        </form>
    );
};

export default Search;
