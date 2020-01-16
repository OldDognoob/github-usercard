/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/OldDognoob
*/
axios
  .get("https://api.github.com/users/OldDognoob")
  // .then(response => {
  //   console.log(response.data);
  //   cardUser(response.data);
  // })
  // .catch(error => {
  //   console.log(error.response);
  .then(response => {
    const data = response.data;
    cards.appendChild(cardMaker(response.data));
    console.log(response.data);
  })
  .catch(error => {
    console.log(error)
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// function cardUser(data) {
//   // 1- Create HTML markup
//   const parent = document.querySelector(".cards");

//   const card = document.createElement("div");
//   const cardimage = document.createElement("img");
//   const cardinfo = document.createElement("div");
//   const cardh3 = document.createElement("h3");
//   const p1 = document.createElement("p");
//   const p2 = document.createElement("p");
//   const p3 = document.createElement("p");
//   const a = document.createElement("a");
//   const p4 = document.createElement("p");
//   const p5 = document.createElement("p");
//   const p6 = document.createElement("p");

//   // 2- Define HTML structure
//   parent.appendChild(card);
//   card.appendChild(cardinfo);
//   card.appendChild(cardimage);
//   cardimage.src = data.avatar_url;

//   cardinfo.appendChild(cardh3);
//   cardinfo.appendChild(p1);
//   cardinfo.appendChild(p2);
//   cardinfo.appendChild(p3);
//   cardinfo.appendChild(p4);
//   cardinfo.appendChild(p5);
//   cardinfo.appendChild(p6);
//   p3.appendChild(a);

//   // 3- Add some class names
//   card.classList.add("card");
//   cardinfo.classList.add("card-info");
//   cardh3.classList.add("name");
//   p1.classList.add("username");

//   // 4- Add some content!
//   cardh3.textContent = `${data.name}`;
//   p1.textContent = `${data.login}`;
//   p2.textContent = `Location: ${data.location}`;
//   p3.textContent = `Profile: `;
//   a.textContent = data.html_url;
//   p4.textContent = `Followers: ${userInfo.followers}`;
//   p5.textContent = `Following: ${userInfo.following}`;
//   p6.textContent = `Bio: ${userInfo.bio}`;
//   cardimage.src = data.avatar_url;
//   a.href = data.html_url;

//   // 5- Add some attributes



//   return card;
// }

// // 0 -create function
// function createCard(object){
//   // 1- create HTML element
//   const card = document.createElement('div');
//   const img = document.createElement('img');
//   const cardInfo = document.createElement('div');
//   const cardh3 = document.createElement('h3');
//   const pUser = document.createElement('p');
//   const p2 = document.createElement('p');
//   const p3 = document.createElement('p');
//   const a = document.createElement('a');
//   const p4 = document.createElement('p');
//   const p5 = document.createElement('p');
//   const p6 = document.createElement('p');

//   // 2-define HTML structure
//   p3.appendChild(a);
//   cardInfo.appendChild(cardh3);
//   cardInfo.appendChild(pUser);
//   cardInfo.appendChild(p2);
//   cardInfo.appendChild(p3);
//   cardInfo.appendChild(p4);
//   cardInfo.appendChild(p5);
//   cardInfo.appendChild(p6);
//   card.appendChild(img);
//   card.appendChild(cardInfo);

//   // 3-Add css style classes

//   card.classList.add("card");
//   cardInfo.classList.add("card-info");
//   cardh3.classList.add("name");
//   pUser.classList.add("username");

  // 4-Configure text / image content
  // img.src = data.avatar_url;
  // cardh3.textContent = `${data.name}`;
  // pUser.textContent = `${data.login}`;
  // p2.textContent = `Location: ${data.location}`;
  // p3.textContent = 'Profile: ';
  // a.textContent = data.html_url;
  // a.href = data.html_url;
  // p4.textContent = `Followers: ${data.followers}`;
  // p5.textContent = `Following: ${data.following}`;
  // p6.textContent = `Bio: ${data.bio}`;

//  return card;
// }
//selecting parent 
// const cards = document.querySelector(".cards");

//6-generic 
//  axios.get("https://api.github.com/users/<OldDogNoob>/followers")
//  .then((response) =>{
//    response.data.forEach(item =>{
//      const data = response.data;
//      cards.append(cards);
//    });
//  })
//  .catch(error => {
//    console.log(error);
//  });
// const card = document.querySelector(".cards");

// 0 -create function
   function cardMaker(data){
// 1- create HTML element
const cardDiv = document.createElement('div');
const cardImage = document.createElement('img');
const cardInfo = document.createElement('div'); 
const cardName = document.createElement('h3');
const cardProfile = document.createElement('p');
const cardGitAddress = document.createElement('a');
const cardUserName = document.createElement('p');
const cardLocation = document.createElement('p');
const cardFollowers = document.createElement('p');
const cardFollowing = document.createElement('p');
const cardBio = document.createElement('p');
// 2-define HTML structure
   cardDiv.classList.add('card');
   cardInfo.classList.add('card-info');
   cardName.classList.add('name');
   cardUserName.classList.add('username');
// 3-Add css style classes
cardDiv.append(cardImage);
cardDiv.append(cardInfo);
cardInfo.append(cardName)
cardInfo.append(cardUserName);
cardInfo.append(cardUserName);  
cardInfo.append(cardLocation);
cardInfo.append(cardProfile); 
cardInfo.append(cardFollowers);
cardInfo.append(cardFollowing) 
cardInfo.append(cardBio);
cardProfile.appendChild(cardGitAddress);
// 4-Configure text / image content
cardImage.src = data.avatar_url;
cardName.textContent = data.name;
cardUserName.textContent = data.login;
cardLocation.textContent = `Location: ${data.location}`;
cardGitAddress.src = `Profile: ${data.url}`;
cardFollowers.textContent = `Followers: ${data.followers}`;
cardFollowing.textContent = `Following: ${data.following}`;
cardBio.textContent = `Bio: ${data.bio}`;


       return cardDiv;


   };


//selecting parent 
   const cards = document.querySelector(".cards");

// Making API Request
