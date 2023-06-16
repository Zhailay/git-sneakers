import ReactPaginate from 'react-paginate';
import styles from "./Pagination.module.scss"
const Pagination = ({setCurrentPage,currentPage}) => {

    return(
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e)=>setCurrentPage(e.selected+1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        forcePage={currentPage-1}
        renderOnZeroPageCount={null}
    />
    )
}

export default Pagination