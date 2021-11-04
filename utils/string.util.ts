import { GetContentDto } from "..";

export const getContentFullTitle = (content: GetContentDto): string => {
    const seriesTitle = content.seriesId ? content.seriesTitle + ' /' + getSeriesPartNameFromNumber(content.numberInSeries as number)+ ' част/' : '';
    return content.seriesTitle ? `${seriesTitle}${content.title ? ' - ' + content.title : ''}`: content.title;
}

export const getContentTitleWithoutSeriesName = (content: GetContentDto): string => capitalizeFirstLetter(getSeriesPartNameFromNumber(content.numberInSeries as number)) + ' част' + (content.title.trim() ? ` - ${content.title}` : '');


export const getSeriesPartNameFromNumber = (seriesNumber: number): string => {
    if(!seriesNumber) {
        return '';
    }
    switch(seriesNumber) {
        case(1):{
            return 'първа'
        }
        case(2):{
            return 'втора'
        }
        case(3):{
            return 'трета'
        }
        case(4):{
            return 'четвърта'
        }
        case(5):{
            return 'пета'
        }
        case(6):{
            return 'шеста'
        }
        case(7):{
            return 'седма'
        }
        case(8):{
            return 'осма'
        }
        default: {
            throw new Error('Не е намерено име на част. Моля, свържете се с Тани.')
        }
    }
}
export const extractLastPartFromUrl = (url: string) => {
    if(url) {
       return url.split('/')[url.split('/').length - 1];
    }
    return null;
}



function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }