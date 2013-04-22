var Konami = (function () {
    function Konami() {
        this.pos = 0;
        this.pattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        this.limit = 500;
        this.timeout = null;
    }
    Konami.prototype = {
        constructor: Konami,
        listen: function (event) {
            console.log(event, this);
            if (event.which === this.pattern[this.pos]) {
                this.pos++;
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(this.reset, this.limit);
            if (this.pos >= this.pattern.length) {
                this.reset();
                this.complete();
            }
        },
        reset: function () {
            this.pos = 0;
        },
        complete: function () {
            console.log('override this');
        }
    };
    var k = new Konami();
    document.addEventListener('keydown', k.listen.bind(k), false);
    return k;
}());