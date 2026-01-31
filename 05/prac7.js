function reverse(str, start, end) {

    if (start >= end) return;

    str =str.split("");
    [str[start], str[end]] = [str[end], str[start]]
    str = str.join("");

    reverse(str, start + 1, end - 1)
    return str



}


let str = "Geeks for Geeks";
str = reverse(str, 0, str.length - 1);
console.log(str);