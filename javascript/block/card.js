/* JavaScript do Bloco de Cartões */

var $cards = document.querySelectorAll('.card'); // guarda na var $card todos os elementos que possuem a classe card
var $bolinhas = document.querySelectorAll('.bolinha'); // guarda na var $bolinha todos os elementos que possuem a classe bolinha

for (let index = 0; index < $cards.length; index++) { // percorre todos os cards
    $cards[index].addEventListener('click', function(){ // coloquei uma escuta em todos cards, quando clicarem vai rodar a function
        var $this = event.target; // o event.target traz o elemento que foi clicado dentro do target, no caso queremos as bolinhas de seleção de cor
        var $card = this // this é o card

        if ($this.dataset.cardcolor) { // verifica se o objeto clicado tem a a propriedade dataColor. Se não for ele vai ignorar a rotina abaixo

            $card.dataset.cardcolor = $this.dataset.cardcolor; // aqui ele vai atribuir à propriedade cardcolor do card clicado o valor do cardcolor da bolinha clicada
        
            for (var i = 0; i < $bolinhas.length; i++) { //esse for vai ser rodado no click da bolinha e vai correr todas as bolinhas removendo o isActive
                $bolinhas[i].classList.remove('isActive');
            }

            $this.classList.add('isActive'); //adiciona a classe isActive à bolinha que foi clicada    
        }

        if ($this.classList.contains('card_delete')) { //verifica se o objeto clicado tem a a classe card_delete. Se não for ele vai ignorar a rotina abaixo
            $card.remove();
        }
    });
}