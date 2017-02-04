### Complete React Developer Course - Timer App  

http://desolate-hollows-74739.herokuapp.com/#/countdown?_k=7cmalg 
https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content 
https://github.com/ARWL2016/react-weather 

- Udemy   
- Andrew Mead   
- Section 8  

**Technologies**  
1. Express   
2. React and React-Router    
3. Foundation and Sass      
4. Babel      
5. Karma (6 modules)    
6. Mocha     
7. Webpack     

**Notes**
- This app demonstrates a Foundation navbar     
- Styles are written in modular form to match React components    
- Webpack is key to configuring styles and scripts    
- Testing is a key focus in this section   
- The TimerControl component is strictly speaking redundant - the Control function can be used by removing the if else condition   

**Component Structure**  
/ Main   
..c Navigation  
..ir. Timer   
../countdown={Countdown}  
....c Clock 
....c CountdownForm   

**Countdown Functionality**  
1. Countdown: countdownStatus initially set to 'stopped'   
- Countdown renders <Clock totalSeconds={this.state.count}/> - display component  
- Countdown conditionally renders <CountdownForm onSetCountdown={this.handleSetCountdown}/>  
2. <CountdownForm> collects value and calls onSetCountdown  
3. <Countdown> handleSetCountdown sets state of count + countdownStatus to 'started'
- <Countdown> componentDidUpdate registers status change and starts calls startTimer()  
- startTimer() updates the state each second   
- <Countdown> renders the <Clock> and the <Controls> (conditionally) passing in the countdownStatus string and onStatusChange func as props  
4. <Control> renders the Pause button (conditionally) and the Clear button - both with onStatusChange function attached  
- User clicks Pause:
5. <Countdown> handleStatusChange() sets new countDownStatus to pause
- <Countdown> renders <Clock> and <Controls> with new countdownStatus
   