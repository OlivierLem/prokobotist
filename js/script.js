
let block = document.querySelectorAll('.achat__trie ~ div');

let button = document.querySelectorAll('.achat__trie button');
console.log ( block, button);


for(let i=0 ; i <= button.length; i++ ){
    button[i].addEventListener('click', () => {
        let j=0;
        for(j=0; j<=4;j++){
             if(j != i){
                button[j].classList.remove('active');
                block[j].classList.remove('active');   
            }
                
        }
        
        button[i].classList.add('active');
        block[i].classList.add('active'); 
     
    });
}
