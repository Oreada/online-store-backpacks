import { ProductType } from './types/types';
import { basket, basketAmount } from './basket';
import { clearElement } from './clearElement';

export function drawCards(data: Array<ProductType>): void {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const productTemplate = document.querySelector('#productTemplate') as HTMLTemplateElement;

    data.forEach((item: ProductType): void => {
        const productClone = productTemplate.content.cloneNode(true) as HTMLElement;

        (productClone.querySelector(
            '.product__picture'
        ) as HTMLElement).innerHTML = `<img src="${item.image}" alt="Backpack" class="product__image">`;
        (productClone.querySelector('.product__price') as HTMLElement).textContent = item.price + ' MDL';
        (productClone.querySelector('.product__title') as HTMLElement).textContent = item.name;
        (productClone.querySelector('.product__volume') as HTMLElement).textContent = 'Volume: ' + item.volume + ' L';
        (productClone.querySelector('.product__weight') as HTMLElement).textContent = 'Weight: ' + item.weight + ' g';
        (productClone.querySelector('.product__storage') as HTMLElement).textContent = 'Storage: ' + item.storage;
        (productClone.querySelector('.product__popular') as HTMLElement).textContent = 'Popular: ' + item.popular;

        (productClone.querySelector('.product__box') as HTMLButtonElement).addEventListener(
            'click',
            function (event: Event) {
                const target = event.target as HTMLButtonElement;
                if (target.classList.contains('product__button_add')) {
                    basket.addProduct(item.id);
                    if (basket.isDone) {
                        target.classList.remove('active');
                        target.classList.add('inactive');
                        const removeBtn = (event.currentTarget as HTMLElement).querySelector(
                            '.product__button_remove'
                        ) as HTMLButtonElement;
                        removeBtn.classList.remove('inactive');
                        removeBtn.classList.add('active');
                    }
                } else if (target.classList.contains('product__button_remove')) {
                    basket.deleteProduct(item.id);

                    target.classList.remove('active');
                    target.classList.add('inactive');
                    const addBtn = (event.currentTarget as HTMLElement).querySelector(
                        '.product__button_add'
                    ) as HTMLButtonElement;
                    addBtn.classList.remove('inactive');
                    addBtn.classList.add('active');
                }
                basketAmount.textContent = basket.getAmount();
            }
        );

        const productCard = productClone.querySelector('.product') as HTMLElement;
        productCard.setAttribute('data-id', item.id);

        const productsInBasketId = basket.getproductIdArray();
        if (productsInBasketId.includes(item.id)) {
            const addButton = productCard.querySelector('.product__button_add') as HTMLButtonElement;
            addButton.classList.add('inactive');
            const delButton = productCard.querySelector('.product__button_remove') as HTMLButtonElement;
            delButton.classList.add('active');
        }

        fragment.append(productClone);
    });

    clearElement('.store__list'); // очистка списка товаров перед новой отрисовкой
    clearElement('.store__alert'); // очистка алерта об отсутствии подходящих товаров перед отрисовкой новых товаров
    (document.querySelector('.store__list') as HTMLElement).append(fragment);
}
