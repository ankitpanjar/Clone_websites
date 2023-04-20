import css from "./zee.module.css"
import logo from "./logo.png"
import search from "./search.png"
import lang from "./lang.png"
import crown from "./crown.png"
const Zee=()=>{
    return(
        <div >
            <section id={css.nav}>
                <article>
                    <div className={css.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={css.menu}>
                        <ol >
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Tv Shows</a>
                            </li>
                            <li>
                                <a href="">Movies</a>
                            </li>
                            {/* <li>
                                <a href="">Cricket</a>
                            </li>
                            <li>
                                <a href="">Web Series</a>
                            </li> */}
                            <li>
                            <a href=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grid" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-grid fa-lg"><path fill="currentColor" d="M0 72C0 49.9 17.9 32 40 32H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V72zM0 232c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V232zM128 392v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40zM160 72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V72zM288 232v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM160 392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392zM448 72v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM320 232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V232zM448 392v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40z" className=""></path></svg></a>
                            </li>
                        </ol>
                    </div>
                    <div className={css.search}>
                        <div>
                            {/* <img src={search} alt="" /> */}<i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search for Movies, Shows, Channels etc."  />
                        </div>
                    </div>
                    <div className={css.rightnav}>
                        <span className={css.lang}>
                           <a href="">A<sup>अ</sup></a>
                        </span>
                        <span className={css.login}>
                            <a href="">LOGIN</a>
                        </span>
                        <div className={css.buyplan}>
                            <a href=""><i className="fa-solid fa-crown">  BUY PLAN</i></a>
                            
                        </div>
                        <div className={css.menu2}>
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Zee