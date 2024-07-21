const player = {
    name: 'Jawad Hussain',
    club: 'Balasoor',
    address: {
      city: 'Mardan'
    }
  };
  
  // console.log( player.address.city );
  
  const { name, club, address: { city } } = player;
  
  console.log(`${name} plays for ${club}`);
  
  console.log(`${name} lives in ${city}`);
  
  



// let word1 = 'Jawad';
// let word2 = 'Hussain';
// let num1 = 2;
// let num2 = 3;

// const fullName = `${num1 + num2} ${word2}`;
// let example = `${word1} 
// ${word2}`;
// console.log(fullName);
// console.log(example)
// document.getElementById('example').innerText = example;