import styles from "./article/[articleTitle]/articleStyles.module.css"

const NotFound = () => {
    return(
        <div className={styles.notFoundDiv}>
            <span className={styles.notFoundh3}>Error 404!<br/>Page not found!</span>
        </div>
    )
}

export default NotFound;