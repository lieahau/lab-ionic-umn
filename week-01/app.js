async function calculationHandler(uang, total){
    return parseInt(uang) + parseInt(total);
}

function outputHandler(nama, uang){
    let totalElement = document.getElementById("total");
    calculationHandler(uang, totalElement.innerHTML).then(function(total){
        totalElement.innerHTML = total;
    });

    let pengeluaran = document.createElement("span");
    pengeluaran.setAttribute("class", "pengeluaran");
    pengeluaran.innerHTML = uang;

    let label = document.createElement("ion-label");
    let text = document.createTextNode(nama + ": Rp. ");
    label.appendChild(text);
    label.appendChild(pengeluaran)
    label.innerHTML += ",00";

    let item = document.createElement("ion-item");
    item.appendChild(label);

    let listContainer = document.getElementById('list-item');
    listContainer.appendChild(item);
}

function alertHandler(message){
    const alertController = document.getElementById('alert-controller');
    alertController.create({
        header: 'Terjadi Kesalahan',
        mode:'ios', // to align center
        message: message,
        buttons: ['Tutup']
    }).then(alert => {
        alert.present();
    });
}

function tambahButtonHandler(){
    let nama = document.getElementById('input-nama');
    let uang = document.getElementById('input-uang');
    let message = "";

    if(!nama.value || !uang.value){
        message = "Mohon masukkan nama dan jumlah pengeluaran."
        alertHandler(message);
    }
    else if(uang.value <= 0){
        message = "Mohon masukkan jumlah pengeluaran lebih dari 0."
        alertHandler(message);
    }
    else{
        outputHandler(nama.value, uang.value);
    }
}

function hapusButtonHandler(){
    let listContainer = document.getElementById('list-item');
    while(listContainer.firstChild) 
        listContainer.removeChild(listContainer.firstChild);
    
    let totalElement = document.getElementById("total");
    totalElement.innerHTML = "0";
}
