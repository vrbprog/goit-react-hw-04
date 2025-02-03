import SearchBar from "./SearchBar/SearchBar";

export default function App() {
    const request = (query) => {
        console.log(query);
    };

    return <SearchBar request={request} />;
}
