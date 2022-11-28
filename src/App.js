import './scss/style.css';
import Header from './components/Header'
import Product from './components/Product'
import Footer from './components/Footer'
import photo from './img/www.jpg'

let newArr = [
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'startups'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  },
  {
    id: 1,
    text: 'all'
  }
]

let arr = [
  {
    id: 1,
    text: 'all'
  },
  {
    id: 2,
    text: 'Quality Assurance'
  },
  {
    id: 3,
    text: 'Luxe Quality'
  },
  {
    id: 4,
    text: 'Technology'
  },
  {
    id: 5,
    text: 'Programming'
  },
  {
    id: 6,
    text: 'UI/UX Design'
  },
  {
    id: 7,
    text: 'Wep Development'
  },
  {
    id: 8,
    text: 'Management'
  },
  {
    id: 9,
    text: 'Startups'
  },
  {
    id: 10,
    text: 'Outsoursing'
  },
  {
    id: 11,
    text: 'customers'
  }
]

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <div className='block'>
          <h1>
            Luxe Quality Blog
          </h1>
          <div className='text'>
            {
              arr.map(item => <span>{item.text}</span>)
            }
          </div>
        </div>

        <div className='container'>
          <div className='container_content'>
            <div>
              <time>nov 02, 2022</time>
            </div>
            <p>Quality Assurance</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Porro repellendus pariatur odit! Voluptatum
              quis sint tempora quam. Sequi, nemo! Voluptate
              labore delectus culpa, cupiditate suscipit nulla
              assumenda cum mollitia quisquam.
            </span>
          </div>
          <div className='container_img'>
            <img src={photo} alt="" />
          </div>
        </div>

        <div className='block_product'>
          {
            newArr.map(item => <Product />)
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;