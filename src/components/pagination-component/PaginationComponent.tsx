import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
const [query, setQuery] = useSearchParams({page: '1'});
    return (
        <div>
            <button></button>
            <button></button>
        </div>
    );
};

export default PaginationComponent;