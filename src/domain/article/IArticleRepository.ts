import type { Article, Articles, NewArticle, UpdateArticle } from "./Article";

export interface IArticleRepository {
  getFeedArticles(pagination: Pagination): Promise<Articles | GenericError>;
  getArticles({
    tag,
    author,
    favorited,
    pagination,
  }: {
    tag?: string;
    author?: string;
    favorited?: string;
    pagination?: Pagination;
  }): Promise<Articles | GenericError>;
  createArticle(article: NewArticle): Promise<Article | GenericError>;
  getArticle(slug: string): Promise<Article | GenericError>;
  updateArticle(
    slug: string,
    article: UpdateArticle
  ): Promise<Article | GenericError>;
  deleteArticle(slug: string): Promise<void | GenericError>;
}
