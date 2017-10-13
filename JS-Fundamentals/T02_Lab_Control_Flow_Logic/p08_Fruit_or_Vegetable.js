/**
 * Created by PC on 28.5.2017 г..
 */
function food(word) {

    switch (word) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'parsley':
        case 'garlic':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
    }
}
