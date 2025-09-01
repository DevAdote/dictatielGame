function afficherResultat (score, nbMotsProposes){
        // console.log('Vous avez reussi '+ score + ' sur ' +nbMotsProposes)

        scoreAffiche.innerHTML = `${score} / ${nbMotsProposes} `;
}


function choisirPhrasesOuMots(){
    // let choix = prompt('Choisir entre mots et phrases')
    // while(choix!=='mots' && choix!=='phrases')
    // {
    //       choix = prompt('Vous devez choisir entre mots ou phrases')
    // }
    
    // return choix
   
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
    listePropositions = listeMots
   let i = 0

    let inputEcriture = document.getElementById("inputEcriture")

    afficherProposition(listePropositions[i]) 

    btnValiderMot.addEventListener("click", ()=>{

        console.log(inputEcriture.value)

          if (inputEcriture.value===listePropositions[i])
            {
                score++
            }

        i++

        afficherResultat(score, i)


        inputEcriture.value = ''

        if (listePropositions[i] === undefined)
        {
            afficherProposition("Le jeu est termine")
            btnValiderMot.disabled = true
        }else{
            afficherProposition(listePropositions[i]) 
        }
    })



    
    let option = document.querySelectorAll('.optionSource input')

        for (let index = 0; index<option.length;index++){

            // event represente l'evenement qui vient de se produire ce qui permet de determiner clairement sur quel boutton radio on a clique
            // Et cette information est stocke dans le event.target

            option[index].addEventListener("change", (event)=>{

                if(event.target.value === "1"){
                    listePropositions = listeMots
                }else{
                    listePropositions = listePhrases
                }
               afficherProposition(listePropositions[i])
            })

            



        }
 


        afficherResultat(score, i)

    
}