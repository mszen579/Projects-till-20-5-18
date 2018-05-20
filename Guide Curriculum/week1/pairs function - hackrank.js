
function pairs(k, n) {
    var gar = function getArgu(arr) {
        // Complete this function
        var count = 0;
        arr.sort();
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                var diff = arr[j] - arr[i];
                if (diff > k)
                    break;
                if (diff == k) {
                    count++;
                    break;
                }
            }
        }
        return count;

    }
    return gar;
}
