import type {ISpoken_language} from "../../models/IMovies/ISpoken_language.ts";
import {type FC} from "react";

type PropsLanguageType = {
    language: ISpoken_language
}

const LanguageComponent: FC<PropsLanguageType> = ({language}) => {
    return (
        <span className={'mr-2'}>
            {language.name};

</span>
    );
};

export default LanguageComponent;