import css from "./hotstar.module.css"
import logo from "./disney-hotstar-logo-.png"
import srch from "./search.png"
import kids from "./kids.png"
const Hotstar=()=>{
    return(
    <div id={css.bg}>   
        <div>
            <section id={css.nav}>
                <article>
                    <div className={css.span}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={css.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={css.menu}>
                        <ol>
                            <li>
                                <a href="">TV</a>
                            </li>
                            <li>
                                <a href="">Movie</a>
                            </li>
                            <li>
                                <a href="">Sports</a>
                            </li>
                            <li>
                                <a href="">Disney+</a>
                            </li>
                            <li>
                                <a href=""><img src={kids} alt="" /></a>
                            </li>
                        </ol>
                    </div>
                    <div className={css.search}>
                        <input type="text" placeholder="Search" />
                        <img src={srch} alt="" />
                    </div>
                    <div className={css.subbtn}>
                        <button>SUBSCRIBE</button>
                    </div>
                    <div className={css.login}>
                        <a href="">LOGIN</a>
                    </div>
                </article>
            </section>
        </div>
    </div>
    )
}
export default Hotstar