import styles from './page.module.css'
import CS2 from "../assets/cs2.png"
import LOL from "../assets/LeagueOfLegends.png"
import Remnant from "../assets/Remnant.png"
import LiesOfP from "../assets/LiesOfP.png"
import Fortnite from "../assets/Fortnite.png"
import ArticlePreview from '@/components/articlePreview'

export default function Home() {

  // just some example data for the different articles. In a real world app this would be fetched from a database that I haven't decided on adding yet. Might add it in the future.
  const exampleData = [
    {
      "image": CS2,
      "title": "Top 10 best FPS games",
      "description": "So you are into FPS games but want to try something different than the game you are currently playing? We've got you covered. Here are some of the best FPS games that are still popular today!",
      "views": 327
    },
    {
      "image": LOL,
      "title": "Best competitive PvP games",
      "description": "Are you a competitive PvP player looking for the next game to grind for hours while being a sweaty tryhard all? Here are some of the most popular highly competitive and skill based games in the market!",
      "views": 523
    },
    {
      "image": Remnant,
      "title": "Coop games to play with some friends",
      "description": "So you and your friends want to play something together but are tired of random team mates or just want to chill and do some dumb stuff? We understand that greatly so here are some of the best coop games to play with your friends",
      "views": 1473
    },
    {
      "image": LiesOfP,
      "title": "Non FromSoftware souls-like games",
      "description": "Are you a fan of the souls genre but have already played through all of FromSoftware's games? Do you want to give other developers a chance? Here are some of the best non FromSoftware souls-like games that some would argue are worthy of being called a true souls competitor",
      "views": 189
    },
    {
      "image": Fortnite,
      "title": "Best free games on the market",
      "description": "Are you looking for some fun games to spend countless hours in but you also don't quite have the funds to buy whatever you see? That's ok. There are a ton of great free games out there that are have the same quality as the typical AAA paid games. Some of them include:",
      "views": 5311
    }
  ]

  return (
    <>
    <h1 style={{textAlign: "center"}}>Game info</h1>
    <span className={styles.description}>All the information you need to find the perfect game for you!</span>
    <div className={styles.articlesContainer}>
      {
        exampleData.map((item, index) => <ArticlePreview key={index} image={item.image.src} title={item.title} description={item.description} views={item.views}/>)
      }
    </div>
    </>
  )
}
