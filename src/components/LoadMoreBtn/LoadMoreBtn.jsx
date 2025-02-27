import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoadMore }) {
    return (
        <div className={css.buttonWrapper}>
            <button className={css.moreButton} type="button" onClick={onLoadMore}>
                Load more
            </button>
        </div>
    );
    
};
