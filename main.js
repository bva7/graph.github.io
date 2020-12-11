// ctx.clearRect(0, 0, canvasPlotWidth, canvasPlotHeight)


const canvasPlot = document.getElementById('canvas_plot')
// определяем документ canvas
const ctx = canvasPlot.getContext('2d')
// определяем контекст

const screenWidth = window.screen.width
const screenHeight = window.screen.height


// ctx.fillRect(0, 0, 100, 100)
// ctx.fillStyle = '#000'
// ctx.fillRect(100, 100, 200, 200)
// // создаем квадратики

// ctx.beginPath()					// начало пути линии
// ctx.strokeStyle = '#ff0000'
// ctx.moveTo(300, 300)    // перемещает точку указателя (начало)
// ctx.lineTo(400, 400)    // перемещает точку указателя (конец)
// ctx.stroke()  				  // соединяет две точки (создает линию)
// ctx.closePath()				  // конец пути линии

// ctx.beginPath()         // начало пути линии
// ctx.strokeStyle = '#ff0000'
// ctx.moveTo(300, 300)    // перемещает точку указателя (начало)
// ctx.lineTo(300, 400)    // перемещает точку указателя (конец)
// ctx.stroke()            // соединяет две точки (создает линию)
// ctx.closePath()         // конец пути линии

// ctx.font = '30px arial'         // размер текста
// ctx.textAlign = 'left'          
// ctx.textBaseline = 'top'
// ctx.fillText('текст', 300, 400) // создаем текст
// ctx.fillRect(300, 400, 5, 5)    // создаем точку

// РИСУЕМ СЕТКУ

const canvasPlotWidth = canvasPlot.clientWidth
// получаем ширину canvas
const canvasPlotHeight = canvasPlot.clientHeight
// получаем высоту canvas

const grid = 40

const scaleX = grid // отступы сетки по X
const scaleY = grid // отступы сетки по Y

const xAxis = Math.round(canvasPlotWidth / grid / 2) * grid
const yAxis = Math.round(canvasPlotHeight / grid / 2) * grid

const margin = 5 // отспут цифр

ctx.font = `${Math.round(grid / 2)}px Arial`
// маштабируем шрифт
ctx.textAlign = 'left'
ctx.textBaseline = 'top'

ctx.beginPath()      // начало пути линии
ctx.strokeStyle = '#aaa'

for (i=0; i <= canvasPlotWidth; i += scaleX) {
	// создаем сетку, двигаемся по ширине canvas

	ctx.moveTo(i, 0)
	// создаем точку указателя (начало)

	ctx.lineTo(i, canvasPlotHeight)
	// создаем точку указателя (конец)

	ctx.fillText((i - xAxis) / scaleX, i + margin, yAxis + margin)
	// рисуем цифры по оси x

}
for (i=0; i <= canvasPlotHeight; i += scaleY) {
	// создаем сетку, двигаемся по ширине canvas

	ctx.moveTo(0, i)
	// создаем точку указателя (начало)

	ctx.lineTo(canvasPlotWidth, i)
	// создаем точку указателя (конец)

	ctx.fillText((yAxis - i) / scaleY, xAxis + margin, i + margin)
	// рисуем цифры по оси y

}
ctx.stroke()    // создаем нинии
ctx.closePath() // конец пути линии

// РИСУЕМ ГЛАВНЫЕ ОСИ

ctx.beginPath()  // начало пути
ctx.strokeStyle = '#000000'

ctx.moveTo(xAxis, 0)
ctx.lineTo(xAxis, canvasPlotHeight)

ctx.moveTo(0, yAxis)
ctx.lineTo(canvasPlotWidth, yAxis)

ctx.textAlign = 'right'
ctx.textBaseline = 'top'
ctx.fillText('y', xAxis - margin, 0)
ctx.fillText('x', canvasPlotWidth - margin, yAxis - 25)

ctx.stroke()
ctx.closePath()  // конец пути


// РИСУЕМ ГРАФИК

function go() {
// ctx.clearRect(0, 0, canvasPlotWidth, canvasPlotHeight)

let input = document.getElementById('input')

ctx.fillStyle = '#0000ff'
ctx.strokeStyle = '#ff0000'

ctx.strokeStyle = '#000000'

	for (i=0; i <= canvasPlotWidth; i++) {
		const x = (i - xAxis) / scaleX
		const y = eval(input.value)
		ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 3, 3)
	}

	console.log(input.value)

}


