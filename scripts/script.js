function afficherResultat (score, nbMotsProposes){
        // console.log('Vous avez reussi '+ score + ' sur ' +nbMotsProposes)

        scoreAffiche.innerHTML = `${score} / ${nbMotsProposes} `;
}


function choisirPhrasesOuMots(){
    let choix = prompt('Choisir entre mots et phrases')
    // while(choix!=='mots' && choix!=='phrases')
    // {
    //       choix = prompt('Vous devez choisir entre mots ou phrases')
    // }
    return choix
}



function lancerBoucleDeJeu (listePropositions){
    
        let score = 0
        // for(let i = 0; i<listePropositions.length; i++)
        //     {
        //         let motUtilisateur = prompt('Saisir le mot suivant : ' +listePropositions[i])
                
        //         if(motUtilisateur === listePropositions[i]){
        //             score++
        //         }
        //     }
  
        return score;
}


function afficherProposition (motAfficher){
    
    let zoneProposition = document.querySelector(".zoneProposition")

    zoneProposition.innerText = motAfficher
}


function lancerJeu (){

   let score = 0
   let nbMotsProposes = 0
   let i = 0

    let inputEcriture = document.getElementById("inputEcriture")

    afficherProposition(listeMots[i]) 

    btnValiderMot.addEventListener("click", ()=>{

        console.log(inputEcriture.value)

          if (inputEcriture.value===listeMots[i])
            {
                score++
            }

        i++

        afficherResultat(score, i)


        inputEcriture.value = ''

        if (listeMots[i] === undefined)
        {
            afficherProposition("Le jeu est termine")
            btnValiderMot.disabled = true
        }else{
            afficherProposition(listeMots[i]) 
        }
    })

    afficherResultat(score, i)


}