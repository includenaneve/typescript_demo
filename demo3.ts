const count : number = 918
const name : string = 'she'
// null undefine, boolean, void, symbol

const lady : {
  name: string,
  age: number
} = {
  name: 'she',
  age: 26
}

const ladys : string [] = ['lady1', 'lady2', 'lady3']

// 报错： const ladys : string [] = ['lady1', 'lady2', 918]

class Person {}
const dajiao: Person = new Person()

// 规定数据类型是函数， 并且返回值为string类型
const wangwang : () => string = () => { return 'hello' }

// 对象类型 数据类型 类类型 函数类型