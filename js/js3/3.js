// Домашнее задание

// 1. Объявите пустой массив под названием «fruits».
//    - Добавьте элементы “apple”, “banana” и “orange” с помощью метода push().
//    - Отобразите в консоли длину массива с помощью свойства length.
//    - Отобразите в консоли содержимое массива.

// 2. Объявите массив под названием «numbers» со следующими элементами: 1, 2, 3, 4, 5.
//    - Используйте метод pop() для удаления последнего элемента из массива.
//    - Используйте метод shift(), чтобы удалить первый элемент из массива.
//    - Выводите содержимое массива в консоль после каждой операции.

// 3. Объявите массив с именем «colors» со следующими элементами: “red”, “green”, “blue”, “yellow”.
//    - Используйте метод indexOf(), чтобы найти индекс «зеленого» элемента в массиве.
//    - Используйте метод includes(), чтобы проверить, содержит ли массив элемент «оранжевый».
//    - Отобразите результат в консоли.

// 4. Объявите массив с именем `names` со следующими элементами: “John”, “Jane”, “Mike”, “Jennifer”.
//    - Используйте метод unshift(), чтобы добавить элемент “David” в начало массива.
//    - Используйте метод indexOf(), чтобы найти индекс элемента “Mike” в массиве.
//    - Отобразите результаты в консоли.

// 5. Объявите массив под названием «numbers» со следующими элементами: 2, 4, 6, 8, 10.
//    - Используйте метод include(), чтобы проверить, содержит ли массив элемент 5.
// И покажите соответствующее сообщение.
//    - Используйте метод push(), чтобы добавить элемент 12 в конец массива.
//    - Отобразите результатов в консоли.

// 6. Создайте массив с названиями всех месяцев и отсортируйте его в алфавитном порядке. sort()

// 7. Массив из предыдущего упражнения отфильтруйте и верните толко те месяцы в которых больше 3 букв. filter()

var fruits = [];
console.log("empty fruits:", fruits);

fruits.push("apple", "banana", "orange");

console.log("fruits lenght:", fruits.length);
console.log("added by push:", fruits);

var numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log("pop:", numbers);
numbers.shift();
console.log("shift:", numbers);

var colors = ["red", "green", "blue", "yellow"];
console.log("color array:", colors);
const index_green = colors.indexOf("green");
console.log("index of green:", index_green);
const incl_orange = colors.includes("orange");
console.log("includes orange?", incl_orange);

var names = ["John", "Jane", "Mike", "Jennifer"];
console.log("names array:", names);
names.unshift("David");
console.log("unshift david:", names);
const index_mike = names.indexOf("Mike");
console.log("index of Mike:", index_mike);

var Numbers = [2, 4, 6, 8, 10];
const incl_num5 = Numbers.includes(5);
console.log("includes 5?:", incl_num5);
Numbers.push(12);
console.log("push:", Numbers);

var year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
console.log("before sort:",year)
const sortedyear = year.sort()
console.log("aftere sort:",year)
const filter_by3_year = year.filter(year => year.length > 3)
console.log("filter more than 3 letters:",filter_by3_year)

