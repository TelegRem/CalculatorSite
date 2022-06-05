  let a = 1;
  let b = 1;
  //Калькулятор
  

  document.querySelector('.btn__add__section').addEventListener('click',function(event){           // Добавление раздела
    event.preventDefault();
    document.querySelector('.div__btn__add__section').insertAdjacentHTML('beforebegin',`
                                            <div class = "div__section div__section_`+a+` ">
                                                <input class = "input__section" placeholder = "Название раздела работ">
                                            </div>`);
    document.querySelector('.btn__add__section').setAttribute('hidden','true');
})

document.addEventListener('keydown', function(event) { 
    if (event.code == 'Enter') {
        saveInputValue();
        btnAddWorkClick();
        addMaterialClick();
        a++;
    };
    
});

//Функциии

function saveInputValue(){  //Переносит содержимое из поля input в тег span
    let textValue = document.querySelector('.input__section').value;
        $('.input__section').replaceWith(`
                                            <div class = 'section__header section__header__`+a+`'>
                                                <span class = "section section_`+a+`">`+a+`.`+textValue+ `</span>
                                                <span class = 'section__summ section__summ__`+a+`'>Общая цена</span>
                                            </div>`);
        document.querySelector('.btn__add__section').removeAttribute('hidden');
        document.querySelector(`.div__section_`+a+``).insertAdjacentHTML('beforeend',`<div class = 'div__add__work div__add__work__`+a+`'></div>
                                                <a href = "" class = "btn__add__work btn__add__work__`+a+`" id = `+a+`>Добавить работу</a>`);

}

function btnAddWorkClick (){  //Добавляет работы
    document.querySelector(`.btn__add__work__`+a+``).addEventListener('click', function(event){
         event.preventDefault();

        let numId = $(this).prop('id');
        document.querySelector(`.div__add__work__`+numId+``).insertAdjacentHTML('beforeend', 
        `<div class = 'calc__works calc__works__`+numId+`'>
            <div class = "title__name title__name__`+numId+`">
                <span class = "span__title__name span__title__name__`+numId+`">Наименование работы </span>
            </div>
            <div class = "title__summ title__summ__`+numId+`">
                <span class = "span__title__summ span__title__summ__`+numId+`">Сумма</span>
            </div>
            <div class = 'div__materials div__materials__`+b+`'>
            </div>
            <a href = ""class = 'add__material add__material__`+b+`'>+Добавить материал</a>
        </div>`);
        addMaterialClick();
        b++;
})}

function addMaterialClick(){    // Добавляет материалы к работам
    $(`.add__material__`+b+``).on('click', function(event){
        event.preventDefault(); 
        
    });
};