class Grass {
    constructor(x, y, index) {
        this.x = x
        this.y = y
        this.index = index
        this.multiply = 0;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        // console.log(norVandak, this.multiply);
        if (norVandak && this.multiply >= 5) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }

    }
}
/*
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanarNorVandak
        var Vandak = random(this.yntrekVandak(0))
        matrix[this.y][this.x] = 0
        matris[vandak[1]][vandak[0]] = 2
        this.x = vandak[0]
        this.y = vandak[1]
    }

}
*/
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 2;
        this.multyply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    sharjvel() {
        this.energy--
        var vandak = random(this.yntrelVandak(0));

        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0]; this.y = vandak[1];
            matrix[this.y][this.x] = 2;

        }

    }

    utel() {

        var norVandak = random(this.yntrelVandak(1));

        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 2;
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++
            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }

            }
        }
        else {
            this.sharjvel();
        }
    }

    mahanal(i) {
        if (this.energy <= 0) {

            matrix[this.y][this.x] = 0;

            xotaker.splice(i, 1)

        }

    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        // console.log(norVandak, this.multiply);
        console.log(this.energy)
        if (norVandak && this.energy >= 5) {
            this.energy = 2;
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotaker.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 1;
            //this.multiply = 0;  
        }

    }
}
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 3;
        this.multyply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    sharjvel() {
        this.energy--
        var vandak = random(this.yntrelVandak(0));

        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0]; this.y = vandak[1];
            matrix[this.y][this.x] = 3;

        }

    }

    utel() {

        var norVandak = random(this.yntrelVandak(2));

        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 3;
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++
            for (var i in xotaker) {
                if (this.y == xotaker[i].y && this.x == xotaker[i].x) {
                    xotaker.splice(i, 1);
                    break;
                }

            }
        }
        else {
            this.sharjvel();
        }
    }

    mahanal(i) {
        if (this.energy <= 0) {

            matrix[this.y][this.x] = 0;

            gishatich.splice(i, 1)

        }

    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        // console.log(norVandak, this.multiply);
        console.log(this.energy)
        if (norVandak && this.energy >= 5) {
            this.energy = 2;
            var norgishatich = new Gishatich(norVandak[0], norVandak[1]);
            gishatich.push(norgishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
            //this.multiply = 0;  
        }

    }
}
class Barsegh {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 5;
        this.multyply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    sharjvel() {
        this.energy--
        var vandak = random(this.yntrelVandak(0));

        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0]; this.y = vandak[1];
            matrix[this.y][this.x] = 4;

        }

    }

    utel() {

        var norVandak = random(this.yntrelVandak(3));

        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 4;
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++
            for (var i in gishatich) {
                if (this.y == gishatich[i].y && this.x == gishatich[i].x) {
                    gishatich.splice(i, 1);
                    break;
                }

            }
        }
        else {
            this.sharjvel();
        }
    }

    mahanal(i) {
        if (this.energy <= 0) {

            matrix[this.y][this.x] = 0;

            barselo.splice(i, 1)

        }

    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        // console.log(norVandak, this.multiply);
        console.log(this.energy)
        if (norVandak && this.energy >= 5) {
            this.energy = 2;
            var norbarselo = new Barsegh(norVandak[0], norVandak[1]);
            barselo.push(norbarselo);
            matrix[norVandak[1]][norVandak[0]] = 4;
            //this.multiply = 0;  
        }

    }
}
class Haker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 5;
        this.multyply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    sharjvel() {
        this.energy--
        var vandak = random(this.yntrelVandak(0));

        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0]; this.y = vandak[1];
            matrix[this.y][this.x] = 5;

        }

    }

    utel() {

        var norVandak = random(this.yntrelVandak(4));

        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 5;
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++
            for (var i in barselo) {
                if (this.y == barselo[i].y && this.x == barselo[i].x) {
                    barselo.splice(i, 1);
                    break;
                }

            }
        }
        else {
            this.sharjvel();
        }
    }

    mahanal(i) {
        if (this.energy <= 0) {

            matrix[this.y][this.x] = 0;

            xaker.splice(i, 1)

        }

    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        // console.log(norVandak, this.multiply);
        console.log(this.energy)
        if (norVandak && this.energy >= 5) {
            this.energy = 2;
            var norxaker = new Haker(norVandak[0], norVandak[1]);
            xaker.push(norxaker);
            matrix[norVandak[1]][norVandak[0]] = 5;
            //this.multiply = 0;  
        }

    }
}

