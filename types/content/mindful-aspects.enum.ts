export enum MindfulAspects {
    ENVIRONMENT = 'zaobikalyasht-svyat',
    BODY_AND_EMOTION = 'tyalo-i-emocii',
    THOUGHTS = 'misli',
    RELATIONSHIPS = 'vzaimootnosheniya',
    SPIRITUALITY = 'duhovnost'
}

export const getMindfulAspectViewValue = (aspect: MindfulAspects) => {
    switch(aspect) {
        case(MindfulAspects.ENVIRONMENT): {
            return 'Заобикалящ свят'
        }
        case(MindfulAspects.BODY_AND_EMOTION): {
            return 'Тяло и емоции'
        }
        case(MindfulAspects.THOUGHTS): {
            return 'Мисли'
        }
        case(MindfulAspects.RELATIONSHIPS): {
            return 'Взаимоотношения'
        }
        case(MindfulAspects.SPIRITUALITY): {
            return 'Духовност'
        }
    }
}