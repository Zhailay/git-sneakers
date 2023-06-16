import SneakerBlock from '../components/SneakerBlock/SneakerBlock';
import Skeleton from '../components/SneakerBlock/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import { useContext, useEffect, useState } from "react"
import Pagination from '../components/Pagination/Index';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from "react-redux";
import { setCategotyId, setCurrentPage } from '../redux/slices/filterSlice';
import axios from 'axios';
import qs from 'qs'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchValue } = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const { categoryId, sort, currentPage } = useSelector(state => state.filter);

    const onClickCategory = (id) => {
        dispatch(setCategotyId(id));
    };

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    };

    useEffect(() => {
        if (window.location.search) {
        }
    }, []);

    useEffect(() => {
        setIsloading(true);
        axios.get(`https://6474cf957de100807b1bcc4f.mockapi.io/items?limit=4&page=${currentPage}${categoryId > 0 ? `&category=${categoryId}` : ``}&sortBy=${sort.sort}&search=${searchValue}`).then(res => {
            setItems(res.data);
            setIsloading(false);
        });
    }, [categoryId, sort, searchValue, currentPage]);

    useEffect(() => {
        const queryString = qs.stringify({
            sort: sort.sort,
            categoryId,
            currentPage,
        });

        navigate(`?${queryString}`);
    }, [categoryId, sort, searchValue, currentPage, navigate]);

    const handleSneakerClick = (id) => {
        navigate(`/${id}`);
    };

    const sneakers = items.map((obj) => (
        <Link key={obj.id} to={`/${obj.id}`}>
            <SneakerBlock {...obj} onClick={() => handleSneakerClick(obj.id)} />
        </Link>
    ));

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Sneakers</h2>
            <div className="content__items">
                {isLoading ? [...new Array(4)].map((_, i) => <Skeleton key={i} />) : sneakers}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={onChangePage} />
        </div>
    );
};

export default Home;
