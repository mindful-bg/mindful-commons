import { GetContentDto } from "./get-content.dto";
import { Series } from "./series.entity";

export declare class GetSeriesDto extends Series {
    content: GetContentDto;
}