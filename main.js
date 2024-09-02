// создаем элементы калькулятра
const mainContainer = document.getElementById('root_id')
mainContainer.classList.add('container')
const winToEnter = document.createElement('textarea')
winToEnter.cols=10
winToEnter.rows=3
winToEnter.disabled=true
winToEnter.placeholder=0
const buttons = document.createElement('div')
buttons.classList.add('button__group')
mainContainer.append(winToEnter,buttons)

const button_1=createButton('1')
const button_2=createButton('2')
const button_3=createButton('3')
const button_4=createButton('4')
const button_5=createButton('5')
const button_6=createButton('6')
const button_7=createButton('7')
const button_8=createButton('8')
const button_9=createButton('9')
const button_0=createButton('0')
const button_ac=createButton('AC')
const button_del=createButton("⬅")
const button_plus=createButton('+')
const button_minus=createButton('-')
const button_devission=createButton('/')
const button_multypl=createButton('x')
const button_persent = createButton('%')
const button_dot=createButton('.')
const button_equals=createButton('=')



buttons.append(
    button_ac,button_del,button_persent,button_devission,
    button_7,button_8,button_9,button_multypl,
    button_4,button_5,button_6,button_minus,
    button_1,button_2,button_3,button_plus,
    button_0,button_dot,button_equals)




function createButton(text){
    let button = document.createElement('div')
    button.textContent=text
    button.classList.add('button')

    return button
}
buttons.addEventListener('click',(event)=>{
    action(event.target.textContent)
  
    })
document.addEventListener('keypress',(event)=>{
    console.log(event.code)
    action(event.code)
})
const memory ={
    num1:null,
    num2:null,
    newNumber:true,
    operation:null,
    result(){
        
        if (this.operation =="+"){
            return this.num1+ this.num2
        } else if (this.operation =="-"){
            return this.num1 - this.num2
        }else if (this.operation ==="x"){
            return this.num1 * this.num2
        }else if (this.operation ==="/"){
            return this.num1 / this.num2
        }else if (this.operation ==="%"){
            return this.num1 * this.num2/100
        }
    }
}

function action(pressed_button){
    // const reformation={
    //     'plus':'+',
    //     'minus':'-',
    //     'dev':'/',
    //     'emn':'*',
    //     'equal':'=',
    //     Digit0:'0',
    //     Digit1:'1',
    //     Digit2:'2',
    //     Digit3:'3',
    //     Digit4:'4',
    //     Digit5:'5',
    //     Digit6:'6',
    //     Digit7:'7',
    //     Digit8:'8',
    //     Digit8:'9'


    // }
    // if (pressed_button in reformation){
    //     pressed_button=reformation[pressed_button]
    // }
    switch(pressed_button){
        case '+' :
            memory.num1=Number(winToEnter.value)
            memory.operation='+'
            memory.newNumber=true
            break;
        case '-':
            memory.num1=Number(winToEnter.value)
            memory.operation='-'
            memory.newNumber=true
            break;
        case 'x':
            memory.num1=Number(winToEnter.value)
            memory.operation='x'
            memory.newNumber=true
            break;
        case '/':
            memory.num1=Number(winToEnter.value)
            memory.operation='/'
            memory.newNumber=true
            break;
        case '%':
            memory.num1=Number(winToEnter.value)
            memory.operation='%'
            memory.newNumber=true
            break;
        case '=':
           if (memory.num1){
            memory.num2=Number(winToEnter.value)
            
            winToEnter.value=memory.result()
            memory.num2=null
            memory.newNumber=true
           }
           

            break;
        case 'AC':
            winToEnter.value=''
            break;
        case '⬅':
            winToEnter.value=winToEnter.value.slice(0,-1)
            break;
        case '.':
            if (!winToEnter.value.includes('.')){
                winToEnter.value+='.'
            }
            
            break;
        case '0':
          
            if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value=0
            } else if (winToEnter.value[0]!=0){
                winToEnter.value+='0'
            }
            
            break;
        case '1':
             if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value='1'
            } else {
                winToEnter.value+='1'
            }
            break;
        case '2':
             if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value='2'
            } else {
                winToEnter.value+='2'
            }
            break;
        case '3':
             if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value='3'
            } else {
                winToEnter.value+='3'
            }
            break;
        case '4':
             if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value='4'
            } else {
                winToEnter.value+='4'
            }
            break;
        case '5':
             if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value='5'
            } else {
                winToEnter.value+='5'
            }
            break;
        case '6':
            if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value="6"
            } else {
                winToEnter.value+='6'
            }
            break;
        case '7':
            if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value='7'
            } else {
                winToEnter.value+='7'
            }
            break;
        case '8':
            if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value='8'
            } else {
                winToEnter.value+='8'
            }
            break;
        case '9':
            if (memory.newNumber ) {
                memory.newNumber=!memory.newNumber
                winToEnter.value='9'
            } else {
                winToEnter.value+='9'
            }
            break;
        
    }
   
}
