var flag=0;
class pharm
{
    constructor(type, name, description, price, date,count) {
        this.Тип= type;
        this.Название = name;
        this.Описание = description;
        this.Цена = price;
        this.Дата = date;
        this.Количество= count;
    }
}
class pharmBasket
{
    constructor(type, name, description, price, date) {
        this.Тип= type;
        this.Название = name;
        this.Описание = description;
        this.Цена = price;
        this.Дата = date;
    }
}
var ColumnName=["Тип","Название","Описание","Цена","Срок годности","Количество"];
var ColumnName2=["Тип","Название","Описание","Цена","Срок годности"];

/*var pharmList = [];

    pharmList.push (new pharm("Лекарство","Нурофен", "Препарат номер один для борьбы с болью, жаром и воспалением", "353 руб.", "2023-03-26",24));
    pharmList.push (new pharm("Лекарство","Тантум Верде", "Убивает микробы в горле","434 руб.", "2023-01-01",32));
    pharmList.push (new pharm("Раствор","Натрия хлорид", "Физраствор, который применяется в случае потери организмом внеклеточной жидкости", "74 руб.","2022-10-08",100));
    pharmList.push (new pharm("Лекарство","Фильтрум", "Натуральный энтеросорбент, предназначенный для устранения последствий похмелья, перееданий и интоксикаций","172 руб.", "2022-07-20",11));

    var pharmListString = JSON.stringify(pharmList);
   localStorage.setItem('pharm', pharmListString);*/
//localStorage.clear();
if(localStorage.getItem('basket') == null) {
    let pustota=[];
    let pustotaJSON = JSON.stringify(pustota);
    localStorage.setItem('basket', pustotaJSON);
}
if(localStorage.getItem('Check') == null) {
    let pustota=[];
    let pustotaJSON = JSON.stringify(pustota);
    localStorage.setItem('Check', pustotaJSON);

}

