import css from './ImageCard.module.css';

export default function ImageCard({ small, alt_description, openModal }) {

    return (
        <div>
          <img className={css.card}
            src={small}
            alt={alt_description}
            onClick={openModal}
           />
        </div>
      );
    }
    
