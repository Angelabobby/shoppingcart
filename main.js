const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-09',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《编程艺术》',
                date: '2006-02',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-03',
                price: 99.00,
                count: 1
            }
        ]
    },

    filters: {
        // 定义格式化展示价格的过滤器filters
        showPrice(price) {
            return '¥' + price.toFixed(2);
        }
    },

    methods: {
        // 减少商品数量
        decrement(index) {
            this.books[index].count--;
        },
        // 增加商品数量
        increment(index) {
            this.books[index].count++;
        },
        // 移除商品，通过books数组的spice方法实现
        removeItem(index) {
            this.books.splice(index, 1);
        }
    },

    computed: {
        // 定义总价的计算属性computed
        totalPrice() {
            let result = 0;
            for(let i = 0; i < this.books.length; i++) {
                result += this.books[i].price * this.books[i].count;
            }
            return result;
        }
    }
})