if(localStorage.getItem('pharm') == null) {
    var pharmList = [];
    pharmList.push (new pharm("Лекарство","Нурофен", "Препарат номер один для борьбы с болью, жаром и воспалением", "353 руб.", "2023-03-26",24));
    pharmList.push (new pharm("Лекарство","Тантум Верде", "Убивает микробы в горле","434 руб.", "2023-01-01",32));
    pharmList.push (new pharm("Раствор","Натрия хлорид", "Физраствор, который применяется в случае потери организмом внеклеточной жидкости", "74 руб.","2022-10-08",100));
    pharmList.push (new pharm("Лекарство","Фильтрум", "Натуральный энтеросорбент, предназначенный для устранения последствий похмелья, перееданий и интоксикаций","172 руб.", "2022-07-20",11));

    var pharmListString = JSON.stringify(pharmList);
   localStorage.setItem('pharm', pharmListString);
} else {
   var pharmList = JSON.parse(localStorage.getItem('pharm'));
}
function buildTable(data) {
    let table = document.createElement("table");
    table.className="table";
    table.id="info-table";
    
    table.appendChild(document.createElement('thead'));
    table.appendChild(document.createElement('tbody'));
    
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    var numberColumn=0;
    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.textContent = ColumnName[numberColumn];
        headRow.appendChild(headCell);
        numberColumn++;
    });


    table.querySelector('thead').appendChild(headRow);
    data.forEach(function(object) {
        let row = document.createElement("tr");
        fields.forEach(function(field) {
            let cell = document.createElement("td");
            cell.textContent = object[field];
            if (typeof object[field] == "number") {
                cell.style.textAlign = "center";
            }
            row.appendChild(cell);
        });
        table.querySelector('tbody').appendChild(row);
    });

    let trs1 = table.querySelector('thead tr');
    let th1 = document.createElement('th');  
    trs1.appendChild(th1);
    let trs = table.querySelectorAll('tbody tr');
    for (let tr of trs)
    {
    let td = document.createElement('td');
    td.id="forLink";
    td.className="Buy";
    let links = document.querySelector('#forLink');
    links= document.createElement('a');
    links.href="order.html";
    links.classList="button";
    links.textContent="Купить";
    td.appendChild(links);
    tr.appendChild(td);
    }
    th1 = document.createElement('th');  
    trs1.appendChild(th1);
    trs = table.querySelectorAll('tbody tr');
    for (let tr of trs)
    {
    let td = document.createElement('td');
    td.id="forLink";
    td.className="basket";
    links = document.querySelector('#forLink');
    links= document.createElement('img');
    links.setAttribute("src","images/basket.png");
    links.classList="basketIcon";
    td.appendChild(links);
    tr.appendChild(td);
    }

    return table;
  }


  function buildTableDB(data) {
    
    let table = document.createElement("table");
    table.className="table";
    table.id="info-table";
    
    table.appendChild(document.createElement('thead'));
    table.appendChild(document.createElement('tbody'));
    
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    var numberColumn2=0;
    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.textContent = ColumnName[numberColumn2];
        headRow.appendChild(headCell);
        numberColumn2++;
    });
    table.querySelector('thead').appendChild(headRow);
    data.forEach(function(object) {
        let row = document.createElement("tr");
        fields.forEach(function(field) {
            let cell = document.createElement("td");
            cell.textContent = object[field];
            if (typeof object[field] == "number") {
                cell.style.textAlign = "center";
            }
            row.appendChild(cell);
        });
        table.querySelector('tbody').appendChild(row);
    });
    let trs1 = table.querySelector('thead tr');
    let th1 = document.createElement('th');  
    trs1.appendChild(th1);
    let trs = table.querySelectorAll('tbody tr');
    for (let tr of trs)
    {
    let td = document.createElement('td');
    td.id="forLink";
    td.className="deleteRow";
    let links2 = document.querySelector('#forLink');
    links2= document.createElement('a');

    links2.className="buttonDB";
    links2.textContent="Удалить";
    td.appendChild(links2);
    tr.appendChild(td);
    }

    return table;
  }
  function buildTableBasket(data) {
    let table = document.createElement("table");
    table.className="table";
    table.id="info-table";
    
    table.appendChild(document.createElement('thead'));
    table.appendChild(document.createElement('tbody'));
    
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    var numberColumn=0;
    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.textContent = ColumnName2[numberColumn];
        headRow.appendChild(headCell);
        numberColumn++;
    });


    table.querySelector('thead').appendChild(headRow);
    data.forEach(function(object) {
        let row = document.createElement("tr");
        fields.forEach(function(field) {
            let cell = document.createElement("td");
            cell.textContent = object[field];
            if (typeof object[field] == "number") {
                cell.style.textAlign = "center";
            }
            row.appendChild(cell);
        });
        table.querySelector('tbody').appendChild(row);
    });
    let trs1 = table.querySelector('thead tr');
    let th1 = document.createElement('th');  
    trs1.appendChild(th1);
    let trs = table.querySelectorAll('tbody tr');
    for (let tr of trs)
    {
    let td = document.createElement('td');
    td.id="forLink";
    td.className="basketDel";
    let links2 = document.querySelector('#forLink');
    links2= document.createElement('a');
    links2.className="buttonDB";
    links2.textContent="Удалить";
    td.appendChild(links2);
    tr.appendChild(td);
    }
    return table;
}
  var table1=buildTable(pharmList);
  var table2=buildTableDB(pharmList);
  
  if(document.querySelector('#pharm'))
  {
    document.querySelector('#pharm').appendChild(table1);

  }
  else if(document.querySelector('#pharmDB'))
  {
    document.querySelector('#pharmDB').appendChild(table2);

  }
  else if (document.querySelector('#receipt'))
  {
    let check = JSON.parse(localStorage.getItem('Check'));
    for(checkStr of check)
        if (checkStr.Тип=="Раствор")
        {
           let replace= document.querySelector('#receipt')
           replace.required=true;
           replace= document.querySelector('#star');
           replace.style.color='red';
           replace.textContent="*";
           break;
        }
  }else if (document.querySelector('#pharmBasket'))
  {

    let pharmilka = JSON.parse(localStorage.getItem('basket'));

    let table3=buildTableBasket(pharmilka);
    if (table3!=undefined)
    {
        document.querySelector('#pharmBasket').appendChild(table3);
        let link = document.querySelector('#pharmButton');
        links= document.createElement('a');
        links.href="order.html";
        links.classList="buttonBasket";
        links.textContent="Купить всё";
        link.appendChild(links);
    }
    
  }
  const form = document.querySelector('#form');
  const checkValidity = (input) => {
    input.classList.remove('text-field__input1_invalid');
    input.nextElementSibling.textContent = '';
    if (!input.checkValidity()) {
        input.classList.add('text-field__input1_invalid');
        input.nextElementSibling.textContent = input.validationMessage;
    }
}
if (JSON.parse(localStorage.getItem('basket')).length!=0)
{
    let countOfBasket = document.querySelector('#countOfBasket');
    countOfBasket.style.display = "block";
    countOfBasket.textContent=JSON.parse(localStorage.getItem('basket')).length;
}
const onCheckValidity = (e) => {
    const target = e.target;
    if (!target.classList.contains('text-field__input1')) {
        return;
    }
    checkValidity(target);
}

