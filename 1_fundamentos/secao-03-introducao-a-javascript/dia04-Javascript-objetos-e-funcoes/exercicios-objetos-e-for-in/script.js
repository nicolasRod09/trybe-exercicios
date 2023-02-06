let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let infor = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain",
    nota: "Dell's Four Color Comics #178",
    recorrente: "Sim"
}

// console.log("Bem vinda, " + info.personagem + ".");

info["recorrente"] = "Sim";

// console.log(info);

for (key in info) {
    console.log(key + ": " + info[key]);
}



