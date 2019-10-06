// Mans piedāvātais kalkulators strādā šādi - Atmiņā jāsaglabā 2 skaitļi: tas, kas logā
// un tas, kas bija logā pirms darbības pogas nospiešanas. Kā arī tas, kura darbība jāveic.

// Kad piespiež darbības pogu vai "=", tad izpildās iepriekšējā darbība, kas jau atmiņā un logā
// parādās tās rezultāts. Ja piespiesta darbības poga, tad šis rezultāts saglabājas atmiņā un logā
// var rakstīt jauno skaitli, ar kuru tad darbību veiks. Darbības pogu piespiežot arī pēc rezultāta
// izvades uzreiz pārrakstās arī atmiņā tas, kuru darbību tad jāveic.

// Ja tiek veikta nelikumīga darbība, tad logā parādās ERROR un nekas cits nestrādā kā tikai CE poga. 


class Kalkulators {
    constructor(id){ 
        this.konteiners=document.getElementById(id);
        if(this.konteiners){
            this.divRezultats=document.createElement("div");            //Vieta, kur rakstīs iekšā rezultātu.
            this.divRezultats.setAttribute("class","rezultats") 
            this.divRezultats.setAttribute("id","rezultats")
            this.konteiners.appendChild(this.divRezultats);

            this.divPoguLauks=document.createElement("div");
            this.divPoguLauks.setAttribute("id","keyboard");
            this.konteiners.appendChild(this.divPoguLauks);

// Tālāk vajag ar JS DOM izveidot kalkulatora pogas. Pogām onclick piešķirt vajadzīgās funkcijas.
// Dzēšanas pogas izveidošanas piemērs zemāk pilnās nodzēšanas pogai. Iespējams, ka jāizveido arī poga tikai esošā loga nodzēšanai, nevis pilnīgai.
// bet tad vajag arī jaunu metodi (funkciju) tālāk pievienot "dzestEsoso()". Tā vēl nav iesākta nemaz.

            let btnDzestVisu = document.createElement("button");
            btnDzestVisu.innerHTML = "CE";
            btnDzestVisu.onclick = () => this.dzestVisu();
            btnDzestVisu.setAttribute("class","dzest");
            this.divPoguLauks.appendChild(btnDzestVisu);

//Skaitļa pogas izveidošanas piemērs zemāk "1" pogai. Vajag vēl visus pārējos ciparus.

            let btnViens = document.createElement("button");
            btnViens.innerHTML = "1";
            btnViens.onclick = (evt) => {
                this.uzrakstitCiparu(1);
            }
            btnViens.setAttribute("class","skaitlis viens");
            this.divPoguLauks.appendChild(btnViens);

            //Tālāk ir komata poga. 

            let btnKomats = document.createElement("button");
            btnKomats.innerHTML = ",";
            btnKomats.onclick = () => this.uzrakstitKomatu();
            btnKomats.setAttribute("class","skaitlis komats");
            this.divPoguLauks.appendChild(btnKomats);


//Darbības pogas izveidošanas piemērs zemāk "+" pogai. Vajag vēl "-", "x", "\", "=". Vai vēl kādu?

            let btnPluss = document.createElement("button");
            btnPluss.innerHTML = "+";
            btnPluss.onclick = (evt) => {
                this.veiktDarbibu("saskaitisana");  
            }
            btnPluss.setAttribute("class","darbiba plus");
            this.divPoguLauks.appendChild(btnPluss);

        }
        this.statuss=Kalkulators.STATUSS_DARBIBA; // Statuss DARBIBA ir tikmēr, kamēr nav ticis ievadīts skaitlis.
        this.PirmaisSkaitlis; // Šis ir tas mainīgais, kurā glabāsies tas skaitlis, kurš bija uz ekrāna pirms darbības pogas piespiešanas.
        this.Darbiba = ""; // Šeit glabāsies tas, kuru darbību mēs grasāmies darīt. "" - Nav vēl saglabāta darbība.
        this.IrKomats = 0; // Vai komata poga ir piespiesta, vai arī vēl ne?
        this.CipariEkrana = 0; //Cik ciparu ekrānā jau uzrakstīti?
        this.redzamais=0; //Sākumā jābūt 0.
    
    }

    set redzamais(skaitlis){

        this._redzamais = skaitlis;

//Nomainot this.redzamais vērtību, logā automātiski jāuzrakstās tam skaitlim. Nepieciešams pielikt šo funkcionalitāti šeit ar JS DOM palīdzību.
//Tas, kas jāizvada logā (kura id="rezultats"), tiek iedots matemātiski kā normāls skaitlis mainīgajā "skaitlis". 
//Izņemot, ja ir problēma (dala ar 0). Tad atnāk vārds "ERROR", kas jāuzliek uz ekrāna.
//Vēl jāapdomā, kā izvadīt logā tādus skaitļus kā 1.000 un 1. (kad tikko "," piespiests).
//Matemātiski pareizs skaitlis 

        console.log ("Izvada rezultatu logā");
    }

    get redzamais() {
        return this._rezultats;       //Ar this.redzamais var piekļūt tai vērtībai, kas logā. Matemātiski pareizai. Ja rakstīts 1.000, tad dabūs 1
    }

    dzestVisu(){

//Notīra logu, uzstāda statusu uz DARBIBA, izdzēš iepriekšējo skaitli, saglabāto darbību, ciparu skaitu, komatu.

        console.log("Dzest"); 
    }

