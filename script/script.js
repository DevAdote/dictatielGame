let listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
let listePhrases = [ 'Pas de panique !', 'La vie, l’univers et le reste', 'Merci pour le poisson']
let score = 0;

let choix

while(choix!=='mots' || choix!=='phrases')
{
    let choix = prompt('Choisir entre mots et phrases')

    if (choix==='mots'){
        for(let i = 0; i<listeMots.length; i++)
            {
                let motUtilisateur = prompt('Saisir le mot suivant : ' +listeMots[i])
                
                if(motUtilisateur === listeMots[i]){
                    score++
                }
            }
        console.log('Vous avez reussi '+score+ ' sur ' +listeMots.length)

    }else if (choix==='phrases')
            {

            for (let i = 0; i<listePhrases.length; i++){
                let motUtilisateur = prompt('Saisir le mot suivant : ' +listePhrases[i])
                    
                    if(motUtilisateur === listePhrases[i]){
                        score++
                
                }
            console.log('Vous avez reussi '+score+ ' sur ' +listePhrases.length)

            }
        }
}


