import { setLocalStorage, getLocalStorage } from './local-storage';

export class Basket {
    amountProducts = Number(getLocalStorage('amountProducts'));
    productIdArray: Array<string> = JSON.parse(getLocalStorage('productIdArray')) || [];
    isDone = false;

    getAmount() {
        return String(this.amountProducts);
    }

    setAmount(value: number) {
        this.amountProducts = value;
        setLocalStorage('amountProducts', this.getAmount());
    }

    getproductIdArray() {
        return this.productIdArray;
    }

    addProduct(productId: string) {
        if (!this.productIdArray.includes(productId)) {
            if (this.amountProducts < 20) {
                this.amountProducts += 1;
                this.productIdArray.push(productId);
                // console.log(`Added product ${productId}`);
                setLocalStorage('amountProducts', this.getAmount());
                setLocalStorage('productIdArray', JSON.stringify(this.getproductIdArray()));
                this.isDone = true;
            } else {
                this.isDone = false;
                alert('Sorry, all slots are filled');
            }
        }
    }

    deleteProduct(productId: string) {
        if (this.amountProducts > 0 && this.productIdArray.includes(productId)) {
            this.amountProducts -= 1;
            const index = this.productIdArray.indexOf(productId);
            this.productIdArray.splice(index, 1);
            // console.log(`Removed product ${productId}`);
            setLocalStorage('amountProducts', this.getAmount());
            setLocalStorage('productIdArray', JSON.stringify(this.getproductIdArray()));
        }
    }

    clearBasket() {
        this.amountProducts = 0;
        this.productIdArray.splice(0, this.productIdArray.length);
        setLocalStorage('amountProducts', this.getAmount());
        setLocalStorage('productIdArray', JSON.stringify(this.getproductIdArray()));
    }
}

//! ==================================================================================================

export const basket = new Basket();
export const basketAmount = document.querySelector('.basket__amount') as HTMLElement;
basketAmount.textContent = basket.getAmount(); // задаю корзине значение из local storage (цифра на корзине)
