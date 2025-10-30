
import News from "../components/List/News";
import {LISTINGS} from "../data/dummy_data"

export default function USNewsScreen() {
  // this is refering to dummy data house attribute need to change
  const type = "World";
  const displayedNews = LISTINGS.filter((newsItem) => {
    return newsItem.type ==type;
  })
  return <News items={displayedNews}/>
}

