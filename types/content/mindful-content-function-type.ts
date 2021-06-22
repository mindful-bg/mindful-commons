export enum MindfulContentFunctionType {
    CONNECTING = 'svyrzvasht',
    STRUCTURING = 'strukturirasht'
}

export const getMindfulFunctionViewValue = (funciton: MindfulContentFunctionType) => {
    switch(funciton) {
        case(MindfulContentFunctionType.CONNECTING): {
            return 'Свързваща'
        }
        case(MindfulContentFunctionType.STRUCTURING): {
            return 'Структурираща'
        }
    }
}