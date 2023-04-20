import css from "./flipkar.module.css"
import logo from "./logo.jpg"
import div1 from "./div1.webp"
import div2 from "./div2.webp"
import div3 from "./div3.webp"
import div4 from "./div4.webp"
import div5 from "./div5.webp"
import div6 from "./div6.webp"
import div7 from "./div7.webp"
import div8 from "./div8.webp"
import div9 from "./div9.webp"
import div10 from "./div10.webp"
const Flipkart=()=>{
    return(
        <div>
            <section id={css.nav}>
                    <article>
                        <div className={css.empty}>

                        </div>
                        <div className={css.logo}>
                            <img src={logo} alt="" />
                        </div>
                        
                        <div className={css.search}>
                            <div className={css.outersearchglass}>
                                <input type="text" placeholder="Search for products, brands and more" />
                                <svg width="20" height="20" viewBox="0 0 17 18" class="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path class="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                            </div>
                        </div>
                        <div className={css.login}>
                            <a href="">Login</a>
                        </div>
                        <div className={css.seller}>                    
                            <a href="">Become a Seller</a>                        
                        </div>
                        <div className={css.more}>
                            <a href="">More <svg width="5" height="8" viewBox="0 0 16 27" transform="rotate(-90)" xmlns="http://www.w3.org/2000/svg" class="_2sVfI7"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#ffff" class="_1zrN4q"></path></svg></a>
                        </div>
                        <div className={css.cart}>
                            <a href=""><svg class="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg> Cart</a>
                        </div>
                        <div className={css.empty}>

                        </div>
                    </article>
            </section>
            <section id={css.nav2}>
                <div className={css.outerdiv}>
                    <div className={css.div1}>
                        <a href="">
                            <img src={div1} alt="" />
                        <div>Grocery</div>
                        </a>
                    </div>
                    <div className={css.div2}>
                        <a href=""><img src={div2} alt="" />
                        <div>Mobiles</div>
                        </a>
                    </div>
                    <div className={css.div3}>
                        <a href=""><img src={div3} alt="" />
                        <div>Fashion <svg width="5" height="8" viewBox="0 0 16 27" transform="rotate(-90)" xmlns="http://www.w3.org/2000/svg" class="_2sVfI7"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="black" class="_1zrN4q"></path></svg></div>
                        </a>
                    </div>
                    <div className={css.div4}>
                        <a href=""><img src={div4} alt="" />
                        <div>Electronics <svg width="5" height="8" viewBox="0 0 16 27" transform="rotate(-90)" xmlns="http://www.w3.org/2000/svg" class="_2sVfI7"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="black" class="_1zrN4q"></path></svg></div>
                        </a>
                    </div>
                    <div className={css.div5}>
                        <a href=""><img src={div5} alt="" />
                        <div>Home <svg width="5" height="8" viewBox="0 0 16 27" transform="rotate(-90)" xmlns="http://www.w3.org/2000/svg" class="_2sVfI7"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="black" class="_1zrN4q"></path></svg></div>
                        </a>
                    </div>
                    <div className={css.div6}>
                        <a href=""><img src={div6} alt="" />
                        <div>Appliances</div>
                        </a>
                    </div>
                    <div className={css.div7}>
                        <a href=""><img src={div7} alt="" />
                        <div>Travel</div>
                        </a>
                    </div>
                    <div className={css.div8}>
                        <a href=""><img src={div8} alt="" />
                        <div>Top Offers</div>
                        </a>
                    </div>
                    <div className={css.div9}>
                        <a href=""><img src={div9} alt="" />
                        <div>Beauty, Toys & More <svg width="5" height="8" viewBox="0 0 16 27" transform="rotate(-90)" xmlns="http://www.w3.org/2000/svg" class="_2sVfI7"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="black" class="_1zrN4q"></path></svg></div>
                        </a>
                    </div>
                    <div className={css.div10}>
                        <a href=""><img src={div10} alt="" />
                        <div>Two Wheelers <svg width="5" height="8" viewBox="0 0 16 27" transform="rotate(-90)" xmlns="http://www.w3.org/2000/svg" class="_2sVfI7"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="black" class="_1zrN4q"></path></svg></div>
                        </a>
                    </div>
                </div>
            </section>
        </div>   
    )
}
export default Flipkart