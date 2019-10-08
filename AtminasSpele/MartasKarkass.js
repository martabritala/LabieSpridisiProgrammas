
class AtminasSpele {
    constructor (id){
        this.konteiners=document.getElementById(id);
        this.divPogas=document.createElement("div");
        this.divPogas.setAttribute("class","pogas");
        this.divLaukums=document.createElement("div");
        this.divLaukums.setAttribute("class","laukums");
        this.konteiners.appendChild(this.divPogas);
        this.konteiners.appendChild(this.divLaukums);   //Izveidoti ekrānā divi laukumi - vienā būs pogas un statiskā informācija - otrā spēles kārtis

        let btnJaunaSpele = document.createElement("button");
        btnJaunaSpele.innerHTML="Jauna spēle";
        btnJaunaSpele.onclick = () => this.jaunaSpele();
        btnJaunaSpele.setAttribute("class", "jauns");
        this.divPogas.appendChild(btnJaunaSpele);

        this.statuss=AtminasSpele.STATUSS_NEINICIALIZETS; //Vēl nav spēle
        this.GajienuSkaits=0; //Lai var uzstādīt rekordus un ir sacensības gars
        this.Rekords; //Kur glabāt rekordu. 
        this.RedzamoSkaits=0; //Cik atvērtas kartiņas
        this.NeatminetoSkaits=6; //Cik aizvērti pāri kartiņām (max - 6).


    }

    jaunaSpele(){

//Kuri mainīgie tiek uzlikti pa nullēm, kuri ne...
//Kuras funkcijas jāizsauc, lai saražotu kārtis...

        this.statuss=AtminasSpele.STATUSS_SPELE;
        console.log("jauna spele");
    }

    samaisaKartis(){

//Šai funkcijai jāaizver visas kārtis (jāuzstāda, ka visas redzamas un, ka muguras uz augšu)
//Vēl tai ir randomā jāpiešķir visām kārtīm vērtības un klases tā, lai pa pāriem tās būtu vienādas.
//Patiesībā ar šo funkciju varētu nodzēst esošo laukumu un uzģenerēt jaunu.

        console.log("samaisa jaunu laukumu");
    }

    atverKarti(id){

//Šai f-jai jāparāda id kārts zīmējums, un jāizsauc funkcija, kas pārbauda atvērto kārti.

        console.log("atver kārti",id);
    }

    parbaudaAtverto(){

//Vispirms jāpārbauda, cik kārtis atvērtas. 
//Ja viena, tad pieskaita gājienu skaitam vienu.
//Ja divas, tad nepieskaita jaunu gājienu, bet nogaida 2 sekundes un pārbauda abas kārtis.
//Kārtīm jābūt vērtībām, kuras savā starpā salīdzināt. 
//Ja vērtības dažādas, tad aizver atvērtās kārtis;
//ja vērtības vienādas, tad noslēpj kārtis, samazina neatminēto pāru skaitu par 1
// un pārbauda, vai ir vēl kāda neatvērta kārts.
//Ja vairs nav neatvērto kāršu, tad statuss - uzvara.


        console.log("parbaude");
    }

}

AtminasSpele.STATUSS_SPELE=1;
AtminasSpele.STATUSS_UZVARA=2;
AtminasSpele.STATUSS_NEINICIALIZETS=0;