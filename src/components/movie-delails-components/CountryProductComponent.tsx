import type {FC} from "react";
import type {IProduction_countries} from "../../models/IMovies/IProduction_countries.ts";

type PropsProductCountryType = {
    country: IProduction_countries
}
const CountryProductComponent: FC<PropsProductCountryType> = ({country}) => {
    return (
        <span className={'mr-2'}>
          {country.name};
        </span>
    );
};

export default CountryProductComponent;