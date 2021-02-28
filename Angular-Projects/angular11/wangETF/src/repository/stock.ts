import { Injectable } from '@angular/core';
import axios from 'axios';
import { INews } from 'src/interface/news';

@Injectable()
export class StockRepository {

    async getData() : Promise<INews[]> { 
        return axios({
            method: 'get',
            url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
            params: { q: 'tesla', region: 'US' },
            headers: {
              'x-rapidapi-key': 'd7424ddadcmshd78697d05dea819p1744f0jsn8a6de193744f',
              'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            }
      }).then(res => {
        // console.log(res.data.news);
        return res.data.news;
      });
    }
}