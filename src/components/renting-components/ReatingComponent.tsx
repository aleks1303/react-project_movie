import {Star} from "lucide-react";
import type {FC} from "react";

type Props = {
    item: number;
};

const StarsRating: FC<Props> = ({item}) => {
    const starsCount = Math.round(item);

    return (
        <span className="flex items-center gap-1 text-yellow-400">
            {Array.from({length: 10}).map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < starsCount ? "fill-yellow-400" : "fill-gray-300"}`}
                />
            ))}
            <span className="text-sm text-gray-400 ml-2">{item.toFixed(1)}</span>
        </span>
    );
};

export default StarsRating;