$(function(){

    
        /* MODAL ===============*/
        const modalCall = $("[data-modal]");
        const modalClose = $("[data-close]");
    
        modalCall.on("click", function(event) {
            event.preventDefault();
    
            let $this = $(this);
            let modalid = $this.data('modal');
    
            $(modalid).addClass('show');
            $("body").addClass('no-scroll');
    
        });
    
        modalClose.on("click", function(event) {
            event.preventDefault();
    
            let $this = $(this);
    
            let modalParent = $this.parents('.modal');
            $(".modal-katalog__history-divider").html('\\');
    
            $('.modal-katalog__resource').removeAttr('hidden');
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
            $('.subcategory').prop('hidden','true')
        });
    
        /*modalClose.on("keyup", function(event) {          Закрытие модального окна по нажатию кнопки ESC (не пашет пока)
            event.preventDefault();
    
            if(event.code =='Ecsape'){
                $(div.modal).removeClass('show');
            }
    
    
        });*/
    
        //Модальное окно, которое при кликанье на него не скрывается
        $(".modal").on("click", function(event) {
            $(this).removeClass('show');
            $("body").removeClass('no-scroll');
            $('.modal-katalog__resource').removeAttr('hidden');
            $('.subcategory').prop('hidden','true')
            $(".modal-katalog__history-divider").html('\\');
        });
    
        $(".modal__dialog").on("click", function(event) {
            event.stopPropagation();
        });
        //конец модального окна, которое при кликанье на него не скрывается
    
        $(".modal-katalog__resource").on("click", function(event) {    // Прячет все категории и нажатии на них
            event.preventDefault(); //костыль против ссылок(ниже пояснение)
            $('.modal-katalog__resource').prop('hidden', 'true');
    
        });
        $(".materials").on("click", function(event){                        //Отображает подкатегории стройматериалов
            const nameLink = document.querySelector('#id_materials').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__materials").removeAttr('hidden');
        })
    
        $(".isolation").on("click", function(event){                        //Отображает подкатегории изоляции
            const nameLink = document.querySelector('#id_isolation').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__isolation").removeAttr('hidden');
        })
    
        $(".finishing_materials").on("click", function(event){                        //Отображает подкатегории отделочных материалов
            const nameLink = document.querySelector('#id_finishing_materials').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__finishing_materials").removeAttr('hidden');
        })
    
        $(".ceiling_systems").on("click", function(event){                        //Отображает подкатегории потолков
            const nameLink = document.querySelector('#id_ceiling_systems').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__ceiling_systems").removeAttr('hidden');
        })
    
        $(".water_supply").on("click", function(event){                        //Отображает подкатегории водоснабжения
            const nameLink = document.querySelector('#id_water_supply').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__water_supply").removeAttr('hidden');
        })
    
        $(".heating").on("click", function(event){                        //Отображает подкатегории климата и отопления
            const nameLink = document.querySelector('#id_heating').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__water_heating").removeAttr('hidden');
        })
    
        $(".electrics").on("click", function(event){                        //Отображает подкатегории электрики
            const nameLink = document.querySelector('#id_electrics').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__electrics").removeAttr('hidden');
        })
    
        $(".light").on("click", function(event){                        //Отображает подкатегории освещения
            const nameLink = document.querySelector('#id_light').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__light").removeAttr('hidden');
        })
    
        $(".road_materials").on("click", function(event){                        //Отображает подкатегории дорожных материалов
            const nameLink = document.querySelector('#id_road_materials').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__road_materials").removeAttr('hidden');
        })
    
        $(".tools").on("click", function(event){                        //Отображает подкатегории инструментов
            const nameLink = document.querySelector('#id_tools').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__tools").removeAttr('hidden');
        })
    
        $(".cottage").on("click", function(event){                        //Отображает подкатегории дачной хуйни
            const nameLink = document.querySelector('#id_cottage').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__cottage").removeAttr('hidden');
        })
    
        $(".goods_for_home").on("click", function(event){                        //Отображает подкатегории товары для дома
            const nameLink = document.querySelector('#id_goods_for_home').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__goods_for_home").removeAttr('hidden');
        })
    
        $(".fence").on("click", function(event){                        //Отображает подкатегории забор штукатурка
            const nameLink = document.querySelector('#id_fence').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__fence").removeAttr('hidden');
        })
    
        $(".fixers").on("click", function(event){                        //Отображает подкатегории крепежи
            const nameLink = document.querySelector('#id_fixers').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__fixers").removeAttr('hidden');
        })
    
        $(".windows").on("click", function(event){                        //Отображает подкатегории двери окна лестницы
            const nameLink = document.querySelector('#id_windows').innerHTML; // Название категории
            $(".modal-katalog__history-divider").html(`\\`+nameLink+``); //Пишет путь
    
            $(".modal-katalog__resource__windows").removeAttr('hidden');
        })
    
        $(".subcategory").on("click", function(event) {  //Не дает подкатегориям ломать страницу (костыль короче).А все из-за того, что кнопки как пустые ссылки сделал, а нажатие на ссылку обновляет страницу
            event.preventDefault();
        });
    //Путь в модальном окне
        $(".modal-katalog__history-divider").on("click", function(event){
            $(".modal-katalog__resource").removeAttr('hidden') //показывает категории
            $('.subcategory').prop('hidden','true') // прячем подкатегории
    
            $(".modal-katalog__history-divider").html('\\'); // устанавливает значение пути на /
        })
})