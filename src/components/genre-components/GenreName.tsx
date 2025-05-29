import type {FC} from "react";

type GenreNameType = {
    name: string
}
const GenreName: FC<GenreNameType> = ({name}) => {
    return (
        <span className={'pr-2'}>{name}</span>
    );
};

export default GenreName;