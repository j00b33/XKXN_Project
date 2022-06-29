import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Cache } from 'cache-manager';

@Injectable()
export class SearchService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,

    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  async getRedis({ keyword }) {
    return await this.cacheManager.get(keyword);
  }

  async getElastic({ keyword }) {
    return await this.elasticsearchService.search({
      index: 'tattoo',
      query: {
        // match: { name: keyword }, // 모든걸 fetch 해오겠다
        bool: {
          should: [{ prefix: { description: keyword } }],
        },
      },
    });
  }

  async searchSave({ keyword, elasticResult }) {
    await this.cacheManager.set(keyword, elasticResult);
  }
}

// _mappings 설정
// {
// 	"properties" :{
// 		"name" : {
// 			"type" : "text"
// 		},
// 		"description" : {
// 			"type": "text",
// 			"analyzer": "tattoo_ngram_analyzer"
// 		},
// 		"price": {
// 			"type" : "long"
// 		}
// 	}
// }
