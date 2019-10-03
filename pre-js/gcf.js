function gcf(n1, n2) {
    if (n2 == 0) {
        return n1;
    } else {
        return gcf(n2, n1%n2);
    }
}

function gcfNR(n1, n2) {
    let swap;
    n1 = n2 > n1 ? n2 : n1;
    
    while(n2 != 0) {
        swap = n2;
        n2 = n1 % n2;
        n1 = swap;
    }

    return n1;
}

let ans = gcf(30, 12);
let ansNR = gcfNR(30, 12);
console.log(ans);
console.log(ansNR);


