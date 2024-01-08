const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty item>];
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', <2 empty items>]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', <1 empty item>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3 --> largest index with a value plus 1

// note: using the Chrome Console (v62) the empty items are listed like so:
// `..., empty x 2, ...` or `..., empty, ...`
// or like this on Firefox (57.0):
// `..., <1 empty slot>, ...` or `..., <2 empty slots>, ...`
