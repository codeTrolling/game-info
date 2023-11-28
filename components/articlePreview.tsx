import styles from "../styles/articlePreviewStyles.module.css";
import Link from "next/link";

type articleType = {
    image: string,
    title: string,
    description: string,
    views: number
}
const ArticlePreview = (article: articleType) => {
    return(
        <Link href={"/article/" + article.title} className={styles.articleContainer}>
            <img src={article.image} alt="" className={styles.articleImage}/>
            <div className="flex-column" style={{padding: "8px"}}>
                <label className={styles.title}>{article.title}</label>
                <div className={styles.description}>
                    <span>{article.description}</span>
                </div>
                <label className={styles.views}>{"views: " + article.views.toString()}</label>
            </div>
        </Link>
    )
}

export default ArticlePreview