form.addEventListener('change', onCheckValidity);
form.addEventListener('keydown', onCheckValidity);
form.addEventListener('keyup', onCheckValidity);

let tabledel=document.querySelector('#info-table');

tabledel.addEventListener('click', function(evt){
if(evt.target.closest('.deleteRow')) {
    if(!confirm('Подтвердите удаление лекарства')) return;
    let deleterow=evt.target.closest('tr');
    deleterow.remove();
    for(let pharm of pharmList)
    {
        
        if(deleterow.childNodes[0].textContent==pharm.Тип&&deleterow.childNodes[1].textContent==pharm.Название&&deleterow.childNodes[2].textContent==pharm.Описание&&deleterow.childNodes[3].textContent==pharm.Цена&&deleterow.childNodes[4].textContent==pharm.Дата&&deleterow.childNodes[5].textContent==pharm.Количество)
        {
            //localStorage.clear();
            let index = pharmList.indexOf(pharm);
            pharmList.splice(index, 1);
            pharmListString = JSON.stringify(pharmList);
            localStorage.setItem('pharm', pharmListString);
        }
    }
    let pharmBasket=JSON.parse(localStorage.getItem('basket'));
    for(let pharmStr of pharmBasket)
    {
        if(pharmStr.Тип==deleterow.childNodes[0].textContent&&pharmStr.Название==deleterow.childNodes[1].textContent&&pharmStr.Цена==deleterow.childNodes[3].textContent&&pharmStr.Дата==deleterow.childNodes[4].textContent&&pharmStr.Описание==deleterow.childNodes[2].textContent)
        {
            let index = pharmBasket.indexOf(pharmStr);
            pharmBasket.splice(index, 1);
        }
                
    } 
    let pharmBasketJSON = JSON.stringify(pharmBasket);
    localStorage.setItem('basket', pharmBasketJSON);    
    if (JSON.parse(localStorage.getItem('basket')).length!=0)
    {
        let countOfBasket = document.querySelector('#countOfBasket');
        countOfBasket.style.display = "block";
        countOfBasket.textContent=" "+JSON.parse(localStorage.getItem('basket')).length;
    }
}

if(evt.target.closest('.Buy')) {
    let saveType=evt.target.closest('tr');
    let check=[];
    check.push(new pharm(saveType.childNodes[0].textContent,saveType.childNodes[1].textContent,saveType.childNodes[2].textContent,saveType.childNodes[3].textContent,saveType.childNodes[4].textContent,saveType.childNodes[5].textContent));
    let pharmсheck = JSON.stringify(check);
    localStorage.setItem('Check', pharmсheck);
    
}

if(evt.target.closest('.basket')) {
    var saveType=evt.target.closest('tr');
    
    if(JSON.parse(localStorage.getItem('basket'))==null) var pharmType=[];else var pharmType=JSON.parse(localStorage.getItem('basket'));
   if(pharmType!=null) 
   {
    for(row of pharmType)
    {
        
        if(row.Тип==saveType.childNodes[0].textContent&&row.Название==saveType.childNodes[1].textContent&&row.Описание==saveType.childNodes[2].textContent&&row.Цена==saveType.childNodes[3].textContent&&row.Дата==saveType.childNodes[4].textContent)
        {
            alert("Такой товар уже есть!");
            return;
        }
    }
   }  
    
    pharmType.push(new pharmBasket(saveType.childNodes[0].textContent,saveType.childNodes[1].textContent,saveType.childNodes[2].textContent,saveType.childNodes[3].textContent,saveType.childNodes[4].textContent));
    let pharmBas = JSON.stringify(pharmType);

    localStorage.setItem('basket', pharmBas);
    if (JSON.parse(localStorage.getItem('basket')).length!=0)
    {
        let countOfBasket = document.querySelector('#countOfBasket');
        countOfBasket.style.display = "block";
        countOfBasket.textContent=" "+JSON.parse(localStorage.getItem('basket')).length;
    }
 
}

if(evt.target.closest('.basketDel')) {
   
    let deleterow=evt.target.closest('tr');
    deleterow.remove();
    var pharmType=JSON.parse(localStorage.getItem('basket'))

    for(let pharm of pharmType)
    {
        
        if(deleterow.childNodes[0].textContent==pharm.Тип&&deleterow.childNodes[1].textContent==pharm.Название&&deleterow.childNodes[2].textContent==pharm.Описание&&deleterow.childNodes[3].textContent==pharm.Цена&&deleterow.childNodes[4].textContent==pharm.Дата)
        {
            //localStorage.clear();
            
            let index = pharmType.indexOf(pharm);
            pharmType.splice(index, 1);
            if(pharmType[0]==undefined)
            {
                let link = document.querySelector('#pharmButton');
                link.remove('a');

            }
            pharmTypeSTR = JSON.stringify(pharmType);
            localStorage.setItem('basket', pharmTypeSTR);

        }
    }
    if (JSON.parse(localStorage.getItem('basket')).length!=0)
    {
        let countOfBasket = document.querySelector('#countOfBasket');
        
        countOfBasket.style.display = "block";
        countOfBasket.textContent=JSON.parse(localStorage.getItem('basket')).length;
    }else countOfBasket.style.display = "none";

}
})
let tableBusket=document.querySelector('#pharmButton');
tableBusket.addEventListener('click', function(e){
if(e.target.closest('.buttonBasket')) {
    let basket=JSON.parse(localStorage.getItem('basket'));
    let check=[];
    for(let basketStr of basket)
    {
       
        var pharmDB=JSON.parse(localStorage.getItem('pharm'));
        for(let pharmStr of pharmDB)
        {
            
            if(pharmStr.Тип==basketStr.Тип&&pharmStr.Название==basketStr.Название&&pharmStr.Цена==basketStr.Цена&&pharmStr.Дата==basketStr.Дата&&pharmStr.Описание==basketStr.Описание)
            {
                check.push(pharmStr);
            }
                
        }
            
    }
    let pharmсheck = JSON.stringify(check);
    localStorage.setItem('Check', pharmсheck);
}
})
function completeBuying()
{
    
    var sales=JSON.parse(localStorage.getItem('Check'));
    var pharmBasket=JSON.parse(localStorage.getItem('basket'));
    for(let salesStr of sales)
    {
        for(let pharmStr of pharmBasket)
        {
            
            if(pharmStr.Тип==salesStr.Тип&&pharmStr.Название==salesStr.Название&&pharmStr.Цена==salesStr.Цена&&pharmStr.Дата==salesStr.Дата&&pharmStr.Описание==salesStr.Описание)
            {
                let index = pharmBasket.indexOf(pharmStr);
                pharmBasket.splice(index, 1);
            }
                
        } 
    }
    let pharmBasketJSON = JSON.stringify(pharmBasket);
    localStorage.setItem('basket', pharmBasketJSON);
    var pharmDB=JSON.parse(localStorage.getItem('pharm'));
    for(let salesStr of sales)
    {
        
        for(let pharmStr of pharmDB)
        {
            
            if(pharmStr.Тип==salesStr.Тип&&pharmStr.Название==salesStr.Название&&pharmStr.Цена==salesStr.Цена&&pharmStr.Дата==salesStr.Дата&&pharmStr.Описание==salesStr.Описание&&pharmStr.Количество==salesStr.Количество)
            {
                pharmStr.Количество--; 
                if(pharmStr.Количество==0)
                {
                    let index = pharmDB.indexOf(pharmStr);
                    pharmDB.splice(index, 1);
                }
            }
                
        } 
    }
    let pharm = JSON.stringify(pharmDB);
    localStorage.setItem('pharm', pharm);
    window.location.href = "catalog.html";
}
 
