/* tslint:disable */
/* eslint-disable */

import { GraphQLScalarType, GraphQLResolveInfo } from 'graphql/type/index';


declare module 'graphql' {
  export  type IQueryFilter<T extends keyof IQuery> = Pick<IQuery, T>;
  export  type IMutationFilter<T extends keyof IMutation> = Pick<
    IMutation,
    T
  >;

  export  type IGraphQLResponseRoot = {
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

  ////////////////////////////////////////////////////////////////////////////////
  export interface IQuery {
    me: IMember;
    referer: IMyUrl;
    geProjectByUrl: IProject;
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
    conversationMemberBy: IMember;
    memberNameBy: IProfile;
    services: Array<IMicroservice>;
    servicesByProject: Array<IMicroservice>;
    myEvents: Array<IEvent>;
    eventById: IEvent;
    conversationsByToMemberId: Array<IConversationReply>;
    conversationsByMemberId: Array<IConversation>;
    articles?: IArticlesConnection;
    listArticles?: IArticleCollectionSegment;
    taxonomiesByProject: Array<ITaxonomy>;
    articleById: IArticle;
    articleBySlug: IArticle;
    configs: Array<IConfiguration>;
    videoCallById: IVideo;
    videoCallBySessionId: IVideo;
    test: string;
  }

  export interface IMember {
    email: string;
    recoverToken: string;
    recoverRegister: IDateTime;
    isActive: boolean;
    firstTime: boolean;
    loginCount: number;
    memberCompanies: Array<IMemberCompany>;
    memberRoles: Array<IMemberRole>;
    memberProjects: Array<IMemberProject>;
    profile: IProfile;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  /**
   * The `DateTime` scalar represents an ISO-8601 compliant date time type.
   */
  export type IDateTime = any;

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

  export type IUUID = any;

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

  export interface IIndustry {
    name: string;
    companies: Array<ICompany>;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface IProject {
    name: string;
    description: string;
    logo: string;
    tagLine: string;
    url: string;
    companyId: IUUID;
    company: ICompany;
    projectRoles: Array<IProjectRole>;
    memberProjects: Array<IMemberProject>;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
    services?: Array<IMicroservice | null>;
    site?: Array<IConfiguration | null>;
  }

  export interface IProjectRole {
    name: string;
    codeName: string;
    projectId: IUUID;
    project: IProject;
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

  export interface IMicroservice {
    name: string;
    codeName: string;
    image: string;
    description: string;
    priority: number;
    projectMicroservices: Array<IProjectMicroservice>;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface IProjectMicroservice {
    microserviceId: IUUID;
    microservice: IMicroservice;
    projectId: IUUID;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface IConfiguration {
    projectId: IUUID;
    key: string;
    value: string;
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

  export interface IMyUrl {
    url: string;
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

  export const enum ISortEnumType {
    ASC = 'ASC',
    DESC = 'DESC'
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

  export interface IIndustrySortInput {
    name?: ISortEnumType;
    id?: ISortEnumType;
    createdAt?: ISortEnumType;
    updatedAt?: ISortEnumType;
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
    memberCompanies?: IListFilterInputTypeOfMemberCompanyFilterInput;
    memberRoles?: IListFilterInputTypeOfMemberRoleFilterInput;
    memberProjects?: IListFilterInputTypeOfMemberProjectFilterInput;
    profile?: IProfileFilterInput;
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

  export interface IBooleanOperationFilterInput {
    eq?: boolean;
    neq?: boolean;
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
    companies?: IListFilterInputTypeOfCompanyFilterInput;
    id?: IComparableGuidOperationFilterInput;
    createdAt?: IComparableDateTimeOperationFilterInput;
    updatedAt?: IComparableDateTimeOperationFilterInput;
  }

  export interface IListFilterInputTypeOfCompanyFilterInput {
    all?: ICompanyFilterInput;
    none?: ICompanyFilterInput;
    some?: ICompanyFilterInput;
    any?: boolean;
  }

  export interface IListFilterInputTypeOfProjectFilterInput {
    all?: IProjectFilterInput;
    none?: IProjectFilterInput;
    some?: IProjectFilterInput;
    any?: boolean;
  }

  export interface IProjectFilterInput {
    and?: Array<IProjectFilterInput>;
    or?: Array<IProjectFilterInput>;
    name?: IStringOperationFilterInput;
    description?: IStringOperationFilterInput;
    logo?: IStringOperationFilterInput;
    tagLine?: IStringOperationFilterInput;
    url?: IStringOperationFilterInput;
    companyId?: IComparableGuidOperationFilterInput;
    company?: ICompanyFilterInput;
    projectRoles?: IListFilterInputTypeOfProjectRoleFilterInput;
    memberProjects?: IListFilterInputTypeOfMemberProjectFilterInput;
    id?: IComparableGuidOperationFilterInput;
    createdAt?: IComparableDateTimeOperationFilterInput;
    updatedAt?: IComparableDateTimeOperationFilterInput;
  }

  export interface IListFilterInputTypeOfProjectRoleFilterInput {
    all?: IProjectRoleFilterInput;
    none?: IProjectRoleFilterInput;
    some?: IProjectRoleFilterInput;
    any?: boolean;
  }

  export interface IProjectRoleFilterInput {
    and?: Array<IProjectRoleFilterInput>;
    or?: Array<IProjectRoleFilterInput>;
    name?: IStringOperationFilterInput;
    codeName?: IStringOperationFilterInput;
    projectId?: IComparableGuidOperationFilterInput;
    project?: IProjectFilterInput;
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

  export interface IMemberSortInput {
    email?: ISortEnumType;
    recoverToken?: ISortEnumType;
    recoverRegister?: ISortEnumType;
    isActive?: ISortEnumType;
    firstTime?: ISortEnumType;
    loginCount?: ISortEnumType;
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

  export interface IEvent {
    projectId: IUUID;
    memberId: IUUID;
    location: string;
    description: string;
    file: string;
    roomId: string;
    eventDate: IDateTime;
    eventMembers: Array<IEventMember>;
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
    member?: IMember;
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
    membero?: IMember;
    membert?: IMember;
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
    articles?: IListFilterInputTypeOfArticleFilterInput;
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
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
    author?: string;
  }

  export interface ITaxonomy {
    projectId: IUUID;
    name: string;
    slug: string;
    description: string;
    termGroup: string;
    articles: Array<IArticle>;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface IArticleCollectionSegment {
    items?: Array<IArticle>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: ICollectionSegmentInfo;
    totalCount: number;
  }

  export interface IVideo {
    sessionId: string;
    token: string;
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
    associationServiceToProject: IAssociationServiceToProjectPayload;
    createEvent: ICreateEventPayload;
    updateEvent: IUpdateEventPayload;
    deleteEvent: IDeleteEventPayload;
    addChatMember: IAddChatMemberPayload;
    createArticle: ICreateArticlePayload;
    blog_generateSlug: string;
    updateStatusArticle: IUpdateStatusArticlePayload;
    createTaxonomy: ICreateTaxonomyPayload;
    updateArticle: IUpdateArticlePayload;
    updateTaxonomy: IUpdateTaxonomyPayload;
    deleteArticle: IDeleteArticlePayload;
    deleteTaxonomy: IDeleteTaxonomyPayload;
    putConfig: IPutConfigPayload;
    deleteConfig: IDeleteConfigPayload;
    createVideoCall: ICreateVideoCallPayload;
    deleteVideoCall: IDeleteVideoCallPayload;
    addNotification: IAddNotificationPayload;
    publishMessage: IPublishMessagePayload;
    publishMsg: IPublishMsgPayload;
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
    countryCode: string;
    memberId?: string;
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
  }

  export interface IActiveMemberPayload {
    member: IMember;
  }

  export interface ICreateProjectRoleInput {
    projectId: IUUID;
    name: string;
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

  export interface IAssociationServiceToProjectInput {
    projectId: IUUID;
    codeNames: Array<string>;
  }

  export interface IAssociationServiceToProjectPayload {
    projectMicroservice: IProjectMicroservice;
  }

  export interface ICreateEventInput {
    projectId: IUUID;
    memberId: IUUID;
    description: string;
    members?: Array<string>;
    eventDate?: string;
    roomId?: string;
    file?: string;
    location?: string;
  }

  export interface ICreateEventPayload {
    event: IEvent;
  }

  export interface IUpdateEventInput {
    eventId: IUUID;
    description: string;
    members?: Array<string>;
    eventDate?: string;
    roomId?: string;
    file?: string;
    location?: string;
  }

  export interface IUpdateEventPayload {
    event: IEvent;
  }

  export interface IDeleteEventInput {
    eventId: IUUID;
  }

  export interface IDeleteEventPayload {
    event: IEvent;
  }

  export interface IAddChatMemberInput {
    memberId: IUUID;
    toMemberId: IUUID;
    message: string;
  }

  export interface IAddChatMemberPayload {
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
    slug?: string;
    termGroup?: string;
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
    slug?: string;
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
  }

  export interface ICreateVideoCallPayload {
    videoCall: IVideoCall;
  }

  export interface IVideoCall {
    projectId: IUUID;
    memberId: IUUID;
    sessionId: string;
    sessionName: string;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface IDeleteVideoCallInput {
    videoCallId: IUUID;
  }

  export interface IDeleteVideoCallPayload {
    videoCall: IVideoCall;
  }

  export interface IAddNotificationInput {
    memberId: IUUID;
    message: string;
  }

  export interface IAddNotificationPayload {
    pushNotification: IPushNotification;
  }

  export interface IPushNotification {
    message: string;
    memberId: IUUID;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface IPublishMessageInput {
    memberId: IUUID;
    message: string;
  }

  export interface IPublishMessagePayload {
    pushNotification: IPushNotification;
  }

  export interface IPublishMsgInput {
    memberId: string;
    message: string;
  }

  export interface IPublishMsgPayload {
    pushNotification: IPushNotification;
  }

  export interface ISubscription {
    msgPublished: Array<IPushNotification>;
    pushNotificationAdded: IPushNotification;
    messagePublished: IPushNotification;
  }

  export const enum IApplyPolicy {
    BEFORE_RESOLVER = 'BEFORE_RESOLVER',
    AFTER_RESOLVER = 'AFTER_RESOLVER'
  }

  /**
   * The name scalar represents a valid GraphQL name as specified in the spec and can be used to refer to fields or types.
   */
  export type IName = any;

  /*********************************
   *                               *
   *         TYPE RESOLVERS        *
   *                               *
   *********************************/
  /**
   * This interface define the shape of your resolver
   * Note that this type is designed to be compatible with graphql-tools resolvers
   * However, you can still use other generated interfaces to make your resolver type-safed
   */
  export interface IResolver {
    Query?: IQueryTypeResolver;
    Member?: IMemberTypeResolver;
    DateTime?: GraphQLScalarType;
    MemberCompany?: IMemberCompanyTypeResolver;
    UUID?: GraphQLScalarType;
    Company?: ICompanyTypeResolver;
    Country?: ICountryTypeResolver;
    Currency?: ICurrencyTypeResolver;
    Profile?: IProfileTypeResolver;
    Industry?: IIndustryTypeResolver;
    Project?: IProjectTypeResolver;
    ProjectRole?: IProjectRoleTypeResolver;
    MemberProject?: IMemberProjectTypeResolver;
    MemberProjectRoleProject?: IMemberProjectRoleProjectTypeResolver;
    Microservice?: IMicroserviceTypeResolver;
    ProjectMicroservice?: IProjectMicroserviceTypeResolver;
    Configuration?: IConfigurationTypeResolver;
    MemberRole?: IMemberRoleTypeResolver;
    Role?: IRoleTypeResolver;
    MyUrl?: IMyUrlTypeResolver;
    MemberCollectionSegment?: IMemberCollectionSegmentTypeResolver;
    CollectionSegmentInfo?: ICollectionSegmentInfoTypeResolver;
    Event?: IEventTypeResolver;
    EventMember?: IEventMemberTypeResolver;
    ConversationReply?: IConversationReplyTypeResolver;
    Conversation?: IConversationTypeResolver;
    ArticlesConnection?: IArticlesConnectionTypeResolver;
    PageInfo?: IPageInfoTypeResolver;
    ArticlesEdge?: IArticlesEdgeTypeResolver;
    Article?: IArticleTypeResolver;
    Taxonomy?: ITaxonomyTypeResolver;
    ArticleCollectionSegment?: IArticleCollectionSegmentTypeResolver;
    Video?: IVideoTypeResolver;
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
    AssociationServiceToProjectPayload?: IAssociationServiceToProjectPayloadTypeResolver;
    CreateEventPayload?: ICreateEventPayloadTypeResolver;
    UpdateEventPayload?: IUpdateEventPayloadTypeResolver;
    DeleteEventPayload?: IDeleteEventPayloadTypeResolver;
    AddChatMemberPayload?: IAddChatMemberPayloadTypeResolver;
    CreateArticlePayload?: ICreateArticlePayloadTypeResolver;
    UpdateStatusArticlePayload?: IUpdateStatusArticlePayloadTypeResolver;
    CreateTaxonomyPayload?: ICreateTaxonomyPayloadTypeResolver;
    UpdateArticlePayload?: IUpdateArticlePayloadTypeResolver;
    UpdateTaxonomyPayload?: IUpdateTaxonomyPayloadTypeResolver;
    DeleteArticlePayload?: IDeleteArticlePayloadTypeResolver;
    DeleteTaxonomyPayload?: IDeleteTaxonomyPayloadTypeResolver;
    PutConfigPayload?: IPutConfigPayloadTypeResolver;
    DeleteConfigPayload?: IDeleteConfigPayloadTypeResolver;
    CreateVideoCallPayload?: ICreateVideoCallPayloadTypeResolver;
    VideoCall?: IVideoCallTypeResolver;
    DeleteVideoCallPayload?: IDeleteVideoCallPayloadTypeResolver;
    AddNotificationPayload?: IAddNotificationPayloadTypeResolver;
    PushNotification?: IPushNotificationTypeResolver;
    PublishMessagePayload?: IPublishMessagePayloadTypeResolver;
    PublishMsgPayload?: IPublishMsgPayloadTypeResolver;
    Subscription?: ISubscriptionTypeResolver;
    Name?: GraphQLScalarType;
  }
  export interface IQueryTypeResolver<TParent = any> {
    me?: QueryToMeResolver<TParent>;
    referer?: QueryToRefererResolver<TParent>;
    geProjectByUrl?: QueryToGeProjectByUrlResolver<TParent>;
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
    articles?: QueryToArticlesResolver<TParent>;
    listArticles?: QueryToListArticlesResolver<TParent>;
    taxonomiesByProject?: QueryToTaxonomiesByProjectResolver<TParent>;
    articleById?: QueryToArticleByIdResolver<TParent>;
    articleBySlug?: QueryToArticleBySlugResolver<TParent>;
    configs?: QueryToConfigsResolver<TParent>;
    videoCallById?: QueryToVideoCallByIdResolver<TParent>;
    videoCallBySessionId?: QueryToVideoCallBySessionIdResolver<TParent>;
    test?: QueryToTestResolver<TParent>;
  }

  export interface QueryToMeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToRefererResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGeProjectByUrlArgs {
    url: string;
  }
  export interface QueryToGeProjectByUrlResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGeProjectByUrlArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToCountriesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToIndustriesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    id: IUUID;
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

  export interface QueryToTaxonomiesByProjectArgs {
    projectId: IUUID;
    termGroup?: string;
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

  export interface QueryToArticleByIdArgs {
    id: IUUID;
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
  }
  export interface QueryToArticleBySlugResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToArticleBySlugArgs,
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

  export interface QueryToTestResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IMemberTypeResolver<TParent = any> {
    email?: MemberToEmailResolver<TParent>;
    recoverToken?: MemberToRecoverTokenResolver<TParent>;
    recoverRegister?: MemberToRecoverRegisterResolver<TParent>;
    isActive?: MemberToIsActiveResolver<TParent>;
    firstTime?: MemberToFirstTimeResolver<TParent>;
    loginCount?: MemberToLoginCountResolver<TParent>;
    memberCompanies?: MemberToMemberCompaniesResolver<TParent>;
    memberRoles?: MemberToMemberRolesResolver<TParent>;
    memberProjects?: MemberToMemberProjectsResolver<TParent>;
    profile?: MemberToProfileResolver<TParent>;
    id?: MemberToIdResolver<TParent>;
    createdAt?: MemberToCreatedAtResolver<TParent>;
    updatedAt?: MemberToUpdatedAtResolver<TParent>;
  }

  export interface MemberToEmailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToRecoverTokenResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToRecoverRegisterResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToIsActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToFirstTimeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToLoginCountResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToMemberCompaniesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToMemberRolesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToMemberProjectsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToProfileResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberCompanyToCompanyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberCompanyToMemberIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberCompanyToMemberResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberCompanyToIsDefaultResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberCompanyToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberCompanyToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberCompanyToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToNumberEmployeesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToCountryIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToCountryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToPhotoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToTagLineResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToIndustryIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToIndustryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToMemberCompaniesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToProjectsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CompanyToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CountryToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CountryToCurrencyIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CountryToCurrencyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CountryToProfileResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CountryToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CountryToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CountryToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CurrencyToSymbolResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CurrencyToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CurrencyToExchangeRateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CurrencyToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CurrencyToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CurrencyToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToLastNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToPhoneResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToPhotoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToMemberIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToMemberResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToCountryIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToCountryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IIndustryTypeResolver<TParent = any> {
    name?: IndustryToNameResolver<TParent>;
    companies?: IndustryToCompaniesResolver<TParent>;
    id?: IndustryToIdResolver<TParent>;
    createdAt?: IndustryToCreatedAtResolver<TParent>;
    updatedAt?: IndustryToUpdatedAtResolver<TParent>;
  }

  export interface IndustryToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IndustryToCompaniesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IndustryToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IndustryToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IndustryToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProjectTypeResolver<TParent = any> {
    name?: ProjectToNameResolver<TParent>;
    description?: ProjectToDescriptionResolver<TParent>;
    logo?: ProjectToLogoResolver<TParent>;
    tagLine?: ProjectToTagLineResolver<TParent>;
    url?: ProjectToUrlResolver<TParent>;
    companyId?: ProjectToCompanyIdResolver<TParent>;
    company?: ProjectToCompanyResolver<TParent>;
    projectRoles?: ProjectToProjectRolesResolver<TParent>;
    memberProjects?: ProjectToMemberProjectsResolver<TParent>;
    id?: ProjectToIdResolver<TParent>;
    createdAt?: ProjectToCreatedAtResolver<TParent>;
    updatedAt?: ProjectToUpdatedAtResolver<TParent>;
    services?: ProjectToServicesResolver<TParent>;
    site?: ProjectToSiteResolver<TParent>;
  }

  export interface ProjectToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToLogoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToTagLineResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToUrlResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToCompanyIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToCompanyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToProjectRolesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToMemberProjectsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToServicesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProjectRoleTypeResolver<TParent = any> {
    name?: ProjectRoleToNameResolver<TParent>;
    codeName?: ProjectRoleToCodeNameResolver<TParent>;
    projectId?: ProjectRoleToProjectIdResolver<TParent>;
    project?: ProjectRoleToProjectResolver<TParent>;
    id?: ProjectRoleToIdResolver<TParent>;
    createdAt?: ProjectRoleToCreatedAtResolver<TParent>;
    updatedAt?: ProjectRoleToUpdatedAtResolver<TParent>;
  }

  export interface ProjectRoleToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectRoleToCodeNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectRoleToProjectIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectRoleToProjectResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectRoleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectRoleToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectRoleToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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

  export interface MemberProjectToMemberIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectToMemberResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectToProjectIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectToProjectResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectToMemberProjectRoleProjectResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectRoleProjectToMemberProjectResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectRoleProjectToProjectRoleIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectRoleProjectToProjectRoleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectRoleProjectToIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectRoleProjectToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberProjectRoleProjectToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IMicroserviceTypeResolver<TParent = any> {
    name?: MicroserviceToNameResolver<TParent>;
    codeName?: MicroserviceToCodeNameResolver<TParent>;
    image?: MicroserviceToImageResolver<TParent>;
    description?: MicroserviceToDescriptionResolver<TParent>;
    priority?: MicroserviceToPriorityResolver<TParent>;
    projectMicroservices?: MicroserviceToProjectMicroservicesResolver<TParent>;
    id?: MicroserviceToIdResolver<TParent>;
    createdAt?: MicroserviceToCreatedAtResolver<TParent>;
    updatedAt?: MicroserviceToUpdatedAtResolver<TParent>;
  }

  export interface MicroserviceToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MicroserviceToCodeNameResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MicroserviceToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MicroserviceToDescriptionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MicroserviceToPriorityResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MicroserviceToProjectMicroservicesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MicroserviceToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MicroserviceToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MicroserviceToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProjectMicroserviceTypeResolver<TParent = any> {
    microserviceId?: ProjectMicroserviceToMicroserviceIdResolver<TParent>;
    microservice?: ProjectMicroserviceToMicroserviceResolver<TParent>;
    projectId?: ProjectMicroserviceToProjectIdResolver<TParent>;
    id?: ProjectMicroserviceToIdResolver<TParent>;
    createdAt?: ProjectMicroserviceToCreatedAtResolver<TParent>;
    updatedAt?: ProjectMicroserviceToUpdatedAtResolver<TParent>;
  }

  export interface ProjectMicroserviceToMicroserviceIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectMicroserviceToMicroserviceResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectMicroserviceToProjectIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectMicroserviceToIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectMicroserviceToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProjectMicroserviceToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConfigurationToKeyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConfigurationToValueResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConfigurationToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConfigurationToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConfigurationToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberRoleToCompanyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberRoleToRoleIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberRoleToRoleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberRoleToMemberIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberRoleToMemberResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberRoleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberRoleToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberRoleToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RoleToCodeNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RoleToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RoleToMemberRolesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RoleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RoleToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RoleToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IMyUrlTypeResolver<TParent = any> {
    url?: MyUrlToUrlResolver<TParent>;
  }

  export interface MyUrlToUrlResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberCollectionSegmentToPageInfoResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemberCollectionSegmentToTotalCountResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICollectionSegmentInfoTypeResolver<TParent = any> {
    hasNextPage?: CollectionSegmentInfoToHasNextPageResolver<TParent>;
    hasPreviousPage?: CollectionSegmentInfoToHasPreviousPageResolver<TParent>;
  }

  export interface CollectionSegmentInfoToHasNextPageResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CollectionSegmentInfoToHasPreviousPageResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IEventTypeResolver<TParent = any> {
    projectId?: EventToProjectIdResolver<TParent>;
    memberId?: EventToMemberIdResolver<TParent>;
    location?: EventToLocationResolver<TParent>;
    description?: EventToDescriptionResolver<TParent>;
    file?: EventToFileResolver<TParent>;
    roomId?: EventToRoomIdResolver<TParent>;
    eventDate?: EventToEventDateResolver<TParent>;
    eventMembers?: EventToEventMembersResolver<TParent>;
    id?: EventToIdResolver<TParent>;
    createdAt?: EventToCreatedAtResolver<TParent>;
    updatedAt?: EventToUpdatedAtResolver<TParent>;
  }

  export interface EventToProjectIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToMemberIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToLocationResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToFileResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToRoomIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToEventDateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToEventMembersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventMemberToEventResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventMemberToMemberIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventMemberToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventMemberToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EventMemberToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationReplyToReplyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationReplyToRegisterDateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationReplyToStatusResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationReplyToConversationIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationReplyToConversationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationReplyToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationReplyToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationReplyToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationReplyToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    membero?: ConversationToMemberoResolver<TParent>;
    membert?: ConversationToMembertResolver<TParent>;
  }

  export interface ConversationToProjectIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToMemberOneResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToMemberTwoResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToRegisterDateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToRepliesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToMemberoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToMembertResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticlesConnectionToEdgesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticlesConnectionToNodesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticlesConnectionToTotalCountResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPageInfoTypeResolver<TParent = any> {
    hasNextPage?: PageInfoToHasNextPageResolver<TParent>;
    hasPreviousPage?: PageInfoToHasPreviousPageResolver<TParent>;
    startCursor?: PageInfoToStartCursorResolver<TParent>;
    endCursor?: PageInfoToEndCursorResolver<TParent>;
  }

  export interface PageInfoToHasNextPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageInfoToHasPreviousPageResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageInfoToStartCursorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageInfoToEndCursorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IArticlesEdgeTypeResolver<TParent = any> {
    cursor?: ArticlesEdgeToCursorResolver<TParent>;
    node?: ArticlesEdgeToNodeResolver<TParent>;
  }

  export interface ArticlesEdgeToCursorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticlesEdgeToNodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    id?: ArticleToIdResolver<TParent>;
    createdAt?: ArticleToCreatedAtResolver<TParent>;
    updatedAt?: ArticleToUpdatedAtResolver<TParent>;
    author?: ArticleToAuthorResolver<TParent>;
  }

  export interface ArticleToProjectIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToMemberIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToPhotoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToSlugResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToResumeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToContentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToViewsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToReleaseDateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToSeoTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToSeoDescriptionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToSeoKeywordsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToStructuredMarkingResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToImageAltResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToCategoriesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToTagsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToAuthorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ITaxonomyTypeResolver<TParent = any> {
    projectId?: TaxonomyToProjectIdResolver<TParent>;
    name?: TaxonomyToNameResolver<TParent>;
    slug?: TaxonomyToSlugResolver<TParent>;
    description?: TaxonomyToDescriptionResolver<TParent>;
    termGroup?: TaxonomyToTermGroupResolver<TParent>;
    articles?: TaxonomyToArticlesResolver<TParent>;
    id?: TaxonomyToIdResolver<TParent>;
    createdAt?: TaxonomyToCreatedAtResolver<TParent>;
    updatedAt?: TaxonomyToUpdatedAtResolver<TParent>;
  }

  export interface TaxonomyToProjectIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TaxonomyToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TaxonomyToSlugResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TaxonomyToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TaxonomyToTermGroupResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TaxonomyToArticlesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TaxonomyToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TaxonomyToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TaxonomyToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleCollectionSegmentToPageInfoResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleCollectionSegmentToTotalCountResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IVideoTypeResolver<TParent = any> {
    sessionId?: VideoToSessionIdResolver<TParent>;
    token?: VideoToTokenResolver<TParent>;
  }

  export interface VideoToSessionIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VideoToTokenResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    associationServiceToProject?: MutationToAssociationServiceToProjectResolver<TParent>;
    createEvent?: MutationToCreateEventResolver<TParent>;
    updateEvent?: MutationToUpdateEventResolver<TParent>;
    deleteEvent?: MutationToDeleteEventResolver<TParent>;
    addChatMember?: MutationToAddChatMemberResolver<TParent>;
    createArticle?: MutationToCreateArticleResolver<TParent>;
    blog_generateSlug?: MutationToBlog_generateSlugResolver<TParent>;
    updateStatusArticle?: MutationToUpdateStatusArticleResolver<TParent>;
    createTaxonomy?: MutationToCreateTaxonomyResolver<TParent>;
    updateArticle?: MutationToUpdateArticleResolver<TParent>;
    updateTaxonomy?: MutationToUpdateTaxonomyResolver<TParent>;
    deleteArticle?: MutationToDeleteArticleResolver<TParent>;
    deleteTaxonomy?: MutationToDeleteTaxonomyResolver<TParent>;
    putConfig?: MutationToPutConfigResolver<TParent>;
    deleteConfig?: MutationToDeleteConfigResolver<TParent>;
    createVideoCall?: MutationToCreateVideoCallResolver<TParent>;
    deleteVideoCall?: MutationToDeleteVideoCallResolver<TParent>;
    addNotification?: MutationToAddNotificationResolver<TParent>;
    publishMessage?: MutationToPublishMessageResolver<TParent>;
    publishMsg?: MutationToPublishMsgResolver<TParent>;
  }

  export interface MutationToCreateMemberArgs {
    input: ICreateMemberInput;
  }
  export interface MutationToCreateMemberResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToCreateCompanyResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToCreateProjectResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToUpdateProfileResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToActiveMemberResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToGenerateSlugResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToRemoveAccentResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToDeleteProjectResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToUpdateCompanyResolver<
    TParent = any,
    TResult = any
  > {
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

  export interface MutationToAddChatMemberArgs {
    input: IAddChatMemberInput;
  }
  export interface MutationToAddChatMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToAddChatMemberArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateArticleArgs {
    input: ICreateArticleInput;
  }
  export interface MutationToCreateArticleResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToUpdateArticleResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToDeleteArticleResolver<
    TParent = any,
    TResult = any
  > {
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
  export interface MutationToDeleteConfigResolver<
    TParent = any,
    TResult = any
  > {
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

  export interface MutationToAddNotificationArgs {
    input: IAddNotificationInput;
  }
  export interface MutationToAddNotificationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToAddNotificationArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToPublishMessageArgs {
    input: IPublishMessageInput;
  }
  export interface MutationToPublishMessageResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToPublishMessageArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToPublishMsgArgs {
    input: IPublishMsgInput;
  }
  export interface MutationToPublishMsgResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToPublishMsgArgs,
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CreateMemberPayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ILoginMemberPayloadTypeResolver<TParent = any> {
    accessToken?: LoginMemberPayloadToAccessTokenResolver<TParent>;
    member?: LoginMemberPayloadToMemberResolver<TParent>;
  }

  export interface LoginMemberPayloadToAccessTokenResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LoginMemberPayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICreateCompanyPayloadTypeResolver<TParent = any> {
    company?: CreateCompanyPayloadToCompanyResolver<TParent>;
  }

  export interface CreateCompanyPayloadToCompanyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICreateProjectPayloadTypeResolver<TParent = any> {
    project?: CreateProjectPayloadToProjectResolver<TParent>;
  }

  export interface CreateProjectPayloadToProjectResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICreateUserPayloadTypeResolver<TParent = any> {
    accessToken?: CreateUserPayloadToAccessTokenResolver<TParent>;
    member?: CreateUserPayloadToMemberResolver<TParent>;
  }

  export interface CreateUserPayloadToAccessTokenResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CreateUserPayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUpdateProfilePayloadTypeResolver<TParent = any> {
    member?: UpdateProfilePayloadToMemberResolver<TParent>;
  }

  export interface UpdateProfilePayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUpdatePasswordPayloadTypeResolver<TParent = any> {
    member?: UpdatePasswordPayloadToMemberResolver<TParent>;
  }

  export interface UpdatePasswordPayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IActiveMemberPayloadTypeResolver<TParent = any> {
    member?: ActiveMemberPayloadToMemberResolver<TParent>;
  }

  export interface ActiveMemberPayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICreateProjectRolePayloadTypeResolver<TParent = any> {
    projectRole?: CreateProjectRolePayloadToProjectRoleResolver<TParent>;
  }

  export interface CreateProjectRolePayloadToProjectRoleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUploadPhotoProfilePayloadTypeResolver<TParent = any> {
    member?: UploadPhotoProfilePayloadToMemberResolver<TParent>;
  }

  export interface UploadPhotoProfilePayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDeleteProjectPayloadTypeResolver<TParent = any> {
    project?: DeleteProjectPayloadToProjectResolver<TParent>;
  }

  export interface DeleteProjectPayloadToProjectResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUpdateCompanyPayloadTypeResolver<TParent = any> {
    company?: UpdateCompanyPayloadToCompanyResolver<TParent>;
  }

  export interface UpdateCompanyPayloadToCompanyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRestorePasswordPayloadTypeResolver<TParent = any> {
    member?: RestorePasswordPayloadToMemberResolver<TParent>;
  }

  export interface RestorePasswordPayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRecoverPasswordPayloadTypeResolver<TParent = any> {
    member?: RecoverPasswordPayloadToMemberResolver<TParent>;
  }

  export interface RecoverPasswordPayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IVerifyTokenPayloadTypeResolver<TParent = any> {
    member?: VerifyTokenPayloadToMemberResolver<TParent>;
  }

  export interface VerifyTokenPayloadToMemberResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
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
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICreateEventPayloadTypeResolver<TParent = any> {
    event?: CreateEventPayloadToEventResolver<TParent>;
  }

  export interface CreateEventPayloadToEventResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUpdateEventPayloadTypeResolver<TParent = any> {
    event?: UpdateEventPayloadToEventResolver<TParent>;
  }

  export interface UpdateEventPayloadToEventResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDeleteEventPayloadTypeResolver<TParent = any> {
    event?: DeleteEventPayloadToEventResolver<TParent>;
  }

  export interface DeleteEventPayloadToEventResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAddChatMemberPayloadTypeResolver<TParent = any> {
    conversationReplies?: AddChatMemberPayloadToConversationRepliesResolver<TParent>;
  }

  export interface AddChatMemberPayloadToConversationRepliesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICreateArticlePayloadTypeResolver<TParent = any> {
    article?: CreateArticlePayloadToArticleResolver<TParent>;
  }

  export interface CreateArticlePayloadToArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUpdateStatusArticlePayloadTypeResolver<TParent = any> {
    article?: UpdateStatusArticlePayloadToArticleResolver<TParent>;
  }

  export interface UpdateStatusArticlePayloadToArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICreateTaxonomyPayloadTypeResolver<TParent = any> {
    taxonomy?: CreateTaxonomyPayloadToTaxonomyResolver<TParent>;
  }

  export interface CreateTaxonomyPayloadToTaxonomyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUpdateArticlePayloadTypeResolver<TParent = any> {
    article?: UpdateArticlePayloadToArticleResolver<TParent>;
  }

  export interface UpdateArticlePayloadToArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUpdateTaxonomyPayloadTypeResolver<TParent = any> {
    taxonomy?: UpdateTaxonomyPayloadToTaxonomyResolver<TParent>;
  }

  export interface UpdateTaxonomyPayloadToTaxonomyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDeleteArticlePayloadTypeResolver<TParent = any> {
    article?: DeleteArticlePayloadToArticleResolver<TParent>;
  }

  export interface DeleteArticlePayloadToArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDeleteTaxonomyPayloadTypeResolver<TParent = any> {
    taxonomy?: DeleteTaxonomyPayloadToTaxonomyResolver<TParent>;
  }

  export interface DeleteTaxonomyPayloadToTaxonomyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPutConfigPayloadTypeResolver<TParent = any> {
    configuration?: PutConfigPayloadToConfigurationResolver<TParent>;
  }

  export interface PutConfigPayloadToConfigurationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDeleteConfigPayloadTypeResolver<TParent = any> {
    configuration?: DeleteConfigPayloadToConfigurationResolver<TParent>;
  }

  export interface DeleteConfigPayloadToConfigurationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICreateVideoCallPayloadTypeResolver<TParent = any> {
    videoCall?: CreateVideoCallPayloadToVideoCallResolver<TParent>;
  }

  export interface CreateVideoCallPayloadToVideoCallResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IVideoCallTypeResolver<TParent = any> {
    projectId?: VideoCallToProjectIdResolver<TParent>;
    memberId?: VideoCallToMemberIdResolver<TParent>;
    sessionId?: VideoCallToSessionIdResolver<TParent>;
    sessionName?: VideoCallToSessionNameResolver<TParent>;
    id?: VideoCallToIdResolver<TParent>;
    createdAt?: VideoCallToCreatedAtResolver<TParent>;
    updatedAt?: VideoCallToUpdatedAtResolver<TParent>;
  }

  export interface VideoCallToProjectIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VideoCallToMemberIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VideoCallToSessionIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VideoCallToSessionNameResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VideoCallToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VideoCallToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VideoCallToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDeleteVideoCallPayloadTypeResolver<TParent = any> {
    videoCall?: DeleteVideoCallPayloadToVideoCallResolver<TParent>;
  }

  export interface DeleteVideoCallPayloadToVideoCallResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAddNotificationPayloadTypeResolver<TParent = any> {
    pushNotification?: AddNotificationPayloadToPushNotificationResolver<TParent>;
  }

  export interface AddNotificationPayloadToPushNotificationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPushNotificationTypeResolver<TParent = any> {
    message?: PushNotificationToMessageResolver<TParent>;
    memberId?: PushNotificationToMemberIdResolver<TParent>;
    id?: PushNotificationToIdResolver<TParent>;
    createdAt?: PushNotificationToCreatedAtResolver<TParent>;
    updatedAt?: PushNotificationToUpdatedAtResolver<TParent>;
  }

  export interface PushNotificationToMessageResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PushNotificationToMemberIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PushNotificationToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PushNotificationToCreatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PushNotificationToUpdatedAtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPublishMessagePayloadTypeResolver<TParent = any> {
    pushNotification?: PublishMessagePayloadToPushNotificationResolver<TParent>;
  }

  export interface PublishMessagePayloadToPushNotificationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPublishMsgPayloadTypeResolver<TParent = any> {
    pushNotification?: PublishMsgPayloadToPushNotificationResolver<TParent>;
  }

  export interface PublishMsgPayloadToPushNotificationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISubscriptionTypeResolver<TParent = any> {
    msgPublished?: SubscriptionToMsgPublishedResolver<TParent>;
    pushNotificationAdded?: SubscriptionToPushNotificationAddedResolver<TParent>;
    messagePublished?: SubscriptionToMessagePublishedResolver<TParent>;
  }

  export interface SubscriptionToMsgPublishedArgs {
    memberId: string;
  }
  export interface SubscriptionToMsgPublishedResolver<
    TParent = any,
    TResult = any
  > {
    resolve?: (
      parent: TParent,
      args: SubscriptionToMsgPublishedArgs,
      context: any,
      info: GraphQLResolveInfo
    ) => TResult;
    subscribe: (
      parent: TParent,
      args: SubscriptionToMsgPublishedArgs,
      context: any,
      info: GraphQLResolveInfo
    ) => AsyncIterator<TResult>;
  }

  export interface SubscriptionToPushNotificationAddedResolver<
    TParent = any,
    TResult = any
  > {
    resolve?: (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ) => TResult;
    subscribe: (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ) => AsyncIterator<TResult>;
  }

  export interface SubscriptionToMessagePublishedArgs {
    memberId: string;
  }
  export interface SubscriptionToMessagePublishedResolver<
    TParent = any,
    TResult = any
  > {
    resolve?: (
      parent: TParent,
      args: SubscriptionToMessagePublishedArgs,
      context: any,
      info: GraphQLResolveInfo
    ) => TResult;
    subscribe: (
      parent: TParent,
      args: SubscriptionToMessagePublishedArgs,
      context: any,
      info: GraphQLResolveInfo
    ) => AsyncIterator<TResult>;
  }
}
