$(function() {
    //Переименные
    let a = 1;
    let b = 1;
    //Калькулятор

    $('.btn__add__section').on('click',function(event){ // Добавление раздела
        event.preventDefault();

        $(`<div class = "div__section div__section_`+a+` "><input class = "input__section" placeholder = "Название раздела работ"></div>`).insertBefore('.btn__add__section');
        $('.btn__add__section').prop('hidden','true');
    })

    document.addEventListener('keydown', function(event) {  // Cохранение названия раздела по нажатию кнопки Enter
        if (event.code == 'Enter') {
            let textValue = $('.input__section').prop('value');

            $('.input__section').replaceWith(`<div class = 'section__header section__header__`+a+`'><span class = "section section_`+a+`">`+a+`.`+textValue+ `</span><span class = 'section__summ section__summ__`+a+`'>Общая цена</span></div>`);
            $('.btn__add__section').removeAttr('hidden');
            let divSection = (`.div__section_`+a+``)
            let divSec = document.querySelector(``+divSection+``);
            divSec.insertAdjacentHTML('beforeend',`<div class = 'div__add__work div__add__work__`+a+`'></div><a href = "" class = "btn__add__work btn__add__work__`+a+`" id = `+a+`>Добавить работу</a>`);

            $(document).on('click',`.btn__add__work__`+a+``, function(event){
                event.preventDefault();
                let numId = $(this).prop('id');
                document.querySelector(`.div__add__work__`+numId+``).insertAdjacentHTML('beforeend',
                    `<div class = 'calc__works calc__works__`+numId+`'><div class = "title__name title__name__`+numId+`"><span class = "span__title__name span__title__name__`+numId+`">Наименование работы </span></div>
                    <div class = "title__summ title__summ__`+numId+`"><span class = "span__title__summ span__title__summ__`+numId+`">Сумма</span></div><div class = 'div__materials div__materials__`+b+`'></div><a href = ""class = 'add__material add__material__`+b+`'>+Добавить материал</a></div>`);
                    addMaterialClick();
                    b++;
            })
            
            a++;
        };
      });

      function addMaterialClick(){ 
        $(`.add__material__`+b+``).on('click', function(event){
            event.preventDefault();
            

            document.querySelector(`.div__add__work__`+numId+``).insertAdjacentHTML('beforeend',
                    `<div class = 'calc__works calc__works__`+numId+`'><div class = "title__name title__name__`+numId+`"><span class = "span__title__name span__title__name__`+numId+`">Наименование работы </span></div>
                    <div class = "title__summ title__summ__`+numId+`"><span class = "span__title__summ span__title__summ__`+numId+`">Сумма</span></div><div class = 'div__materials div__materials__`+b+`'></div><a href = ""class = 'add__material add__material__`+b+`'>+Добавить материал</a></div>`);
            



        

      });}


    
});

