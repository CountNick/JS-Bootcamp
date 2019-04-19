// Opdracht 6.1 - Vector Type




class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }


    plus(anders){

        return new Vec(this.x + anders.x, this.y+ anders.y)

    }


    minus(anders){

        return new Vec(this.x - anders.x, this.y - anders.y)

    }

    length(){

        return

    }



  }

  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));