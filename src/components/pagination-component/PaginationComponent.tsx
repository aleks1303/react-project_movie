import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const genre = query.get('genre');
    const numberPage = Number(page);
    const totalPage = 500

    // const onClickPrev = () => {
    //     if (page) {
    //         let currencyPage = Number(page)
    //         currencyPage--
    //         setQuery({page: currencyPage.toString()})
    //     }
    // }
    // const onClickNext = () => {
    //     if (page) {
    //         let currencyPage = Number(page)
    //         currencyPage++
    //         setQuery({page: currencyPage.toString()})
    //     }
    // }
    const onClickPrev = () => {
        if (page) {
            const currentPage = Number(page);
            const newPage = currentPage - 1;

            const newParams: Record<string, string> = {
                page: newPage.toString(),
            };

            if (genre) newParams.genre = genre;

            setQuery(newParams);
        }
    };

    const onClickNext = () => {
        if (page) {
            const currentPage = Number(page);
            const newPage = currentPage + 1;

            const newParams: Record<string, string> = {
                page: newPage.toString(),
            };

            if (genre) newParams.genre = genre;

            setQuery(newParams);
        }
    };
    const buttonClass = 'border-1 w-15 m-2';
    const buttonClassDisabled = 'opacity-30 cursor-not-allowed'
    return (
        <div>
            <button className={`${buttonClass} ${numberPage <= 1 ? buttonClassDisabled : ''}`} disabled={numberPage <= 1 } onClick={onClickPrev}>prev</button>
            <button className={`${buttonClass} ${numberPage >= totalPage ? buttonClassDisabled : ''}`} disabled={numberPage >= totalPage} onClick={onClickNext}>next</button>
        </div>
    );
};

export default PaginationComponent;

