import BaseApi from "~/classes/BaseApi";
import {
  PostResponseInterface,
  PostCreatePayloadInterface,
  PostsGetPayloadInterface,
  PostsResponseInterface
} from "~/interfaces/classes/Api/PostApiInterface";

export default class PostApi extends BaseApi {
  protected uri = 'posts';

  public async getAll(payload: PostsGetPayloadInterface): Promise<PostsResponseInterface> {
    return await this.callToApi('get', this.uri, payload);
  }

  public async getById(id: number): Promise<PostResponseInterface> {
    return await this.callToApi('get', `${this.uri}/${id}`);
  }

  public async create(payload: PostCreatePayloadInterface): Promise<PostResponseInterface> {
    return await this.callToApi('post', `${this.uri}`, {}, payload);
  }

  public async update(id: number, payload: PostCreatePayloadInterface): Promise<PostResponseInterface> {
    return await this.callToApi('put', `${this.uri}/${id}`, {}, payload);
  }

  public async delete(id: number): Promise<PostResponseInterface> {
    return await this.callToApi('delete', `${this.uri}/${id}`);
  }
}
