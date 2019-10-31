/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/OldDognoob
*/
axios.get('https://api.github.com/users/OldDognoob')
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log('error');
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

function cardUser(userinfo){
   // 1- Create HTML markup
  const card = document.createElement('div');
  const cardimage = document.createElement('img');
  const cardinfo = document.createElement('div');
  const cardh3 = dosument.createElement('h3');
  const carduserNamepara1=document.createElement('p');
  const cardLocationpara2=document.createElement('p');
  const cardProfilepara3=document.createElement('p');
  const cardaddresshref=document.createElement('a');
  const cardfollowerspara4=document.createElement('p');
  const cardfollowingpara5=document.createElement('p');
  const cardbiopara6=document.createElement('p');

  // 2- Define HTML structure
  card.appendChild(h3);
  card.appendChild(userNamepara1);
  card.appendChild(Locationpara2);
  card.appendChild(Profilepara3);
  card.appendChild(followerspara4);
  card.appendChild(followingpara5);
  card.appendChild(biopara6);
  card.appendChild(addresshref);

  // 3- Add some class names
  carddiv.classList.add('.card');
  carddiv.classList.add('.card-info');
  cardh3.classList.add('.name');
  carduserNamepara1.classList.add('.username');

  // 4- Add some content!
  h3.textContent=userInfo.name;
  userNamepara1.textContent=userInfo.login;
  locationpara2.textContent= userInfo.location;
  profilepara3.textContent='Profile:';
  anchor.textContent=userAddress.html_url;
  followerspara4.textContent=`Followers: ${userInfo.followers}`;
  followingpara5.textContent=`Following: ${userInfo.following}`;
  biopara6.textContent=`Bio: ${userInfo.bio}`;


  return card;
}

const divcard = document.querySelector('.cards');
// Making API Request
axios.get('https://api.github.com/users/OldDognoob')
.then(response =>{
 response.data.forEach(users => {
   card.append.cardUser(users.data);
 });
})
.catch(error =>{
 console.log(error);
});

