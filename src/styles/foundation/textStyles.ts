import { ThemeOverride } from '@chakra-ui/react'

const textStyles: ThemeOverride['textStyles'] = {
    'sub-nav-item': {
        fontFamily: 'Alumni Sans',
        fontStyle: 'cursive',
        fontSize: 'xl'
    },
    'item-name': {
        fontFamily: 'Bad Script',
        fontSize: 'lg',
        fontWeight: 'bold'
    },
    'item-brand': {
        fontFamily: 'Alumni Sans',
        fontSize: 'xl',
        fontWeight: 'light',
        marginBottom: '5px'
    },
    'card-nav-header': {
        fontFamily: 'Bad Script',
        fontSize: 'xl',
        fontWeight: 'Bold',
    },
    'card-nav-item': {
        fontFamily: 'Alumni Sans',
        fontSize: 'xl',
        fontWeight: '600',
    }
}

export default textStyles
