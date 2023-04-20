import css from "./myntra.module.css"
import logo from "./logo.jpg"
import search from "./search.png"
import user from "./user.png"
import heart from "./heart.png"
import bag from "./bag.png"
const Myntra=()=>{
    return(
        <div >
            <section>
                <article>
                    <div id={css.nav}>
                        <div id={css.logo}>
                            <a href=""><img src={logo} alt="" /></a>
                        </div>
                        <div id={css.menu}>
                            <ul>
                                <li>
                                    <a href="">MEN</a>
                                </li>
                                <li>
                                    <a href="">WOMEN</a>
                                </li>
                                <li>
                                    <a href="">KIDS</a>
                                </li>
                                <li>
                                    <a href="">HOME & LIVING</a>
                                </li>
                                <li>
                                    <a href="">BEAUTY</a>
                                </li>
                                <li>
                                    <a href="" id={css.sup}>STUDIO <sup>NEW</sup></a>
                                </li>
                            </ul>
                        </div>
                        <div id={css.oserch}>
                            <div id={css.search}>
                                <a href=""><img src={search} alt="" /></a>
                                <input type="text" placeholder= " Search for products,brands and more"/>
                            </div>
                        </div>
                        <div id={css.threeimage}>
                            <div id={css.user}>
                                {/* <img src={user} alt="" /> */}
                                <a href=""><i class="fa-solid fa-user"></i></a>
                                <a href="">Profile</a>
                            </div>
                            <div id={css.wish}>
                                {/* <img src={heart} alt="" /> */}
                                <a href=""><i class="fa-regular fa-heart"></i></a>
                                <a href="">Wishlist</a>
                            </div>
                            <div id={css.bag}>
                                {/* <img src={bag} alt="" /> */}
                                <a href=""><i className="fa-solid fa-bag-shopping"></i></a>
                                <a href=""> Bag </a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Myntra