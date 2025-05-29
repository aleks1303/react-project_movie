import type {IProduction_companies} from "../../models/IMovies/IProduction_companies.ts";
import type {FC} from "react";

type PropsCompanyType = {
    company: IProduction_companies
}

const CompanyComponent: FC<PropsCompanyType> = ({company}) => {
    return (
        <span className={'mr-2'}>
            {company.name};
        </span>
    );
};

export default CompanyComponent;