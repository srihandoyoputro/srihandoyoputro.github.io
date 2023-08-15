function pilihsatu() 
{
    var idchoice=document.getElementById("hitung").value


 if(idchoice=="LuasSegitiga"){
    document.getElementById("narasi").innerHTML ="<b> Rumus luas segitiga adalah : </b><br> L=1/2 x a x t <p>Dimana : <br> a=Alas <br> t=tinggi <p> <label>Panjang Alas</label> <br> <input type=text id=Palas name=alas><br><p> <label>Tinggi</label> <br> <input type=text id=Ptinggi name=tinggi><p><button onclick=hitungluas()>Hitung luas Segitiga </button><p style=font-weight:bold;font-size:16px; id=hasil></p>"
 }
    else if(idchoice=="KelilingSegitiga")
{
    document.getElementById("narasi").innerHTML ="<b> Rumus keliling segitiga adalah : </b><br> K= A + B + C <p>Dimana panjang sisi : <br> A= Sisi AB <br> B= Sisi BC <br> C= Sisi CA <p> <label>Panjang Sisi A</label> <br> <input type=text id=PsisiA name=sisia><br><p><label>Panjang Sisi B</label> <br> <input type=text id=PsisiB name=sisib><br><p><label>Panjang Sisi C</label> <br> <input type=text id=PsisiC name=sisic><br><p><button onclick=hitungkeliling()>Hitung keliling Segitiga </button><p style=font-weight:bold;font-size:16px; id=hasilkeliling></p>"
}

}

function hitungluas()
{
    let a=document.getElementById("Palas").value
    let b=document.getElementById("Ptinggi").value
    let c=(a*b)*0.5

    document.getElementById("hasil").innerHTML= "Hasil Luas Segitiga = " + c

}

function hitungkeliling()
{
    let a=document.getElementById("PsisiA").value
    let b=document.getElementById("PsisiB").value
    let c=document.getElementById("PsisiC").value
    let d=parseInt(a)+parseInt(b)+parseInt(c)

    document.getElementById("hasilkeliling").innerHTML= "Hasil keliling Segitiga = " + d

}