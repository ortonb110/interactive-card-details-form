import React, { useState, useEffect } from "react";


import "../styles.css";
import bgMobile from '../assets/images/bg-main-mobile.png';
import bgDesktop from '../assets/images/bg-main-desktop.png';
import cardBack from '../assets/images/bg-card-back.png';
import cardFront from '../assets/images/bg-card-front.png';
import cardLogo from '../assets/images/card-logo.svg';
import completeLogo from '../assets/images/icon-complete.svg';



function Card() {
    let name =document.getElementById("name");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let cvc = document.getElementById("cvc");
    let cardSpan = document.querySelector("#cardNumber");
    let j = 0;
    const [enteredName, setEnteredName] = useState(null);
  const [enteredCardNumber, setEnteredCardNumber] = useState(null);
  const [enteredMonth, setEnteredMonth] = useState(null);
  const [enteredYear, setEnteredYear] = useState(null);
  const [enteredCvc, setEnteredCvc] = useState(null);
  
  
  
  const nameChangeHandler = (event) => {
      setEnteredName(event.target.value);
  };
  
  const cardNumberChangeHandler = (event) => {
    setEnteredCardNumber(event.target.value);
  };
  const cardCvcChangeHandler = (event) => {
    setEnteredCvc(event.target.value);
  };
  const cardYearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  };
  const cardMonthChangeHandler = (event) => {
    setEnteredMonth(event.target.value);
  };

  const onSubmitHandler = (event)=> {
    event.preventDefault();
    if(enteredCardNumber.length == 14 && enteredName.length > 1 && enteredCvc.length ==3 && enteredMonth <= 12 && enteredYear >= 23){
       document.getElementById("form").classList.add("hidden");
       document.getElementById("thanks").classList.remove("hidden");
    }
    
  }



  useEffect(
    ()=> {
       if(enteredName != null) {
        name.textContent = enteredName;
       }
    }, [enteredName]
);
  useEffect(
    ()=> {
       if(enteredMonth != null) {
        month.textContent = enteredMonth;
       }
    }, [enteredMonth]
);
  useEffect(
    ()=> {
       if(enteredYear != null) {
        year.textContent = enteredYear;
       }
    }, [enteredYear]
);
  useEffect(
    ()=> {
       if(enteredCvc != null) {
        cvc.textContent = enteredCvc;
       }
    }, [enteredCvc]
);

    useEffect(
        
        ()=> {
           if(enteredCardNumber != null) {
            // for(let i =0; i <cardNumberSpan.length; i++){
            //     for(j; j < cardlength; j++) {
            //         cardNumberSpan[i].textContent = enteredCardNumber[j];
            //     }
            // }
                cardSpan.textContent = enteredCardNumber;
           }

        }, [enteredCardNumber]
    )

    return(
        <div className="h-screen md:grid md:grid-cols-3 ">
            <div className="relative md:col-span-1">
                <div className="h-[240px] overflow-hidden md:overflow-visible "> {/*Card component */}
                    {/* Background-image */}
                    <img src={bgMobile} aria-hidden="true" className=" md:hidden w-full " />
                    <img src={bgDesktop} aria-hidden="true" className="hidden md:block md:h-screen" />
                </div>
                <div className="md:absolute  md:top-[440px] md:left-[0px] lg:left-[200px] md:w-[447px] lg:top-[450px] lg:ml-0">  {/* Card Back */}
                    <img src={cardBack} aria-hidden className="absolute w-[286px] card-back top-[32px] left-[73px] h-[157px] md:w-[447px] md:h-[245px]"/>
                    <span id="cvc" className="text-[12px] md:text-[25px] text-white absolute right-[63px] top-[100px] md:top-[135px] md:left-[420px]">000</span>
                </div>
                <div className="absolute left-[16px]  top-[123px] w-[286px] h-[157px] md:top-[200px] md:left-[0px] lg:left-[160px] md:w-[447px] md:h-[245px]"> {/* Card Front */}
                    <img src={cardLogo} alt="" className="top-[18px] absolute w-[54px] left-[20px] " />
                    <img src={cardFront} aria-hidden className=" md:w-[447px] md:h-[245px]"/>
                    <div  className="text-[19px] text-white absolute top-[85px] right-0 left-0 tracking-widest md:text-[30px] md:top-[120px] md:right-[25px] md:tracking-[0.3rem] w-full text-center">
                        <span id="cardNumber" className="md:tracking-[7px]">0000000000000000</span>
                    </div>
                    <div className="text-[12px] text-white absolute top-[125px] uppercase px-5 md:text-[14px] md:top-[190px] md:px-8 w-full flex justify-between">
                        <span  id="name">Jane Appleseed</span>
                        <div>
                            <span id="month">00</span>
                            <span>/</span>
                            <span id="year">00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[5rem] px-[24px] md:col-span-2 md:place-content-center md:grid relative "> {/*Card Details */}
                <form action="#" id="form" className="flex flex-col md:w-[381px] md:ml-[12rem] lg:ml-0" onSubmit={onSubmitHandler}>
                    <div className="mb-5">
                        <label className="uppercase tracking-wider">cardholder name</label>
                        <input type="text" placeholder="e.g. Jane Appleseed" onChange={nameChangeHandler} className="border-2 rounded-[8px] w-full px-[10px] py-[10px] transition-all ease-linear duration-300 focus:ring focus:outline-none focus:ring-[#610595]" required/>
                    </div>
                    <div className="mb-5">
                        <label className="uppercase tracking-wider">card number</label>
                        <input type="number" id="cardNumber"  placeholder="e.g. 1234 5678 9123 0000" onChange={cardNumberChangeHandler} className=" border-2 rounded-[8px] w-full px-[10px] py-[10px] transition-all ease-linear duration-300 focus:ring focus:outline-none focus:ring-[#610595]" required />
                    </div>
                    <div className="mb-5">
                        <label className="uppercase tracking-wider">exp. date(mm/yy) cvc</label>
                        <div className="flex justify-between">
                            <input type="number"  placeholder=" mm" onChange={cardMonthChangeHandler} className="border-2 rounded-[8px] w-[25%] px-[10px] py-[10px] mr-2 transition-all ease-linear duration-300 focus:ring focus:outline-none focus:ring-[#610595] " required />
                            <input type="number"  placeholder=" yy" onChange={cardYearChangeHandler} className="border-2 rounded-[8px] w-[25%] px-[10px] py-[10px] mr-2 transition-all ease-linear duration-300 focus:ring focus:outline-none focus:ring-[#610595]" required />
                            <input type="number"  placeholder="e.g. 123" onChange={cardCvcChangeHandler} className="border-2 rounded-[8px]  w-[50%] px-[10px] py-[10px] transition-all ease-linear duration-300 focus:ring focus:outline-none focus:ring-[#610595]" required />
                        </div>
                    </div>
                    <button type="submit" className="text-center capitalize mt-2 w-full py-3 text-white bg-[#21092F] rounded-[8px] text-xl ">confirm</button>
                </form>
                <div id="thanks" className="md:w-[381px] md:ml-[12rem] lg:ml-0 text-center hidden">
                    <img src={completeLogo} className="w-[80px] mx-auto mb-[40px]" alt="Complete" />
                    <h2 className="uppercase mb-[16px] text-[28px] tracking-widest">thank you!</h2>
                    <p className="text-[18px] text-gray-500 mb-[16px]">We've added your card details</p>
                    <button className="text-center capitalize mt-2 w-full py-3 text-white bg-[#21092F] rounded-[8px] text-xl">Continue</button>
                </div>
                <p className="absolute md:bottom-0 md:w-full  left-0 text-center px-[15px] mt-[40px] md:mt-0 text-gray-400">Challenge by <a href="https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw" className="capitalize text-gray-800 hover:text-gray-400">Frontend mentor.</a>Coded by <a href="https://github.com/ortonb110" className="capitalize text-gray-800 hover:text-gray-400">Orton Bright</a></p>
            </div>
        </div>
    )
    
   
}


export default Card;