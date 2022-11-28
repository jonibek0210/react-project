import img from '../img/vvv.jpg'

export default function Product() {
   return (
      <div className="product">
         <div className="product_img">
            <img src={img} alt="" />
         </div>
         <div className="product_info">
            <time>oct 2, 2022</time>
            <span>Wep Development</span>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button>by brendan allfort</button>
         </div>
      </div>
   )
}