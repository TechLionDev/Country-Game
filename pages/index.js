import React, { useState } from 'react';

const App = () => {
  const [numOfQuestions, setNumOfQuestions] = useState(0);
	const [errMsg, setErrMsg] = useState('');
  const [succMsg, setSuccMsg] = useState('');
  const [score, setScore] = useState(0);
  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cape Verde", "CAR", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Czech Republic", "Denmark", "Democratic Republic of Congo", "Democratic Republic of the Congo" , "Djibouti", "Dominica", "Dominican Republic", "DRC", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of Congo", "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkiye", "Turkmenistan", "Tuvalu", "UAE", "Uganda", "UK", "Ukraine", "United Arab Emirates", "United Kingdom","United States", "United States of America", "Uruguay", "US", "USA", "Uzbekistan", "Vanuatu", "Vatican", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
  const allChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Y', 'Z'];
	const [currLetter, setCurrLetter] = useState(allChars[Math.floor(Math.random() * allChars.length)])
  const askQnum = () => {
    const num = prompt('How many questions do you want to answer?');
    setNumOfQuestions(parseInt(num));
  };

  const replayGame = () => {
		setCurrLetter(allChars[Math.floor(Math.random() * allChars.length)])
    setScore(0);
    askQnum();
  };

	const isCountry = (input) =>{
		for (let i = 0; i < countries.length; i++){
			let country = countries[i].toUpperCase();
			if (input.trim().toUpperCase() == country){
				return true
			}
		}
		return false
	}

  const checkAnswer = (answer) => {
    if (answer === null || answer.trim() === '') {
      return;
    }

    const firstChar = answer.trim().substring(0,1);
    if (currLetter.toUpperCase()==firstChar.toUpperCase()) {
      if (isCountry(answer)){
				setScore(score + 1);
      if (score + 1 === numOfQuestions) {
        setSuccMsg('Game over! You win!');
        replayGame();
      } else {
        setSuccMsg(`Correct! Your score is now ${score + 1}`);
				setCurrLetter(allChars[Math.floor(Math.random() * allChars.length)])
      }
    } else {
      setErrMsg(`Wrong! ${answer} is not a country! Maybe You Spelled It Wrong?`);
    }
		}else{
			setErrMsg(`Wrong answer! The first letter should be ${currLetter}!`)
		}
  };

  const handleKeyPress = (event) => {
    setErrMsg()
    setSuccMsg()
    if (event.key === 'Enter') {
      checkAnswer(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <div className='flex w-full justify-center my-8'>
<div className='flex flex-col max-w-xl justify-center items-center gap-4 bg-sky-100 p-8 rounded-lg min-w-xl'>
      <h1 className='text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>Country Game</h1>
        <p>Enter the name of a country that begins with the letter: </p>
        <h3 className='text-2xl font-black '>{currLetter}</h3>
      <input placeholder='Type Your Guess Here...' className='bg-gray-50 border-blue-100 text-gray-900 sm:text-sm rounded-lg focus:outline-none border-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5' type="text" onKeyPress={handleKeyPress} />
      <p>Score: {score}</p>
      <div
                className={
                  !errMsg
                    ? "hidden"
                    : "" + "p-4 font-medium bg-red-200 text-red-700 rounded-lg"
                }
              >
                {errMsg}
              </div>
              <div
                className={
                  !succMsg
                    ? "hidden"
                    : "" + "p-4 font-medium bg-green-200 text-green-700 rounded-lg"
                }
              >
                {succMsg}
              </div>
    </div>      
    </div>
  );
};

export default App;
