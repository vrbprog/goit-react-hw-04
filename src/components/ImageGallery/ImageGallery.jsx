import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
    return (
        <ul className={s.imageGallery}>
            {images.map(({ alt_description, id, urls: { small, regular } }) => (
                <li key={id}>
                    <ImageCard
                        small={small}
                        regular={regular}
                        alt_description={alt_description}
                    />
                </li>
            ))}
        </ul>
    );
}


