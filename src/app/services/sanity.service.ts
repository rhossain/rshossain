import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient, ClientConfig, SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { environment } from '../../environments/environment';
import { Project, Technology, Basic, Experience } from '../model/types';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  private client: SanityClient;
  private imageUrlBuilder: ImageUrlBuilder;
  private clientConfig: ClientConfig = {
    projectId: environment.sanity.projectId,
    dataset: environment.sanity.dataset,
    apiVersion: environment.sanity.apiVersion,
    useCdn: environment.sanity.useCdn,
  };
  constructor(private http: HttpClient) {
    this.client = this.sanityClient();
    this.imageUrlBuilder = imageUrlBuilder(this.client);
  }
  private sanityClient(): SanityClient {
    return createClient(this.clientConfig);
  }

  getImageUrlBuilder(source: SanityImageSource): ImageUrlBuilder {
    return this.imageUrlBuilder.image(source);
  }

  async getAllProjects(): Promise<Project[]> {
    return await this.sanityClient().fetch(
      `*[_type == "project"]{
        name, shortDescription, longDescription, website, client, year, duration, category, technologies, featuredImage, gallery, priority
      }`
    );
  }

  async getAllTechs(): Promise<Technology[]> {
    return await this.sanityClient().fetch(
      `*[_type == "technology"]{
        name, level, rating, yearOfExperience, icon, visibility
      }`
    );
  }

  async getAllBasic(): Promise<Basic[]> {
    return await this.sanityClient().fetch(
      `*[_type == "basic"]{
        fName, lName, nickName, birthday, email, phone, website, nationality, fullAddress, shortAddress, designation, summary, featuredHome, featuredAbout
      }`
    );
  }

  async getAllExperience(): Promise<Experience[]> {
    return await this.sanityClient().fetch(
      `*[_type == "experience"]{
        company, companyWebsite, companyEmail, companyPhone, companyLogo, designation, startDate, endDateOrNot, endDate, responsibilities
      }`
    );
  }

  // async getPost(slug: string): Promise<Post> {
  //   return await this.sanityClient().fetch(
  //     '*[_type == "post" && slug.current == $slug][0]',
  //     { slug }
  //   );
  // }
}
