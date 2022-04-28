import _ from 'lodash';
import { News } from '@models/News';

interface IFlatNews {
   total: number, articles: News[]
}
const flatNews = (data: IFlatNews[]) => _.concat(...data.flat().map((news) => news.articles));

export default flatNews;
