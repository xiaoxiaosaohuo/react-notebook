# 时区
我们的世界有数百个时区。在JavaScript中，我们只关心两个时区：本地时间和协调世界时（UTC）
- 本地时间是指您的计算机所在的时区。
- UTC在实践中与格林威治标准时间（GMT）同义。

默认情况下，JavaScript中的几乎每个日期方法（除了一个）都会以当地时间为您提供日期/时间。如果指定UTC，则只能获得UTC。
# 创建日期

用 new Date()创建日期。
1. 日期字符串
2. 日期参数
3. 时间戳
4. 无参数

## 日期字符串

```
new Date('1988-03-21')
```
由于我们在世界的不同地方以不同的方式解释日期字符串，这种方式并不好用。

例如
```
new Date('21-03-1988')
//Invalid Date {}
```
> 而且MDN警告日期字符串方法，因为浏览器可能以不同方式解析日期字符串。


还是使用时间戳和参数的方式比较好。

## 日期参数
1. Year 4位数
2. Month 0-11
3. Day 1-31
4. Hour 0-23
5. Minutes 0-59
6. Seconds 0-59
7. Milliseconds 0-999
```
// 11th June 2019, 5:23:59am, Local Time
new Date(2019, 5, 11, 5, 23, 59)
```
这是使用参数的一个好处 - 你不会在本地时间和UTC之间混淆。如果您需要UTC，请以这种方式创建UTC日期

```
// 11th June 2019, 12am, UTC.
new Date(Date.UTC(2019, 5, 11))
```
## 时间戳

时间戳是自1970年1月1日以来经过的毫秒数。

```
// 11th June 2019, 8am 
new Date(1560211200000)
```
## 无参数

如果您创建一个没有任何参数的日期，则会将日期设置为当前时间。

```
new Date()
```

# 格式化日期
js提供了一些原生方法来格式化日期
```
const date = new Date(2019, 0, 23, 17, 23, 42)
```

- toString   ----- Wed Jan 23 2019 17:23:42 GMT+0800 
- toDateString   ----- Wed Jan 23 2019
- toLocaleString   ----- 23/01/2019, 17:23:42
- toLocaleDateString   ----- 23/01/2019
- toGMTString   ----- Wed, 23 Jan 2019 09:23:42 GMT
- toUTCString   ----- Wed, 23 Jan 2019 09:23:42 GMT
- toISOString   ----- 2019-01-23T09:23:42.079Z


#### 自定义日期格式化

 - getFullYear--- 4位数的年份
- getMonth--- 月份.
- getDate--- 一个月中的第几天
- getDay--- 一个周中的第几天
- getHours
- getMinutes
- getSeconds
- getMilliseconds

```
const d = new Date(2019, 0, 23)
const year = d.getFullYear() // 2019
const date = d.getDate() // 23
```


```
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];
const d = new Date(2019, 0, 23)
const year = d.getFullYear() // 2019
const date = d.getDate() // 23

const monthName = months(d.getMonth())
const dayName = days[d.getDay()] // Thu
const formatted = `${year}, ${monthName} ${date} ${dayName}`
```

## 比较日期
简单比较两个日期的大小
```
const earlier = new Date(2019, 0, 26)
const later = new Date(2019, 0, 27)

console.log(earlier < later) // true
```
比较两个日期是否是同一时刻’

```
const isSameTime = (a, b) => {
  return a.getTime() === b.getTime()
}

const a = new Date(2019, 0, 26)
const b = new Date(2019, 0, 26)
console.log(isSameTime(a, b)) // true
```

比较是不是同一天

```
const isSameDay = (a, b) => {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate()=== b.getDate()
}

const a = new Date(2019, 0, 26, 10) // 26 Jan 2019, 10am
const b = new Date(2019, 0, 26, 12) // 26 Jan 2019, 12pm
console.log(isSameDay(a, b)) // tr
```
## 从一个日期得到另一个日期

 - setFullYear
- setMonth
- setDate
- setHours
- setMinutes
- setSeconds
- setMilliseconds

```
const d = new Date(2019, 0, 10)
const newDate = new Date(d)
newDate.setMonth(5)

console.log(d) // 10 January 2019
console.log(newDate) // 10 June 2019
```

日期是个对象，最好不要直接修改。

```
const today = new Date(2019, 2, 28)

// Getting required values
const year = today.getFullYear()
const month = today.getMonh()
const day = today.getDate()

// Creating a new Date (with the delta)
const finalDate = new Date(year, month, day + 3)

console.log(finalDate) // 31 March 2019
```

## 日期自动纠正
JS会自动纠正日期

```
new Date(2019, 2, 33)
//Tue Apr 02 2019 00:00:00 GMT+0800 (中国标准时间) {}
```