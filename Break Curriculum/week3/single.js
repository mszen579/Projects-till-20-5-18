//1. check Prime

function isPrime(n) {
    var divisor = 2;

    while (n > divisor) {
        if (n % divisor == 0) {
            return false;
        }
        else
            divisor++;
    }
    return true;
}



// 2. Prime Factors
function primeFactors(n) {
    var factors = [],
        divisor = 2;

    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        else {
            divisor++;
        }
    }
    return factors;
}


//3. Fibonacci

function fibonacci(n) {
    var fibo = [0, 1];

    if (n <= 2) return 1;

    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[n];
} 


//4. Greatest Common Divisor
function greatestCommonDivisor(a, b) {
    var divisor = 2,
        greatestDivisor = 1;

    //if u pass a -ve number this will not work. fix it dude!!
    if (a < 2 || b < 2)
        return 1;

    while (a >= divisor && b >= divisor) {
        if (a % divisor == 0 && b % divisor == 0) {
            greatestDivisor = divisor;
        }
        divisor++;
    }
    return greatestDivisor;
}



//fancy algorithm
function greatestCommonDivisor(a, b) {
    if (b == 0)
        return a;
    else
        return greatestCommonDivisor(b, a % b);
}



//5. remove Duplicate

function removeDuplicate(arr) {
    var exists = {},
        outArr = [],
        elm;

    for (var i = 0; i < arr.length; i++) {
        elm = arr[i];
        if (!exists[elm]) {
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    return outArr;
}



// 6. merge two sorted array
function mergeSortedArray(a, b) {
    var merged = [],
        aElm = a[0],
        bElm = b[0],
        i = 1,
        j = 1;

    if (a.length == 0)
        return b;
    if (b.length == 0)
        return a;
    /* 
    if aElm or bElm exists we will insert to merged array
    (will go inside while loop)
     to insert: aElm exists and bElm doesn't exists
               or both exists and aElm < bElm
      this is the critical part of the example            
    */
    while (aElm || bElm) {
        if ((aElm && !bElm) || aElm < bElm) {
            merged.push(aElm);
            aElm = a[i++];
        }
        else {
            merged.push(bElm);
            bElm = b[j++];
        }
    }
    return merged;
}



//7. swap number without temp
function swapNumb(a, b) {
    console.log('before swap: ', 'a: ', a, 'b: ', b);
    b = b - a;
    a = a + b;
    b = a - b;
    console.log('after swap: ', 'a: ', a, 'b: ', b);
}



//8. string reverse
function reverse(str) {
    var rtnStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        rtnStr += str[i];
    }
    return rtnStr;
}


//9. reverse words
function reverseWords(str) {
    var rev = [],
        wordLen = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] == ' ' || i == 0) {
            rev.push(str.substr(i, wordLen + 1));
            wordLen = 0;
        }
        else
            wordLen++;
    }
    return rev.join(' ');
}


//10. reverse in place
function reverseInPlace(str) {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

//11. First non repeating char
function firstNonRepeatChar(str) {
    var len = str.length,
        char,
        charCount = {};
    for (var i = 0; i < len; i++) {
        char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        }
        else
            charCount[char] = 1;
    }
    for (var j in charCount) {
        if (charCount[j] == 1)
            return j;
    }
}

//12. remove duplicate char
function removeDuplicateChar(str) {
    var len = str.length,
        char,
        charCount = {},
        newStr = [];
    for (var i = 0; i < len; i++) {
        char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        }
        else
            charCount[char] = 1;
    }
    for (var j in charCount) {
        if (charCount[j] == 1)
            newStr.push(j);
    }
    return newStr.join('');
}

//13. check palindrome
function isPalindrome(str) {
    var i, len = str.length;
    for (i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i])
            return false;
    }
    return true;
}


//14. random between 5 to 7
function rand5() {
    return 1 + Math.random() * 4;
}

function rand7() {
    return 5 + rand5() / 5 * 2;
}



//15. missing number

function missingNumber(arr) {
    var n = arr.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;

    for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }

    return expectedSum - sum;
}


//16. Sum of two
function sumFinder(arr, sum) {
    var len = arr.length;

    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] == sum)
                return true;
        }
    }

    return false;
}


//17. Largest Sum
function topSum(arr) {

    var biggest = arr[0],
        second = arr[1],
        len = arr.length,
        i = 2;

    if (len < 2) return null;

    if (biggest < second) {
        biggest = arr[1];
        second = arr[0];
    }

    for (; i < len; i++) {

        if (arr[i] > biggest) {
            second = biggest;
            biggest = arr[i];
        }
        else if (arr[i] > second) {
            second = arr[i];
        }

    }
    return biggest + second;
}

//18. Counting Zeros
function countZero(n) {
    var count = 0;
    while (n > 0) {
        count += Math.floor(n / 10);
        n = n / 10;
    }
    return count;
}


//19. subString
function subStringFinder(str, subStr) {
    var idx = 0,
        i = 0,
        j = 0,
        len = str.length,
        subLen = subStr.length;

    for (; i < len; i++) {

        if (str[i] == subStr[j])
            j++;
        else
            j = 0;

        //check starting point or a match   
        if (j == 0)
            idx = i;
        else if (j == subLen)
            return idx;
    }

    return -1;
}


//20. Permutations
function permutations(str) {
    var arr = str.split(''),
        len = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

    if (len == 0)
        return [str];

    for (var i = 0; i < len; i++) {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));

        for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
    }
    return perms;
}







