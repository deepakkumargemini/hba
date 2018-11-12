class CountdownTimer {
    constructor() {
        this.initialize(...arguments);
    }
    initialize(tl) {
        this.tl = tl;
    }
    countDown() {
        const today = new Date();
        const day = Math.floor((this.tl - Number(today)) / (24 * 60 * 60 * 1000));
        const hour = Math.floor(((this.tl - Number(today)) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const min = Math.floor(((this.tl - Number(today)) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
        const sec = Math.floor(((this.tl - Number(today)) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
        if ((this.tl - Number(today)) > 0 || (this.tl - Number(today)) < -86400000) {
            let timer = '';
            timer += `
            <p>Soon to come vava.... Yipieee</p>
            <div class="number">
                <p>
                    <span class="number-day">${day}</span>
                    <span class="number_value">day</span>
                </p>
                <p>
                    <span class="number-hour">${this.addZero(hour)}</span>
                    <span class="number_value">hour</span>
                </p>
                <p>
                    <span class="number-min">${this.addZero(min)}</span>
                    <span class="number_value">min</span>
                </p>
                <p>
                    <span class="number-sec">${this.addZero(sec)}</span>
                    <span class="number_value">sec</span>
                </p>
            </div>`;
            document.getElementById('CDT').innerHTML = timer;
            setTimeout(() => {
                this.countDown();
            }, 10);
        } else {
            let mes = '';
            mes += `
            <p class="birth_end"> Its your birthday :)</p>
            <a class="birth_btn" href="http://amzn.asia/cti4d0v" target="_blank">
                For You
            </a>
            <a class="birth_btn" href="http://amzn.asia/8Kh4dGA" target="_blank">
                Here we go
            </a>
            `;
            document.getElementById('CDT').innerHTML = mes;
            return;
        }
    }
    addZero(num) {
        return (`0${num}`).slice(-2);
    }
}

window.onload = () => {
    const now = new Date();
    let tl = new Date(now.getFullYear(), 11, 13);
    if ((Number(tl) - Number(now)) > 0) {
        console.log('ins ')
        tl = new Date(now.getFullYear(), 10, 13);
    }
    const timer = new CountdownTimer(tl);
    timer.countDown();
};
