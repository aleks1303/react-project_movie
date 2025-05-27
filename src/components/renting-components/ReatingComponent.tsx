
import { Star } from "lucide-react";
import type {FC} from "react";

type Props = {
    item: number; // Наприклад: 7.3
};

const StarsRating: FC<Props> = ({ item }) => {
    const starsCount = Math.round(item); // бо TMDB дає від 0 до 10, а ми показуємо 5 зірок

    return (
        <span className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: 10 }).map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < starsCount ? "fill-yellow-400" : "fill-gray-300"}`}
                />
            ))}
            <span className="text-xs text-gray-600 ml-2">{item.toFixed(1)}</span>
        </span>
    );
};

export default StarsRating;