/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { OperationVariables, QueryResult } from '@apollo/client';
import { GraphQLResolveInfo, GraphQLScalarType } from 'graphql';
import { NextComponentType, NextPage, NextPageContext } from 'next';
import { AppInitialProps } from 'next/app';
import { Router } from 'next/router';
import { ReactNode } from 'react';

export type Layout = (page: ReactNode) => ReactNode;
export type NextPageFC<L = any, P = any, IP = P> = NextPage<P, IP> & L;
export type QueryTypeChildren = { children: ReactNode };
export type QueryType = QueryResult<IQueryFilter<'me'>, OperationVariables>;
export type QueryTypeNode = {
  query: QueryType;
  role?: string | string[];
};

export type AppPropsWithLayout<L = any, P = any> = AppInitialProps & {
  Component: NextComponentType<NextPageContext, any, P> & L;
  router: Router;
  __N_SSG?: boolean | undefined;
  __N_SSP?: boolean | undefined;
};

export type IQueryFilter<T extends keyof IQuery> = Pick<IQuery, T>;
export type IMutationFilter<T extends keyof IMutation> = Pick<IMutation, T>;

export type IGraphQLResponseRoot = {
  data?: IQuery | IMutation;
  errors?: Array<IGraphQLResponseError>;
};

interface IGraphQLResponseError {
  message: string;
  locations?: Array<IGraphQLResponseErrorLocation>;
  [propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
  line: number;
  column: number;
}

//////////////////////////////////////////////////////////////////////////

export interface IQuery {
  listGroups?: IGroupCollectionSegment;
  groupById: IGroup;
  me: IMember;
  meById: IMember;
  referer: IMyUrl;
  projectByUrl: IProject;
  countries: Array<ICountry>;
  companies: Array<ICompany>;
  roles: Array<IRole>;
  industries: Array<IIndustry>;
  rolesByProject: Array<IProjectRole>;
  members: Array<IMember>;
  countryByCode: ICountry;
  listUsers?: IMemberCollectionSegment;
  projects: Array<IProject>;
  projectById: IProject;
  conversationMemberBy: IMemberChat;
  memberNameBy: IProfile;
  services: Array<IMicroservice>;
  servicesByProject: Array<IServiceHelper>;
  myEvents: Array<IEvent>;
  eventById: IEvent;
  conversationsByToMemberId: Array<IConversationReply>;
  conversationsByMemberId: Array<IMemberConversation>;
  resultByMemberId: Array<IQuestionDTO>;
  results: Array<IQuestionDTO>;
  answers: Array<IQuestionDTO>;
  articles?: IArticlesConnection;
  listArticles?: IArticleCollectionSegment;
  listInvoices?: IInvoiceCollectionSegment;
  listAddresses: Array<IAddress>;
  taxonomyById: ITaxonomy;
  listProducts?: IProductCollectionSegment;
  taxonomiesByProject?: ITaxonomyCollectionSegment;
  surveysByArticleId: Array<ISurvey>;
  shopById: IShop;
  articleById: IArticle;
  articleBySlug: IArticle;
  productById: IProduct;
  productBySlug: IProduct;
  contactEmails: Array<IContactEmail>;
  configs: Array<IConfiguration>;
  videoCallById: IVideo;
  videoCallBySessionId: IVideo;
}

export interface IGroupFilterInput {
  and?: Array<IGroupFilterInput>;
  or?: Array<IGroupFilterInput>;
  projectId?: IComparableGuidOperationFilterInput;
  project?: IProjectFilterInput;
  name?: IStringOperationFilterInput;
  description?: IStringOperationFilterInput;
  members?: IListFilterInputTypeOfMemberFilterInput;
  groupTaxonomies?: IListFilterInputTypeOfGroupTaxonomyFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IComparableGuidOperationFilterInput {
  eq?: IUUID;
  neq?: IUUID;
  in?: Array<IUUID>;
  nin?: Array<IUUID>;
  gt?: IUUID;
  ngt?: IUUID;
  gte?: IUUID;
  ngte?: IUUID;
  lt?: IUUID;
  nlt?: IUUID;
  lte?: IUUID;
  nlte?: IUUID;
}

export type IUUID = any;

export interface IProjectFilterInput {
  and?: Array<IProjectFilterInput>;
  or?: Array<IProjectFilterInput>;
  name?: IStringOperationFilterInput;
  description?: IStringOperationFilterInput;
  logo?: IStringOperationFilterInput;
  tagLine?: IStringOperationFilterInput;
  isReady?: IBooleanOperationFilterInput;
  url?: IStringOperationFilterInput;
  industryId?: IComparableNullableOfGuidOperationFilterInput;
  industry?: IIndustryFilterInput;
  companyId?: IComparableGuidOperationFilterInput;
  company?: ICompanyFilterInput;
  projectRoles?: IListFilterInputTypeOfProjectRoleFilterInput;
  memberProjects?: IListFilterInputTypeOfMemberProjectFilterInput;
  groups?: IListFilterInputTypeOfGroupFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IStringOperationFilterInput {
  and?: Array<IStringOperationFilterInput>;
  or?: Array<IStringOperationFilterInput>;
  eq?: string;
  neq?: string;
  contains?: string;
  ncontains?: string;
  in?: Array<string | null>;
  nin?: Array<string | null>;
  startsWith?: string;
  nstartsWith?: string;
  endsWith?: string;
  nendsWith?: string;
}

export interface IBooleanOperationFilterInput {
  eq?: boolean;
  neq?: boolean;
}

export interface IComparableNullableOfGuidOperationFilterInput {
  eq?: IUUID;
  neq?: IUUID;
  in?: Array<IUUID | null>;
  nin?: Array<IUUID | null>;
  gt?: IUUID;
  ngt?: IUUID;
  gte?: IUUID;
  ngte?: IUUID;
  lt?: IUUID;
  nlt?: IUUID;
  lte?: IUUID;
  nlte?: IUUID;
}

export interface IIndustryFilterInput {
  and?: Array<IIndustryFilterInput>;
  or?: Array<IIndustryFilterInput>;
  name?: IStringOperationFilterInput;
  slug?: IStringOperationFilterInput;
  projects?: IListFilterInputTypeOfProjectFilterInput;
  companies?: IListFilterInputTypeOfCompanyFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfProjectFilterInput {
  all?: IProjectFilterInput;
  none?: IProjectFilterInput;
  some?: IProjectFilterInput;
  any?: boolean;
}

export interface IListFilterInputTypeOfCompanyFilterInput {
  all?: ICompanyFilterInput;
  none?: ICompanyFilterInput;
  some?: ICompanyFilterInput;
  any?: boolean;
}

export interface ICompanyFilterInput {
  and?: Array<ICompanyFilterInput>;
  or?: Array<ICompanyFilterInput>;
  name?: IStringOperationFilterInput;
  numberEmployees?: IComparableInt32OperationFilterInput;
  countryId?: IComparableGuidOperationFilterInput;
  country?: ICountryFilterInput;
  photo?: IStringOperationFilterInput;
  tagLine?: IStringOperationFilterInput;
  industryId?: IComparableNullableOfGuidOperationFilterInput;
  industry?: IIndustryFilterInput;
  memberCompanies?: IListFilterInputTypeOfMemberCompanyFilterInput;
  projects?: IListFilterInputTypeOfProjectFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IComparableInt32OperationFilterInput {
  eq?: number;
  neq?: number;
  in?: Array<number>;
  nin?: Array<number>;
  gt?: number;
  ngt?: number;
  gte?: number;
  ngte?: number;
  lt?: number;
  nlt?: number;
  lte?: number;
  nlte?: number;
}

export interface ICountryFilterInput {
  and?: Array<ICountryFilterInput>;
  or?: Array<ICountryFilterInput>;
  name?: IStringOperationFilterInput;
  code?: IStringOperationFilterInput;
  currencyId?: IComparableGuidOperationFilterInput;
  currency?: ICurrencyFilterInput;
  profile?: IListFilterInputTypeOfProfileFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface ICurrencyFilterInput {
  and?: Array<ICurrencyFilterInput>;
  or?: Array<ICurrencyFilterInput>;
  name?: IStringOperationFilterInput;
  symbol?: IStringOperationFilterInput;
  code?: IStringOperationFilterInput;
  exchangeRate?: IStringOperationFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IComparableDateTimeOperationFilterInput {
  eq?: IDateTime;
  neq?: IDateTime;
  in?: Array<IDateTime>;
  nin?: Array<IDateTime>;
  gt?: IDateTime;
  ngt?: IDateTime;
  gte?: IDateTime;
  ngte?: IDateTime;
  lt?: IDateTime;
  nlt?: IDateTime;
  lte?: IDateTime;
  nlte?: IDateTime;
}

/**
 * The `DateTime` scalar represents an ISO-8601 compliant date time type.
 */
export type IDateTime = any;

export interface IListFilterInputTypeOfProfileFilterInput {
  all?: IProfileFilterInput;
  none?: IProfileFilterInput;
  some?: IProfileFilterInput;
  any?: boolean;
}

export interface IProfileFilterInput {
  and?: Array<IProfileFilterInput>;
  or?: Array<IProfileFilterInput>;
  firstName?: IStringOperationFilterInput;
  lastName?: IStringOperationFilterInput;
  phone?: IStringOperationFilterInput;
  photo?: IStringOperationFilterInput;
  memberId?: IComparableGuidOperationFilterInput;
  member?: IMemberFilterInput;
  countryId?: IComparableGuidOperationFilterInput;
  country?: ICountryFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IMemberFilterInput {
  and?: Array<IMemberFilterInput>;
  or?: Array<IMemberFilterInput>;
  email?: IStringOperationFilterInput;
  recoverToken?: IStringOperationFilterInput;
  recoverRegister?: IComparableDateTimeOperationFilterInput;
  isActive?: IBooleanOperationFilterInput;
  firstTime?: IBooleanOperationFilterInput;
  loginCount?: IComparableInt32OperationFilterInput;
  rFC?: IStringOperationFilterInput;
  businessName?: IStringOperationFilterInput;
  memberCompanies?: IListFilterInputTypeOfMemberCompanyFilterInput;
  memberRoles?: IListFilterInputTypeOfMemberRoleFilterInput;
  memberProjects?: IListFilterInputTypeOfMemberProjectFilterInput;
  profile?: IProfileFilterInput;
  groups?: IListFilterInputTypeOfGroupFilterInput;
  taxonomies?: IListFilterInputTypeOfMemberTaxonomyFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfMemberCompanyFilterInput {
  all?: IMemberCompanyFilterInput;
  none?: IMemberCompanyFilterInput;
  some?: IMemberCompanyFilterInput;
  any?: boolean;
}

export interface IMemberCompanyFilterInput {
  and?: Array<IMemberCompanyFilterInput>;
  or?: Array<IMemberCompanyFilterInput>;
  companyId?: IComparableGuidOperationFilterInput;
  company?: ICompanyFilterInput;
  memberId?: IComparableGuidOperationFilterInput;
  member?: IMemberFilterInput;
  isDefault?: IBooleanOperationFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfMemberRoleFilterInput {
  all?: IMemberRoleFilterInput;
  none?: IMemberRoleFilterInput;
  some?: IMemberRoleFilterInput;
  any?: boolean;
}

export interface IMemberRoleFilterInput {
  and?: Array<IMemberRoleFilterInput>;
  or?: Array<IMemberRoleFilterInput>;
  companyId?: IComparableGuidOperationFilterInput;
  company?: ICompanyFilterInput;
  roleId?: IComparableGuidOperationFilterInput;
  role?: IRoleFilterInput;
  memberId?: IComparableGuidOperationFilterInput;
  member?: IMemberFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IRoleFilterInput {
  and?: Array<IRoleFilterInput>;
  or?: Array<IRoleFilterInput>;
  name?: IStringOperationFilterInput;
  codeName?: IStringOperationFilterInput;
  description?: IStringOperationFilterInput;
  memberRoles?: IListFilterInputTypeOfMemberRoleFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfMemberProjectFilterInput {
  all?: IMemberProjectFilterInput;
  none?: IMemberProjectFilterInput;
  some?: IMemberProjectFilterInput;
  any?: boolean;
}

export interface IMemberProjectFilterInput {
  and?: Array<IMemberProjectFilterInput>;
  or?: Array<IMemberProjectFilterInput>;
  memberId?: IComparableGuidOperationFilterInput;
  member?: IMemberFilterInput;
  projectId?: IComparableGuidOperationFilterInput;
  project?: IProjectFilterInput;
  memberProjectRoleProject?: IMemberProjectRoleProjectFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IMemberProjectRoleProjectFilterInput {
  and?: Array<IMemberProjectRoleProjectFilterInput>;
  or?: Array<IMemberProjectRoleProjectFilterInput>;
  memberProjectId?: IComparableGuidOperationFilterInput;
  memberProject?: IMemberProjectFilterInput;
  projectRoleId?: IComparableGuidOperationFilterInput;
  projectRole?: IProjectRoleFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IProjectRoleFilterInput {
  and?: Array<IProjectRoleFilterInput>;
  or?: Array<IProjectRoleFilterInput>;
  name?: IStringOperationFilterInput;
  codeName?: IStringOperationFilterInput;
  label?: IStringOperationFilterInput;
  description?: IStringOperationFilterInput;
  permission?: IPermissionFilterInput;
  projectId?: IComparableGuidOperationFilterInput;
  project?: IProjectFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IPermissionFilterInput {
  and?: Array<IPermissionFilterInput>;
  or?: Array<IPermissionFilterInput>;
  projectId?: IComparableGuidOperationFilterInput;
  project?: IProjectFilterInput;
  projectRoleId?: IComparableGuidOperationFilterInput;
  projectRole?: IProjectRoleFilterInput;
  rules?: IStringOperationFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfGroupFilterInput {
  all?: IGroupFilterInput;
  none?: IGroupFilterInput;
  some?: IGroupFilterInput;
  any?: boolean;
}

export interface IListFilterInputTypeOfMemberTaxonomyFilterInput {
  all?: IMemberTaxonomyFilterInput;
  none?: IMemberTaxonomyFilterInput;
  some?: IMemberTaxonomyFilterInput;
  any?: boolean;
}

export interface IMemberTaxonomyFilterInput {
  and?: Array<IMemberTaxonomyFilterInput>;
  or?: Array<IMemberTaxonomyFilterInput>;
  memberId?: IComparableGuidOperationFilterInput;
  member?: IMemberFilterInput;
  taxonomyId?: IComparableGuidOperationFilterInput;
}

export interface IListFilterInputTypeOfProjectRoleFilterInput {
  all?: IProjectRoleFilterInput;
  none?: IProjectRoleFilterInput;
  some?: IProjectRoleFilterInput;
  any?: boolean;
}

export interface IListFilterInputTypeOfMemberFilterInput {
  all?: IMemberFilterInput;
  none?: IMemberFilterInput;
  some?: IMemberFilterInput;
  any?: boolean;
}

export interface IListFilterInputTypeOfGroupTaxonomyFilterInput {
  all?: IGroupTaxonomyFilterInput;
  none?: IGroupTaxonomyFilterInput;
  some?: IGroupTaxonomyFilterInput;
  any?: boolean;
}

export interface IGroupTaxonomyFilterInput {
  and?: Array<IGroupTaxonomyFilterInput>;
  or?: Array<IGroupTaxonomyFilterInput>;
  taxonomyId?: IComparableGuidOperationFilterInput;
  groupId?: IComparableGuidOperationFilterInput;
  group?: IGroupFilterInput;
}

export interface IGroupSortInput {
  projectId?: ISortEnumType;
  project?: IProjectSortInput;
  name?: ISortEnumType;
  description?: ISortEnumType;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export const enum ISortEnumType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface IProjectSortInput {
  name?: ISortEnumType;
  description?: ISortEnumType;
  logo?: ISortEnumType;
  tagLine?: ISortEnumType;
  isReady?: ISortEnumType;
  url?: ISortEnumType;
  industryId?: ISortEnumType;
  industry?: IIndustrySortInput;
  companyId?: ISortEnumType;
  company?: ICompanySortInput;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface IIndustrySortInput {
  name?: ISortEnumType;
  slug?: ISortEnumType;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface ICompanySortInput {
  name?: ISortEnumType;
  numberEmployees?: ISortEnumType;
  countryId?: ISortEnumType;
  country?: ICountrySortInput;
  photo?: ISortEnumType;
  tagLine?: ISortEnumType;
  industryId?: ISortEnumType;
  industry?: IIndustrySortInput;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface ICountrySortInput {
  name?: ISortEnumType;
  code?: ISortEnumType;
  currencyId?: ISortEnumType;
  currency?: ICurrencySortInput;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface ICurrencySortInput {
  name?: ISortEnumType;
  symbol?: ISortEnumType;
  code?: ISortEnumType;
  exchangeRate?: ISortEnumType;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface IGroupCollectionSegment {
  items?: Array<IGroup>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: ICollectionSegmentInfo;
  totalCount: number;
}

export interface IGroup {
  projectId: IUUID;
  project: IProject;
  name: string;
  description: string;
  members: Array<IMember>;
  groupTaxonomies?: Array<IGroupTaxonomy>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IProject {
  name: string;
  description: string;
  logo: string;
  tagLine: string;
  isReady: boolean;
  url: string;
  industryId?: IUUID;
  industry?: IIndustry;
  companyId: IUUID;
  company: ICompany;
  projectRoles: Array<IProjectRole>;
  memberProjects: Array<IMemberProject>;
  groups: Array<IGroup>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
  services?: Array<IMicroservice | null>;
  site?: Array<IConfiguration | null>;
}

export interface IIndustry {
  name: string;
  slug: string;
  projects: Array<IProject>;
  companies: Array<ICompany>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface ICompany {
  name: string;
  numberEmployees: number;
  countryId: IUUID;
  country: ICountry;
  photo: string;
  tagLine: string;
  industryId?: IUUID;
  industry: IIndustry;
  memberCompanies: Array<IMemberCompany>;
  projects: Array<IProject>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface ICountry {
  name: string;
  code: string;
  currencyId: IUUID;
  currency: ICurrency;
  profile: Array<IProfile>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface ICurrency {
  name: string;
  symbol: string;
  code: string;
  exchangeRate: string;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  phone: string;
  photo: string;
  memberId: IUUID;
  member: IMember;
  countryId: IUUID;
  country: ICountry;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IMember {
  email: string;
  recoverToken: string;
  recoverRegister: IDateTime;
  isActive: boolean;
  firstTime: boolean;
  loginCount: number;
  rFC: string;
  businessName: string;
  memberCompanies: Array<IMemberCompany>;
  memberRoles: Array<IMemberRole>;
  memberProjects: Array<IMemberProject>;
  profile: IProfile;
  groups: Array<IGroup>;
  taxonomies: Array<IMemberTaxonomy>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
  addresses?: Array<IAddress | null>;
}

export interface IMemberCompany {
  companyId: IUUID;
  company: ICompany;
  memberId: IUUID;
  member: IMember;
  isDefault: boolean;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IMemberRole {
  companyId: IUUID;
  company: ICompany;
  roleId: IUUID;
  role: IRole;
  memberId: IUUID;
  member: IMember;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IRole {
  name: string;
  codeName: string;
  description: string;
  memberRoles: Array<IMemberRole>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IMemberProject {
  memberId: IUUID;
  member: IMember;
  projectId: IUUID;
  project: IProject;
  memberProjectRoleProject: IMemberProjectRoleProject;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IMemberProjectRoleProject {
  memberProjectId: IUUID;
  memberProject: IMemberProject;
  projectRoleId: IUUID;
  projectRole: IProjectRole;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IProjectRole {
  name: string;
  codeName: string;
  label?: string;
  description?: string;
  permission?: IPermission;
  projectId: IUUID;
  project: IProject;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IPermission {
  projectId: IUUID;
  project: IProject;
  projectRoleId: IUUID;
  projectRole: IProjectRole;
  rules: string;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IMemberTaxonomy {
  memberId: IUUID;
  member: IMember;
  taxonomyId: IUUID;
}

export interface IAddress {
  projectId: IUUID;
  memberId: IUUID;
  rFC: string;
  businessName: string;
  addressType: string;
  firstName: string;
  lastName: string;
  countryName: string;
  state: string;
  city: string;
  subUrb: string;
  zipCode: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  addressDetails: string;
  isPrincipal: boolean;
  invoices: Array<IInvoice>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IInvoice {
  invoiceNumber: string;
  invoiceStatus: IInvoiceStatus;
  projectId: IUUID;
  memberId: IUUID;
  invoiceDate: IDateTime;
  observations: string;
  subTotal: IDecimal;
  shippingSale: IDecimal;
  discount: IDecimal;
  total: IDecimal;
  addressId: IUUID;
  address: IAddress;
  details: Array<IInvoiceDetail>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export const enum IInvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
}

/**
 * The built-in `Decimal` scalar type.
 */
export type IDecimal = any;

export interface IInvoiceDetail {
  invoiceId: IUUID;
  invoice: IInvoice;
  productId: IUUID;
  product: IProduct;
  quantity: number;
  salePrice: IDecimal;
  totalPrice: IDecimal;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IProduct {
  projectId: IUUID;
  memberId: IUUID;
  title: string;
  photo: string;
  slug: string;
  sku: string;
  price: IDecimal;
  offerPrice: IDecimal;
  stock: number;
  active: boolean;
  shippingType: string;
  shippingPrice: IDecimal;
  description: string;
  publishDate: IDateTime;
  views: number;
  status: IProductStatus;
  seoProduct: string;
  categories: Array<ITaxonomy>;
  invoiceDetails: Array<IInvoiceDetail>;
  details: Array<IProductDetail>;
  images: Array<IImage>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export const enum IProductStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  INACTIVE = 'INACTIVE',
  PROGRAMMED = 'PROGRAMMED',
}

export interface ITaxonomy {
  projectId: IUUID;
  name: string;
  slug: string;
  description: string;
  termGroup: string;
  photo: string;
  parentId?: IUUID;
  parent: ITaxonomy;
  subCategories: Array<ITaxonomy>;
  isPublic: boolean;
  articles: Array<IArticle>;
  products: Array<IProduct>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IArticle {
  projectId: IUUID;
  memberId: IUUID;
  title: string;
  photo: string;
  slug: string;
  resume: string;
  content: string;
  active: boolean;
  views: number;
  status: string;
  releaseDate: IDateTime;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  structuredMarking: string;
  imageAlt: string;
  categories: Array<ITaxonomy>;
  tags: Array<ITaxonomy>;
  surveys: Array<ISurvey>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
  author?: string;
}

export interface ISurvey {
  title: string;
  description: string;
  isActive: boolean;
  thankYouMessage: string;
  articles: Array<IArticle>;
  questions: Array<IQuestion>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IQuestion {
  surveyId: IUUID;
  survey: ISurvey;
  title: string;
  type: IQuestionType;
  image: string;
  isRequired: boolean;
  position: number;
  allowsFileUpload: boolean;
  options: Array<IOption>;
  answers?: Array<IAnswer>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export const enum IQuestionType {
  SINGLE = 'SINGLE',
  OPEN = 'OPEN',
  MULTIPLE = 'MULTIPLE',
}

export interface IOption {
  questionId: IUUID;
  question: IQuestion;
  title: string;
  position: number;
  count: number;
  answers?: Array<IAnswer>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IAnswer {
  memberId: IUUID;
  questionId: IUUID;
  question: IQuestion;
  optionId?: IUUID;
  option?: IOption;
  uploadFile?: string;
  responseText: string;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
  member?: string;
}

export interface IProductDetail {
  productId: IUUID;
  product: IProduct;
  key: string;
  value: string;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IImage {
  projectId: IUUID;
  original: string;
  title: string;
  products: Array<IProduct>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IMicroservice {
  name: string;
  codeName: string;
  image: string;
  isActive: boolean;
  label: string;
  description: string;
  priority: number;
  isPublic: boolean;
  projectMicroservices: Array<IProjectMicroservice>;
  functions: Array<IFunction>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IProjectMicroservice {
  microserviceId: IUUID;
  microservice: IMicroservice;
  isActive: boolean;
  label?: string;
  projectId: IUUID;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IFunction {
  name: string;
  codeName: string;
  functionType: IFunctionType;
  microserviceId: IUUID;
  microservice: IMicroservice;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export const enum IFunctionType {
  WRITE = 'WRITE',
  READER = 'READER',
  CUSTOM = 'CUSTOM',
}

export interface IConfiguration {
  projectId: IUUID;
  key: string;
  value: string;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IGroupTaxonomy {
  taxonomyId: IUUID;
  groupId: IUUID;
  group: IGroup;
  taxonomy?: ITaxonomy;
}

/**
 * Information about the offset pagination.
 */
export interface ICollectionSegmentInfo {
  /**
   * Indicates whether more items exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;

  /**
   * Indicates whether more items exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
}

export interface IMyUrl {
  url: string;
}

export interface IMemberSortInput {
  email?: ISortEnumType;
  recoverToken?: ISortEnumType;
  recoverRegister?: ISortEnumType;
  isActive?: ISortEnumType;
  firstTime?: ISortEnumType;
  loginCount?: ISortEnumType;
  rFC?: ISortEnumType;
  businessName?: ISortEnumType;
  profile?: IProfileSortInput;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface IProfileSortInput {
  firstName?: ISortEnumType;
  lastName?: ISortEnumType;
  phone?: ISortEnumType;
  photo?: ISortEnumType;
  memberId?: ISortEnumType;
  member?: IMemberSortInput;
  countryId?: ISortEnumType;
  country?: ICountrySortInput;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface IMemberCollectionSegment {
  items?: Array<IMember>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: ICollectionSegmentInfo;
  totalCount: number;
}

export interface IMemberChat {
  email: string;
  name: string;
  lastName: string;
  photo: string;
}

export interface IServiceHelper {
  id: IUUID;
  name: string;
  label?: string;
  isActive: boolean;
  codeName: string;
  image?: string;
  description?: string;
  priority: number;
  createdAt: IDateTime;
  updatedAt: IDateTime;
  projectMicroservices: Array<IProjectMicroservice>;
  functions: Array<IFunction>;
}

export interface IEvent {
  projectId: IUUID;
  memberId: IUUID;
  title?: string;
  location?: string;
  color?: string;
  description: string;
  file: string;
  roomId?: string;
  eventDate: IDateTime;
  eventType?: IEventType;
  eventMode?: IEventMode;
  eventSessionId?: IUUID;
  eventSession?: IEventSession;
  eventMembers?: Array<IEventMember>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export const enum IEventType {
  GENERAL = 'GENERAL',
  CONSULTATION = 'CONSULTATION',
  THERAPY = 'THERAPY',
}

export const enum IEventMode {
  ONLINE = 'ONLINE',
  FACE_TO_FACE = 'FACE_TO_FACE',
}

export interface IEventSession {
  projectId: IUUID;
  title?: string;
  image?: string;
  price: IDecimal;
  description?: string;
  duration: number;
  eventMode?: IEventMode;
  event?: IEvent;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IEventMember {
  eventId: IUUID;
  event: IEvent;
  memberId: IUUID;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IConversationReply {
  memberId: IUUID;
  reply: string;
  registerDate: IDateTime;
  status: string;
  conversationId: IUUID;
  conversation: IConversation;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
  member?: IMemberChat;
}

export interface IConversation {
  projectId: IUUID;
  memberOne: IUUID;
  memberTwo: IUUID;
  registerDate: IDateTime;
  status: string;
  replies: Array<IConversationReply>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IMemberConversation {
  memberId: IUUID;
  member?: IMemberChat;
}

export interface IQuestionDTO {
  title: string;
  type: IQuestionType;
  image: string;
  options?: Array<IOption>;
  answers?: Array<IAnswer>;
}

export interface IArticleFilterInput {
  and?: Array<IArticleFilterInput>;
  or?: Array<IArticleFilterInput>;
  projectId?: IComparableGuidOperationFilterInput;
  memberId?: IComparableGuidOperationFilterInput;
  title?: IStringOperationFilterInput;
  photo?: IStringOperationFilterInput;
  slug?: IStringOperationFilterInput;
  resume?: IStringOperationFilterInput;
  content?: IStringOperationFilterInput;
  active?: IBooleanOperationFilterInput;
  views?: IComparableInt32OperationFilterInput;
  status?: IStringOperationFilterInput;
  releaseDate?: IComparableDateTimeOperationFilterInput;
  seoTitle?: IStringOperationFilterInput;
  seoDescription?: IStringOperationFilterInput;
  seoKeywords?: IStringOperationFilterInput;
  structuredMarking?: IStringOperationFilterInput;
  imageAlt?: IStringOperationFilterInput;
  categories?: IListFilterInputTypeOfTaxonomyFilterInput;
  tags?: IListFilterInputTypeOfTaxonomyFilterInput;
  surveys?: IListFilterInputTypeOfSurveyFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfTaxonomyFilterInput {
  all?: ITaxonomyFilterInput;
  none?: ITaxonomyFilterInput;
  some?: ITaxonomyFilterInput;
  any?: boolean;
}

export interface ITaxonomyFilterInput {
  and?: Array<ITaxonomyFilterInput>;
  or?: Array<ITaxonomyFilterInput>;
  projectId?: IComparableGuidOperationFilterInput;
  name?: IStringOperationFilterInput;
  slug?: IStringOperationFilterInput;
  description?: IStringOperationFilterInput;
  termGroup?: IStringOperationFilterInput;
  photo?: IStringOperationFilterInput;
  parentId?: IComparableNullableOfGuidOperationFilterInput;
  parent?: ITaxonomyFilterInput;
  subCategories?: IListFilterInputTypeOfTaxonomyFilterInput;
  isPublic?: IBooleanOperationFilterInput;
  articles?: IListFilterInputTypeOfArticleFilterInput;
  products?: IListFilterInputTypeOfProductFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfArticleFilterInput {
  all?: IArticleFilterInput;
  none?: IArticleFilterInput;
  some?: IArticleFilterInput;
  any?: boolean;
}

export interface IListFilterInputTypeOfProductFilterInput {
  all?: IProductFilterInput;
  none?: IProductFilterInput;
  some?: IProductFilterInput;
  any?: boolean;
}

export interface IProductFilterInput {
  and?: Array<IProductFilterInput>;
  or?: Array<IProductFilterInput>;
  projectId?: IComparableGuidOperationFilterInput;
  memberId?: IComparableGuidOperationFilterInput;
  title?: IStringOperationFilterInput;
  photo?: IStringOperationFilterInput;
  slug?: IStringOperationFilterInput;
  sku?: IStringOperationFilterInput;
  price?: IComparableDecimalOperationFilterInput;
  offerPrice?: IComparableDecimalOperationFilterInput;
  stock?: IComparableInt32OperationFilterInput;
  active?: IBooleanOperationFilterInput;
  shippingType?: IStringOperationFilterInput;
  shippingPrice?: IComparableDecimalOperationFilterInput;
  description?: IStringOperationFilterInput;
  publishDate?: IComparableDateTimeOperationFilterInput;
  views?: IComparableInt32OperationFilterInput;
  status?: IProductStatusOperationFilterInput;
  seoProduct?: IStringOperationFilterInput;
  categories?: IListFilterInputTypeOfTaxonomyFilterInput;
  invoiceDetails?: IListFilterInputTypeOfInvoiceDetailFilterInput;
  details?: IListFilterInputTypeOfProductDetailFilterInput;
  images?: IListFilterInputTypeOfImageFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IComparableDecimalOperationFilterInput {
  eq?: IDecimal;
  neq?: IDecimal;
  in?: Array<IDecimal>;
  nin?: Array<IDecimal>;
  gt?: IDecimal;
  ngt?: IDecimal;
  gte?: IDecimal;
  ngte?: IDecimal;
  lt?: IDecimal;
  nlt?: IDecimal;
  lte?: IDecimal;
  nlte?: IDecimal;
}

export interface IProductStatusOperationFilterInput {
  eq?: IProductStatus;
  neq?: IProductStatus;
  in?: Array<IProductStatus>;
  nin?: Array<IProductStatus>;
}

export interface IListFilterInputTypeOfInvoiceDetailFilterInput {
  all?: IInvoiceDetailFilterInput;
  none?: IInvoiceDetailFilterInput;
  some?: IInvoiceDetailFilterInput;
  any?: boolean;
}

export interface IInvoiceDetailFilterInput {
  and?: Array<IInvoiceDetailFilterInput>;
  or?: Array<IInvoiceDetailFilterInput>;
  invoiceId?: IComparableGuidOperationFilterInput;
  invoice?: IInvoiceFilterInput;
  productId?: IComparableGuidOperationFilterInput;
  product?: IProductFilterInput;
  quantity?: IComparableInt32OperationFilterInput;
  salePrice?: IComparableDecimalOperationFilterInput;
  totalPrice?: IComparableDecimalOperationFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IInvoiceFilterInput {
  and?: Array<IInvoiceFilterInput>;
  or?: Array<IInvoiceFilterInput>;
  invoiceNumber?: IStringOperationFilterInput;
  invoiceStatus?: IInvoiceStatusOperationFilterInput;
  projectId?: IComparableGuidOperationFilterInput;
  memberId?: IComparableGuidOperationFilterInput;
  invoiceDate?: IComparableDateTimeOperationFilterInput;
  observations?: IStringOperationFilterInput;
  subTotal?: IComparableDecimalOperationFilterInput;
  shippingSale?: IComparableDecimalOperationFilterInput;
  discount?: IComparableDecimalOperationFilterInput;
  total?: IComparableDecimalOperationFilterInput;
  addressId?: IComparableGuidOperationFilterInput;
  address?: IAddressFilterInput;
  details?: IListFilterInputTypeOfInvoiceDetailFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IInvoiceStatusOperationFilterInput {
  eq?: IInvoiceStatus;
  neq?: IInvoiceStatus;
  in?: Array<IInvoiceStatus>;
  nin?: Array<IInvoiceStatus>;
}

export interface IAddressFilterInput {
  and?: Array<IAddressFilterInput>;
  or?: Array<IAddressFilterInput>;
  projectId?: IComparableGuidOperationFilterInput;
  memberId?: IComparableGuidOperationFilterInput;
  rFC?: IStringOperationFilterInput;
  businessName?: IStringOperationFilterInput;
  addressType?: IStringOperationFilterInput;
  firstName?: IStringOperationFilterInput;
  lastName?: IStringOperationFilterInput;
  countryName?: IStringOperationFilterInput;
  state?: IStringOperationFilterInput;
  city?: IStringOperationFilterInput;
  subUrb?: IStringOperationFilterInput;
  zipCode?: IStringOperationFilterInput;
  addressLine1?: IStringOperationFilterInput;
  addressLine2?: IStringOperationFilterInput;
  phone?: IStringOperationFilterInput;
  addressDetails?: IStringOperationFilterInput;
  isPrincipal?: IBooleanOperationFilterInput;
  invoices?: IListFilterInputTypeOfInvoiceFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfInvoiceFilterInput {
  all?: IInvoiceFilterInput;
  none?: IInvoiceFilterInput;
  some?: IInvoiceFilterInput;
  any?: boolean;
}

export interface IListFilterInputTypeOfProductDetailFilterInput {
  all?: IProductDetailFilterInput;
  none?: IProductDetailFilterInput;
  some?: IProductDetailFilterInput;
  any?: boolean;
}

export interface IProductDetailFilterInput {
  and?: Array<IProductDetailFilterInput>;
  or?: Array<IProductDetailFilterInput>;
  productId?: IComparableGuidOperationFilterInput;
  product?: IProductFilterInput;
  key?: IStringOperationFilterInput;
  value?: IStringOperationFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfImageFilterInput {
  all?: IImageFilterInput;
  none?: IImageFilterInput;
  some?: IImageFilterInput;
  any?: boolean;
}

export interface IImageFilterInput {
  and?: Array<IImageFilterInput>;
  or?: Array<IImageFilterInput>;
  projectId?: IComparableGuidOperationFilterInput;
  original?: IStringOperationFilterInput;
  title?: IStringOperationFilterInput;
  products?: IListFilterInputTypeOfProductFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfSurveyFilterInput {
  all?: ISurveyFilterInput;
  none?: ISurveyFilterInput;
  some?: ISurveyFilterInput;
  any?: boolean;
}

export interface ISurveyFilterInput {
  and?: Array<ISurveyFilterInput>;
  or?: Array<ISurveyFilterInput>;
  title?: IStringOperationFilterInput;
  description?: IStringOperationFilterInput;
  isActive?: IBooleanOperationFilterInput;
  thankYouMessage?: IStringOperationFilterInput;
  articles?: IListFilterInputTypeOfArticleFilterInput;
  questions?: IListFilterInputTypeOfQuestionFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfQuestionFilterInput {
  all?: IQuestionFilterInput;
  none?: IQuestionFilterInput;
  some?: IQuestionFilterInput;
  any?: boolean;
}

export interface IQuestionFilterInput {
  and?: Array<IQuestionFilterInput>;
  or?: Array<IQuestionFilterInput>;
  surveyId?: IComparableGuidOperationFilterInput;
  survey?: ISurveyFilterInput;
  title?: IStringOperationFilterInput;
  type?: IQuestionTypeOperationFilterInput;
  image?: IStringOperationFilterInput;
  isRequired?: IBooleanOperationFilterInput;
  position?: IComparableInt32OperationFilterInput;
  allowsFileUpload?: IBooleanOperationFilterInput;
  options?: IListFilterInputTypeOfOptionFilterInput;
  answers?: IListFilterInputTypeOfAnswerFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IQuestionTypeOperationFilterInput {
  eq?: IQuestionType;
  neq?: IQuestionType;
  in?: Array<IQuestionType>;
  nin?: Array<IQuestionType>;
}

export interface IListFilterInputTypeOfOptionFilterInput {
  all?: IOptionFilterInput;
  none?: IOptionFilterInput;
  some?: IOptionFilterInput;
  any?: boolean;
}

export interface IOptionFilterInput {
  and?: Array<IOptionFilterInput>;
  or?: Array<IOptionFilterInput>;
  questionId?: IComparableGuidOperationFilterInput;
  question?: IQuestionFilterInput;
  title?: IStringOperationFilterInput;
  position?: IComparableInt32OperationFilterInput;
  count?: IComparableInt32OperationFilterInput;
  answers?: IListFilterInputTypeOfAnswerFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IListFilterInputTypeOfAnswerFilterInput {
  all?: IAnswerFilterInput;
  none?: IAnswerFilterInput;
  some?: IAnswerFilterInput;
  any?: boolean;
}

export interface IAnswerFilterInput {
  and?: Array<IAnswerFilterInput>;
  or?: Array<IAnswerFilterInput>;
  memberId?: IComparableGuidOperationFilterInput;
  questionId?: IComparableGuidOperationFilterInput;
  question?: IQuestionFilterInput;
  optionId?: IComparableNullableOfGuidOperationFilterInput;
  option?: IOptionFilterInput;
  uploadFile?: IStringOperationFilterInput;
  responseText?: IStringOperationFilterInput;
  id?: IComparableGuidOperationFilterInput;
  createdAt?: IComparableDateTimeOperationFilterInput;
  updatedAt?: IComparableDateTimeOperationFilterInput;
}

export interface IArticleSortInput {
  projectId?: ISortEnumType;
  memberId?: ISortEnumType;
  title?: ISortEnumType;
  photo?: ISortEnumType;
  slug?: ISortEnumType;
  resume?: ISortEnumType;
  content?: ISortEnumType;
  active?: ISortEnumType;
  views?: ISortEnumType;
  status?: ISortEnumType;
  releaseDate?: ISortEnumType;
  seoTitle?: ISortEnumType;
  seoDescription?: ISortEnumType;
  seoKeywords?: ISortEnumType;
  structuredMarking?: ISortEnumType;
  imageAlt?: ISortEnumType;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

/**
 * A connection to a list of items.
 */
export interface IArticlesConnection {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo;

  /**
   * A list of edges.
   */
  edges?: Array<IArticlesEdge>;

  /**
   * A flattened list of the nodes.
   */
  nodes?: Array<IArticle>;
  totalCount: number;
}

/**
 * Information about pagination in a connection.
 */
export interface IPageInfo {
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;

  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;

  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor?: string;

  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor?: string;
}

/**
 * An edge in a connection.
 */
export interface IArticlesEdge {
  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of the edge.
   */
  node: IArticle;
}

export interface IArticleCollectionSegment {
  items?: Array<IArticle>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: ICollectionSegmentInfo;
  totalCount: number;
}

export interface IInvoiceSortInput {
  invoiceNumber?: ISortEnumType;
  invoiceStatus?: ISortEnumType;
  projectId?: ISortEnumType;
  memberId?: ISortEnumType;
  invoiceDate?: ISortEnumType;
  observations?: ISortEnumType;
  subTotal?: ISortEnumType;
  shippingSale?: ISortEnumType;
  discount?: ISortEnumType;
  total?: ISortEnumType;
  addressId?: ISortEnumType;
  address?: IAddressSortInput;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface IAddressSortInput {
  projectId?: ISortEnumType;
  memberId?: ISortEnumType;
  rFC?: ISortEnumType;
  businessName?: ISortEnumType;
  addressType?: ISortEnumType;
  firstName?: ISortEnumType;
  lastName?: ISortEnumType;
  countryName?: ISortEnumType;
  state?: ISortEnumType;
  city?: ISortEnumType;
  subUrb?: ISortEnumType;
  zipCode?: ISortEnumType;
  addressLine1?: ISortEnumType;
  addressLine2?: ISortEnumType;
  phone?: ISortEnumType;
  addressDetails?: ISortEnumType;
  isPrincipal?: ISortEnumType;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface IInvoiceCollectionSegment {
  items?: Array<IInvoice>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: ICollectionSegmentInfo;
  totalCount: number;
}

export interface IProductSortInput {
  projectId?: ISortEnumType;
  memberId?: ISortEnumType;
  title?: ISortEnumType;
  photo?: ISortEnumType;
  slug?: ISortEnumType;
  sku?: ISortEnumType;
  price?: ISortEnumType;
  offerPrice?: ISortEnumType;
  stock?: ISortEnumType;
  active?: ISortEnumType;
  shippingType?: ISortEnumType;
  shippingPrice?: ISortEnumType;
  description?: ISortEnumType;
  publishDate?: ISortEnumType;
  views?: ISortEnumType;
  status?: ISortEnumType;
  seoProduct?: ISortEnumType;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface IProductCollectionSegment {
  items?: Array<IProduct>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: ICollectionSegmentInfo;
  totalCount: number;
}

export interface ITaxonomySortInput {
  projectId?: ISortEnumType;
  name?: ISortEnumType;
  slug?: ISortEnumType;
  description?: ISortEnumType;
  termGroup?: ISortEnumType;
  photo?: ISortEnumType;
  parentId?: ISortEnumType;
  parent?: ITaxonomySortInput;
  isPublic?: ISortEnumType;
  id?: ISortEnumType;
  createdAt?: ISortEnumType;
  updatedAt?: ISortEnumType;
}

export interface ITaxonomyCollectionSegment {
  items?: Array<ITaxonomy>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: ICollectionSegmentInfo;
  totalCount: number;
}

export interface IShop {
  projectId: IUUID;
  shopType: IShopType;
  profileUrl: string;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export const enum IShopType {
  IXULABS = 'IXULABS',
  MERCADOLIBRE = 'MERCADOLIBRE',
}

export interface IContactEmail {
  fullName: string;
  email: string;
  sendGridKey: string;
  fromEmail: string;
  fromName: string;
  description: string;
  projectId: IUUID;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IVideo {
  sessionId: string;
  token: string;
  videoCall: IVideoCall;
}

export interface IVideoCall {
  projectId: IUUID;
  memberId: IUUID;
  sessionId: string;
  sessionName: string;
  members: Array<IVideoCallMember>;
  services: Array<IVideoCallService>;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IVideoCallMember {
  videoCallId: IUUID;
  videoCall: IVideoCall;
  memberId: IUUID;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IVideoCallService {
  videoCallId: IUUID;
  videoCall: IVideoCall;
  serviceCode: string;
  viewAdmin: boolean;
  viewUser: boolean;
  id: IUUID;
  createdAt: IDateTime;
  updatedAt: IDateTime;
}

export interface IMutation {
  createMember: ICreateMemberPayload;
  loginMember: ILoginMemberPayload;
  createCompany: ICreateCompanyPayload;
  createProject: ICreateProjectPayload;
  createUser: ICreateUserPayload;
  updateProfile: IUpdateProfilePayload;
  updatePassword: IUpdatePasswordPayload;
  activeMember: IActiveMemberPayload;
  createProjectRole: ICreateProjectRolePayload;
  generateSlug: string;
  removeAccent: string;
  uploadPhotoProfile: IUploadPhotoProfilePayload;
  deleteProject: IDeleteProjectPayload;
  updateCompany: IUpdateCompanyPayload;
  restorePassword: IRestorePasswordPayload;
  recoverPassword: IRecoverPasswordPayload;
  verifyToken: IVerifyTokenPayload;
  createGroup: ICreateGroupPayload;
  addGroupToMember: IAddGroupToMemberPayload;
  addGroupToTaxonomy: IAddGroupToTaxonomyPayload;
  addTaxonomyToMember: IAddTaxonomyToMemberPayload;
  deleteGroup: IDeleteGroupPayload;
  deleteGroupTaxonomy: IDeleteGroupTaxonomyPayload;
  deleteMemberGroup: IDeleteMemberGroupMutationPayload;
  deleteMemberTaxonomy: IDeleteMemberTaxonomyPayload;
  deleteProjectRole: IDeleteProjectRolePayload;
  createUpdatePermission: ICreateUpdatePermissionPayload;
  updateProject: IUpdateProjectPayload;
  updateProjectRole: IUpdateProjectRolePayload;
  associationServiceToProject: IAssociationServiceToProjectPayload;
  createArrayFunction: ICreateArrayFunctionPayload;
  deleteArrayFunction: IDeleteArrayFunctionPayload;
  updateServiceProject: IUpdateServiceProjectPayload;
  deleteServiceProject: IDeleteServiceProjectPayload;
  createEvent: ICreateEventPayload;
  updateEvent: IUpdateEventPayload;
  deleteEvent: IDeleteEventPayload;
  createEventSession: ICreateEventSessionPayload;
  updateEventSession: IUpdateEventSessionPayload;
  deleteEventSession: IDeleteEventSessionPayload;
  addChatMember: IAddChatMemberPayload;
  addChatMemberWs: IAddChatMemberWsPayload;
  createArticle: ICreateArticlePayload;
  blog_generateSlug: string;
  updateStatusArticle: IUpdateStatusArticlePayload;
  createTaxonomy: ICreateTaxonomyPayload;
  updateArticle: IUpdateArticlePayload;
  updateTaxonomy: IUpdateTaxonomyPayload;
  deleteArticle: IDeleteArticlePayload;
  deleteTaxonomy: IDeleteTaxonomyPayload;
  newSurvey: INewSurveyPayload;
  updateSurvey: IUpdateSurveyPayload;
  deleteSurvey: IDeleteSurveyPayload;
  newQuestion: INewQuestionPayload;
  deleteQuestion: IDeleteQuestionPayload;
  updateQuestion: IUpdateQuestionPayload;
  newOption: INewOptionPayload;
  deleteOption: IDeleteOptionPayload;
  updateOption: IUpdateOptionPayload;
  answerQuestion: IAnswerQuestionPayload;
  createProduct: ICreateProductPayload;
  updateProduct: IUpdateProductPayload;
  deleteProduct: IDeleteProductPayload;
  createInvoice: ICreateInvoicePayload;
  createAddress: ICreateAddressPayload;
  updateAddress: IUpdateAddressPayload;
  deleteAddress: IDeleteAddressPayload;
  updateStatusInvoice: IUpdateStatusInvoicePayload;
  createUpdateShop: ICreateUpdateShopPayload;
  createUpdateContactEmail: ICreateUpdateContactEmailPayload;
  sendEmail: ISendEmailPayload;
  deleteContactEmail: IDeleteContactEmailPayload;
  putConfig: IPutConfigPayload;
  deleteConfig: IDeleteConfigPayload;
  createVideoCall: ICreateVideoCallPayload;
  deleteVideoCall: IDeleteVideoCallPayload;
}

export interface ICreateMemberInput {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  photo?: string;
  isActive: boolean;
  roleCode?: string;
  countryCode?: string;
  companyId?: string;
}

export interface ICreateMemberPayload {
  accessToken: string;
  member: IMember;
}

export interface ILoginMemberInput {
  email: string;
  password: string;
  projectId?: string;
}

export interface ILoginMemberPayload {
  accessToken: string;
  member: IMember;
}

export interface ICreateCompanyInput {
  name: string;
}

export interface ICreateCompanyPayload {
  company: ICompany;
}

export interface ICreateProjectInput {
  companyId: IUUID;
  name: string;
  description: string;
  industryId: IUUID;
  logo: string;
  tagLine: string;
  url?: string;
}

export interface ICreateProjectPayload {
  project: IProject;
}

export interface ICreateUserInput {
  projectId: IUUID;
  email: string;
  url: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isActive: boolean;
  projectRoleCode?: string;
  countryCode?: string;
}

export interface ICreateUserPayload {
  accessToken: string;
  member: IMember;
}

export interface IUpdateProfileInput {
  firstName: string;
  lastName: string;
  companyName?: string;
  photo?: string;
  phone?: string;
  roleCode?: string;
  bussinessName?: string;
  rFC?: string;
  countryCode: string;
  memberId?: string;
  projectRoleCode?: string;
}

export interface IUpdateProfilePayload {
  member: IMember;
}

export interface IUpdatePasswordInput {
  currentPassword: string;
  newPassword: string;
  memberId: string;
}

export interface IUpdatePasswordPayload {
  member: IMember;
}

export interface IActiveMemberInput {
  memberId: string;
  active: boolean;
}

export interface IActiveMemberPayload {
  member: IMember;
}

export interface ICreateProjectRoleInput {
  projectId: IUUID;
  name: string;
  label?: string;
  description?: string;
}

export interface ICreateProjectRolePayload {
  projectRole: IProjectRole;
}

export interface IUploadPhotoProfileInput {
  photo: string;
  memberId: string;
}

export interface IUploadPhotoProfilePayload {
  member: IMember;
}

export interface IDeleteProjectInput {
  projectId: IUUID;
}

export interface IDeleteProjectPayload {
  project: IProject;
}

export interface IUpdateCompanyInput {
  companyId: IUUID;
  name?: string;
  industryId?: string;
  photo?: string;
  tagLine?: string;
}

export interface IUpdateCompanyPayload {
  company: ICompany;
}

export interface IRestorePasswordInput {
  newPassword: string;
  memberId: string;
}

export interface IRestorePasswordPayload {
  member: IMember;
}

export interface IRecoverPasswordInput {
  email: string;
  url: string;
  projectId?: string;
}

export interface IRecoverPasswordPayload {
  member: IMember;
}

export interface IVerifyTokenInput {
  token: string;
}

export interface IVerifyTokenPayload {
  member: IMember;
}

export interface ICreateGroupInput {
  projectId: IUUID;
  name: string;
  description?: string;
}

export interface ICreateGroupPayload {
  group: IGroup;
}

export interface IAddGroupToMemberInput {
  groupId: IUUID;
  memberId: IUUID;
}

export interface IAddGroupToMemberPayload {
  memberGroup: IMemberGroup;
}

export interface IMemberGroup {
  memberId: IUUID;
  member: IMember;
  groupId: IUUID;
  group: IGroup;
}

export interface IAddGroupToTaxonomyInput {
  groupId: IUUID;
  taxonomyId: IUUID;
}

export interface IAddGroupToTaxonomyPayload {
  groupTaxonomy: IGroupTaxonomy;
}

export interface IAddTaxonomyToMemberInput {
  memberId: IUUID;
  taxonomyId: IUUID;
}

export interface IAddTaxonomyToMemberPayload {
  memberTaxonomy: IMemberTaxonomy;
}

export interface IDeleteGroupInput {
  groupId: IUUID;
}

export interface IDeleteGroupPayload {
  member: IGroup;
}

export interface IDeleteGroupTaxonomyInput {
  groupId: IUUID;
  taxonomyId: IUUID;
}

export interface IDeleteGroupTaxonomyPayload {
  memberTaxonomy: IGroupTaxonomy;
}

export interface IDeleteMemberGroupMutationInput {
  memberId: IUUID;
  groupId: IUUID;
}

export interface IDeleteMemberGroupMutationPayload {
  memberGroup: IMemberGroup;
}

export interface IDeleteMemberTaxonomyInput {
  memberId: IUUID;
  taxonomyId: IUUID;
}

export interface IDeleteMemberTaxonomyPayload {
  memberTaxonomy: IMemberTaxonomy;
}

export interface IDeleteProjectRoleInput {
  id: IUUID;
  projectId: IUUID;
}

export interface IDeleteProjectRolePayload {
  projectRole: IProjectRole;
}

export interface ICreateUpdatePermissionInput {
  projectId: IUUID;
  projectRoleId: IUUID;
  rules: string;
}

export interface ICreateUpdatePermissionPayload {
  permission: IPermission;
}

export interface IUpdateProjectInput {
  projectId: IUUID;
  name?: string;
  description?: string;
  logo?: string;
  tagLine?: string;
  url?: string;
  industryId?: string;
}

export interface IUpdateProjectPayload {
  project: IProject;
}

export interface IUpdateProjectRoleInput {
  projectRoleId: IUUID;
  name: string;
  label?: string;
  description?: string;
}

export interface IUpdateProjectRolePayload {
  projectRole: IProjectRole;
}

export interface IAssociationServiceToProjectInput {
  projectId: IUUID;
  codeNames: Array<string>;
}

export interface IAssociationServiceToProjectPayload {
  projectMicroservice: IProjectMicroservice;
}

export interface ICreateArrayFunctionInput {
  service: string;
  functions: Array<IFunctionArrayInput>;
}

export interface IFunctionArrayInput {
  name: string;
  codeName: string;
  functionType: IFunctionType;
}

export interface ICreateArrayFunctionPayload {
  service: IMicroservice;
}

export interface IDeleteArrayFunctionInput {
  service: string;
  functions: Array<IFunctionArrayInput>;
}

export interface IDeleteArrayFunctionPayload {
  service: IMicroservice;
}

export interface IUpdateServiceProjectInput {
  projectId: IUUID;
  codeName: string;
  isActive?: boolean;
  label?: string;
}

export interface IUpdateServiceProjectPayload {
  message: string;
}

export interface IDeleteServiceProjectInput {
  projectId: IUUID;
  codeName: string;
}

export interface IDeleteServiceProjectPayload {
  message: string;
}

export interface ICreateEventInput {
  projectId: IUUID;
  memberId: IUUID;
  description: string;
  members?: Array<string>;
  eventType: IEventType;
  eventMode: IEventMode;
  title?: string;
  eventDate?: string;
  roomId?: string;
  file?: string;
  location?: string;
  eventSessionId?: string;
  color?: string;
}

export interface ICreateEventPayload {
  event: IEvent;
}

export interface IUpdateEventInput {
  eventId: IUUID;
  description: string;
  members?: Array<string>;
  eventType: IEventType;
  eventMode: IEventMode;
  title?: string;
  eventDate?: string;
  roomId?: string;
  file?: string;
  location?: string;
  eventSessionId?: string;
  color?: string;
}

export interface IUpdateEventPayload {
  event: IEvent;
}

export interface IDeleteEventInput {
  eventId: IUUID;
}

export interface IDeleteEventPayload {
  message: string;
}

export interface ICreateEventSessionInput {
  projectId: IUUID;
  price: IDecimal;
  title?: string;
  image?: string;
  description?: string;
  duration: number;
  eventMode: IEventMode;
}

export interface ICreateEventSessionPayload {
  eventSession: IEventSession;
}

export interface IUpdateEventSessionInput {
  eventSessionId: IUUID;
  price: IDecimal;
  title?: string;
  image?: string;
  description?: string;
  duration: number;
  eventMode: IEventMode;
}

export interface IUpdateEventSessionPayload {
  eventSession: IEventSession;
}

export interface IDeleteEventSessionInput {
  eventSessionId: IUUID;
}

export interface IDeleteEventSessionPayload {
  message: string;
}

export interface IAddChatMemberInput {
  memberId: IUUID;
  toMemberId: IUUID;
  message: string;
}

export interface IAddChatMemberPayload {
  conversationReplies: Array<IConversationReply>;
}

export interface IAddChatMemberWsInput {
  memberId: string;
  toMemberId: string;
  message: string;
}

export interface IAddChatMemberWsPayload {
  conversationReplies: Array<IConversationReply>;
}

export interface ICreateArticleInput {
  projectId: IUUID;
  categories: Array<string>;
  title: string;
  tags?: Array<string>;
  photo?: string;
  resume?: string;
  content?: string;
  slug?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  structuredMarking?: string;
  imageAlt?: string;
  releaseDate?: string;
  status?: string;
}

export interface ICreateArticlePayload {
  article: IArticle;
}

export interface IUpdateStatusArticleInput {
  articleId: IUUID;
  status: string;
}

export interface IUpdateStatusArticlePayload {
  article: IArticle;
}

export interface ICreateTaxonomyInput {
  projectId: IUUID;
  name: string;
  isPublic?: boolean;
  slug?: string;
  termGroup?: string;
  parentId?: string;
}

export interface ICreateTaxonomyPayload {
  taxonomy: ITaxonomy;
}

export interface IUpdateArticleInput {
  articleId: IUUID;
  categories: Array<string>;
  title: string;
  tags?: Array<string>;
  photo?: string;
  resume?: string;
  content?: string;
  slug?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  structuredMarking?: string;
  imageAlt?: string;
  releaseDate?: string;
  status?: string;
}

export interface IUpdateArticlePayload {
  article: IArticle;
}

export interface IUpdateTaxonomyInput {
  taxonomyId: IUUID;
  name: string;
  isPublic?: boolean;
  slug?: string;
  parentId?: string;
}

export interface IUpdateTaxonomyPayload {
  taxonomy: ITaxonomy;
}

export interface IDeleteArticleInput {
  articleId: IUUID;
}

export interface IDeleteArticlePayload {
  article: IArticle;
}

export interface IDeleteTaxonomyInput {
  taxonomyId: IUUID;
}

export interface IDeleteTaxonomyPayload {
  taxonomy: ITaxonomy;
}

export interface INewSurveyInput {
  articleId: IUUID;
}

export interface INewSurveyPayload {
  survey: ISurvey;
}

export interface IUpdateSurveyInput {
  surveyId: IUUID;
  isActive?: boolean;
  title?: string;
  description?: string;
  thankYouMessage?: string;
}

export interface IUpdateSurveyPayload {
  survey: ISurvey;
}

export interface IDeleteSurveyInput {
  surveyId: IUUID;
}

export interface IDeleteSurveyPayload {
  survey: ISurvey;
}

export interface INewQuestionInput {
  surveyId: IUUID;
  type: IQuestionType;
}

export interface INewQuestionPayload {
  question: IQuestion;
}

export interface IDeleteQuestionInput {
  questionId: IUUID;
}

export interface IDeleteQuestionPayload {
  question: IQuestion;
}

export interface IUpdateQuestionInput {
  questionId: IUUID;
  position: number;
  type: IQuestionType;
  isRequired?: boolean;
  allowsFileUpload?: boolean;
  title?: string;
  image?: string;
}

export interface IUpdateQuestionPayload {
  question: IQuestion;
}

export interface INewOptionInput {
  questionId: IUUID;
}

export interface INewOptionPayload {
  option: IOption;
}

export interface IDeleteOptionInput {
  optionId: IUUID;
}

export interface IDeleteOptionPayload {
  option: IOption;
}

export interface IUpdateOptionInput {
  optionId: IUUID;
  position: number;
  title?: string;
}

export interface IUpdateOptionPayload {
  option: IOption;
}

export interface IAnswerQuestionInput {
  memberId: IUUID;
  answerings: Array<IAnsweringDTOInput>;
}

export interface IAnsweringDTOInput {
  questionId: IUUID;
  options?: Array<string>;
  responseText?: string;
  uploadFile?: string;
}

export interface IAnswerQuestionPayload {
  message: string;
}

export interface ICreateProductInput {
  projectId: IUUID;
  categories: Array<string>;
  title: string;
  sku: string;
  price: IDecimal;
  stock: number;
  shippingPrice?: IDecimal;
  offerPrice?: IDecimal;
  images?: Array<string>;
  shippingType?: string;
  photo?: string;
  description?: string;
  slug?: string;
  seoProduct?: string;
  publishDate?: string;
  status: IProductStatus;
}

export interface ICreateProductPayload {
  product: IProduct;
}

export interface IUpdateProductInput {
  productId: IUUID;
  categories?: Array<string>;
  price?: IDecimal;
  stock?: number;
  shippingPrice?: IDecimal;
  offerPrice?: IDecimal;
  images?: Array<string>;
  title?: string;
  sku?: string;
  shippingType?: string;
  photo?: string;
  description?: string;
  slug?: string;
  seoProduct?: string;
  publishDate?: string;
  status: IProductStatus;
}

export interface IUpdateProductPayload {
  product: IProduct;
}

export interface IDeleteProductInput {
  productId: IUUID;
}

export interface IDeleteProductPayload {
  product: IProduct;
}

export interface ICreateInvoiceInput {
  projectId: IUUID;
  addressId: IUUID;
  memberId: IUUID;
  products: Array<IProductInvoiceDetailInput>;
  invoiceNumber: string;
  invoiceStatus: IInvoiceStatus;
  shippingSale: IDecimal;
  observations?: string;
  invoiceDate?: string;
}

export interface IProductInvoiceDetailInput {
  id: IUUID;
  quantity: number;
}

export interface ICreateInvoicePayload {
  invoice: IInvoice;
}

export interface ICreateAddressInput {
  projectId: IUUID;
  memberId: IUUID;
  firstName: string;
  lastName: string;
  countryName: string;
  state: string;
  city: string;
  subUrb: string;
  zipCode: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  addressDetails: string;
  addressType: string;
  isPrincipal?: boolean;
  businessName?: string;
  rFC?: string;
}

export interface ICreateAddressPayload {
  address: IAddress;
}

export interface IUpdateAddressInput {
  addressId: IUUID;
  isPrincipal?: boolean;
  firstName?: string;
  lastName?: string;
  countryName?: string;
  state?: string;
  city?: string;
  subUrb?: string;
  zipCode?: string;
  addressLine1?: string;
  addressLine2?: string;
  phone?: string;
  addressDetails?: string;
  addressType?: string;
  businessName?: string;
  rFC?: string;
}

export interface IUpdateAddressPayload {
  address: IAddress;
}

export interface IDeleteAddressInput {
  addressId: IUUID;
}

export interface IDeleteAddressPayload {
  address: IAddress;
}

export interface IUpdateStatusInvoiceInput {
  invoiceId: IUUID;
  status: IInvoiceStatus;
}

export interface IUpdateStatusInvoicePayload {
  invoice: IInvoice;
}

export interface ICreateUpdateShopInput {
  projectId: IUUID;
  shopType: IShopType;
  profileUrl?: string;
}

export interface ICreateUpdateShopPayload {
  shop: IShop;
}

export interface ICreateUpdateContactEmailInput {
  projectId: IUUID;
  contactEmail: string;
  fullName: string;
  fromEmail?: string;
  fromName?: string;
  sendGridKey?: string;
  description?: string;
}

export interface ICreateUpdateContactEmailPayload {
  contactEmail: IContactEmail;
}

export interface ISendEmailInput {
  projectId: IUUID;
  contactEmail: string;
  name: string;
  email: string;
  subject: string;
  content: string;
}

export interface ISendEmailPayload {
  responseEmail: IResponseEmail;
}

export interface IResponseEmail {
  message: string;
}

export interface IDeleteContactEmailInput {
  projectId: IUUID;
  contactEmail: string;
}

export interface IDeleteContactEmailPayload {
  message: string;
}

export interface IPutConfigInput {
  projectId: IUUID;
  key: string;
  value?: string;
}

export interface IPutConfigPayload {
  configuration: IConfiguration;
}

export interface IDeleteConfigInput {
  projectId: IUUID;
  key: string;
}

export interface IDeleteConfigPayload {
  configuration: IConfiguration;
}

export interface ICreateVideoCallInput {
  projectId: IUUID;
  memberId: IUUID;
  members?: Array<IMemberInput>;
  services?: Array<IServiceInput>;
  url?: string;
}

export interface IMemberInput {
  id: string;
  fullName: string;
  email: string;
}

export interface IServiceInput {
  serviceCode: string;
  viewAdmin: boolean;
  viewUser: boolean;
}

export interface ICreateVideoCallPayload {
  videoCall: IVideoCall;
}

export interface IDeleteVideoCallInput {
  videoCallId: IUUID;
}

export interface IDeleteVideoCallPayload {
  videoCall: IVideoCall;
}

export interface ISubscription {
  conversationPublished: Array<IConversationReply>;
}

export const enum IApplyPolicy {
  BEFORE_RESOLVER = 'BEFORE_RESOLVER',
  AFTER_RESOLVER = 'AFTER_RESOLVER',
}

/**
 * The name scalar represents a valid GraphQL name as specified in the spec and can be used to refer to fields or types.
 */
export type IName = any;

/** *******************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 ******************************** */
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface IResolver {
  Query?: IQueryTypeResolver;
  UUID?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  GroupCollectionSegment?: IGroupCollectionSegmentTypeResolver;
  Group?: IGroupTypeResolver;
  Project?: IProjectTypeResolver;
  Industry?: IIndustryTypeResolver;
  Company?: ICompanyTypeResolver;
  Country?: ICountryTypeResolver;
  Currency?: ICurrencyTypeResolver;
  Profile?: IProfileTypeResolver;
  Member?: IMemberTypeResolver;
  MemberCompany?: IMemberCompanyTypeResolver;
  MemberRole?: IMemberRoleTypeResolver;
  Role?: IRoleTypeResolver;
  MemberProject?: IMemberProjectTypeResolver;
  MemberProjectRoleProject?: IMemberProjectRoleProjectTypeResolver;
  ProjectRole?: IProjectRoleTypeResolver;
  Permission?: IPermissionTypeResolver;
  MemberTaxonomy?: IMemberTaxonomyTypeResolver;
  Address?: IAddressTypeResolver;
  Invoice?: IInvoiceTypeResolver;
  Decimal?: GraphQLScalarType;
  InvoiceDetail?: IInvoiceDetailTypeResolver;
  Product?: IProductTypeResolver;
  Taxonomy?: ITaxonomyTypeResolver;
  Article?: IArticleTypeResolver;
  Survey?: ISurveyTypeResolver;
  Question?: IQuestionTypeResolver;
  Option?: IOptionTypeResolver;
  Answer?: IAnswerTypeResolver;
  ProductDetail?: IProductDetailTypeResolver;
  Image?: IImageTypeResolver;
  Microservice?: IMicroserviceTypeResolver;
  ProjectMicroservice?: IProjectMicroserviceTypeResolver;
  Function?: IFunctionTypeResolver;
  Configuration?: IConfigurationTypeResolver;
  GroupTaxonomy?: IGroupTaxonomyTypeResolver;
  CollectionSegmentInfo?: ICollectionSegmentInfoTypeResolver;
  MyUrl?: IMyUrlTypeResolver;
  MemberCollectionSegment?: IMemberCollectionSegmentTypeResolver;
  MemberChat?: IMemberChatTypeResolver;
  ServiceHelper?: IServiceHelperTypeResolver;
  Event?: IEventTypeResolver;
  EventSession?: IEventSessionTypeResolver;
  EventMember?: IEventMemberTypeResolver;
  ConversationReply?: IConversationReplyTypeResolver;
  Conversation?: IConversationTypeResolver;
  MemberConversation?: IMemberConversationTypeResolver;
  QuestionDTO?: IQuestionDTOTypeResolver;
  ArticlesConnection?: IArticlesConnectionTypeResolver;
  PageInfo?: IPageInfoTypeResolver;
  ArticlesEdge?: IArticlesEdgeTypeResolver;
  ArticleCollectionSegment?: IArticleCollectionSegmentTypeResolver;
  InvoiceCollectionSegment?: IInvoiceCollectionSegmentTypeResolver;
  ProductCollectionSegment?: IProductCollectionSegmentTypeResolver;
  TaxonomyCollectionSegment?: ITaxonomyCollectionSegmentTypeResolver;
  Shop?: IShopTypeResolver;
  ContactEmail?: IContactEmailTypeResolver;
  Video?: IVideoTypeResolver;
  VideoCall?: IVideoCallTypeResolver;
  VideoCallMember?: IVideoCallMemberTypeResolver;
  VideoCallService?: IVideoCallServiceTypeResolver;
  Mutation?: IMutationTypeResolver;
  CreateMemberPayload?: ICreateMemberPayloadTypeResolver;
  LoginMemberPayload?: ILoginMemberPayloadTypeResolver;
  CreateCompanyPayload?: ICreateCompanyPayloadTypeResolver;
  CreateProjectPayload?: ICreateProjectPayloadTypeResolver;
  CreateUserPayload?: ICreateUserPayloadTypeResolver;
  UpdateProfilePayload?: IUpdateProfilePayloadTypeResolver;
  UpdatePasswordPayload?: IUpdatePasswordPayloadTypeResolver;
  ActiveMemberPayload?: IActiveMemberPayloadTypeResolver;
  CreateProjectRolePayload?: ICreateProjectRolePayloadTypeResolver;
  UploadPhotoProfilePayload?: IUploadPhotoProfilePayloadTypeResolver;
  DeleteProjectPayload?: IDeleteProjectPayloadTypeResolver;
  UpdateCompanyPayload?: IUpdateCompanyPayloadTypeResolver;
  RestorePasswordPayload?: IRestorePasswordPayloadTypeResolver;
  RecoverPasswordPayload?: IRecoverPasswordPayloadTypeResolver;
  VerifyTokenPayload?: IVerifyTokenPayloadTypeResolver;
  CreateGroupPayload?: ICreateGroupPayloadTypeResolver;
  AddGroupToMemberPayload?: IAddGroupToMemberPayloadTypeResolver;
  MemberGroup?: IMemberGroupTypeResolver;
  AddGroupToTaxonomyPayload?: IAddGroupToTaxonomyPayloadTypeResolver;
  AddTaxonomyToMemberPayload?: IAddTaxonomyToMemberPayloadTypeResolver;
  DeleteGroupPayload?: IDeleteGroupPayloadTypeResolver;
  DeleteGroupTaxonomyPayload?: IDeleteGroupTaxonomyPayloadTypeResolver;
  DeleteMemberGroupMutationPayload?: IDeleteMemberGroupMutationPayloadTypeResolver;
  DeleteMemberTaxonomyPayload?: IDeleteMemberTaxonomyPayloadTypeResolver;
  DeleteProjectRolePayload?: IDeleteProjectRolePayloadTypeResolver;
  CreateUpdatePermissionPayload?: ICreateUpdatePermissionPayloadTypeResolver;
  UpdateProjectPayload?: IUpdateProjectPayloadTypeResolver;
  UpdateProjectRolePayload?: IUpdateProjectRolePayloadTypeResolver;
  AssociationServiceToProjectPayload?: IAssociationServiceToProjectPayloadTypeResolver;
  CreateArrayFunctionPayload?: ICreateArrayFunctionPayloadTypeResolver;
  DeleteArrayFunctionPayload?: IDeleteArrayFunctionPayloadTypeResolver;
  UpdateServiceProjectPayload?: IUpdateServiceProjectPayloadTypeResolver;
  DeleteServiceProjectPayload?: IDeleteServiceProjectPayloadTypeResolver;
  CreateEventPayload?: ICreateEventPayloadTypeResolver;
  UpdateEventPayload?: IUpdateEventPayloadTypeResolver;
  DeleteEventPayload?: IDeleteEventPayloadTypeResolver;
  CreateEventSessionPayload?: ICreateEventSessionPayloadTypeResolver;
  UpdateEventSessionPayload?: IUpdateEventSessionPayloadTypeResolver;
  DeleteEventSessionPayload?: IDeleteEventSessionPayloadTypeResolver;
  AddChatMemberPayload?: IAddChatMemberPayloadTypeResolver;
  AddChatMemberWsPayload?: IAddChatMemberWsPayloadTypeResolver;
  CreateArticlePayload?: ICreateArticlePayloadTypeResolver;
  UpdateStatusArticlePayload?: IUpdateStatusArticlePayloadTypeResolver;
  CreateTaxonomyPayload?: ICreateTaxonomyPayloadTypeResolver;
  UpdateArticlePayload?: IUpdateArticlePayloadTypeResolver;
  UpdateTaxonomyPayload?: IUpdateTaxonomyPayloadTypeResolver;
  DeleteArticlePayload?: IDeleteArticlePayloadTypeResolver;
  DeleteTaxonomyPayload?: IDeleteTaxonomyPayloadTypeResolver;
  NewSurveyPayload?: INewSurveyPayloadTypeResolver;
  UpdateSurveyPayload?: IUpdateSurveyPayloadTypeResolver;
  DeleteSurveyPayload?: IDeleteSurveyPayloadTypeResolver;
  NewQuestionPayload?: INewQuestionPayloadTypeResolver;
  DeleteQuestionPayload?: IDeleteQuestionPayloadTypeResolver;
  UpdateQuestionPayload?: IUpdateQuestionPayloadTypeResolver;
  NewOptionPayload?: INewOptionPayloadTypeResolver;
  DeleteOptionPayload?: IDeleteOptionPayloadTypeResolver;
  UpdateOptionPayload?: IUpdateOptionPayloadTypeResolver;
  AnswerQuestionPayload?: IAnswerQuestionPayloadTypeResolver;
  CreateProductPayload?: ICreateProductPayloadTypeResolver;
  UpdateProductPayload?: IUpdateProductPayloadTypeResolver;
  DeleteProductPayload?: IDeleteProductPayloadTypeResolver;
  CreateInvoicePayload?: ICreateInvoicePayloadTypeResolver;
  CreateAddressPayload?: ICreateAddressPayloadTypeResolver;
  UpdateAddressPayload?: IUpdateAddressPayloadTypeResolver;
  DeleteAddressPayload?: IDeleteAddressPayloadTypeResolver;
  UpdateStatusInvoicePayload?: IUpdateStatusInvoicePayloadTypeResolver;
  CreateUpdateShopPayload?: ICreateUpdateShopPayloadTypeResolver;
  CreateUpdateContactEmailPayload?: ICreateUpdateContactEmailPayloadTypeResolver;
  SendEmailPayload?: ISendEmailPayloadTypeResolver;
  ResponseEmail?: IResponseEmailTypeResolver;
  DeleteContactEmailPayload?: IDeleteContactEmailPayloadTypeResolver;
  PutConfigPayload?: IPutConfigPayloadTypeResolver;
  DeleteConfigPayload?: IDeleteConfigPayloadTypeResolver;
  CreateVideoCallPayload?: ICreateVideoCallPayloadTypeResolver;
  DeleteVideoCallPayload?: IDeleteVideoCallPayloadTypeResolver;
  Subscription?: ISubscriptionTypeResolver;
  Name?: GraphQLScalarType;
}
export interface IQueryTypeResolver<TParent = any> {
  listGroups?: QueryToListGroupsResolver<TParent>;
  groupById?: QueryToGroupByIdResolver<TParent>;
  me?: QueryToMeResolver<TParent>;
  meById?: QueryToMeByIdResolver<TParent>;
  referer?: QueryToRefererResolver<TParent>;
  projectByUrl?: QueryToProjectByUrlResolver<TParent>;
  countries?: QueryToCountriesResolver<TParent>;
  companies?: QueryToCompaniesResolver<TParent>;
  roles?: QueryToRolesResolver<TParent>;
  industries?: QueryToIndustriesResolver<TParent>;
  rolesByProject?: QueryToRolesByProjectResolver<TParent>;
  members?: QueryToMembersResolver<TParent>;
  countryByCode?: QueryToCountryByCodeResolver<TParent>;
  listUsers?: QueryToListUsersResolver<TParent>;
  projects?: QueryToProjectsResolver<TParent>;
  projectById?: QueryToProjectByIdResolver<TParent>;
  conversationMemberBy?: QueryToConversationMemberByResolver<TParent>;
  memberNameBy?: QueryToMemberNameByResolver<TParent>;
  services?: QueryToServicesResolver<TParent>;
  servicesByProject?: QueryToServicesByProjectResolver<TParent>;
  myEvents?: QueryToMyEventsResolver<TParent>;
  eventById?: QueryToEventByIdResolver<TParent>;
  conversationsByToMemberId?: QueryToConversationsByToMemberIdResolver<TParent>;
  conversationsByMemberId?: QueryToConversationsByMemberIdResolver<TParent>;
  resultByMemberId?: QueryToResultByMemberIdResolver<TParent>;
  results?: QueryToResultsResolver<TParent>;
  answers?: QueryToAnswersResolver<TParent>;
  articles?: QueryToArticlesResolver<TParent>;
  listArticles?: QueryToListArticlesResolver<TParent>;
  listInvoices?: QueryToListInvoicesResolver<TParent>;
  listAddresses?: QueryToListAddressesResolver<TParent>;
  taxonomyById?: QueryToTaxonomyByIdResolver<TParent>;
  listProducts?: QueryToListProductsResolver<TParent>;
  taxonomiesByProject?: QueryToTaxonomiesByProjectResolver<TParent>;
  surveysByArticleId?: QueryToSurveysByArticleIdResolver<TParent>;
  shopById?: QueryToShopByIdResolver<TParent>;
  articleById?: QueryToArticleByIdResolver<TParent>;
  articleBySlug?: QueryToArticleBySlugResolver<TParent>;
  productById?: QueryToProductByIdResolver<TParent>;
  productBySlug?: QueryToProductBySlugResolver<TParent>;
  contactEmails?: QueryToContactEmailsResolver<TParent>;
  configs?: QueryToConfigsResolver<TParent>;
  videoCallById?: QueryToVideoCallByIdResolver<TParent>;
  videoCallBySessionId?: QueryToVideoCallBySessionIdResolver<TParent>;
}

export interface QueryToListGroupsArgs {
  skip?: number;
  take?: number;
  filter?: IGroupFilterInput;
  order?: Array<IGroupSortInput>;
}
export interface QueryToListGroupsResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToListGroupsArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToGroupByIdArgs {
  id: IUUID;
}
export interface QueryToGroupByIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToGroupByIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToMeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToMeByIdArgs {
  id: IUUID;
}
export interface QueryToMeByIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToMeByIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToRefererResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToProjectByUrlArgs {
  url: string;
}
export interface QueryToProjectByUrlResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToProjectByUrlArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToCountriesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToCompaniesArgs {
  order?: Array<ICompanySortInput>;
}
export interface QueryToCompaniesResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToCompaniesArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToRolesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToIndustriesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToRolesByProjectArgs {
  id: IUUID;
}
export interface QueryToRolesByProjectResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToRolesByProjectArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToMembersArgs {
  filter?: IMemberFilterInput;
}
export interface QueryToMembersResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToMembersArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToCountryByCodeArgs {
  code: string;
}
export interface QueryToCountryByCodeResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToCountryByCodeArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToListUsersArgs {
  skip?: number;
  take?: number;
  filter?: IMemberFilterInput;
  order?: Array<IMemberSortInput>;
}
export interface QueryToListUsersResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToListUsersArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToProjectsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToProjectByIdArgs {
  id: IUUID;
}
export interface QueryToProjectByIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToProjectByIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToConversationMemberByArgs {
  id: IUUID;
}
export interface QueryToConversationMemberByResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: QueryToConversationMemberByArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToMemberNameByArgs {
  id: IUUID;
}
export interface QueryToMemberNameByResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToMemberNameByArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToServicesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToServicesByProjectArgs {
  id: IUUID;
}
export interface QueryToServicesByProjectResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: QueryToServicesByProjectArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToMyEventsArgs {
  projectId: IUUID;
  id: IUUID;
  month: number;
  year: number;
}
export interface QueryToMyEventsResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToMyEventsArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToEventByIdArgs {
  projectId: IUUID;
  id: IUUID;
}
export interface QueryToEventByIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToEventByIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToConversationsByToMemberIdArgs {
  memberId: IUUID;
  toMemberId: IUUID;
}
export interface QueryToConversationsByToMemberIdResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: QueryToConversationsByToMemberIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToConversationsByMemberIdArgs {
  memberId: IUUID;
  projectId: IUUID;
}
export interface QueryToConversationsByMemberIdResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: QueryToConversationsByMemberIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToResultByMemberIdArgs {
  surveyId: IUUID;
  memberId: IUUID;
}
export interface QueryToResultByMemberIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToResultByMemberIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToResultsArgs {
  surveyId: IUUID;
}
export interface QueryToResultsResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToResultsArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToAnswersArgs {
  surveyId: IUUID;
}
export interface QueryToAnswersResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToAnswersArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToArticlesArgs {
  first?: number;
  after?: string;
  last?: number;
  before?: string;
  filter?: IArticleFilterInput;
  order?: Array<IArticleSortInput>;
}
export interface QueryToArticlesResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToArticlesArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToListArticlesArgs {
  skip?: number;
  take?: number;
  filter?: IArticleFilterInput;
  order?: Array<IArticleSortInput>;
}
export interface QueryToListArticlesResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToListArticlesArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToListInvoicesArgs {
  skip?: number;
  take?: number;
  filter?: IInvoiceFilterInput;
  order?: Array<IInvoiceSortInput>;
}
export interface QueryToListInvoicesResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToListInvoicesArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToListAddressesArgs {
  id: IUUID;
}
export interface QueryToListAddressesResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToListAddressesArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToTaxonomyByIdArgs {
  id: IUUID;
}
export interface QueryToTaxonomyByIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToTaxonomyByIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToListProductsArgs {
  skip?: number;
  take?: number;
  filter?: IProductFilterInput;
  order?: Array<IProductSortInput>;
}
export interface QueryToListProductsResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToListProductsArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToTaxonomiesByProjectArgs {
  skip?: number;
  take?: number;
  filter?: ITaxonomyFilterInput;
  order?: Array<ITaxonomySortInput>;
}
export interface QueryToTaxonomiesByProjectResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: QueryToTaxonomiesByProjectArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToSurveysByArticleIdArgs {
  articleId: IUUID;
}
export interface QueryToSurveysByArticleIdResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: QueryToSurveysByArticleIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToShopByIdArgs {
  projectId: IUUID;
}
export interface QueryToShopByIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToShopByIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToArticleByIdArgs {
  id: IUUID;
  viewed: boolean;
}
export interface QueryToArticleByIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToArticleByIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToArticleBySlugArgs {
  slug: string;
  viewed: boolean;
}
export interface QueryToArticleBySlugResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToArticleBySlugArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToProductByIdArgs {
  id: IUUID;
}
export interface QueryToProductByIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToProductByIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToProductBySlugArgs {
  slug: string;
}
export interface QueryToProductBySlugResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToProductBySlugArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToContactEmailsArgs {
  projectId: IUUID;
}
export interface QueryToContactEmailsResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToContactEmailsArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToConfigsArgs {
  id: IUUID;
}
export interface QueryToConfigsResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToConfigsArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToVideoCallByIdArgs {
  id: IUUID;
}
export interface QueryToVideoCallByIdResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: QueryToVideoCallByIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface QueryToVideoCallBySessionIdArgs {
  sessionId: string;
}
export interface QueryToVideoCallBySessionIdResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: QueryToVideoCallBySessionIdArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface IGroupCollectionSegmentTypeResolver<TParent = any> {
  items?: GroupCollectionSegmentToItemsResolver<TParent>;
  pageInfo?: GroupCollectionSegmentToPageInfoResolver<TParent>;
  totalCount?: GroupCollectionSegmentToTotalCountResolver<TParent>;
}

export interface GroupCollectionSegmentToItemsResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupCollectionSegmentToPageInfoResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupCollectionSegmentToTotalCountResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IGroupTypeResolver<TParent = any> {
  projectId?: GroupToProjectIdResolver<TParent>;
  project?: GroupToProjectResolver<TParent>;
  name?: GroupToNameResolver<TParent>;
  description?: GroupToDescriptionResolver<TParent>;
  members?: GroupToMembersResolver<TParent>;
  groupTaxonomies?: GroupToGroupTaxonomiesResolver<TParent>;
  id?: GroupToIdResolver<TParent>;
  createdAt?: GroupToCreatedAtResolver<TParent>;
  updatedAt?: GroupToUpdatedAtResolver<TParent>;
}

export interface GroupToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupToProjectResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupToMembersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupToGroupTaxonomiesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IProjectTypeResolver<TParent = any> {
  name?: ProjectToNameResolver<TParent>;
  description?: ProjectToDescriptionResolver<TParent>;
  logo?: ProjectToLogoResolver<TParent>;
  tagLine?: ProjectToTagLineResolver<TParent>;
  isReady?: ProjectToIsReadyResolver<TParent>;
  url?: ProjectToUrlResolver<TParent>;
  industryId?: ProjectToIndustryIdResolver<TParent>;
  industry?: ProjectToIndustryResolver<TParent>;
  companyId?: ProjectToCompanyIdResolver<TParent>;
  company?: ProjectToCompanyResolver<TParent>;
  projectRoles?: ProjectToProjectRolesResolver<TParent>;
  memberProjects?: ProjectToMemberProjectsResolver<TParent>;
  groups?: ProjectToGroupsResolver<TParent>;
  id?: ProjectToIdResolver<TParent>;
  createdAt?: ProjectToCreatedAtResolver<TParent>;
  updatedAt?: ProjectToUpdatedAtResolver<TParent>;
  services?: ProjectToServicesResolver<TParent>;
  site?: ProjectToSiteResolver<TParent>;
}

export interface ProjectToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToLogoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToTagLineResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToIsReadyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToUrlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToIndustryIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToIndustryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToCompanyIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToCompanyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToProjectRolesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToMemberProjectsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToGroupsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToServicesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToSiteResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IIndustryTypeResolver<TParent = any> {
  name?: IndustryToNameResolver<TParent>;
  slug?: IndustryToSlugResolver<TParent>;
  projects?: IndustryToProjectsResolver<TParent>;
  companies?: IndustryToCompaniesResolver<TParent>;
  id?: IndustryToIdResolver<TParent>;
  createdAt?: IndustryToCreatedAtResolver<TParent>;
  updatedAt?: IndustryToUpdatedAtResolver<TParent>;
}

export interface IndustryToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IndustryToSlugResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IndustryToProjectsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IndustryToCompaniesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IndustryToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IndustryToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IndustryToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICompanyTypeResolver<TParent = any> {
  name?: CompanyToNameResolver<TParent>;
  numberEmployees?: CompanyToNumberEmployeesResolver<TParent>;
  countryId?: CompanyToCountryIdResolver<TParent>;
  country?: CompanyToCountryResolver<TParent>;
  photo?: CompanyToPhotoResolver<TParent>;
  tagLine?: CompanyToTagLineResolver<TParent>;
  industryId?: CompanyToIndustryIdResolver<TParent>;
  industry?: CompanyToIndustryResolver<TParent>;
  memberCompanies?: CompanyToMemberCompaniesResolver<TParent>;
  projects?: CompanyToProjectsResolver<TParent>;
  id?: CompanyToIdResolver<TParent>;
  createdAt?: CompanyToCreatedAtResolver<TParent>;
  updatedAt?: CompanyToUpdatedAtResolver<TParent>;
}

export interface CompanyToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToNumberEmployeesResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToCountryIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToCountryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToPhotoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToTagLineResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToIndustryIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToIndustryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToMemberCompaniesResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToProjectsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CompanyToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICountryTypeResolver<TParent = any> {
  name?: CountryToNameResolver<TParent>;
  code?: CountryToCodeResolver<TParent>;
  currencyId?: CountryToCurrencyIdResolver<TParent>;
  currency?: CountryToCurrencyResolver<TParent>;
  profile?: CountryToProfileResolver<TParent>;
  id?: CountryToIdResolver<TParent>;
  createdAt?: CountryToCreatedAtResolver<TParent>;
  updatedAt?: CountryToUpdatedAtResolver<TParent>;
}

export interface CountryToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CountryToCodeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CountryToCurrencyIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CountryToCurrencyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CountryToProfileResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CountryToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CountryToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CountryToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICurrencyTypeResolver<TParent = any> {
  name?: CurrencyToNameResolver<TParent>;
  symbol?: CurrencyToSymbolResolver<TParent>;
  code?: CurrencyToCodeResolver<TParent>;
  exchangeRate?: CurrencyToExchangeRateResolver<TParent>;
  id?: CurrencyToIdResolver<TParent>;
  createdAt?: CurrencyToCreatedAtResolver<TParent>;
  updatedAt?: CurrencyToUpdatedAtResolver<TParent>;
}

export interface CurrencyToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CurrencyToSymbolResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CurrencyToCodeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CurrencyToExchangeRateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CurrencyToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CurrencyToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CurrencyToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IProfileTypeResolver<TParent = any> {
  firstName?: ProfileToFirstNameResolver<TParent>;
  lastName?: ProfileToLastNameResolver<TParent>;
  phone?: ProfileToPhoneResolver<TParent>;
  photo?: ProfileToPhotoResolver<TParent>;
  memberId?: ProfileToMemberIdResolver<TParent>;
  member?: ProfileToMemberResolver<TParent>;
  countryId?: ProfileToCountryIdResolver<TParent>;
  country?: ProfileToCountryResolver<TParent>;
  id?: ProfileToIdResolver<TParent>;
  createdAt?: ProfileToCreatedAtResolver<TParent>;
  updatedAt?: ProfileToUpdatedAtResolver<TParent>;
}

export interface ProfileToFirstNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToLastNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToPhoneResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToPhotoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToMemberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToCountryIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToCountryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProfileToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberTypeResolver<TParent = any> {
  email?: MemberToEmailResolver<TParent>;
  recoverToken?: MemberToRecoverTokenResolver<TParent>;
  recoverRegister?: MemberToRecoverRegisterResolver<TParent>;
  isActive?: MemberToIsActiveResolver<TParent>;
  firstTime?: MemberToFirstTimeResolver<TParent>;
  loginCount?: MemberToLoginCountResolver<TParent>;
  rFC?: MemberToRFCResolver<TParent>;
  businessName?: MemberToBusinessNameResolver<TParent>;
  memberCompanies?: MemberToMemberCompaniesResolver<TParent>;
  memberRoles?: MemberToMemberRolesResolver<TParent>;
  memberProjects?: MemberToMemberProjectsResolver<TParent>;
  profile?: MemberToProfileResolver<TParent>;
  groups?: MemberToGroupsResolver<TParent>;
  taxonomies?: MemberToTaxonomiesResolver<TParent>;
  id?: MemberToIdResolver<TParent>;
  createdAt?: MemberToCreatedAtResolver<TParent>;
  updatedAt?: MemberToUpdatedAtResolver<TParent>;
  addresses?: MemberToAddressesResolver<TParent>;
}

export interface MemberToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToRecoverTokenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToRecoverRegisterResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToIsActiveResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToFirstTimeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToLoginCountResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToRFCResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToBusinessNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToMemberCompaniesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToMemberRolesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToMemberProjectsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToProfileResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToGroupsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToTaxonomiesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberToAddressesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberCompanyTypeResolver<TParent = any> {
  companyId?: MemberCompanyToCompanyIdResolver<TParent>;
  company?: MemberCompanyToCompanyResolver<TParent>;
  memberId?: MemberCompanyToMemberIdResolver<TParent>;
  member?: MemberCompanyToMemberResolver<TParent>;
  isDefault?: MemberCompanyToIsDefaultResolver<TParent>;
  id?: MemberCompanyToIdResolver<TParent>;
  createdAt?: MemberCompanyToCreatedAtResolver<TParent>;
  updatedAt?: MemberCompanyToUpdatedAtResolver<TParent>;
}

export interface MemberCompanyToCompanyIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberCompanyToCompanyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberCompanyToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberCompanyToMemberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberCompanyToIsDefaultResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberCompanyToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberCompanyToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberCompanyToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberRoleTypeResolver<TParent = any> {
  companyId?: MemberRoleToCompanyIdResolver<TParent>;
  company?: MemberRoleToCompanyResolver<TParent>;
  roleId?: MemberRoleToRoleIdResolver<TParent>;
  role?: MemberRoleToRoleResolver<TParent>;
  memberId?: MemberRoleToMemberIdResolver<TParent>;
  member?: MemberRoleToMemberResolver<TParent>;
  id?: MemberRoleToIdResolver<TParent>;
  createdAt?: MemberRoleToCreatedAtResolver<TParent>;
  updatedAt?: MemberRoleToUpdatedAtResolver<TParent>;
}

export interface MemberRoleToCompanyIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberRoleToCompanyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberRoleToRoleIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberRoleToRoleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberRoleToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberRoleToMemberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberRoleToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberRoleToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberRoleToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IRoleTypeResolver<TParent = any> {
  name?: RoleToNameResolver<TParent>;
  codeName?: RoleToCodeNameResolver<TParent>;
  description?: RoleToDescriptionResolver<TParent>;
  memberRoles?: RoleToMemberRolesResolver<TParent>;
  id?: RoleToIdResolver<TParent>;
  createdAt?: RoleToCreatedAtResolver<TParent>;
  updatedAt?: RoleToUpdatedAtResolver<TParent>;
}

export interface RoleToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RoleToCodeNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RoleToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RoleToMemberRolesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RoleToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RoleToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RoleToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberProjectTypeResolver<TParent = any> {
  memberId?: MemberProjectToMemberIdResolver<TParent>;
  member?: MemberProjectToMemberResolver<TParent>;
  projectId?: MemberProjectToProjectIdResolver<TParent>;
  project?: MemberProjectToProjectResolver<TParent>;
  memberProjectRoleProject?: MemberProjectToMemberProjectRoleProjectResolver<TParent>;
  id?: MemberProjectToIdResolver<TParent>;
  createdAt?: MemberProjectToCreatedAtResolver<TParent>;
  updatedAt?: MemberProjectToUpdatedAtResolver<TParent>;
}

export interface MemberProjectToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectToMemberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectToProjectIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectToProjectResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectToMemberProjectRoleProjectResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberProjectRoleProjectTypeResolver<TParent = any> {
  memberProjectId?: MemberProjectRoleProjectToMemberProjectIdResolver<TParent>;
  memberProject?: MemberProjectRoleProjectToMemberProjectResolver<TParent>;
  projectRoleId?: MemberProjectRoleProjectToProjectRoleIdResolver<TParent>;
  projectRole?: MemberProjectRoleProjectToProjectRoleResolver<TParent>;
  id?: MemberProjectRoleProjectToIdResolver<TParent>;
  createdAt?: MemberProjectRoleProjectToCreatedAtResolver<TParent>;
  updatedAt?: MemberProjectRoleProjectToUpdatedAtResolver<TParent>;
}

export interface MemberProjectRoleProjectToMemberProjectIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectRoleProjectToMemberProjectResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectRoleProjectToProjectRoleIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectRoleProjectToProjectRoleResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectRoleProjectToIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectRoleProjectToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberProjectRoleProjectToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IProjectRoleTypeResolver<TParent = any> {
  name?: ProjectRoleToNameResolver<TParent>;
  codeName?: ProjectRoleToCodeNameResolver<TParent>;
  label?: ProjectRoleToLabelResolver<TParent>;
  description?: ProjectRoleToDescriptionResolver<TParent>;
  permission?: ProjectRoleToPermissionResolver<TParent>;
  projectId?: ProjectRoleToProjectIdResolver<TParent>;
  project?: ProjectRoleToProjectResolver<TParent>;
  id?: ProjectRoleToIdResolver<TParent>;
  createdAt?: ProjectRoleToCreatedAtResolver<TParent>;
  updatedAt?: ProjectRoleToUpdatedAtResolver<TParent>;
}

export interface ProjectRoleToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectRoleToCodeNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectRoleToLabelResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectRoleToDescriptionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectRoleToPermissionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectRoleToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectRoleToProjectResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectRoleToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectRoleToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectRoleToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IPermissionTypeResolver<TParent = any> {
  projectId?: PermissionToProjectIdResolver<TParent>;
  project?: PermissionToProjectResolver<TParent>;
  projectRoleId?: PermissionToProjectRoleIdResolver<TParent>;
  projectRole?: PermissionToProjectRoleResolver<TParent>;
  rules?: PermissionToRulesResolver<TParent>;
  id?: PermissionToIdResolver<TParent>;
  createdAt?: PermissionToCreatedAtResolver<TParent>;
  updatedAt?: PermissionToUpdatedAtResolver<TParent>;
}

export interface PermissionToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PermissionToProjectResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PermissionToProjectRoleIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PermissionToProjectRoleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PermissionToRulesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PermissionToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PermissionToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PermissionToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberTaxonomyTypeResolver<TParent = any> {
  memberId?: MemberTaxonomyToMemberIdResolver<TParent>;
  member?: MemberTaxonomyToMemberResolver<TParent>;
  taxonomyId?: MemberTaxonomyToTaxonomyIdResolver<TParent>;
}

export interface MemberTaxonomyToMemberIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberTaxonomyToMemberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberTaxonomyToTaxonomyIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IAddressTypeResolver<TParent = any> {
  projectId?: AddressToProjectIdResolver<TParent>;
  memberId?: AddressToMemberIdResolver<TParent>;
  rFC?: AddressToRFCResolver<TParent>;
  businessName?: AddressToBusinessNameResolver<TParent>;
  addressType?: AddressToAddressTypeResolver<TParent>;
  firstName?: AddressToFirstNameResolver<TParent>;
  lastName?: AddressToLastNameResolver<TParent>;
  countryName?: AddressToCountryNameResolver<TParent>;
  state?: AddressToStateResolver<TParent>;
  city?: AddressToCityResolver<TParent>;
  subUrb?: AddressToSubUrbResolver<TParent>;
  zipCode?: AddressToZipCodeResolver<TParent>;
  addressLine1?: AddressToAddressLine1Resolver<TParent>;
  addressLine2?: AddressToAddressLine2Resolver<TParent>;
  phone?: AddressToPhoneResolver<TParent>;
  addressDetails?: AddressToAddressDetailsResolver<TParent>;
  isPrincipal?: AddressToIsPrincipalResolver<TParent>;
  invoices?: AddressToInvoicesResolver<TParent>;
  id?: AddressToIdResolver<TParent>;
  createdAt?: AddressToCreatedAtResolver<TParent>;
  updatedAt?: AddressToUpdatedAtResolver<TParent>;
}

export interface AddressToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToRFCResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToBusinessNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToAddressTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToFirstNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToLastNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToCountryNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToStateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToCityResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToSubUrbResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToZipCodeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToAddressLine1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToAddressLine2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToPhoneResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToAddressDetailsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToIsPrincipalResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToInvoicesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IInvoiceTypeResolver<TParent = any> {
  invoiceNumber?: InvoiceToInvoiceNumberResolver<TParent>;
  invoiceStatus?: InvoiceToInvoiceStatusResolver<TParent>;
  projectId?: InvoiceToProjectIdResolver<TParent>;
  memberId?: InvoiceToMemberIdResolver<TParent>;
  invoiceDate?: InvoiceToInvoiceDateResolver<TParent>;
  observations?: InvoiceToObservationsResolver<TParent>;
  subTotal?: InvoiceToSubTotalResolver<TParent>;
  shippingSale?: InvoiceToShippingSaleResolver<TParent>;
  discount?: InvoiceToDiscountResolver<TParent>;
  total?: InvoiceToTotalResolver<TParent>;
  addressId?: InvoiceToAddressIdResolver<TParent>;
  address?: InvoiceToAddressResolver<TParent>;
  details?: InvoiceToDetailsResolver<TParent>;
  id?: InvoiceToIdResolver<TParent>;
  createdAt?: InvoiceToCreatedAtResolver<TParent>;
  updatedAt?: InvoiceToUpdatedAtResolver<TParent>;
}

export interface InvoiceToInvoiceNumberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToInvoiceStatusResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToInvoiceDateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToObservationsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToSubTotalResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToShippingSaleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToDiscountResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToTotalResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToAddressIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToAddressResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToDetailsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IInvoiceDetailTypeResolver<TParent = any> {
  invoiceId?: InvoiceDetailToInvoiceIdResolver<TParent>;
  invoice?: InvoiceDetailToInvoiceResolver<TParent>;
  productId?: InvoiceDetailToProductIdResolver<TParent>;
  product?: InvoiceDetailToProductResolver<TParent>;
  quantity?: InvoiceDetailToQuantityResolver<TParent>;
  salePrice?: InvoiceDetailToSalePriceResolver<TParent>;
  totalPrice?: InvoiceDetailToTotalPriceResolver<TParent>;
  id?: InvoiceDetailToIdResolver<TParent>;
  createdAt?: InvoiceDetailToCreatedAtResolver<TParent>;
  updatedAt?: InvoiceDetailToUpdatedAtResolver<TParent>;
}

export interface InvoiceDetailToInvoiceIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceDetailToInvoiceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceDetailToProductIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceDetailToProductResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceDetailToQuantityResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceDetailToSalePriceResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceDetailToTotalPriceResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceDetailToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceDetailToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceDetailToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IProductTypeResolver<TParent = any> {
  projectId?: ProductToProjectIdResolver<TParent>;
  memberId?: ProductToMemberIdResolver<TParent>;
  title?: ProductToTitleResolver<TParent>;
  photo?: ProductToPhotoResolver<TParent>;
  slug?: ProductToSlugResolver<TParent>;
  sku?: ProductToSkuResolver<TParent>;
  price?: ProductToPriceResolver<TParent>;
  offerPrice?: ProductToOfferPriceResolver<TParent>;
  stock?: ProductToStockResolver<TParent>;
  active?: ProductToActiveResolver<TParent>;
  shippingType?: ProductToShippingTypeResolver<TParent>;
  shippingPrice?: ProductToShippingPriceResolver<TParent>;
  description?: ProductToDescriptionResolver<TParent>;
  publishDate?: ProductToPublishDateResolver<TParent>;
  views?: ProductToViewsResolver<TParent>;
  status?: ProductToStatusResolver<TParent>;
  seoProduct?: ProductToSeoProductResolver<TParent>;
  categories?: ProductToCategoriesResolver<TParent>;
  invoiceDetails?: ProductToInvoiceDetailsResolver<TParent>;
  details?: ProductToDetailsResolver<TParent>;
  images?: ProductToImagesResolver<TParent>;
  id?: ProductToIdResolver<TParent>;
  createdAt?: ProductToCreatedAtResolver<TParent>;
  updatedAt?: ProductToUpdatedAtResolver<TParent>;
}

export interface ProductToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToPhotoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToSlugResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToSkuResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToPriceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToOfferPriceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToStockResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToActiveResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToShippingTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToShippingPriceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToPublishDateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToViewsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToStatusResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToSeoProductResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToCategoriesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToInvoiceDetailsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToDetailsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToImagesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ITaxonomyTypeResolver<TParent = any> {
  projectId?: TaxonomyToProjectIdResolver<TParent>;
  name?: TaxonomyToNameResolver<TParent>;
  slug?: TaxonomyToSlugResolver<TParent>;
  description?: TaxonomyToDescriptionResolver<TParent>;
  termGroup?: TaxonomyToTermGroupResolver<TParent>;
  photo?: TaxonomyToPhotoResolver<TParent>;
  parentId?: TaxonomyToParentIdResolver<TParent>;
  parent?: TaxonomyToParentResolver<TParent>;
  subCategories?: TaxonomyToSubCategoriesResolver<TParent>;
  isPublic?: TaxonomyToIsPublicResolver<TParent>;
  articles?: TaxonomyToArticlesResolver<TParent>;
  products?: TaxonomyToProductsResolver<TParent>;
  id?: TaxonomyToIdResolver<TParent>;
  createdAt?: TaxonomyToCreatedAtResolver<TParent>;
  updatedAt?: TaxonomyToUpdatedAtResolver<TParent>;
}

export interface TaxonomyToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToSlugResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToTermGroupResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToPhotoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToParentIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToParentResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToSubCategoriesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToIsPublicResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToArticlesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToProductsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IArticleTypeResolver<TParent = any> {
  projectId?: ArticleToProjectIdResolver<TParent>;
  memberId?: ArticleToMemberIdResolver<TParent>;
  title?: ArticleToTitleResolver<TParent>;
  photo?: ArticleToPhotoResolver<TParent>;
  slug?: ArticleToSlugResolver<TParent>;
  resume?: ArticleToResumeResolver<TParent>;
  content?: ArticleToContentResolver<TParent>;
  active?: ArticleToActiveResolver<TParent>;
  views?: ArticleToViewsResolver<TParent>;
  status?: ArticleToStatusResolver<TParent>;
  releaseDate?: ArticleToReleaseDateResolver<TParent>;
  seoTitle?: ArticleToSeoTitleResolver<TParent>;
  seoDescription?: ArticleToSeoDescriptionResolver<TParent>;
  seoKeywords?: ArticleToSeoKeywordsResolver<TParent>;
  structuredMarking?: ArticleToStructuredMarkingResolver<TParent>;
  imageAlt?: ArticleToImageAltResolver<TParent>;
  categories?: ArticleToCategoriesResolver<TParent>;
  tags?: ArticleToTagsResolver<TParent>;
  surveys?: ArticleToSurveysResolver<TParent>;
  id?: ArticleToIdResolver<TParent>;
  createdAt?: ArticleToCreatedAtResolver<TParent>;
  updatedAt?: ArticleToUpdatedAtResolver<TParent>;
  author?: ArticleToAuthorResolver<TParent>;
}

export interface ArticleToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToPhotoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToSlugResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToResumeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToContentResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToActiveResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToViewsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToStatusResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToReleaseDateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToSeoTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToSeoDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToSeoKeywordsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToStructuredMarkingResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToImageAltResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToCategoriesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToTagsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToSurveysResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleToAuthorResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ISurveyTypeResolver<TParent = any> {
  title?: SurveyToTitleResolver<TParent>;
  description?: SurveyToDescriptionResolver<TParent>;
  isActive?: SurveyToIsActiveResolver<TParent>;
  thankYouMessage?: SurveyToThankYouMessageResolver<TParent>;
  articles?: SurveyToArticlesResolver<TParent>;
  questions?: SurveyToQuestionsResolver<TParent>;
  id?: SurveyToIdResolver<TParent>;
  createdAt?: SurveyToCreatedAtResolver<TParent>;
  updatedAt?: SurveyToUpdatedAtResolver<TParent>;
}

export interface SurveyToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SurveyToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SurveyToIsActiveResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SurveyToThankYouMessageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SurveyToArticlesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SurveyToQuestionsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SurveyToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SurveyToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SurveyToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IQuestionTypeResolver<TParent = any> {
  surveyId?: QuestionToSurveyIdResolver<TParent>;
  survey?: QuestionToSurveyResolver<TParent>;
  title?: QuestionToTitleResolver<TParent>;
  type?: QuestionToTypeResolver<TParent>;
  image?: QuestionToImageResolver<TParent>;
  isRequired?: QuestionToIsRequiredResolver<TParent>;
  position?: QuestionToPositionResolver<TParent>;
  allowsFileUpload?: QuestionToAllowsFileUploadResolver<TParent>;
  options?: QuestionToOptionsResolver<TParent>;
  answers?: QuestionToAnswersResolver<TParent>;
  id?: QuestionToIdResolver<TParent>;
  createdAt?: QuestionToCreatedAtResolver<TParent>;
  updatedAt?: QuestionToUpdatedAtResolver<TParent>;
}

export interface QuestionToSurveyIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToSurveyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToImageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToIsRequiredResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToPositionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToAllowsFileUploadResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToOptionsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToAnswersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IOptionTypeResolver<TParent = any> {
  questionId?: OptionToQuestionIdResolver<TParent>;
  question?: OptionToQuestionResolver<TParent>;
  title?: OptionToTitleResolver<TParent>;
  position?: OptionToPositionResolver<TParent>;
  count?: OptionToCountResolver<TParent>;
  answers?: OptionToAnswersResolver<TParent>;
  id?: OptionToIdResolver<TParent>;
  createdAt?: OptionToCreatedAtResolver<TParent>;
  updatedAt?: OptionToUpdatedAtResolver<TParent>;
}

export interface OptionToQuestionIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OptionToQuestionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OptionToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OptionToPositionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OptionToCountResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OptionToAnswersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OptionToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OptionToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OptionToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IAnswerTypeResolver<TParent = any> {
  memberId?: AnswerToMemberIdResolver<TParent>;
  questionId?: AnswerToQuestionIdResolver<TParent>;
  question?: AnswerToQuestionResolver<TParent>;
  optionId?: AnswerToOptionIdResolver<TParent>;
  option?: AnswerToOptionResolver<TParent>;
  uploadFile?: AnswerToUploadFileResolver<TParent>;
  responseText?: AnswerToResponseTextResolver<TParent>;
  id?: AnswerToIdResolver<TParent>;
  createdAt?: AnswerToCreatedAtResolver<TParent>;
  updatedAt?: AnswerToUpdatedAtResolver<TParent>;
  member?: AnswerToMemberResolver<TParent>;
}

export interface AnswerToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToQuestionIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToQuestionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToOptionIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToOptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToUploadFileResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToResponseTextResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AnswerToMemberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IProductDetailTypeResolver<TParent = any> {
  productId?: ProductDetailToProductIdResolver<TParent>;
  product?: ProductDetailToProductResolver<TParent>;
  key?: ProductDetailToKeyResolver<TParent>;
  value?: ProductDetailToValueResolver<TParent>;
  id?: ProductDetailToIdResolver<TParent>;
  createdAt?: ProductDetailToCreatedAtResolver<TParent>;
  updatedAt?: ProductDetailToUpdatedAtResolver<TParent>;
}

export interface ProductDetailToProductIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductDetailToProductResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductDetailToKeyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductDetailToValueResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductDetailToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductDetailToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductDetailToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IImageTypeResolver<TParent = any> {
  projectId?: ImageToProjectIdResolver<TParent>;
  original?: ImageToOriginalResolver<TParent>;
  title?: ImageToTitleResolver<TParent>;
  products?: ImageToProductsResolver<TParent>;
  id?: ImageToIdResolver<TParent>;
  createdAt?: ImageToCreatedAtResolver<TParent>;
  updatedAt?: ImageToUpdatedAtResolver<TParent>;
}

export interface ImageToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ImageToOriginalResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ImageToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ImageToProductsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ImageToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ImageToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ImageToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMicroserviceTypeResolver<TParent = any> {
  name?: MicroserviceToNameResolver<TParent>;
  codeName?: MicroserviceToCodeNameResolver<TParent>;
  image?: MicroserviceToImageResolver<TParent>;
  description?: MicroserviceToDescriptionResolver<TParent>;
  priority?: MicroserviceToPriorityResolver<TParent>;
  isPublic?: MicroserviceToIsPublicResolver<TParent>;
  projectMicroservices?: MicroserviceToProjectMicroservicesResolver<TParent>;
  functions?: MicroserviceToFunctionsResolver<TParent>;
  id?: MicroserviceToIdResolver<TParent>;
  createdAt?: MicroserviceToCreatedAtResolver<TParent>;
  updatedAt?: MicroserviceToUpdatedAtResolver<TParent>;
}

export interface MicroserviceToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToCodeNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToImageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToDescriptionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToPriorityResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToIsPublicResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToProjectMicroservicesResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToFunctionsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MicroserviceToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IProjectMicroserviceTypeResolver<TParent = any> {
  microserviceId?: ProjectMicroserviceToMicroserviceIdResolver<TParent>;
  microservice?: ProjectMicroserviceToMicroserviceResolver<TParent>;
  isActive?: ProjectMicroserviceToIsActiveResolver<TParent>;
  label?: ProjectMicroserviceToLabelResolver<TParent>;
  projectId?: ProjectMicroserviceToProjectIdResolver<TParent>;
  id?: ProjectMicroserviceToIdResolver<TParent>;
  createdAt?: ProjectMicroserviceToCreatedAtResolver<TParent>;
  updatedAt?: ProjectMicroserviceToUpdatedAtResolver<TParent>;
}

export interface ProjectMicroserviceToMicroserviceIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectMicroserviceToMicroserviceResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectMicroserviceToIsActiveResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectMicroserviceToLabelResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectMicroserviceToProjectIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectMicroserviceToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectMicroserviceToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectMicroserviceToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IFunctionTypeResolver<TParent = any> {
  name?: FunctionToNameResolver<TParent>;
  codeName?: FunctionToCodeNameResolver<TParent>;
  functionType?: FunctionToFunctionTypeResolver<TParent>;
  microserviceId?: FunctionToMicroserviceIdResolver<TParent>;
  microservice?: FunctionToMicroserviceResolver<TParent>;
  id?: FunctionToIdResolver<TParent>;
  createdAt?: FunctionToCreatedAtResolver<TParent>;
  updatedAt?: FunctionToUpdatedAtResolver<TParent>;
}

export interface FunctionToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface FunctionToCodeNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface FunctionToFunctionTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface FunctionToMicroserviceIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface FunctionToMicroserviceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface FunctionToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface FunctionToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface FunctionToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IConfigurationTypeResolver<TParent = any> {
  projectId?: ConfigurationToProjectIdResolver<TParent>;
  key?: ConfigurationToKeyResolver<TParent>;
  value?: ConfigurationToValueResolver<TParent>;
  id?: ConfigurationToIdResolver<TParent>;
  createdAt?: ConfigurationToCreatedAtResolver<TParent>;
  updatedAt?: ConfigurationToUpdatedAtResolver<TParent>;
}

export interface ConfigurationToProjectIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConfigurationToKeyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConfigurationToValueResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConfigurationToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConfigurationToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConfigurationToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IGroupTaxonomyTypeResolver<TParent = any> {
  taxonomyId?: GroupTaxonomyToTaxonomyIdResolver<TParent>;
  groupId?: GroupTaxonomyToGroupIdResolver<TParent>;
  group?: GroupTaxonomyToGroupResolver<TParent>;
  taxonomy?: GroupTaxonomyToTaxonomyResolver<TParent>;
}

export interface GroupTaxonomyToTaxonomyIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupTaxonomyToGroupIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupTaxonomyToGroupResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GroupTaxonomyToTaxonomyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICollectionSegmentInfoTypeResolver<TParent = any> {
  hasNextPage?: CollectionSegmentInfoToHasNextPageResolver<TParent>;
  hasPreviousPage?: CollectionSegmentInfoToHasPreviousPageResolver<TParent>;
}

export interface CollectionSegmentInfoToHasNextPageResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CollectionSegmentInfoToHasPreviousPageResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMyUrlTypeResolver<TParent = any> {
  url?: MyUrlToUrlResolver<TParent>;
}

export interface MyUrlToUrlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberCollectionSegmentTypeResolver<TParent = any> {
  items?: MemberCollectionSegmentToItemsResolver<TParent>;
  pageInfo?: MemberCollectionSegmentToPageInfoResolver<TParent>;
  totalCount?: MemberCollectionSegmentToTotalCountResolver<TParent>;
}

export interface MemberCollectionSegmentToItemsResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberCollectionSegmentToPageInfoResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberCollectionSegmentToTotalCountResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberChatTypeResolver<TParent = any> {
  email?: MemberChatToEmailResolver<TParent>;
  name?: MemberChatToNameResolver<TParent>;
  lastName?: MemberChatToLastNameResolver<TParent>;
  photo?: MemberChatToPhotoResolver<TParent>;
}

export interface MemberChatToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberChatToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberChatToLastNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberChatToPhotoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IServiceHelperTypeResolver<TParent = any> {
  id?: ServiceHelperToIdResolver<TParent>;
  name?: ServiceHelperToNameResolver<TParent>;
  label?: ServiceHelperToLabelResolver<TParent>;
  isActive?: ServiceHelperToIsActiveResolver<TParent>;
  codeName?: ServiceHelperToCodeNameResolver<TParent>;
  image?: ServiceHelperToImageResolver<TParent>;
  description?: ServiceHelperToDescriptionResolver<TParent>;
  priority?: ServiceHelperToPriorityResolver<TParent>;
  createdAt?: ServiceHelperToCreatedAtResolver<TParent>;
  updatedAt?: ServiceHelperToUpdatedAtResolver<TParent>;
  projectMicroservices?: ServiceHelperToProjectMicroservicesResolver<TParent>;
  functions?: ServiceHelperToFunctionsResolver<TParent>;
}

export interface ServiceHelperToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToLabelResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToIsActiveResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToCodeNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToImageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToDescriptionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToPriorityResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToProjectMicroservicesResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ServiceHelperToFunctionsResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IEventTypeResolver<TParent = any> {
  projectId?: EventToProjectIdResolver<TParent>;
  memberId?: EventToMemberIdResolver<TParent>;
  title?: EventToTitleResolver<TParent>;
  location?: EventToLocationResolver<TParent>;
  color?: EventToColorResolver<TParent>;
  description?: EventToDescriptionResolver<TParent>;
  file?: EventToFileResolver<TParent>;
  roomId?: EventToRoomIdResolver<TParent>;
  eventDate?: EventToEventDateResolver<TParent>;
  eventType?: EventToEventTypeResolver<TParent>;
  eventMode?: EventToEventModeResolver<TParent>;
  eventSessionId?: EventToEventSessionIdResolver<TParent>;
  eventSession?: EventToEventSessionResolver<TParent>;
  eventMembers?: EventToEventMembersResolver<TParent>;
  id?: EventToIdResolver<TParent>;
  createdAt?: EventToCreatedAtResolver<TParent>;
  updatedAt?: EventToUpdatedAtResolver<TParent>;
}

export interface EventToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToLocationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToColorResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToFileResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToRoomIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToEventDateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToEventTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToEventModeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToEventSessionIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToEventSessionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToEventMembersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IEventSessionTypeResolver<TParent = any> {
  projectId?: EventSessionToProjectIdResolver<TParent>;
  title?: EventSessionToTitleResolver<TParent>;
  image?: EventSessionToImageResolver<TParent>;
  price?: EventSessionToPriceResolver<TParent>;
  description?: EventSessionToDescriptionResolver<TParent>;
  duration?: EventSessionToDurationResolver<TParent>;
  eventMode?: EventSessionToEventModeResolver<TParent>;
  event?: EventSessionToEventResolver<TParent>;
  id?: EventSessionToIdResolver<TParent>;
  createdAt?: EventSessionToCreatedAtResolver<TParent>;
  updatedAt?: EventSessionToUpdatedAtResolver<TParent>;
}

export interface EventSessionToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToImageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToPriceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToDescriptionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToDurationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToEventModeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToEventResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventSessionToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IEventMemberTypeResolver<TParent = any> {
  eventId?: EventMemberToEventIdResolver<TParent>;
  event?: EventMemberToEventResolver<TParent>;
  memberId?: EventMemberToMemberIdResolver<TParent>;
  id?: EventMemberToIdResolver<TParent>;
  createdAt?: EventMemberToCreatedAtResolver<TParent>;
  updatedAt?: EventMemberToUpdatedAtResolver<TParent>;
}

export interface EventMemberToEventIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventMemberToEventResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventMemberToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventMemberToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventMemberToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface EventMemberToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IConversationReplyTypeResolver<TParent = any> {
  memberId?: ConversationReplyToMemberIdResolver<TParent>;
  reply?: ConversationReplyToReplyResolver<TParent>;
  registerDate?: ConversationReplyToRegisterDateResolver<TParent>;
  status?: ConversationReplyToStatusResolver<TParent>;
  conversationId?: ConversationReplyToConversationIdResolver<TParent>;
  conversation?: ConversationReplyToConversationResolver<TParent>;
  id?: ConversationReplyToIdResolver<TParent>;
  createdAt?: ConversationReplyToCreatedAtResolver<TParent>;
  updatedAt?: ConversationReplyToUpdatedAtResolver<TParent>;
  member?: ConversationReplyToMemberResolver<TParent>;
}

export interface ConversationReplyToMemberIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationReplyToReplyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationReplyToRegisterDateResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationReplyToStatusResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationReplyToConversationIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationReplyToConversationResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationReplyToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationReplyToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationReplyToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationReplyToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IConversationTypeResolver<TParent = any> {
  projectId?: ConversationToProjectIdResolver<TParent>;
  memberOne?: ConversationToMemberOneResolver<TParent>;
  memberTwo?: ConversationToMemberTwoResolver<TParent>;
  registerDate?: ConversationToRegisterDateResolver<TParent>;
  status?: ConversationToStatusResolver<TParent>;
  replies?: ConversationToRepliesResolver<TParent>;
  id?: ConversationToIdResolver<TParent>;
  createdAt?: ConversationToCreatedAtResolver<TParent>;
  updatedAt?: ConversationToUpdatedAtResolver<TParent>;
}

export interface ConversationToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationToMemberOneResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationToMemberTwoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationToRegisterDateResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationToStatusResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationToRepliesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ConversationToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberConversationTypeResolver<TParent = any> {
  memberId?: MemberConversationToMemberIdResolver<TParent>;
  member?: MemberConversationToMemberResolver<TParent>;
}

export interface MemberConversationToMemberIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberConversationToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IQuestionDTOTypeResolver<TParent = any> {
  title?: QuestionDTOToTitleResolver<TParent>;
  type?: QuestionDTOToTypeResolver<TParent>;
  image?: QuestionDTOToImageResolver<TParent>;
  options?: QuestionDTOToOptionsResolver<TParent>;
  answers?: QuestionDTOToAnswersResolver<TParent>;
}

export interface QuestionDTOToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionDTOToTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionDTOToImageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionDTOToOptionsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuestionDTOToAnswersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IArticlesConnectionTypeResolver<TParent = any> {
  pageInfo?: ArticlesConnectionToPageInfoResolver<TParent>;
  edges?: ArticlesConnectionToEdgesResolver<TParent>;
  nodes?: ArticlesConnectionToNodesResolver<TParent>;
  totalCount?: ArticlesConnectionToTotalCountResolver<TParent>;
}

export interface ArticlesConnectionToPageInfoResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticlesConnectionToEdgesResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticlesConnectionToNodesResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticlesConnectionToTotalCountResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IPageInfoTypeResolver<TParent = any> {
  hasNextPage?: PageInfoToHasNextPageResolver<TParent>;
  hasPreviousPage?: PageInfoToHasPreviousPageResolver<TParent>;
  startCursor?: PageInfoToStartCursorResolver<TParent>;
  endCursor?: PageInfoToEndCursorResolver<TParent>;
}

export interface PageInfoToHasNextPageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PageInfoToHasPreviousPageResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PageInfoToStartCursorResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PageInfoToEndCursorResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IArticlesEdgeTypeResolver<TParent = any> {
  cursor?: ArticlesEdgeToCursorResolver<TParent>;
  node?: ArticlesEdgeToNodeResolver<TParent>;
}

export interface ArticlesEdgeToCursorResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticlesEdgeToNodeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IArticleCollectionSegmentTypeResolver<TParent = any> {
  items?: ArticleCollectionSegmentToItemsResolver<TParent>;
  pageInfo?: ArticleCollectionSegmentToPageInfoResolver<TParent>;
  totalCount?: ArticleCollectionSegmentToTotalCountResolver<TParent>;
}

export interface ArticleCollectionSegmentToItemsResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleCollectionSegmentToPageInfoResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ArticleCollectionSegmentToTotalCountResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IInvoiceCollectionSegmentTypeResolver<TParent = any> {
  items?: InvoiceCollectionSegmentToItemsResolver<TParent>;
  pageInfo?: InvoiceCollectionSegmentToPageInfoResolver<TParent>;
  totalCount?: InvoiceCollectionSegmentToTotalCountResolver<TParent>;
}

export interface InvoiceCollectionSegmentToItemsResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceCollectionSegmentToPageInfoResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface InvoiceCollectionSegmentToTotalCountResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IProductCollectionSegmentTypeResolver<TParent = any> {
  items?: ProductCollectionSegmentToItemsResolver<TParent>;
  pageInfo?: ProductCollectionSegmentToPageInfoResolver<TParent>;
  totalCount?: ProductCollectionSegmentToTotalCountResolver<TParent>;
}

export interface ProductCollectionSegmentToItemsResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductCollectionSegmentToPageInfoResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductCollectionSegmentToTotalCountResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ITaxonomyCollectionSegmentTypeResolver<TParent = any> {
  items?: TaxonomyCollectionSegmentToItemsResolver<TParent>;
  pageInfo?: TaxonomyCollectionSegmentToPageInfoResolver<TParent>;
  totalCount?: TaxonomyCollectionSegmentToTotalCountResolver<TParent>;
}

export interface TaxonomyCollectionSegmentToItemsResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyCollectionSegmentToPageInfoResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TaxonomyCollectionSegmentToTotalCountResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IShopTypeResolver<TParent = any> {
  projectId?: ShopToProjectIdResolver<TParent>;
  shopType?: ShopToShopTypeResolver<TParent>;
  profileUrl?: ShopToProfileUrlResolver<TParent>;
  id?: ShopToIdResolver<TParent>;
  createdAt?: ShopToCreatedAtResolver<TParent>;
  updatedAt?: ShopToUpdatedAtResolver<TParent>;
}

export interface ShopToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ShopToShopTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ShopToProfileUrlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ShopToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ShopToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ShopToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IContactEmailTypeResolver<TParent = any> {
  fullName?: ContactEmailToFullNameResolver<TParent>;
  email?: ContactEmailToEmailResolver<TParent>;
  sendGridKey?: ContactEmailToSendGridKeyResolver<TParent>;
  fromEmail?: ContactEmailToFromEmailResolver<TParent>;
  fromName?: ContactEmailToFromNameResolver<TParent>;
  description?: ContactEmailToDescriptionResolver<TParent>;
  projectId?: ContactEmailToProjectIdResolver<TParent>;
  id?: ContactEmailToIdResolver<TParent>;
  createdAt?: ContactEmailToCreatedAtResolver<TParent>;
  updatedAt?: ContactEmailToUpdatedAtResolver<TParent>;
}

export interface ContactEmailToFullNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactEmailToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactEmailToSendGridKeyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactEmailToFromEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactEmailToFromNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactEmailToDescriptionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactEmailToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactEmailToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactEmailToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactEmailToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IVideoTypeResolver<TParent = any> {
  sessionId?: VideoToSessionIdResolver<TParent>;
  token?: VideoToTokenResolver<TParent>;
  videoCall?: VideoToVideoCallResolver<TParent>;
}

export interface VideoToSessionIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoToTokenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoToVideoCallResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IVideoCallTypeResolver<TParent = any> {
  projectId?: VideoCallToProjectIdResolver<TParent>;
  memberId?: VideoCallToMemberIdResolver<TParent>;
  sessionId?: VideoCallToSessionIdResolver<TParent>;
  sessionName?: VideoCallToSessionNameResolver<TParent>;
  members?: VideoCallToMembersResolver<TParent>;
  services?: VideoCallToServicesResolver<TParent>;
  id?: VideoCallToIdResolver<TParent>;
  createdAt?: VideoCallToCreatedAtResolver<TParent>;
  updatedAt?: VideoCallToUpdatedAtResolver<TParent>;
}

export interface VideoCallToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallToSessionIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallToSessionNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallToMembersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallToServicesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IVideoCallMemberTypeResolver<TParent = any> {
  videoCallId?: VideoCallMemberToVideoCallIdResolver<TParent>;
  videoCall?: VideoCallMemberToVideoCallResolver<TParent>;
  memberId?: VideoCallMemberToMemberIdResolver<TParent>;
  id?: VideoCallMemberToIdResolver<TParent>;
  createdAt?: VideoCallMemberToCreatedAtResolver<TParent>;
  updatedAt?: VideoCallMemberToUpdatedAtResolver<TParent>;
}

export interface VideoCallMemberToVideoCallIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallMemberToVideoCallResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallMemberToMemberIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallMemberToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallMemberToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallMemberToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IVideoCallServiceTypeResolver<TParent = any> {
  videoCallId?: VideoCallServiceToVideoCallIdResolver<TParent>;
  videoCall?: VideoCallServiceToVideoCallResolver<TParent>;
  serviceCode?: VideoCallServiceToServiceCodeResolver<TParent>;
  viewAdmin?: VideoCallServiceToViewAdminResolver<TParent>;
  viewUser?: VideoCallServiceToViewUserResolver<TParent>;
  id?: VideoCallServiceToIdResolver<TParent>;
  createdAt?: VideoCallServiceToCreatedAtResolver<TParent>;
  updatedAt?: VideoCallServiceToUpdatedAtResolver<TParent>;
}

export interface VideoCallServiceToVideoCallIdResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallServiceToVideoCallResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallServiceToServiceCodeResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallServiceToViewAdminResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallServiceToViewUserResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallServiceToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallServiceToCreatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface VideoCallServiceToUpdatedAtResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMutationTypeResolver<TParent = any> {
  createMember?: MutationToCreateMemberResolver<TParent>;
  loginMember?: MutationToLoginMemberResolver<TParent>;
  createCompany?: MutationToCreateCompanyResolver<TParent>;
  createProject?: MutationToCreateProjectResolver<TParent>;
  createUser?: MutationToCreateUserResolver<TParent>;
  updateProfile?: MutationToUpdateProfileResolver<TParent>;
  updatePassword?: MutationToUpdatePasswordResolver<TParent>;
  activeMember?: MutationToActiveMemberResolver<TParent>;
  createProjectRole?: MutationToCreateProjectRoleResolver<TParent>;
  generateSlug?: MutationToGenerateSlugResolver<TParent>;
  removeAccent?: MutationToRemoveAccentResolver<TParent>;
  uploadPhotoProfile?: MutationToUploadPhotoProfileResolver<TParent>;
  deleteProject?: MutationToDeleteProjectResolver<TParent>;
  updateCompany?: MutationToUpdateCompanyResolver<TParent>;
  restorePassword?: MutationToRestorePasswordResolver<TParent>;
  recoverPassword?: MutationToRecoverPasswordResolver<TParent>;
  verifyToken?: MutationToVerifyTokenResolver<TParent>;
  createGroup?: MutationToCreateGroupResolver<TParent>;
  addGroupToMember?: MutationToAddGroupToMemberResolver<TParent>;
  addGroupToTaxonomy?: MutationToAddGroupToTaxonomyResolver<TParent>;
  addTaxonomyToMember?: MutationToAddTaxonomyToMemberResolver<TParent>;
  deleteGroup?: MutationToDeleteGroupResolver<TParent>;
  deleteGroupTaxonomy?: MutationToDeleteGroupTaxonomyResolver<TParent>;
  deleteMemberGroup?: MutationToDeleteMemberGroupResolver<TParent>;
  deleteMemberTaxonomy?: MutationToDeleteMemberTaxonomyResolver<TParent>;
  deleteProjectRole?: MutationToDeleteProjectRoleResolver<TParent>;
  createUpdatePermission?: MutationToCreateUpdatePermissionResolver<TParent>;
  updateProject?: MutationToUpdateProjectResolver<TParent>;
  updateProjectRole?: MutationToUpdateProjectRoleResolver<TParent>;
  associationServiceToProject?: MutationToAssociationServiceToProjectResolver<TParent>;
  createArrayFunction?: MutationToCreateArrayFunctionResolver<TParent>;
  deleteArrayFunction?: MutationToDeleteArrayFunctionResolver<TParent>;
  updateServiceProject?: MutationToUpdateServiceProjectResolver<TParent>;
  deleteServiceProject?: MutationToDeleteServiceProjectResolver<TParent>;
  createEvent?: MutationToCreateEventResolver<TParent>;
  updateEvent?: MutationToUpdateEventResolver<TParent>;
  deleteEvent?: MutationToDeleteEventResolver<TParent>;
  createEventSession?: MutationToCreateEventSessionResolver<TParent>;
  updateEventSession?: MutationToUpdateEventSessionResolver<TParent>;
  deleteEventSession?: MutationToDeleteEventSessionResolver<TParent>;
  addChatMember?: MutationToAddChatMemberResolver<TParent>;
  addChatMemberWs?: MutationToAddChatMemberWsResolver<TParent>;
  createArticle?: MutationToCreateArticleResolver<TParent>;
  blog_generateSlug?: MutationToBlog_generateSlugResolver<TParent>;
  updateStatusArticle?: MutationToUpdateStatusArticleResolver<TParent>;
  createTaxonomy?: MutationToCreateTaxonomyResolver<TParent>;
  updateArticle?: MutationToUpdateArticleResolver<TParent>;
  updateTaxonomy?: MutationToUpdateTaxonomyResolver<TParent>;
  deleteArticle?: MutationToDeleteArticleResolver<TParent>;
  deleteTaxonomy?: MutationToDeleteTaxonomyResolver<TParent>;
  newSurvey?: MutationToNewSurveyResolver<TParent>;
  updateSurvey?: MutationToUpdateSurveyResolver<TParent>;
  deleteSurvey?: MutationToDeleteSurveyResolver<TParent>;
  newQuestion?: MutationToNewQuestionResolver<TParent>;
  deleteQuestion?: MutationToDeleteQuestionResolver<TParent>;
  updateQuestion?: MutationToUpdateQuestionResolver<TParent>;
  newOption?: MutationToNewOptionResolver<TParent>;
  deleteOption?: MutationToDeleteOptionResolver<TParent>;
  updateOption?: MutationToUpdateOptionResolver<TParent>;
  answerQuestion?: MutationToAnswerQuestionResolver<TParent>;
  createProduct?: MutationToCreateProductResolver<TParent>;
  updateProduct?: MutationToUpdateProductResolver<TParent>;
  deleteProduct?: MutationToDeleteProductResolver<TParent>;
  createInvoice?: MutationToCreateInvoiceResolver<TParent>;
  createAddress?: MutationToCreateAddressResolver<TParent>;
  updateAddress?: MutationToUpdateAddressResolver<TParent>;
  deleteAddress?: MutationToDeleteAddressResolver<TParent>;
  updateStatusInvoice?: MutationToUpdateStatusInvoiceResolver<TParent>;
  createUpdateShop?: MutationToCreateUpdateShopResolver<TParent>;
  createUpdateContactEmail?: MutationToCreateUpdateContactEmailResolver<TParent>;
  sendEmail?: MutationToSendEmailResolver<TParent>;
  deleteContactEmail?: MutationToDeleteContactEmailResolver<TParent>;
  putConfig?: MutationToPutConfigResolver<TParent>;
  deleteConfig?: MutationToDeleteConfigResolver<TParent>;
  createVideoCall?: MutationToCreateVideoCallResolver<TParent>;
  deleteVideoCall?: MutationToDeleteVideoCallResolver<TParent>;
}

export interface MutationToCreateMemberArgs {
  input: ICreateMemberInput;
}
export interface MutationToCreateMemberResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateMemberArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToLoginMemberArgs {
  input: ILoginMemberInput;
}
export interface MutationToLoginMemberResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToLoginMemberArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateCompanyArgs {
  input: ICreateCompanyInput;
}
export interface MutationToCreateCompanyResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateCompanyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateProjectArgs {
  input: ICreateProjectInput;
}
export interface MutationToCreateProjectResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateProjectArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateUserArgs {
  input: ICreateUserInput;
}
export interface MutationToCreateUserResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateUserArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateProfileArgs {
  input: IUpdateProfileInput;
}
export interface MutationToUpdateProfileResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToUpdateProfileArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdatePasswordArgs {
  input: IUpdatePasswordInput;
}
export interface MutationToUpdatePasswordResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToUpdatePasswordArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToActiveMemberArgs {
  input: IActiveMemberInput;
}
export interface MutationToActiveMemberResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToActiveMemberArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateProjectRoleArgs {
  input: ICreateProjectRoleInput;
}
export interface MutationToCreateProjectRoleResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToCreateProjectRoleArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToGenerateSlugArgs {
  phrase: string;
}
export interface MutationToGenerateSlugResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToGenerateSlugArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToRemoveAccentArgs {
  txt: string;
}
export interface MutationToRemoveAccentResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToRemoveAccentArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUploadPhotoProfileArgs {
  input: IUploadPhotoProfileInput;
}
export interface MutationToUploadPhotoProfileResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToUploadPhotoProfileArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteProjectArgs {
  input: IDeleteProjectInput;
}
export interface MutationToDeleteProjectResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToDeleteProjectArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateCompanyArgs {
  input: IUpdateCompanyInput;
}
export interface MutationToUpdateCompanyResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToUpdateCompanyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToRestorePasswordArgs {
  input: IRestorePasswordInput;
}
export interface MutationToRestorePasswordResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToRestorePasswordArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToRecoverPasswordArgs {
  input: IRecoverPasswordInput;
}
export interface MutationToRecoverPasswordResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToRecoverPasswordArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToVerifyTokenArgs {
  input: IVerifyTokenInput;
}
export interface MutationToVerifyTokenResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToVerifyTokenArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateGroupArgs {
  input: ICreateGroupInput;
}
export interface MutationToCreateGroupResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateGroupArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToAddGroupToMemberArgs {
  input: IAddGroupToMemberInput;
}
export interface MutationToAddGroupToMemberResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToAddGroupToMemberArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToAddGroupToTaxonomyArgs {
  input: IAddGroupToTaxonomyInput;
}
export interface MutationToAddGroupToTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToAddGroupToTaxonomyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToAddTaxonomyToMemberArgs {
  input: IAddTaxonomyToMemberInput;
}
export interface MutationToAddTaxonomyToMemberResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToAddTaxonomyToMemberArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteGroupArgs {
  input: IDeleteGroupInput;
}
export interface MutationToDeleteGroupResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToDeleteGroupArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteGroupTaxonomyArgs {
  input: IDeleteGroupTaxonomyInput;
}
export interface MutationToDeleteGroupTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteGroupTaxonomyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteMemberGroupArgs {
  input: IDeleteMemberGroupMutationInput;
}
export interface MutationToDeleteMemberGroupResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteMemberGroupArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteMemberTaxonomyArgs {
  input: IDeleteMemberTaxonomyInput;
}
export interface MutationToDeleteMemberTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteMemberTaxonomyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteProjectRoleArgs {
  input: IDeleteProjectRoleInput;
}
export interface MutationToDeleteProjectRoleResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteProjectRoleArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateUpdatePermissionArgs {
  input: ICreateUpdatePermissionInput;
}
export interface MutationToCreateUpdatePermissionResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToCreateUpdatePermissionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateProjectArgs {
  input: IUpdateProjectInput;
}
export interface MutationToUpdateProjectResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToUpdateProjectArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateProjectRoleArgs {
  input: IUpdateProjectRoleInput;
}
export interface MutationToUpdateProjectRoleResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToUpdateProjectRoleArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToAssociationServiceToProjectArgs {
  input: IAssociationServiceToProjectInput;
}
export interface MutationToAssociationServiceToProjectResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToAssociationServiceToProjectArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateArrayFunctionArgs {
  input: ICreateArrayFunctionInput;
}
export interface MutationToCreateArrayFunctionResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToCreateArrayFunctionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteArrayFunctionArgs {
  input: IDeleteArrayFunctionInput;
}
export interface MutationToDeleteArrayFunctionResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteArrayFunctionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateServiceProjectArgs {
  input: IUpdateServiceProjectInput;
}
export interface MutationToUpdateServiceProjectResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToUpdateServiceProjectArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteServiceProjectArgs {
  input: IDeleteServiceProjectInput;
}
export interface MutationToDeleteServiceProjectResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteServiceProjectArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateEventArgs {
  input: ICreateEventInput;
}
export interface MutationToCreateEventResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateEventArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateEventArgs {
  input: IUpdateEventInput;
}
export interface MutationToUpdateEventResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToUpdateEventArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteEventArgs {
  input: IDeleteEventInput;
}
export interface MutationToDeleteEventResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToDeleteEventArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateEventSessionArgs {
  input: ICreateEventSessionInput;
}
export interface MutationToCreateEventSessionResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToCreateEventSessionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateEventSessionArgs {
  input: IUpdateEventSessionInput;
}
export interface MutationToUpdateEventSessionResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToUpdateEventSessionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteEventSessionArgs {
  input: IDeleteEventSessionInput;
}
export interface MutationToDeleteEventSessionResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteEventSessionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToAddChatMemberArgs {
  input: IAddChatMemberInput;
}
export interface MutationToAddChatMemberResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToAddChatMemberArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToAddChatMemberWsArgs {
  input: IAddChatMemberWsInput;
}
export interface MutationToAddChatMemberWsResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToAddChatMemberWsArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateArticleArgs {
  input: ICreateArticleInput;
}
export interface MutationToCreateArticleResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateArticleArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToBlog_generateSlugArgs {
  phrase: string;
}
export interface MutationToBlog_generateSlugResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToBlog_generateSlugArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateStatusArticleArgs {
  input: IUpdateStatusArticleInput;
}
export interface MutationToUpdateStatusArticleResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToUpdateStatusArticleArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateTaxonomyArgs {
  input: ICreateTaxonomyInput;
}
export interface MutationToCreateTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToCreateTaxonomyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateArticleArgs {
  input: IUpdateArticleInput;
}
export interface MutationToUpdateArticleResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToUpdateArticleArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateTaxonomyArgs {
  input: IUpdateTaxonomyInput;
}
export interface MutationToUpdateTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToUpdateTaxonomyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteArticleArgs {
  input: IDeleteArticleInput;
}
export interface MutationToDeleteArticleResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToDeleteArticleArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteTaxonomyArgs {
  input: IDeleteTaxonomyInput;
}
export interface MutationToDeleteTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteTaxonomyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToNewSurveyArgs {
  input: INewSurveyInput;
}
export interface MutationToNewSurveyResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToNewSurveyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateSurveyArgs {
  input: IUpdateSurveyInput;
}
export interface MutationToUpdateSurveyResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToUpdateSurveyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteSurveyArgs {
  input: IDeleteSurveyInput;
}
export interface MutationToDeleteSurveyResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToDeleteSurveyArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToNewQuestionArgs {
  input: INewQuestionInput;
}
export interface MutationToNewQuestionResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToNewQuestionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteQuestionArgs {
  input: IDeleteQuestionInput;
}
export interface MutationToDeleteQuestionResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteQuestionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateQuestionArgs {
  input: IUpdateQuestionInput;
}
export interface MutationToUpdateQuestionResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToUpdateQuestionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToNewOptionArgs {
  input: INewOptionInput;
}
export interface MutationToNewOptionResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToNewOptionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteOptionArgs {
  input: IDeleteOptionInput;
}
export interface MutationToDeleteOptionResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToDeleteOptionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateOptionArgs {
  input: IUpdateOptionInput;
}
export interface MutationToUpdateOptionResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToUpdateOptionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToAnswerQuestionArgs {
  input: IAnswerQuestionInput;
}
export interface MutationToAnswerQuestionResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToAnswerQuestionArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateProductArgs {
  input: ICreateProductInput;
}
export interface MutationToCreateProductResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateProductArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateProductArgs {
  input: IUpdateProductInput;
}
export interface MutationToUpdateProductResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToUpdateProductArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteProductArgs {
  input: IDeleteProductInput;
}
export interface MutationToDeleteProductResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToDeleteProductArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateInvoiceArgs {
  input: ICreateInvoiceInput;
}
export interface MutationToCreateInvoiceResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateInvoiceArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateAddressArgs {
  input: ICreateAddressInput;
}
export interface MutationToCreateAddressResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToCreateAddressArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateAddressArgs {
  input: IUpdateAddressInput;
}
export interface MutationToUpdateAddressResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToUpdateAddressArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteAddressArgs {
  input: IDeleteAddressInput;
}
export interface MutationToDeleteAddressResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToDeleteAddressArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToUpdateStatusInvoiceArgs {
  input: IUpdateStatusInvoiceInput;
}
export interface MutationToUpdateStatusInvoiceResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToUpdateStatusInvoiceArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateUpdateShopArgs {
  input: ICreateUpdateShopInput;
}
export interface MutationToCreateUpdateShopResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToCreateUpdateShopArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateUpdateContactEmailArgs {
  input: ICreateUpdateContactEmailInput;
}
export interface MutationToCreateUpdateContactEmailResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToCreateUpdateContactEmailArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToSendEmailArgs {
  input: ISendEmailInput;
}
export interface MutationToSendEmailResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToSendEmailArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteContactEmailArgs {
  input: IDeleteContactEmailInput;
}
export interface MutationToDeleteContactEmailResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteContactEmailArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToPutConfigArgs {
  input: IPutConfigInput;
}
export interface MutationToPutConfigResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToPutConfigArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteConfigArgs {
  input: IDeleteConfigInput;
}
export interface MutationToDeleteConfigResolver<TParent = any, TResult = any> {
  (
    parent: TParent,
    args: MutationToDeleteConfigArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToCreateVideoCallArgs {
  input: ICreateVideoCallInput;
}
export interface MutationToCreateVideoCallResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToCreateVideoCallArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface MutationToDeleteVideoCallArgs {
  input: IDeleteVideoCallInput;
}
export interface MutationToDeleteVideoCallResolver<
  TParent = any,
  TResult = any
> {
  (
    parent: TParent,
    args: MutationToDeleteVideoCallArgs,
    context: any,
    info: GraphQLResolveInfo
  ): TResult;
}

export interface ICreateMemberPayloadTypeResolver<TParent = any> {
  accessToken?: CreateMemberPayloadToAccessTokenResolver<TParent>;
  member?: CreateMemberPayloadToMemberResolver<TParent>;
}

export interface CreateMemberPayloadToAccessTokenResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CreateMemberPayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ILoginMemberPayloadTypeResolver<TParent = any> {
  accessToken?: LoginMemberPayloadToAccessTokenResolver<TParent>;
  member?: LoginMemberPayloadToMemberResolver<TParent>;
}

export interface LoginMemberPayloadToAccessTokenResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LoginMemberPayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateCompanyPayloadTypeResolver<TParent = any> {
  company?: CreateCompanyPayloadToCompanyResolver<TParent>;
}

export interface CreateCompanyPayloadToCompanyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateProjectPayloadTypeResolver<TParent = any> {
  project?: CreateProjectPayloadToProjectResolver<TParent>;
}

export interface CreateProjectPayloadToProjectResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateUserPayloadTypeResolver<TParent = any> {
  accessToken?: CreateUserPayloadToAccessTokenResolver<TParent>;
  member?: CreateUserPayloadToMemberResolver<TParent>;
}

export interface CreateUserPayloadToAccessTokenResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface CreateUserPayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateProfilePayloadTypeResolver<TParent = any> {
  member?: UpdateProfilePayloadToMemberResolver<TParent>;
}

export interface UpdateProfilePayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdatePasswordPayloadTypeResolver<TParent = any> {
  member?: UpdatePasswordPayloadToMemberResolver<TParent>;
}

export interface UpdatePasswordPayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IActiveMemberPayloadTypeResolver<TParent = any> {
  member?: ActiveMemberPayloadToMemberResolver<TParent>;
}

export interface ActiveMemberPayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateProjectRolePayloadTypeResolver<TParent = any> {
  projectRole?: CreateProjectRolePayloadToProjectRoleResolver<TParent>;
}

export interface CreateProjectRolePayloadToProjectRoleResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUploadPhotoProfilePayloadTypeResolver<TParent = any> {
  member?: UploadPhotoProfilePayloadToMemberResolver<TParent>;
}

export interface UploadPhotoProfilePayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteProjectPayloadTypeResolver<TParent = any> {
  project?: DeleteProjectPayloadToProjectResolver<TParent>;
}

export interface DeleteProjectPayloadToProjectResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateCompanyPayloadTypeResolver<TParent = any> {
  company?: UpdateCompanyPayloadToCompanyResolver<TParent>;
}

export interface UpdateCompanyPayloadToCompanyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IRestorePasswordPayloadTypeResolver<TParent = any> {
  member?: RestorePasswordPayloadToMemberResolver<TParent>;
}

export interface RestorePasswordPayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IRecoverPasswordPayloadTypeResolver<TParent = any> {
  member?: RecoverPasswordPayloadToMemberResolver<TParent>;
}

export interface RecoverPasswordPayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IVerifyTokenPayloadTypeResolver<TParent = any> {
  member?: VerifyTokenPayloadToMemberResolver<TParent>;
}

export interface VerifyTokenPayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateGroupPayloadTypeResolver<TParent = any> {
  group?: CreateGroupPayloadToGroupResolver<TParent>;
}

export interface CreateGroupPayloadToGroupResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IAddGroupToMemberPayloadTypeResolver<TParent = any> {
  memberGroup?: AddGroupToMemberPayloadToMemberGroupResolver<TParent>;
}

export interface AddGroupToMemberPayloadToMemberGroupResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IMemberGroupTypeResolver<TParent = any> {
  memberId?: MemberGroupToMemberIdResolver<TParent>;
  member?: MemberGroupToMemberResolver<TParent>;
  groupId?: MemberGroupToGroupIdResolver<TParent>;
  group?: MemberGroupToGroupResolver<TParent>;
}

export interface MemberGroupToMemberIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberGroupToMemberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberGroupToGroupIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MemberGroupToGroupResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IAddGroupToTaxonomyPayloadTypeResolver<TParent = any> {
  groupTaxonomy?: AddGroupToTaxonomyPayloadToGroupTaxonomyResolver<TParent>;
}

export interface AddGroupToTaxonomyPayloadToGroupTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IAddTaxonomyToMemberPayloadTypeResolver<TParent = any> {
  memberTaxonomy?: AddTaxonomyToMemberPayloadToMemberTaxonomyResolver<TParent>;
}

export interface AddTaxonomyToMemberPayloadToMemberTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteGroupPayloadTypeResolver<TParent = any> {
  member?: DeleteGroupPayloadToMemberResolver<TParent>;
}

export interface DeleteGroupPayloadToMemberResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteGroupTaxonomyPayloadTypeResolver<TParent = any> {
  memberTaxonomy?: DeleteGroupTaxonomyPayloadToMemberTaxonomyResolver<TParent>;
}

export interface DeleteGroupTaxonomyPayloadToMemberTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteMemberGroupMutationPayloadTypeResolver<TParent = any> {
  memberGroup?: DeleteMemberGroupMutationPayloadToMemberGroupResolver<TParent>;
}

export interface DeleteMemberGroupMutationPayloadToMemberGroupResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteMemberTaxonomyPayloadTypeResolver<TParent = any> {
  memberTaxonomy?: DeleteMemberTaxonomyPayloadToMemberTaxonomyResolver<TParent>;
}

export interface DeleteMemberTaxonomyPayloadToMemberTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteProjectRolePayloadTypeResolver<TParent = any> {
  projectRole?: DeleteProjectRolePayloadToProjectRoleResolver<TParent>;
}

export interface DeleteProjectRolePayloadToProjectRoleResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateUpdatePermissionPayloadTypeResolver<TParent = any> {
  permission?: CreateUpdatePermissionPayloadToPermissionResolver<TParent>;
}

export interface CreateUpdatePermissionPayloadToPermissionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateProjectPayloadTypeResolver<TParent = any> {
  project?: UpdateProjectPayloadToProjectResolver<TParent>;
}

export interface UpdateProjectPayloadToProjectResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateProjectRolePayloadTypeResolver<TParent = any> {
  projectRole?: UpdateProjectRolePayloadToProjectRoleResolver<TParent>;
}

export interface UpdateProjectRolePayloadToProjectRoleResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IAssociationServiceToProjectPayloadTypeResolver<
  TParent = any
> {
  projectMicroservice?: AssociationServiceToProjectPayloadToProjectMicroserviceResolver<TParent>;
}

export interface AssociationServiceToProjectPayloadToProjectMicroserviceResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateArrayFunctionPayloadTypeResolver<TParent = any> {
  service?: CreateArrayFunctionPayloadToServiceResolver<TParent>;
}

export interface CreateArrayFunctionPayloadToServiceResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteArrayFunctionPayloadTypeResolver<TParent = any> {
  service?: DeleteArrayFunctionPayloadToServiceResolver<TParent>;
}

export interface DeleteArrayFunctionPayloadToServiceResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateServiceProjectPayloadTypeResolver<TParent = any> {
  message?: UpdateServiceProjectPayloadToMessageResolver<TParent>;
}

export interface UpdateServiceProjectPayloadToMessageResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteServiceProjectPayloadTypeResolver<TParent = any> {
  message?: DeleteServiceProjectPayloadToMessageResolver<TParent>;
}

export interface DeleteServiceProjectPayloadToMessageResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateEventPayloadTypeResolver<TParent = any> {
  event?: CreateEventPayloadToEventResolver<TParent>;
}

export interface CreateEventPayloadToEventResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateEventPayloadTypeResolver<TParent = any> {
  event?: UpdateEventPayloadToEventResolver<TParent>;
}

export interface UpdateEventPayloadToEventResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteEventPayloadTypeResolver<TParent = any> {
  message?: DeleteEventPayloadToMessageResolver<TParent>;
}

export interface DeleteEventPayloadToMessageResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateEventSessionPayloadTypeResolver<TParent = any> {
  eventSession?: CreateEventSessionPayloadToEventSessionResolver<TParent>;
}

export interface CreateEventSessionPayloadToEventSessionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateEventSessionPayloadTypeResolver<TParent = any> {
  eventSession?: UpdateEventSessionPayloadToEventSessionResolver<TParent>;
}

export interface UpdateEventSessionPayloadToEventSessionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteEventSessionPayloadTypeResolver<TParent = any> {
  message?: DeleteEventSessionPayloadToMessageResolver<TParent>;
}

export interface DeleteEventSessionPayloadToMessageResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IAddChatMemberPayloadTypeResolver<TParent = any> {
  conversationReplies?: AddChatMemberPayloadToConversationRepliesResolver<TParent>;
}

export interface AddChatMemberPayloadToConversationRepliesResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IAddChatMemberWsPayloadTypeResolver<TParent = any> {
  conversationReplies?: AddChatMemberWsPayloadToConversationRepliesResolver<TParent>;
}

export interface AddChatMemberWsPayloadToConversationRepliesResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateArticlePayloadTypeResolver<TParent = any> {
  article?: CreateArticlePayloadToArticleResolver<TParent>;
}

export interface CreateArticlePayloadToArticleResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateStatusArticlePayloadTypeResolver<TParent = any> {
  article?: UpdateStatusArticlePayloadToArticleResolver<TParent>;
}

export interface UpdateStatusArticlePayloadToArticleResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateTaxonomyPayloadTypeResolver<TParent = any> {
  taxonomy?: CreateTaxonomyPayloadToTaxonomyResolver<TParent>;
}

export interface CreateTaxonomyPayloadToTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateArticlePayloadTypeResolver<TParent = any> {
  article?: UpdateArticlePayloadToArticleResolver<TParent>;
}

export interface UpdateArticlePayloadToArticleResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateTaxonomyPayloadTypeResolver<TParent = any> {
  taxonomy?: UpdateTaxonomyPayloadToTaxonomyResolver<TParent>;
}

export interface UpdateTaxonomyPayloadToTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteArticlePayloadTypeResolver<TParent = any> {
  article?: DeleteArticlePayloadToArticleResolver<TParent>;
}

export interface DeleteArticlePayloadToArticleResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteTaxonomyPayloadTypeResolver<TParent = any> {
  taxonomy?: DeleteTaxonomyPayloadToTaxonomyResolver<TParent>;
}

export interface DeleteTaxonomyPayloadToTaxonomyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface INewSurveyPayloadTypeResolver<TParent = any> {
  survey?: NewSurveyPayloadToSurveyResolver<TParent>;
}

export interface NewSurveyPayloadToSurveyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateSurveyPayloadTypeResolver<TParent = any> {
  survey?: UpdateSurveyPayloadToSurveyResolver<TParent>;
}

export interface UpdateSurveyPayloadToSurveyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteSurveyPayloadTypeResolver<TParent = any> {
  survey?: DeleteSurveyPayloadToSurveyResolver<TParent>;
}

export interface DeleteSurveyPayloadToSurveyResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface INewQuestionPayloadTypeResolver<TParent = any> {
  question?: NewQuestionPayloadToQuestionResolver<TParent>;
}

export interface NewQuestionPayloadToQuestionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteQuestionPayloadTypeResolver<TParent = any> {
  question?: DeleteQuestionPayloadToQuestionResolver<TParent>;
}

export interface DeleteQuestionPayloadToQuestionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateQuestionPayloadTypeResolver<TParent = any> {
  question?: UpdateQuestionPayloadToQuestionResolver<TParent>;
}

export interface UpdateQuestionPayloadToQuestionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface INewOptionPayloadTypeResolver<TParent = any> {
  option?: NewOptionPayloadToOptionResolver<TParent>;
}

export interface NewOptionPayloadToOptionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteOptionPayloadTypeResolver<TParent = any> {
  option?: DeleteOptionPayloadToOptionResolver<TParent>;
}

export interface DeleteOptionPayloadToOptionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateOptionPayloadTypeResolver<TParent = any> {
  option?: UpdateOptionPayloadToOptionResolver<TParent>;
}

export interface UpdateOptionPayloadToOptionResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IAnswerQuestionPayloadTypeResolver<TParent = any> {
  message?: AnswerQuestionPayloadToMessageResolver<TParent>;
}

export interface AnswerQuestionPayloadToMessageResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateProductPayloadTypeResolver<TParent = any> {
  product?: CreateProductPayloadToProductResolver<TParent>;
}

export interface CreateProductPayloadToProductResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateProductPayloadTypeResolver<TParent = any> {
  product?: UpdateProductPayloadToProductResolver<TParent>;
}

export interface UpdateProductPayloadToProductResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteProductPayloadTypeResolver<TParent = any> {
  product?: DeleteProductPayloadToProductResolver<TParent>;
}

export interface DeleteProductPayloadToProductResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateInvoicePayloadTypeResolver<TParent = any> {
  invoice?: CreateInvoicePayloadToInvoiceResolver<TParent>;
}

export interface CreateInvoicePayloadToInvoiceResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateAddressPayloadTypeResolver<TParent = any> {
  address?: CreateAddressPayloadToAddressResolver<TParent>;
}

export interface CreateAddressPayloadToAddressResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateAddressPayloadTypeResolver<TParent = any> {
  address?: UpdateAddressPayloadToAddressResolver<TParent>;
}

export interface UpdateAddressPayloadToAddressResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteAddressPayloadTypeResolver<TParent = any> {
  address?: DeleteAddressPayloadToAddressResolver<TParent>;
}

export interface DeleteAddressPayloadToAddressResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IUpdateStatusInvoicePayloadTypeResolver<TParent = any> {
  invoice?: UpdateStatusInvoicePayloadToInvoiceResolver<TParent>;
}

export interface UpdateStatusInvoicePayloadToInvoiceResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateUpdateShopPayloadTypeResolver<TParent = any> {
  shop?: CreateUpdateShopPayloadToShopResolver<TParent>;
}

export interface CreateUpdateShopPayloadToShopResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateUpdateContactEmailPayloadTypeResolver<TParent = any> {
  contactEmail?: CreateUpdateContactEmailPayloadToContactEmailResolver<TParent>;
}

export interface CreateUpdateContactEmailPayloadToContactEmailResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ISendEmailPayloadTypeResolver<TParent = any> {
  responseEmail?: SendEmailPayloadToResponseEmailResolver<TParent>;
}

export interface SendEmailPayloadToResponseEmailResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IResponseEmailTypeResolver<TParent = any> {
  message?: ResponseEmailToMessageResolver<TParent>;
}

export interface ResponseEmailToMessageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteContactEmailPayloadTypeResolver<TParent = any> {
  message?: DeleteContactEmailPayloadToMessageResolver<TParent>;
}

export interface DeleteContactEmailPayloadToMessageResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IPutConfigPayloadTypeResolver<TParent = any> {
  configuration?: PutConfigPayloadToConfigurationResolver<TParent>;
}

export interface PutConfigPayloadToConfigurationResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteConfigPayloadTypeResolver<TParent = any> {
  configuration?: DeleteConfigPayloadToConfigurationResolver<TParent>;
}

export interface DeleteConfigPayloadToConfigurationResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ICreateVideoCallPayloadTypeResolver<TParent = any> {
  videoCall?: CreateVideoCallPayloadToVideoCallResolver<TParent>;
}

export interface CreateVideoCallPayloadToVideoCallResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface IDeleteVideoCallPayloadTypeResolver<TParent = any> {
  videoCall?: DeleteVideoCallPayloadToVideoCallResolver<TParent>;
}

export interface DeleteVideoCallPayloadToVideoCallResolver<
  TParent = any,
  TResult = any
> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ISubscriptionTypeResolver<TParent = any> {
  conversationPublished?: SubscriptionToConversationPublishedResolver<TParent>;
}

export interface SubscriptionToConversationPublishedArgs {
  concaId: string;
}
export interface SubscriptionToConversationPublishedResolver<
  TParent = any,
  TResult = any
> {
  resolve?: (
    parent: TParent,
    args: SubscriptionToConversationPublishedArgs,
    context: any,
    info: GraphQLResolveInfo
  ) => TResult;
  subscribe: (
    parent: TParent,
    args: SubscriptionToConversationPublishedArgs,
    context: any,
    info: GraphQLResolveInfo
  ) => AsyncIterator<TResult>;
}
