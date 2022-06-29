export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTattooInput = {
  date: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  payment: Scalars['String'];
  price: Scalars['Int'];
  process: Scalars['String'];
  tattooBodypartId: Scalars['Int'];
  tattooDesign: TattooDesignInput;
  tattooGenreId: Scalars['Int'];
  tattooMethod: TattooMethodInput;
  tattooRegionId: Scalars['Int'];
  tattooTags: Array<Scalars['String']>;
  tattooTypeId: Scalars['Int'];
};

export type CreateTattooistReviewInput = {
  rating: Scalars['Int'];
  reviewDetail: Scalars['String'];
  reviewImage?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type CreateUserInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  isTattooist: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  userDetail?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTattoo: Tattoo;
  createTattooBodypart: TattooBodypart;
  createTattooGenre: TattooGenre;
  createTattooRegion: TattooRegion;
  createTattooType: TattooType;
  createTattooistReview: TattooistReview;
  createUser: User;
  deleteTattoo: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  restoreTattoo: Scalars['Boolean'];
  updateTattoo: Tattoo;
  updateUser: User;
};


export type MutationCreateTattooArgs = {
  createTattooInput: CreateTattooInput;
};


export type MutationCreateTattooBodypartArgs = {
  bodypart: Scalars['String'];
  size: Scalars['String'];
};


export type MutationCreateTattooGenreArgs = {
  genre: Scalars['String'];
};


export type MutationCreateTattooRegionArgs = {
  region: Scalars['String'];
};


export type MutationCreateTattooTypeArgs = {
  type: Scalars['String'];
};


export type MutationCreateTattooistReviewArgs = {
  createTattooistReviewInput: CreateTattooistReviewInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteTattooArgs = {
  tattooId: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type MutationRestoreTattooArgs = {
  tattooId: Scalars['String'];
};


export type MutationUpdateTattooArgs = {
  tattooId: Scalars['String'];
  updateTattooInput: UpdateTattooInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  fetchTattoo: Tattoo;
  fetchTattooWithDeleted: Array<Tattoo>;
  fetchTattoos: Array<Tattoo>;
  fetchUser: User;
  fetchUsers: Array<User>;
};


export type QueryFetchTattooArgs = {
  tattooId: Scalars['String'];
};


export type QueryFetchUserArgs = {
  userId: Scalars['String'];
};

export type Tattoo = {
  __typename?: 'Tattoo';
  date: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  isStarted: Scalars['Boolean'];
  name: Scalars['String'];
  payment: Scalars['String'];
  price: Scalars['Int'];
  process: Scalars['String'];
  tattooBodypart: TattooBodypart;
  tattooDesign: TattooDesign;
  tattooGenre: TattooGenre;
  tattooMethod: TattooMethod;
  tattooRegion: TattooRegion;
  tattooTags: Array<TattooTag>;
  tattooType: TattooType;
  user: User;
};

export type TattooBodypart = {
  __typename?: 'TattooBodypart';
  bodypart: Scalars['String'];
  id: Scalars['Int'];
  size: Scalars['String'];
};

export type TattooDesign = {
  __typename?: 'TattooDesign';
  designLikes: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['String'];
  isSoldout: Scalars['Boolean'];
  name: Scalars['String'];
};

export type TattooDesignInput = {
  name: Scalars['String'];
};

export type TattooGenre = {
  __typename?: 'TattooGenre';
  genre: Scalars['String'];
  id: Scalars['Int'];
};

export type TattooMethod = {
  __typename?: 'TattooMethod';
  id: Scalars['Int'];
  method: Scalars['String'];
};

export type TattooMethodInput = {
  method: Scalars['String'];
};

export type TattooRegion = {
  __typename?: 'TattooRegion';
  id: Scalars['Int'];
  region: Scalars['String'];
};

export type TattooTag = {
  __typename?: 'TattooTag';
  id: Scalars['String'];
  tag: Scalars['String'];
  tattoo: Array<Tattoo>;
};

export type TattooType = {
  __typename?: 'TattooType';
  id: Scalars['Int'];
  type: Scalars['String'];
};

export type TattooistReview = {
  __typename?: 'TattooistReview';
  id: Scalars['String'];
  rating: Scalars['Int'];
  reviewDetail: Scalars['String'];
  reviewImage: Scalars['String'];
  user: User;
};

export type UpdateTattooInput = {
  date?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  process?: InputMaybe<Scalars['String']>;
  tattooBodypartId?: InputMaybe<Scalars['Int']>;
  tattooDesign?: InputMaybe<TattooDesignInput>;
  tattooGenreId?: InputMaybe<Scalars['Int']>;
  tattooMethod?: InputMaybe<TattooMethodInput>;
  tattooRegionId?: InputMaybe<Scalars['Int']>;
  tattooTags?: InputMaybe<Array<Scalars['String']>>;
  tattooTypeId?: InputMaybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  age?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  isTattooist?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  userDetail?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int'];
  email: Scalars['String'];
  id: Scalars['String'];
  isTattooist: Scalars['Boolean'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  userDetail: Scalars['String'];
};
