type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';
// A opção de vazio '' serve para quandoe stiver fazendo busca nenhum dos menus ficarem selecionados

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}