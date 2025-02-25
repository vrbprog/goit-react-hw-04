import css from './ImageCard.module.css';

export default function ImageCard({ small, alt_description, onImageClick }) {

    return (
        <div>
          <img className={css.card}
            src={small}
            alt={alt_description}
           />
        </div>
      );
    }
    