function addEl()
{
    let type= document.querySelector('#type').value;
    let name= document.querySelector('#namep').value;
    let desc= document.querySelector('#desc').value;
    let price= document.querySelector('#price').value;
    let data= document.querySelector('#date').value;
    let count= document.querySelector('#count').value;
    if (type!= "" &&name!= "" && desc!= "" && price!= "" && data!= ""&& count!= "")
    {
    

        let tbody = document.querySelector("#info-table tbody");
        let rows = [].slice.call(tbody.querySelectorAll("tr"));
        
        for(row of rows)
        {
            if(row.childNodes[0].textContent==type&&row.childNodes[1].textContent==name&&row.childNodes[2].textContent==desc&&row.childNodes[3].textContent==price&&row.childNodes[4].textContent==data&&row.childNodes[5].textContent==count)
            {
                alert("Такой товар уже есть!");
                return;
            }
        }

    if(!confirm('Подтвердите добавление лекарства')) return;
    document.querySelector('#type').value="";
    document.querySelector('#namep').value="";
    document.querySelector('#desc').value="";
    document.querySelector('#price').value="";
    document.querySelector('#date').value="";
    document.querySelector('#count').value="";

    pharmList.push (new pharm(type, name, desc, price, data, count));
    pharmListString = JSON.stringify(pharmList);
    localStorage.setItem('pharm', pharmListString);

    var tbodyRef = document.getElementById('info-table').getElementsByTagName('tbody')[0];

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent=type;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent=name;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent=desc;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent=price;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent=data;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent=count;
    tr.appendChild(td);
    td = document.createElement('td');
    td.id="forLink";
    td.className="deleteRow";
    let links = document.querySelector('#forLink');
    links= document.createElement('a');
    links.className="buttonDB";
    links.textContent="Удалить";
    td.appendChild(links);
    tr.appendChild(td);
    tbodyRef.appendChild(tr);

    } else alert("Заполните все обязательные поля!");
}
    
