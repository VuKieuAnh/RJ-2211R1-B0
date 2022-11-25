class Con extends Cha{
    m1(){
        console.log("con " + this.name + " ke thua dc so do " + this.sodo);
    }
}
let cha = new Cha("Cha", "Thanh Xuan");
alert(cha.m1());
let contrai = new Con("Contrai", "Thanh Xuan");
contrai.m1();
