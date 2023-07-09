// import "./comp1.scss"//全局引入
//模块化引入
import styles from "./comp1.module.scss"

export default function index() {
  return (
    <div className={styles.box}>
        <p>Comp1</p>
    </div>
  )
}
