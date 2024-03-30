// const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=20'

// const cards = document.querySelector('.cards-container')

// const getCards = async (url) => {
//     try {
//       const response = await fetch(url)
//       const data = await response.json()
//       return data
//     } catch (e) {
//       console.log(e)
//     }
//  }

// getCards(URL)


// const renderCards = async (url) => {
//   const cards = document.querySelector('.cards')
//   const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=20'
//   try {
//     const posts = await getCards(URL)

//     posts.forEach(post => {
//       const card = document.createElement('div')
//       card.className = 'card'

//       const title = document.createElement('h2')
//       title.textContent = post.title

//       const description = document.createElement('p')
//       description.textContent = post.body

//       card.appendChild(title)
//       card.appendChild(description)
//       card.appendChild(card)
//     })
//   } catch (e) {
//     console.log(e)
//   }
// }

// window.onload = renderCards





const renderCards = async () => {
  const cardsContainer = document.querySelector('.cards-container');
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=12';

  try {
    const response = await fetch(url);
    const posts = await response.json();

    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';

      const image = document.createElement('img');
      image.src = 'https://imgtest.mir24.tv/uploaded/images/crops/2022/December/870x489_0x288_detail_crop_20221209161152_8bb6fa4f_3f45884d4cc76f63b7f18aef0947b2d15f90a68dcccee5011321ab1971e77ce9.jpg'
      // image.alt = 'Card Image';

      const title = document.createElement('h2');
      title.textContent = post.title;

      const description = document.createElement('p');
      description.textContent = post.body;

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(description);
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

window.onload = renderCards;