function login()
{
    let login = document.querySelector('#login');
    let password = document.querySelector('#password');
    if (login.value=='DrettS@yandex.ru' && password.value=='12345')
    {
        hide();
        document.location.href = "#close";
        
    }
    else if (login.value=='informatochka@mail.ru' && password.value=='12345')
    {
        hide();
        document.location.href = "#close";
    }
    else
    {
        password.value="";
        alert("Неверный логин или пароль!");
    } 
    
}
function hide()
{
   if (flag==0)
   {
    const $node = document.querySelector('#node');
    const $liSecond= document.querySelector('#node li:nth-child(4)');
    $liSecond.parentNode.removeChild($liSecond);
    $node.insertAdjacentHTML('beforeend', '<li><a href="DB.html" accesskey="3" title="">База данных</a></li>');
    flag=1;
   }
}
function tableSearch() {
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('info-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}
function convertDate(d)
{
    let p = d.split("-");
    return +(p[0]+p[1]+p[2]);
}
  
function sortByDate() {

    let tbody = document.querySelector("#info-table tbody");
    let rows = [].slice.call(tbody.querySelectorAll("tr"));
    rows.sort(function(a,b) {
      return convertDate(a.cells[4].innerHTML) - convertDate(b.cells[4].innerHTML);
    });
    
    rows.forEach(function(v) {
      tbody.appendChild(v); 
    });
  }