    uzrakstitKomatu(){

        if(this.statuss===Kalkulators.STATUSS_DARBIBA){
            this.statuss=Kalkulators.STATUSS_SKAITLIS;  //Uzstādam, ka tiek ievadīts skaitlis
            this.IrKomats=1;                            //Uzstādam, ka ievadāmajam skaitlim ir komats
            this.redzamais=0;                           //Ievadīts skaitlis 0.
            return;                                     //Vairs nevajag nekā darīt
        }
        if (this.statuss===Kalkulators.STATUSS_KLUDA){
            return;                                     //Nedarbojas, ja ir ERROR
        }
        if(this.statuss===Kalkulators.STATUSS_SKAITLIS){
            if(!this.IrKomats){
                this.IrKomats=1;
                this.redzamais=this.redzamais; //Šī rindiņa nepieciešama, lai uz ekrāna izdrukātos jaunais skaitlis ar jau galā komatu.
            }
        }
        console.log("komats");

    }

    uzrakstitCiparu(cipars){
        let jaunaisRedzamais = 0;

//Vispirms jāpārbauda, vai iepriekš bijusi darbība vai cipars.
//Ja bijusi darbība, tad tagad jāraksta skaitlis no jauna.
//Ja bijis cipars, tad nepieciešams aprēķināt, kāds jaunais skaitlis jāraksta logā atkarībā no tā, cik ciparu jau tur ir un vai ir komats.
//Iespējams, ka constructorā jāizveido kāds jauns mainīgais (piemēram ciparu skaits aiz komata), lai būtu vieglāki aprēķini.
//Jāizdomā, cik ciparu vispār logā ļaut rakstīt, lai nesākas kļūdas (skatīt MAX_SAFE_INTEGER). Jo JS pārāk lielus skaitļus jau dīvaini noapaļo.
//Logā jau esošo skaitli var iegūt ar this.redzamais; ierakstīto ciparu skaitu ar this.CipariEkrana.

//Lai logā ierakstītu nepieciešamo rezultātu, vajag tikai mainīgajā "jaunaisRedzamais" ierakstīt to skaitli matemātiski pareizu, kam jāsanāk. 
//Ja logā jāparādās skaitlim 1.000, tad jaunaisRedzamais = 1  
//Par komatiem un nullēm rūpējas tā funkcija, kura skaitli izvada logā ("set redzamais(skaitlis)").

        this.redzamais=jaunaisRedzamais;
        this.statuss=Kalkulators.STATUSS_SKAITLIS; //Nupat ierakstījām skaitli logā. 

//Vēl nepieciešams uzstādīt tagad esošo ciparu skaitu.
//(Jāatcerās, ka tad, ja ekrānā ir 0, nav komata, un tiek uzspiesta 0, tad ciparu skaits ir tikai 1, jo mēs 0 skaitļa sākumā nerakstām.)
//(Arī, ja bija 0, nebija komata un tiek kāds cits cipars piespiests, tad arī ciparu skaits ir 1)
//(Bet ja ir komats, tad gan ciparu skaits ir 2.)

        console.log(cipars);
    }

    veiktDarbibu(darbiba){

//Vispirms jāpārbauda, kāds mums statuss - vai iepriekš ievadīts bijis skaitlis, vai darbība.

//Ja iepriekš bijusi darbība, tad tikai nomaina iepriekš saglabāto darbību pret jauno darbību. 
//Izņemot tad, ja ir pats sākums un "this.PirmaisSkaitlis" vēl nav piešķirta vērtība. Tad tam jāpiešķir 0 un tad jāuzstāda jaunā darbība.

//Ja iepriekš bijis skaitlis, tad vispirms nomaina statusu uz "STATUSS_DARBIBA"
// logā izvada rezultātu no tā, kas jau saglabāts (ja ir pirms tam vēl neizdarīta darbība saglabāta). 
//Domājams, ka tas varētu tikt darīts ar switch case palīdzību atkarībā no "this.Darbiba" vērtības.
//Lai logā izvadītu vērtību, nepieciešams to piešķirt mainīgajam "this.redzamais".

//Piemēram, ja atmiņā saglabāta darbība ir saskaitīšana: 
        switch(this.Darbiba){
            case "saskaitisana":
                this.redzamais=this.PirmaisSkaitlis+this.redzamais;
                break;
        }

//Tad jāsaglabā logā esošā vērtība "this.PirmaisSkaitlis" laukā.
//"this.IrKomats" un "this.CipariEkrana" arī jānodzēš, jo pēc darbības jau nākamajā brīdī, kad tiks rakstīts kāds cits skaitlis, tas būs no jauna tur.

//Jāsaglabā "this.Darbiba" vērtībā jaunā darbība, ko veiksim nākamajā reizē.

//???Te gan vēl jāapdomā, kādas vērtības un kur jāsaglabā tad, kad piespiež "=". Vai tas izpilda iepriekšējo saglabāto darbību, vai arī ko citu???

     
        console.log(darbiba);
    }



}

Kalkulators.STATUSS_KLUDA = 0; //Tad, ja dala ar 0 vai arī dara ko citu nederīgu (ja nu pieliksim vēl darbības), kā arī, ja rezultāts par lielu (virs 15 cipariem)
Kalkulators.STATUSS_DARBIBA=1; //Tad, ja ir sākums vai arī pēdējā poga piespiestā ir darbības poga.
Kalkulators.STATUSS_SKAITLIS=2; //Tad, ja pēdējā poga piespiestā ir skaitļa poga