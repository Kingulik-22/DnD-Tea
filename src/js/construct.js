

// 

const points = document.querySelector("#points")
let point = 27


const str_pls = document.querySelector("#str_pls")
let str_point = 8
// console.log(str_pls)
const str_dis = document.querySelector("#str_dis")
// console.log(str_dis)
const dex_pls = document.querySelector("#dex_pls")
let dex_point = 8
// console.log(dex_pls)
const dex_dis = document.querySelector("#dex_dis")
// console.log(dex_dis)
const con_pls = document.querySelector("#con_pls")
let con_point = 8
// console.log(con_pls)
const con_dis = document.querySelector("#con_dis")
// console.log(con_dis)
const int_pls = document.querySelector("#int_pls")
let int_point = 8
// console.log(int_pls)
const int_dis = document.querySelector("#int_dis")
// console.log(int_dis)
const wis_pls = document.querySelector("#wis_pls")
let wis_point = 8
// console.log(wis_pls)
const wis_dis = document.querySelector("#wis_dis")
// console.log(wis_dis)
const cha_pls = document.querySelector("#cha_pls")
let cha_point = 8
// console.log(cha_pls)
const cha_dis = document.querySelector("#cha_dis")
// console.log(cha_dis)

const str_punct = document.querySelector("#str_punct")
// console.log(str_punct)
const dex_punct = document.querySelector("#dex_punct")
// console.log(dex_punct)
const con_punct = document.querySelector("#con_punct")
// console.log(con_punct)
const int_punct = document.querySelector("#int_punct")
// console.log(int_punct)
const wis_punct = document.querySelector("#wis_punct")
// console.log(wis_punct)
const cha_punct = document.querySelector("#cha_punct")
// console.log(cha_punct)

str_pls.addEventListener("click", function(){
    if (str_point < 15 && point > 0){
        if (str_point < 13){
            str_point += 1
            point -= 1
        } else if (point > 1){
            str_point += 1
            point -= 2
        }
        str_punct.textContent = "Сила: " + str_point 
        points.textContent = "Очки - " + point + "/27"
    }
    
})
dex_pls.addEventListener("click", function(){
    if (dex_point < 15 && point > 0){
        if (dex_point < 13){
            dex_point += 1
            point -= 1
        } else if (point > 1){
            dex_point += 1
            point -= 2
        }
        dex_punct.textContent = "Ловкость: " + dex_point 
        points.textContent = "Очки - " + point + "/27"
    }
    
})
con_pls.addEventListener("click", function(){
    if (con_point < 15 && point > 0){
        if (con_point < 13){
            con_point += 1
            point -= 1
        } else if (point > 1){
            con_point += 1
            point -= 2
        }
        con_punct.textContent = "Телослож.: " + con_point 
        points.textContent = "Очки - " + point + "/27"
    }
    
})
int_pls.addEventListener("click", function(){
    if (int_point < 15 && point > 0){
        if (int_point < 13){
            int_point += 1
            point -= 1
        } else if (point > 1){
            int_point += 1
            point -= 2
        }
        int_punct.textContent = "Интелект: " + int_point 
        points.textContent = "Очки - " + point + "/27"
    }
    
})
wis_pls.addEventListener("click", function(){
    if (wis_point < 15 && point > 0){
        if (wis_point < 13){
            wis_point += 1
            point -= 1
        } else if (point > 1){
            wis_point += 1
            point -= 2
        }
        wis_punct.textContent = "Мудрость: " + wis_point 
        points.textContent = "Очки - " + point + "/27"
    }
    
})
cha_pls.addEventListener("click", function(){
    if (cha_point < 15 && point > 0){
        if (cha_point < 13){
            cha_point += 1
            point -= 1
        } else if (point > 1){
            cha_point += 1
            point -= 2
        }
        cha_punct.textContent = "Харизма: " + cha_point 
        points.textContent = "Очки - " + point + "/27"
    }
})

//

str_dis.addEventListener("click", function(){
    if (str_point > 8){
        str_point -= 1
        str_punct.textContent = "Сила: " + str_point 
        if (str_point >= 13){
            point += 2
        } else{
            point += 1
        }
        points.textContent = "Очки - " + point + "/27"
    }
})
dex_dis.addEventListener("click", function(){
    if (dex_point > 8){
        dex_point -= 1
        dex_punct.textContent = "Ловкость: " + dex_point 
        if (dex_point >= 13){
            point += 2
        } else{
            point += 1
        }
        points.textContent = "Очки - " + point + "/27"
    }
})
con_dis.addEventListener("click", function(){
    if (con_point > 8){
        con_point -= 1
        con_punct.textContent = "Телослож.: " + con_point 
        if (con_point >= 13){
            point += 2
        } else{
            point += 1
        }
        points.textContent = "Очки - " + point + "/27"
    }
})
int_dis.addEventListener("click", function(){
    if (int_point > 8){
        int_point -= 1
        int_punct.textContent = "Интелект: " + int_point 
        if (int_point >= 13){
            point += 2
        } else{
            point += 1
        }
        points.textContent = "Очки - " + point + "/27"
    }
})
wis_dis.addEventListener("click", function(){
    if (wis_point > 8){
        wis_point -= 1
        wis_punct.textContent = "Мудрость: " + wis_point 
        if (wis_point >= 13){
            point += 2
        } else{
            point += 1
        }
        points.textContent = "Очки - " + point + "/27"
    }
})
cha_dis.addEventListener("click", function(){
    if (cha_point > 8){
        cha_point -= 1
        cha_punct.textContent = "Харизма: " + cha_point 
        if (cha_point >= 13){
            point += 2
        } else{
            point += 1
        }
        points.textContent = "Очки - " + point + "/27"
    }
})