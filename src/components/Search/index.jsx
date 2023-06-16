import { useCallback, useContext, useState } from "react"
import styles from "./Search.module.scss"
import { SearchContext } from "../../App"
import debounce from "lodash.debounce"

const Search = () => {
    const { setSearchValue } = useContext(SearchContext)
    const [value, setValue] = useState('')

    const changeDebounce = useCallback(
        debounce((str) => {
            console.log(str)
            setSearchValue(str)
        }, 1000),
        [],
    )

    const onChangeInput = (str) => {
        setValue(str)
        changeDebounce(str)
    }

    return (
        <input
            className={styles.root}
            type="text"
            placeholder="Search by name"
            onChange={(e) => onChangeInput(e.target.value)}
            value={value}
        />
    )
}

export default Search