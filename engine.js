function sendOrder(type,data){

let orderId = "RSH" + Math.floor(Math.random()*99999);

let message = `🚀 RUSHLY ORDER%0A
ID: ${orderId}%0A
Type: ${type}%0A`;

for(let key in data){
message += `${key}: ${data[key]}%0A`;
}

window.open("https://wa.me/918100112502?text=" + encodeURIComponent(message));
}