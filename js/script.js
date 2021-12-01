function counter() {
    let arg = 0;
    let counterStatistic = {
        increase: 0,
        decrease: 0,
        get: 0,
        getStatistic: 0
    }

    const func = {
        increase(num) {
            counterStatistic.increase++
            return arg += num;
        },
        decrease(num) {
            counterStatistic.decrease++
            return arg -= num;
        },
        get(num) {
            counterStatistic.get++
            return arg;
        },
        getStatistic(num) {
            counterStatistic.getStatistic++
            return counterStatistic;
        }
    }

    return func;
}

const counterInst = counter();
counterInst.increase(25);
counterInst.decrease(10);
console.log(counterInst.get());
console.log(counterInst.getStatistic());


