make_me=function(_name) {
    alert('меня запустили');
    this.name=_name;
    this.show_name=function() {alert(this.name);}
    }

    

    child2 = new make_me('Олег');
    child2.show_name();