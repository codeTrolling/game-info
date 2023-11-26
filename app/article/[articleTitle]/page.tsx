import styles from './articleStyles.module.css'
import CS2 from "../../../assets/cs2.png"
import LOL from "../../../assets/LeagueOfLegends.png"
import Remnant from "../../../assets/Remnant.png"
import LiesOfP from "../../../assets/LiesOfP.png"
import Fortnite from "../../../assets/Fortnite.png"

const Article = ({params}: any) => {
    const exampleData = [
        {
          "image": CS2.src,
          "title": "Top 10 best FPS games",
          "description": "So you are into FPS games but want to try something different than the game you are currently playing? We've got you covered. Here are some of the best FPS games that are still popular today!",
          "innerHtml": [<><h4 className={styles.segment}>Apex Legends</h4>
          <article style={{marginBottom: "20px"}}>This battle royale hero shooter has been a very popular game for quite some time now. Apex legends has a fast paced shooting style and a very satisfying movement system. Great game for people who want to play a difficult game with a high skill cap and want to rely on their mechanics more than anything else.</article>
          <h4 className={styles.segment}>Rainbow six siege</h4>
          <article style={{marginBottom: "20px"}}>Rainbow six siege is a tactical shooter with many characters in it's roaster, each equipped with it's unique gadgets and weapons. This game places a great emphasis on the tactical aspect of a shooter. With genre classic plant/defuse gameplay, Rainbow six siege is a perfect game for people who want to play more tactically instead of relying on shooting only (clicking heads is still important though).</article>
          <h4 className={styles.segment}>Other sample title</h4>
          <article style={{marginBottom: "20px"}}>Other sample text</article></>],
          "views": 327
        },
        {
          "image": LOL.src,
          "title": "Best competitive PvP games",
          "description": "Are you a competitive PvP player looking for the next game to grind for hours while being a sweaty tryhard all? Here are some of the most popular highly competitive and skill based games in the market!",
          "innerHtml": [<><h4 className={styles.segment}>Rocket league</h4>
          <article style={{marginBottom: "20px"}}>Rocket league is essentially soccer but with a giant ball and speedy cars. Don't let that simple look concieve you though. This game has a sky high skill ceiling and is a very competitive game with a huge esports scene. It is also free so you don't lose anything for trying it out.</article>
          <h4 className={styles.segment}>Dota 2</h4>
          <article style={{marginBottom: "20px"}}>Dota 2 is Valve's MOBA game with tons of unique characters and a lot of skill expression. This is an old game but even so it still has a great number of active players as well as one of the biggest esport scenes with it being the holder of the highest prize pool in any esports ever. Be prepared to lose a lot though as it is no easy task to learn and become a good player.</article>
          <h4 className={styles.segment}>Other sample title</h4>
          <article style={{marginBottom: "20px"}}>More sample text here</article></>],
          "views": 523
        },
        {
          "image": Remnant.src,
          "title": "Coop games to play with some friends",
          "description": "So you and your friends want to play something together but are tired of random team mates or just want to chill and do some dumb stuff? We understand that greatly so here are some of the best coop games to play with your friends",
          "innerHtml": [<><h4 className={styles.segment}>Cuphead</h4>
          <article style={{marginBottom: "20px"}}>Cuphead is an indie 2D side scrolling platformer bullet hell made with traditional hand drawings and animations. Fun both solo and with a friend. The downsides are that it can be played by up to only 1 more person and locally at that. However steam has you covered! With steam remote play together you can play online with your friend by sharing your screen to them.</article>
          <h4 className={styles.segment}>Terraria</h4>
          <article style={{marginBottom: "20px"}}>Terraria is an old 2D sandbox game that has stayed popular for all this time. It has unique boss fights, countless items to gear up and a large randomly generated map to explore. What's more, this game can be heavily modded and a large part of the community takes part in creating different mods which add more items, bosses, areas and more. At just under 10$ this game is a great budget option to play with your friends.</article>
          <h4 className={styles.segment}>Elden Ring</h4>
          <article style={{marginBottom: "20px"}}>FromSoftware's wildely popular game "Elden Ring" is the company's newest souls game feating a staggering 150 unique bosses, tons of cool weapons and spells, a large world with a lot of hidden rooms and much more. Embark on your journey alone or with friends and be prepared for one of the most memorable games of 2022!</article>
          <h4 className={styles.segment}>Other sample title</h4>
          <article style={{marginBottom: "20px"}}>More sample text</article></>],
          "views": 1473
        },
        {
          "image": LiesOfP.src,
          "title": "Non FromSoftware souls-like games",
          "description": "Are you a fan of the souls genre but have already played through all of FromSoftware's games? Do you want to give other developers a chance? Here are some of the best non FromSoftware souls-like games that some would argue are worthy of being called a true souls competitor",
          "innerHtml": [<><h4 className={styles.segment}>Lords of the fallen (2023)</h4>
             <article style={{marginBottom: "20px"}}>Not to be mistaken with the older one, Lords of the fallen 2023 is much more polished than it's predecessor. It has a ton of different weapons you can use to create the best build suited for you, a whopping 34 unique bosses and much more. Set in a dark-fantasy world this is a great option for any fan of the genre.</article>
             <h4 className={styles.segment}>Wo Long: Fallen Dynasty</h4>
             <article style={{marginBottom: "20px"}}>Set in a world of demons and endless bloodshed, Wo Long: Fallen Dynasty is an action packed fast-paced combat souls-like by the creators of Nioh 2 (which we will talk about later in this article). Create your character and embark on a journey through 30 extremely challenging foes.</article>
             <h4 className={styles.segment}>Other sample title</h4>
             <article style={{marginBottom: "20px"}}>More sample text</article></>],
          "views": 189
        },
        {
          "image": Fortnite.src,
          "title": "Best free games on the market",
          "description": "Are you looking for some fun games to spend countless hours in but you also don't quite have the funds to buy whatever you see? That's ok. There are a ton of great free games out there that are have the same quality as the typical AAA paid games. Some of them include:",
          "innerHtml": [<><h4 className={styles.segment}>Brawlhalla</h4>
          <article style={{marginBottom: "20px"}}>Brawlhalla is a 2d platform fighter with a lot of different characters with unique moves. The goal? Push the enemy off the platform. Don't get it twisted thinking this is easy though. This game has a lot of ways for someone to show off their skills. Predicting enemy moves, unleashing devastating combos or maybe defeating your enemy unarmed, brawlhalla is the perfect game for fighting game enthusiasts that want to make a flashy play.</article>
          <h4 className={styles.segment}>Overwatch 2</h4>
          <article style={{marginBottom: "20px"}}>Overwatch 2 is a hero-based first person shooter with a fast paced combat. This is a 5v5 team game. Each team has 1 tank, 2 damage dealers and 2 supports(healers). Due to it's gameplay's fast nature, Overwatch 2 is a very aim intensive game that requires a lot of precision and great team work. Do not let the negative reviews discourage you from playing. Overwatch 2 still has a solid player base and all the negative reviews are due to false promises which got the community mad. However the game itself is still not to be ignored and is worth giving a try.</article>
          <h4 className={styles.segment}>VALORANT</h4>
          <article style={{marginBottom: "20px"}}>Riot games have done it again. They have created another game which is part of the most played games currently. This 5v5 hero shooter has a lot of tactical elements in it's gameplay. Great for both veterans of the genre and casual players who have played very little or haven't played at all.</article>
          <h4 className={styles.segment}>Other sample title</h4>
          <article style={{marginBottom: "20px"}}>More sample text</article></>],
          "views": 5311
        }
      ]

      //get parameters and parse them (remove spaces)
      const parameter = params.articleTitle.split("%20");
      var parsedParameter: string = "";
      parameter.forEach((e: string) => {
        parsedParameter += e + " ";
      })
      parsedParameter = parsedParameter.slice(0, -1);
      //

      var articleInfo: any;
      for(let i: number = 0; i < exampleData.length; i++){
        if(exampleData[i].title.toLocaleLowerCase() === parsedParameter){
            articleInfo = exampleData[i];
            break;
        }
      }

    if(articleInfo === undefined){
        return(
            <div className={styles.notFoundDiv}>
                <h3 className={styles.notFoundh3}>Article not found!</h3>
            </div>
        )
    }
    return(
        <>
        <h2 className={styles.articleTitle}>{articleInfo.title}</h2>
        <img src={articleInfo.image} alt="" className={styles.articleImg}/>
        <h3 className={styles.description}>{articleInfo.description}</h3>
        {articleInfo.innerHtml}
        </>
    )
}

export default Article