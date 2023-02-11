/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Blog: { // root type
    body?: string | null; // String
    createdAt?: string | null; // String
    id?: string | null; // ID
    imgUrl?: string | null; // String
    intro?: string | null; // String
    slug?: string | null; // String
    tags?: string | null; // String
    title?: string | null; // String
    updatedAt?: string | null; // String
  }
  Message: { // root type
    message?: string | null; // String
  }
  Mutation: {};
  Project: { // root type
    createdAt?: string | null; // String
    id?: string | null; // ID
    imgUrl?: string | null; // String
    platforms?: string | null; // String
    rate?: number | null; // Int
    stack?: string | null; // String
    stars?: number | null; // Int
    title?: string | null; // String
    tools?: string | null; // String
    updatedAt?: string | null; // String
  }
  Query: {};
  Testimony: { // root type
    createdAt?: string | null; // String
    id?: string | null; // ID
    imgUrl?: string | null; // String
    link?: string | null; // String
    message?: string | null; // String
    updatedAt?: string | null; // String
    username?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Blog: { // field return type
    body: string | null; // String
    createdAt: string | null; // String
    id: string | null; // ID
    imgUrl: string | null; // String
    intro: string | null; // String
    slug: string | null; // String
    tags: string | null; // String
    title: string | null; // String
    updatedAt: string | null; // String
  }
  Message: { // field return type
    message: string | null; // String
  }
  Mutation: { // field return type
    addBlog: NexusGenRootTypes['Blog'] | null; // Blog
    addProject: NexusGenRootTypes['Project'] | null; // Project
    addTestimony: NexusGenRootTypes['Testimony'] | null; // Testimony
    deleteBlog: NexusGenRootTypes['Message'] | null; // Message
    deleteProject: NexusGenRootTypes['Message'] | null; // Message
    deleteTestimonial: NexusGenRootTypes['Message'] | null; // Message
    editBlog: NexusGenRootTypes['Message'] | null; // Message
    editProject: NexusGenRootTypes['Message'] | null; // Message
    editTestimonial: NexusGenRootTypes['Message'] | null; // Message
  }
  Project: { // field return type
    createdAt: string | null; // String
    id: string | null; // ID
    imgUrl: string | null; // String
    platforms: string | null; // String
    rate: number | null; // Int
    stack: string | null; // String
    stars: number | null; // Int
    title: string | null; // String
    tools: string | null; // String
    updatedAt: string | null; // String
  }
  Query: { // field return type
    getAllBlogs: Array<NexusGenRootTypes['Blog'] | null> | null; // [Blog]
    getBlog: NexusGenRootTypes['Blog'] | null; // Blog
    project: NexusGenRootTypes['Project'] | null; // Project
    projects: Array<NexusGenRootTypes['Project'] | null> | null; // [Project]
    testimonials: Array<NexusGenRootTypes['Testimony'] | null> | null; // [Testimony]
  }
  Testimony: { // field return type
    createdAt: string | null; // String
    id: string | null; // ID
    imgUrl: string | null; // String
    link: string | null; // String
    message: string | null; // String
    updatedAt: string | null; // String
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Blog: { // field return type name
    body: 'String'
    createdAt: 'String'
    id: 'ID'
    imgUrl: 'String'
    intro: 'String'
    slug: 'String'
    tags: 'String'
    title: 'String'
    updatedAt: 'String'
  }
  Message: { // field return type name
    message: 'String'
  }
  Mutation: { // field return type name
    addBlog: 'Blog'
    addProject: 'Project'
    addTestimony: 'Testimony'
    deleteBlog: 'Message'
    deleteProject: 'Message'
    deleteTestimonial: 'Message'
    editBlog: 'Message'
    editProject: 'Message'
    editTestimonial: 'Message'
  }
  Project: { // field return type name
    createdAt: 'String'
    id: 'ID'
    imgUrl: 'String'
    platforms: 'String'
    rate: 'Int'
    stack: 'String'
    stars: 'Int'
    title: 'String'
    tools: 'String'
    updatedAt: 'String'
  }
  Query: { // field return type name
    getAllBlogs: 'Blog'
    getBlog: 'Blog'
    project: 'Project'
    projects: 'Project'
    testimonials: 'Testimony'
  }
  Testimony: { // field return type name
    createdAt: 'String'
    id: 'ID'
    imgUrl: 'String'
    link: 'String'
    message: 'String'
    updatedAt: 'String'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addBlog: { // args
      body: string; // String!
      imgUrl: string; // String!
      intro: string; // String!
      tags: string; // String!
      title: string; // String!
    }
    addProject: { // args
      imgUrl: string; // String!
      platforms: string; // String!
      rate: number; // Int!
      stack: string; // String!
      stars: number; // Int!
      title: string; // String!
      tools: string; // String!
    }
    addTestimony: { // args
      email: string; // String!
      imgUrl: string; // String!
      link: string; // String!
      message: string; // String!
      username: string; // String!
    }
    deleteBlog: { // args
      id: string; // String!
    }
    deleteProject: { // args
      id: string; // String!
    }
    deleteTestimonial: { // args
      id: string; // String!
    }
    editBlog: { // args
      body?: string | null; // String
      id: string; // String!
      imgUrl?: string | null; // String
      intro?: string | null; // String
      tags?: string | null; // String
      title?: string | null; // String
    }
    editProject: { // args
      id: string; // String!
      imgUrl?: string | null; // String
      platforms?: string | null; // String
      rate?: number | null; // Int
      stack?: string | null; // String
      stars?: number | null; // Int
      title?: string | null; // String
      tools?: string | null; // String
    }
    editTestimonial: { // args
      id: string; // String!
      imgUrl?: string | null; // String
      link?: string | null; // String
      message?: string | null; // String
      username?: string | null; // String
    }
  }
  Query: {
    getBlog: { // args
      id: string; // String!
    }
    project: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}