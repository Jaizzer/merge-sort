function mergeSort(array) {
    // Empty or single-element array is sorted by default.
    let isSorted = true;

    // Check if array is sorted.
    for (let i = 0; i < array.length - 1; i++) {
        isSorted = isSorted && array[i] < array[i + 1];

        // Immediately break from the loop if atleast 1 unsorted elements are found.
        if (!isSorted) {
            break;
        }
    }

    // Return if the array is already sorted.
    if (isSorted) {
        return array;
    } else {
        // Split the array into two.
        const midpointIndex = Math.floor(array.length / 2);
        let array1 = array.slice(0, midpointIndex);
        let array2 = array.slice(midpointIndex);

        // Sort the two arrays individually.
        array1 = mergeSort(array1);
        array2 = mergeSort(array2);

        // Combine array 1 and array 2 into one sorted array.
        return sortAndCombine(array1, array2);
    }
}

// Utility function that combines array 1 and array 2 into one sorted array.
function sortAndCombine(array1, array2) {
    // Array to hold the combined and sorted values from array1 and array2.
    let combinedSortedArray = [];

    // Indexes of array1 and array2's current element
    let currentArray1ElementIndex = 0;
    let currentArray2ElementIndex = 0;

    // Loop until one array gets all of its element put inside the combined sorted array.
    while (currentArray1ElementIndex < array1.length && currentArray2ElementIndex < array2.length) {
        // Sort in ascending order.
        if (array1[currentArray1ElementIndex] <= array2[currentArray2ElementIndex]) {
            // Append current array 1 element to the combined sorted array.
            combinedSortedArray.push(array1[currentArray1ElementIndex]);

            // Get the next element in array 1 if there are still any remaining.
            currentArray1ElementIndex++;
        } else {
            // Append current array 2 element to the combined sorted array.
            combinedSortedArray.push(array2[currentArray2ElementIndex]);

            // Get the next element in array 2 if there are still any remaining.
            currentArray2ElementIndex++;
        }
    }

    // Append all remaining array 1 element if all elements in array 2 are already put inside the combined sorted array.
    while (currentArray1ElementIndex < array1.length) {
        // Append current array 1 element to the combined sorted array.
        combinedSortedArray.push(array1[currentArray1ElementIndex]);

        // Get the next element in array 1 if there are still any remaining.
        currentArray1ElementIndex++;
    }

    // Append all remaining array 2 element if all elements in array 1 are already put inside the combined sorted array.
    while (currentArray2ElementIndex < array2.length) {
        // Append current array 2 element to the combined sorted array.
        combinedSortedArray.push(array2[currentArray2ElementIndex]);

        // Get the next element in array 2 if there are still any remaining.
        currentArray2ElementIndex++;
    }

    return combinedSortedArray;
}
