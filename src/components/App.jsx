import { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import fetchImages from "../services/unsplash";
import { toast } from "react-hot-toast";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

export default function App() {

    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isNotLastPage, setIsNotLastPage] = useState(false);

    useEffect(() => {

        const getArticlesData = async () => {
        try {
            
            if (query === '') return;
            
            setIsError(false);
            setIsLoading(true);
            const { total_pages, results } = await fetchImages(query, page);
            if(page === total_pages) {
                setIsNotLastPage(false);
            }
            else {
                setIsNotLastPage(true);
            }

            if (total_pages === 0) {
                toast.error('No results were found for your query!');
            }
            else {
                if (page === 1) {
                    setArticles(results);
                }
                else {
                    setArticles((art) => [...art, ...results]);
                }
            }
        } catch {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
        };
        
    getArticlesData();
    }, [query, page]);

    const request = (newQuery) => {
        if(query === newQuery) return;
        setQuery(newQuery);
        setPage(1);
    };

    const isLoadImages = () => {
        return articles.length > 0;
    }

    const handleLoadMore = () => {
        setPage((page) => page + 1);
    };

    return (
        <>
            <SearchBar request={request} />
            {isError ? <ErrorMessage /> :
                <>
                    <ImageGallery images={articles} />
                    {isLoading ? <Loader /> :
                        isNotLastPage &&
                        isLoadImages() &&
                        <LoadMoreBtn onLoadMore={handleLoadMore} />
                    }
                </>
            }
        </>
    );
}
