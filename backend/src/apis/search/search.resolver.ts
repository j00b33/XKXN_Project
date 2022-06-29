import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Tattoo } from '../tattoo/entities/tattoo.entity';
import { SearchService } from './search.service';
import { Cache } from 'cache-manager';

@Resolver()
export class SearchResolver {
  constructor(
    private readonly searchService: SearchService,
    private readonly elasticsearchService: ElasticsearchService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  @Query(() => [Tattoo])
  async searchTattoos(@Args('keyword') keyword: string) {
    // 1. Redis 에서 먼저 찾기
    const redisResult = await this.searchService.getRedis({ keyword });
    if (redisResult) {
      console.log('🍒 Redis Result');
      return redisResult;
    }

    const elasticResult = await this.searchService.getElastic({ keyword });

    // console.log('🌼 fetchResult', JSON.stringify(elasticResult, null, '  '));

    const EachResult = elasticResult.hits.hits;
    // console.log('💩', EachResult);

    const FinalSearch = [];
    for (let i = 0; i < EachResult.length; i++) {
      FinalSearch.push(EachResult[i]._source);
    }
    // console.log('🐋', FinalSearch);

    // console.log('🍈 Elastic Result');
    await this.searchService.searchSave({
      keyword,
      elasticResult,
    });
    return FinalSearch;
  }
}
