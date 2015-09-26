// Примитивные и объектные типы данных

// object - объектный тип

// typeof Определить тип переменной


var obj = {
		prop: 'yotube',  
		prop2: function() {  
			//...
		}
	},
	regexp = /baba/g,
	func = function () {},
	arr = [1,2,3];

	obj.prop = 'facebook'; // Замена значения свойства prop на 'facebook'
	arr[2] = 24; // Замена 2 по индексу значения массива arr на 24


	console.log( typeof obj);  // object
	console.log( typeof regexp);  // object
	console.log( typeof func);  // function
	console.log( typeof arr);	// object
};

// У строк ,boolean и чисел есть свои методы


str.toUpperCase(); // Возводит строку в верхний регистр 

