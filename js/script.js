(function () {

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
            get() {
                counterStatistic.get++
                return arg;
            },
            getStatistic() {
                counterStatistic.getStatistic++
                return counterStatistic;
            },
            zero() {
                counterStatistic.increase = 0;
                counterStatistic.decrease = 0;
                counterStatistic.get = 0;
                counterStatistic.getStatistic = 0;
            }
        }

        return func;
    }

    const counterInst = counter();
    counterInst.increase(25);
    counterInst.decrease(10);
    console.log(counterInst.get());
    console.log(counterInst.getStatistic());
})()



