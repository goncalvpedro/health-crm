
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model patients
 * 
 */
export type patients = $Result.DefaultSelection<Prisma.$patientsPayload>
/**
 * Model procedures
 * 
 */
export type procedures = $Result.DefaultSelection<Prisma.$proceduresPayload>
/**
 * Model appointments
 * 
 */
export type appointments = $Result.DefaultSelection<Prisma.$appointmentsPayload>
/**
 * Model medical_history
 * 
 */
export type medical_history = $Result.DefaultSelection<Prisma.$medical_historyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  NULL: 'NULL'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const ProcCategory: {
  NO_CATEGORY: 'NO_CATEGORY',
  ENDODONTIA: 'ENDODONTIA',
  ESTÉTICA: 'ESTÉTICA',
  DENTÍSTICA: 'DENTÍSTICA',
  CIRURGIA: 'CIRURGIA',
  PRÓTESE: 'PRÓTESE'
};

export type ProcCategory = (typeof ProcCategory)[keyof typeof ProcCategory]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type ProcCategory = $Enums.ProcCategory

export const ProcCategory: typeof $Enums.ProcCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patients`: Exposes CRUD operations for the **patients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patients.findMany()
    * ```
    */
  get patients(): Prisma.patientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procedures`: Exposes CRUD operations for the **procedures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procedures
    * const procedures = await prisma.procedures.findMany()
    * ```
    */
  get procedures(): Prisma.proceduresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointments`: Exposes CRUD operations for the **appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.appointmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medical_history`: Exposes CRUD operations for the **medical_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medical_histories
    * const medical_histories = await prisma.medical_history.findMany()
    * ```
    */
  get medical_history(): Prisma.medical_historyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    patients: 'patients',
    procedures: 'procedures',
    appointments: 'appointments',
    medical_history: 'medical_history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "patients" | "procedures" | "appointments" | "medical_history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      patients: {
        payload: Prisma.$patientsPayload<ExtArgs>
        fields: Prisma.patientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          findFirst: {
            args: Prisma.patientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          findMany: {
            args: Prisma.patientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          create: {
            args: Prisma.patientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          createMany: {
            args: Prisma.patientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          delete: {
            args: Prisma.patientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          update: {
            args: Prisma.patientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          deleteMany: {
            args: Prisma.patientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          upsert: {
            args: Prisma.patientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          aggregate: {
            args: Prisma.PatientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatients>
          }
          groupBy: {
            args: Prisma.patientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientsCountAggregateOutputType> | number
          }
        }
      }
      procedures: {
        payload: Prisma.$proceduresPayload<ExtArgs>
        fields: Prisma.proceduresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proceduresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proceduresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload>
          }
          findFirst: {
            args: Prisma.proceduresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proceduresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload>
          }
          findMany: {
            args: Prisma.proceduresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload>[]
          }
          create: {
            args: Prisma.proceduresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload>
          }
          createMany: {
            args: Prisma.proceduresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.proceduresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload>[]
          }
          delete: {
            args: Prisma.proceduresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload>
          }
          update: {
            args: Prisma.proceduresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload>
          }
          deleteMany: {
            args: Prisma.proceduresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proceduresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.proceduresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload>[]
          }
          upsert: {
            args: Prisma.proceduresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proceduresPayload>
          }
          aggregate: {
            args: Prisma.ProceduresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcedures>
          }
          groupBy: {
            args: Prisma.proceduresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProceduresGroupByOutputType>[]
          }
          count: {
            args: Prisma.proceduresCountArgs<ExtArgs>
            result: $Utils.Optional<ProceduresCountAggregateOutputType> | number
          }
        }
      }
      appointments: {
        payload: Prisma.$appointmentsPayload<ExtArgs>
        fields: Prisma.appointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          findFirst: {
            args: Prisma.appointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          findMany: {
            args: Prisma.appointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          create: {
            args: Prisma.appointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          createMany: {
            args: Prisma.appointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.appointmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          delete: {
            args: Prisma.appointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          update: {
            args: Prisma.appointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          deleteMany: {
            args: Prisma.appointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.appointmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          upsert: {
            args: Prisma.appointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.appointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.appointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
          }
        }
      }
      medical_history: {
        payload: Prisma.$medical_historyPayload<ExtArgs>
        fields: Prisma.medical_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medical_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medical_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload>
          }
          findFirst: {
            args: Prisma.medical_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medical_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload>
          }
          findMany: {
            args: Prisma.medical_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload>[]
          }
          create: {
            args: Prisma.medical_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload>
          }
          createMany: {
            args: Prisma.medical_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.medical_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload>[]
          }
          delete: {
            args: Prisma.medical_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload>
          }
          update: {
            args: Prisma.medical_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload>
          }
          deleteMany: {
            args: Prisma.medical_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medical_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.medical_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload>[]
          }
          upsert: {
            args: Prisma.medical_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medical_historyPayload>
          }
          aggregate: {
            args: Prisma.Medical_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedical_history>
          }
          groupBy: {
            args: Prisma.medical_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Medical_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.medical_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Medical_historyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    patients?: patientsOmit
    procedures?: proceduresOmit
    appointments?: appointmentsOmit
    medical_history?: medical_historyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PatientsCountOutputType
   */

  export type PatientsCountOutputType = {
    appointments: number
    medical_history: number
  }

  export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientsCountOutputTypeCountAppointmentsArgs
    medical_history?: boolean | PatientsCountOutputTypeCountMedical_historyArgs
  }

  // Custom InputTypes
  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientsCountOutputType
     */
    select?: PatientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountMedical_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medical_historyWhereInput
  }


  /**
   * Count Type ProceduresCountOutputType
   */

  export type ProceduresCountOutputType = {
    appointments: number
  }

  export type ProceduresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ProceduresCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ProceduresCountOutputType without action
   */
  export type ProceduresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProceduresCountOutputType
     */
    select?: ProceduresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProceduresCountOutputType without action
   */
  export type ProceduresCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    email: number
    role: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    email?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    passwordHash: string
    email: string
    role: $Enums.Role
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "email" | "role" | "createdAt", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      passwordHash: string
      email: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly passwordHash: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model patients
   */

  export type AggregatePatients = {
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  export type PatientsAvgAggregateOutputType = {
    id: number | null
  }

  export type PatientsSumAggregateOutputType = {
    id: number | null
  }

  export type PatientsMinAggregateOutputType = {
    id: number | null
    fname: string | null
    lname: string | null
    bday: Date | null
    phone: string | null
    email: string | null
    gender: $Enums.Gender | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientsMaxAggregateOutputType = {
    id: number | null
    fname: string | null
    lname: string | null
    bday: Date | null
    phone: string | null
    email: string | null
    gender: $Enums.Gender | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientsCountAggregateOutputType = {
    id: number
    fname: number
    lname: number
    bday: number
    phone: number
    email: number
    gender: number
    address: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientsAvgAggregateInputType = {
    id?: true
  }

  export type PatientsSumAggregateInputType = {
    id?: true
  }

  export type PatientsMinAggregateInputType = {
    id?: true
    fname?: true
    lname?: true
    bday?: true
    phone?: true
    email?: true
    gender?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientsMaxAggregateInputType = {
    id?: true
    fname?: true
    lname?: true
    bday?: true
    phone?: true
    email?: true
    gender?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientsCountAggregateInputType = {
    id?: true
    fname?: true
    lname?: true
    bday?: true
    phone?: true
    email?: true
    gender?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to aggregate.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patients
    **/
    _count?: true | PatientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientsMaxAggregateInputType
  }

  export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatients[P]>
      : GetScalarType<T[P], AggregatePatients[P]>
  }




  export type patientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientsWhereInput
    orderBy?: patientsOrderByWithAggregationInput | patientsOrderByWithAggregationInput[]
    by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
    having?: patientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientsCountAggregateInputType | true
    _avg?: PatientsAvgAggregateInputType
    _sum?: PatientsSumAggregateInputType
    _min?: PatientsMinAggregateInputType
    _max?: PatientsMaxAggregateInputType
  }

  export type PatientsGroupByOutputType = {
    id: number
    fname: string
    lname: string | null
    bday: Date
    phone: string
    email: string | null
    gender: $Enums.Gender
    address: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  type GetPatientsGroupByPayload<T extends patientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientsGroupByOutputType[P]>
            : GetScalarType<T[P], PatientsGroupByOutputType[P]>
        }
      >
    >


  export type patientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    lname?: boolean
    bday?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | patients$appointmentsArgs<ExtArgs>
    medical_history?: boolean | patients$medical_historyArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    lname?: boolean
    bday?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    lname?: boolean
    bday?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectScalar = {
    id?: boolean
    fname?: boolean
    lname?: boolean
    bday?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type patientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fname" | "lname" | "bday" | "phone" | "email" | "gender" | "address" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["patients"]>
  export type patientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | patients$appointmentsArgs<ExtArgs>
    medical_history?: boolean | patients$medical_historyArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type patientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type patientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $patientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patients"
    objects: {
      appointments: Prisma.$appointmentsPayload<ExtArgs>[]
      medical_history: Prisma.$medical_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fname: string
      lname: string | null
      bday: Date
      phone: string
      email: string | null
      gender: $Enums.Gender
      address: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patients"]>
    composites: {}
  }

  type patientsGetPayload<S extends boolean | null | undefined | patientsDefaultArgs> = $Result.GetResult<Prisma.$patientsPayload, S>

  type patientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientsCountAggregateInputType | true
    }

  export interface patientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patients'], meta: { name: 'patients' } }
    /**
     * Find zero or one Patients that matches the filter.
     * @param {patientsFindUniqueArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientsFindUniqueArgs>(args: SelectSubset<T, patientsFindUniqueArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientsFindUniqueOrThrowArgs>(args: SelectSubset<T, patientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindFirstArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientsFindFirstArgs>(args?: SelectSubset<T, patientsFindFirstArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindFirstOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientsFindFirstOrThrowArgs>(args?: SelectSubset<T, patientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patients.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientsWithIdOnly = await prisma.patients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends patientsFindManyArgs>(args?: SelectSubset<T, patientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patients.
     * @param {patientsCreateArgs} args - Arguments to create a Patients.
     * @example
     * // Create one Patients
     * const Patients = await prisma.patients.create({
     *   data: {
     *     // ... data to create a Patients
     *   }
     * })
     * 
     */
    create<T extends patientsCreateArgs>(args: SelectSubset<T, patientsCreateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {patientsCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patientsCreateManyArgs>(args?: SelectSubset<T, patientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {patientsCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientsWithIdOnly = await prisma.patients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patientsCreateManyAndReturnArgs>(args?: SelectSubset<T, patientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patients.
     * @param {patientsDeleteArgs} args - Arguments to delete one Patients.
     * @example
     * // Delete one Patients
     * const Patients = await prisma.patients.delete({
     *   where: {
     *     // ... filter to delete one Patients
     *   }
     * })
     * 
     */
    delete<T extends patientsDeleteArgs>(args: SelectSubset<T, patientsDeleteArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patients.
     * @param {patientsUpdateArgs} args - Arguments to update one Patients.
     * @example
     * // Update one Patients
     * const patients = await prisma.patients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patientsUpdateArgs>(args: SelectSubset<T, patientsUpdateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {patientsDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patientsDeleteManyArgs>(args?: SelectSubset<T, patientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patientsUpdateManyArgs>(args: SelectSubset<T, patientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {patientsUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientsWithIdOnly = await prisma.patients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends patientsUpdateManyAndReturnArgs>(args: SelectSubset<T, patientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patients.
     * @param {patientsUpsertArgs} args - Arguments to update or create a Patients.
     * @example
     * // Update or create a Patients
     * const patients = await prisma.patients.upsert({
     *   create: {
     *     // ... data to create a Patients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patients we want to update
     *   }
     * })
     */
    upsert<T extends patientsUpsertArgs>(args: SelectSubset<T, patientsUpsertArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patients.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientsCountArgs>(
      args?: Subset<T, patientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientsAggregateArgs>(args: Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>

    /**
     * Group by Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends patientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientsGroupByArgs['orderBy'] }
        : { orderBy?: patientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, patientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patients model
   */
  readonly fields: patientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends patients$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, patients$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medical_history<T extends patients$medical_historyArgs<ExtArgs> = {}>(args?: Subset<T, patients$medical_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the patients model
   */
  interface patientsFieldRefs {
    readonly id: FieldRef<"patients", 'Int'>
    readonly fname: FieldRef<"patients", 'String'>
    readonly lname: FieldRef<"patients", 'String'>
    readonly bday: FieldRef<"patients", 'DateTime'>
    readonly phone: FieldRef<"patients", 'String'>
    readonly email: FieldRef<"patients", 'String'>
    readonly gender: FieldRef<"patients", 'Gender'>
    readonly address: FieldRef<"patients", 'String'>
    readonly notes: FieldRef<"patients", 'String'>
    readonly createdAt: FieldRef<"patients", 'DateTime'>
    readonly updatedAt: FieldRef<"patients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * patients findUnique
   */
  export type patientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients findUniqueOrThrow
   */
  export type patientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients findFirst
   */
  export type patientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients findFirstOrThrow
   */
  export type patientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients findMany
   */
  export type patientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients create
   */
  export type patientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The data needed to create a patients.
     */
    data: XOR<patientsCreateInput, patientsUncheckedCreateInput>
  }

  /**
   * patients createMany
   */
  export type patientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientsCreateManyInput | patientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patients createManyAndReturn
   */
  export type patientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * The data used to create many patients.
     */
    data: patientsCreateManyInput | patientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patients update
   */
  export type patientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The data needed to update a patients.
     */
    data: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
    /**
     * Choose, which patients to update.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients updateMany
   */
  export type patientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patients updateManyAndReturn
   */
  export type patientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * The data used to update patients.
     */
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patients upsert
   */
  export type patientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The filter to search for the patients to update in case it exists.
     */
    where: patientsWhereUniqueInput
    /**
     * In case the patients found by the `where` argument doesn't exist, create a new patients with this data.
     */
    create: XOR<patientsCreateInput, patientsUncheckedCreateInput>
    /**
     * In case the patients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
  }

  /**
   * patients delete
   */
  export type patientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter which patients to delete.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients deleteMany
   */
  export type patientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to delete.
     */
    limit?: number
  }

  /**
   * patients.appointments
   */
  export type patients$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    cursor?: appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * patients.medical_history
   */
  export type patients$medical_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    where?: medical_historyWhereInput
    orderBy?: medical_historyOrderByWithRelationInput | medical_historyOrderByWithRelationInput[]
    cursor?: medical_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medical_historyScalarFieldEnum | Medical_historyScalarFieldEnum[]
  }

  /**
   * patients without action
   */
  export type patientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
  }


  /**
   * Model procedures
   */

  export type AggregateProcedures = {
    _count: ProceduresCountAggregateOutputType | null
    _avg: ProceduresAvgAggregateOutputType | null
    _sum: ProceduresSumAggregateOutputType | null
    _min: ProceduresMinAggregateOutputType | null
    _max: ProceduresMaxAggregateOutputType | null
  }

  export type ProceduresAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ProceduresSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ProceduresMinAggregateOutputType = {
    id: number | null
    procName: string | null
    category: $Enums.ProcCategory | null
    estDuration: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProceduresMaxAggregateOutputType = {
    id: number | null
    procName: string | null
    category: $Enums.ProcCategory | null
    estDuration: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProceduresCountAggregateOutputType = {
    id: number
    procName: number
    category: number
    estDuration: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProceduresAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProceduresSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProceduresMinAggregateInputType = {
    id?: true
    procName?: true
    category?: true
    estDuration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProceduresMaxAggregateInputType = {
    id?: true
    procName?: true
    category?: true
    estDuration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProceduresCountAggregateInputType = {
    id?: true
    procName?: true
    category?: true
    estDuration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProceduresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which procedures to aggregate.
     */
    where?: proceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procedures to fetch.
     */
    orderBy?: proceduresOrderByWithRelationInput | proceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned procedures
    **/
    _count?: true | ProceduresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProceduresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProceduresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProceduresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProceduresMaxAggregateInputType
  }

  export type GetProceduresAggregateType<T extends ProceduresAggregateArgs> = {
        [P in keyof T & keyof AggregateProcedures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcedures[P]>
      : GetScalarType<T[P], AggregateProcedures[P]>
  }




  export type proceduresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proceduresWhereInput
    orderBy?: proceduresOrderByWithAggregationInput | proceduresOrderByWithAggregationInput[]
    by: ProceduresScalarFieldEnum[] | ProceduresScalarFieldEnum
    having?: proceduresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProceduresCountAggregateInputType | true
    _avg?: ProceduresAvgAggregateInputType
    _sum?: ProceduresSumAggregateInputType
    _min?: ProceduresMinAggregateInputType
    _max?: ProceduresMaxAggregateInputType
  }

  export type ProceduresGroupByOutputType = {
    id: number
    procName: string
    category: $Enums.ProcCategory
    estDuration: string
    price: Decimal
    createdAt: Date
    updatedAt: Date
    _count: ProceduresCountAggregateOutputType | null
    _avg: ProceduresAvgAggregateOutputType | null
    _sum: ProceduresSumAggregateOutputType | null
    _min: ProceduresMinAggregateOutputType | null
    _max: ProceduresMaxAggregateOutputType | null
  }

  type GetProceduresGroupByPayload<T extends proceduresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProceduresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProceduresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProceduresGroupByOutputType[P]>
            : GetScalarType<T[P], ProceduresGroupByOutputType[P]>
        }
      >
    >


  export type proceduresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procName?: boolean
    category?: boolean
    estDuration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | procedures$appointmentsArgs<ExtArgs>
    _count?: boolean | ProceduresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedures"]>

  export type proceduresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procName?: boolean
    category?: boolean
    estDuration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["procedures"]>

  export type proceduresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procName?: boolean
    category?: boolean
    estDuration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["procedures"]>

  export type proceduresSelectScalar = {
    id?: boolean
    procName?: boolean
    category?: boolean
    estDuration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type proceduresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "procName" | "category" | "estDuration" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["procedures"]>
  export type proceduresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | procedures$appointmentsArgs<ExtArgs>
    _count?: boolean | ProceduresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type proceduresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type proceduresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $proceduresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "procedures"
    objects: {
      appointments: Prisma.$appointmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      procName: string
      category: $Enums.ProcCategory
      estDuration: string
      price: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["procedures"]>
    composites: {}
  }

  type proceduresGetPayload<S extends boolean | null | undefined | proceduresDefaultArgs> = $Result.GetResult<Prisma.$proceduresPayload, S>

  type proceduresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proceduresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProceduresCountAggregateInputType | true
    }

  export interface proceduresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['procedures'], meta: { name: 'procedures' } }
    /**
     * Find zero or one Procedures that matches the filter.
     * @param {proceduresFindUniqueArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proceduresFindUniqueArgs>(args: SelectSubset<T, proceduresFindUniqueArgs<ExtArgs>>): Prisma__proceduresClient<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Procedures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proceduresFindUniqueOrThrowArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proceduresFindUniqueOrThrowArgs>(args: SelectSubset<T, proceduresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proceduresClient<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proceduresFindFirstArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proceduresFindFirstArgs>(args?: SelectSubset<T, proceduresFindFirstArgs<ExtArgs>>): Prisma__proceduresClient<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proceduresFindFirstOrThrowArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proceduresFindFirstOrThrowArgs>(args?: SelectSubset<T, proceduresFindFirstOrThrowArgs<ExtArgs>>): Prisma__proceduresClient<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Procedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proceduresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Procedures
     * const procedures = await prisma.procedures.findMany()
     * 
     * // Get first 10 Procedures
     * const procedures = await prisma.procedures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proceduresWithIdOnly = await prisma.procedures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends proceduresFindManyArgs>(args?: SelectSubset<T, proceduresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Procedures.
     * @param {proceduresCreateArgs} args - Arguments to create a Procedures.
     * @example
     * // Create one Procedures
     * const Procedures = await prisma.procedures.create({
     *   data: {
     *     // ... data to create a Procedures
     *   }
     * })
     * 
     */
    create<T extends proceduresCreateArgs>(args: SelectSubset<T, proceduresCreateArgs<ExtArgs>>): Prisma__proceduresClient<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Procedures.
     * @param {proceduresCreateManyArgs} args - Arguments to create many Procedures.
     * @example
     * // Create many Procedures
     * const procedures = await prisma.procedures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proceduresCreateManyArgs>(args?: SelectSubset<T, proceduresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Procedures and returns the data saved in the database.
     * @param {proceduresCreateManyAndReturnArgs} args - Arguments to create many Procedures.
     * @example
     * // Create many Procedures
     * const procedures = await prisma.procedures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Procedures and only return the `id`
     * const proceduresWithIdOnly = await prisma.procedures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends proceduresCreateManyAndReturnArgs>(args?: SelectSubset<T, proceduresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Procedures.
     * @param {proceduresDeleteArgs} args - Arguments to delete one Procedures.
     * @example
     * // Delete one Procedures
     * const Procedures = await prisma.procedures.delete({
     *   where: {
     *     // ... filter to delete one Procedures
     *   }
     * })
     * 
     */
    delete<T extends proceduresDeleteArgs>(args: SelectSubset<T, proceduresDeleteArgs<ExtArgs>>): Prisma__proceduresClient<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Procedures.
     * @param {proceduresUpdateArgs} args - Arguments to update one Procedures.
     * @example
     * // Update one Procedures
     * const procedures = await prisma.procedures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proceduresUpdateArgs>(args: SelectSubset<T, proceduresUpdateArgs<ExtArgs>>): Prisma__proceduresClient<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Procedures.
     * @param {proceduresDeleteManyArgs} args - Arguments to filter Procedures to delete.
     * @example
     * // Delete a few Procedures
     * const { count } = await prisma.procedures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proceduresDeleteManyArgs>(args?: SelectSubset<T, proceduresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proceduresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Procedures
     * const procedures = await prisma.procedures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proceduresUpdateManyArgs>(args: SelectSubset<T, proceduresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedures and returns the data updated in the database.
     * @param {proceduresUpdateManyAndReturnArgs} args - Arguments to update many Procedures.
     * @example
     * // Update many Procedures
     * const procedures = await prisma.procedures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Procedures and only return the `id`
     * const proceduresWithIdOnly = await prisma.procedures.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends proceduresUpdateManyAndReturnArgs>(args: SelectSubset<T, proceduresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Procedures.
     * @param {proceduresUpsertArgs} args - Arguments to update or create a Procedures.
     * @example
     * // Update or create a Procedures
     * const procedures = await prisma.procedures.upsert({
     *   create: {
     *     // ... data to create a Procedures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Procedures we want to update
     *   }
     * })
     */
    upsert<T extends proceduresUpsertArgs>(args: SelectSubset<T, proceduresUpsertArgs<ExtArgs>>): Prisma__proceduresClient<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proceduresCountArgs} args - Arguments to filter Procedures to count.
     * @example
     * // Count the number of Procedures
     * const count = await prisma.procedures.count({
     *   where: {
     *     // ... the filter for the Procedures we want to count
     *   }
     * })
    **/
    count<T extends proceduresCountArgs>(
      args?: Subset<T, proceduresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProceduresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProceduresAggregateArgs>(args: Subset<T, ProceduresAggregateArgs>): Prisma.PrismaPromise<GetProceduresAggregateType<T>>

    /**
     * Group by Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proceduresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends proceduresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proceduresGroupByArgs['orderBy'] }
        : { orderBy?: proceduresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, proceduresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProceduresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the procedures model
   */
  readonly fields: proceduresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for procedures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proceduresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends procedures$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, procedures$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the procedures model
   */
  interface proceduresFieldRefs {
    readonly id: FieldRef<"procedures", 'Int'>
    readonly procName: FieldRef<"procedures", 'String'>
    readonly category: FieldRef<"procedures", 'ProcCategory'>
    readonly estDuration: FieldRef<"procedures", 'String'>
    readonly price: FieldRef<"procedures", 'Decimal'>
    readonly createdAt: FieldRef<"procedures", 'DateTime'>
    readonly updatedAt: FieldRef<"procedures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * procedures findUnique
   */
  export type proceduresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
    /**
     * Filter, which procedures to fetch.
     */
    where: proceduresWhereUniqueInput
  }

  /**
   * procedures findUniqueOrThrow
   */
  export type proceduresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
    /**
     * Filter, which procedures to fetch.
     */
    where: proceduresWhereUniqueInput
  }

  /**
   * procedures findFirst
   */
  export type proceduresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
    /**
     * Filter, which procedures to fetch.
     */
    where?: proceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procedures to fetch.
     */
    orderBy?: proceduresOrderByWithRelationInput | proceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for procedures.
     */
    cursor?: proceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of procedures.
     */
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }

  /**
   * procedures findFirstOrThrow
   */
  export type proceduresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
    /**
     * Filter, which procedures to fetch.
     */
    where?: proceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procedures to fetch.
     */
    orderBy?: proceduresOrderByWithRelationInput | proceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for procedures.
     */
    cursor?: proceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of procedures.
     */
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }

  /**
   * procedures findMany
   */
  export type proceduresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
    /**
     * Filter, which procedures to fetch.
     */
    where?: proceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procedures to fetch.
     */
    orderBy?: proceduresOrderByWithRelationInput | proceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing procedures.
     */
    cursor?: proceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procedures.
     */
    skip?: number
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }

  /**
   * procedures create
   */
  export type proceduresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
    /**
     * The data needed to create a procedures.
     */
    data: XOR<proceduresCreateInput, proceduresUncheckedCreateInput>
  }

  /**
   * procedures createMany
   */
  export type proceduresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many procedures.
     */
    data: proceduresCreateManyInput | proceduresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * procedures createManyAndReturn
   */
  export type proceduresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * The data used to create many procedures.
     */
    data: proceduresCreateManyInput | proceduresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * procedures update
   */
  export type proceduresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
    /**
     * The data needed to update a procedures.
     */
    data: XOR<proceduresUpdateInput, proceduresUncheckedUpdateInput>
    /**
     * Choose, which procedures to update.
     */
    where: proceduresWhereUniqueInput
  }

  /**
   * procedures updateMany
   */
  export type proceduresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update procedures.
     */
    data: XOR<proceduresUpdateManyMutationInput, proceduresUncheckedUpdateManyInput>
    /**
     * Filter which procedures to update
     */
    where?: proceduresWhereInput
    /**
     * Limit how many procedures to update.
     */
    limit?: number
  }

  /**
   * procedures updateManyAndReturn
   */
  export type proceduresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * The data used to update procedures.
     */
    data: XOR<proceduresUpdateManyMutationInput, proceduresUncheckedUpdateManyInput>
    /**
     * Filter which procedures to update
     */
    where?: proceduresWhereInput
    /**
     * Limit how many procedures to update.
     */
    limit?: number
  }

  /**
   * procedures upsert
   */
  export type proceduresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
    /**
     * The filter to search for the procedures to update in case it exists.
     */
    where: proceduresWhereUniqueInput
    /**
     * In case the procedures found by the `where` argument doesn't exist, create a new procedures with this data.
     */
    create: XOR<proceduresCreateInput, proceduresUncheckedCreateInput>
    /**
     * In case the procedures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proceduresUpdateInput, proceduresUncheckedUpdateInput>
  }

  /**
   * procedures delete
   */
  export type proceduresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
    /**
     * Filter which procedures to delete.
     */
    where: proceduresWhereUniqueInput
  }

  /**
   * procedures deleteMany
   */
  export type proceduresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which procedures to delete
     */
    where?: proceduresWhereInput
    /**
     * Limit how many procedures to delete.
     */
    limit?: number
  }

  /**
   * procedures.appointments
   */
  export type procedures$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    cursor?: appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * procedures without action
   */
  export type proceduresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procedures
     */
    select?: proceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procedures
     */
    omit?: proceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proceduresInclude<ExtArgs> | null
  }


  /**
   * Model appointments
   */

  export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  export type AppointmentsAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    procId: number | null
  }

  export type AppointmentsSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    procId: number | null
  }

  export type AppointmentsMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    procId: number | null
    apDate: Date | null
    createdAt: Date | null
  }

  export type AppointmentsMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    procId: number | null
    apDate: Date | null
    createdAt: Date | null
  }

  export type AppointmentsCountAggregateOutputType = {
    id: number
    patientId: number
    procId: number
    apDate: number
    createdAt: number
    _all: number
  }


  export type AppointmentsAvgAggregateInputType = {
    id?: true
    patientId?: true
    procId?: true
  }

  export type AppointmentsSumAggregateInputType = {
    id?: true
    patientId?: true
    procId?: true
  }

  export type AppointmentsMinAggregateInputType = {
    id?: true
    patientId?: true
    procId?: true
    apDate?: true
    createdAt?: true
  }

  export type AppointmentsMaxAggregateInputType = {
    id?: true
    patientId?: true
    procId?: true
    apDate?: true
    createdAt?: true
  }

  export type AppointmentsCountAggregateInputType = {
    id?: true
    patientId?: true
    procId?: true
    apDate?: true
    createdAt?: true
    _all?: true
  }

  export type AppointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to aggregate.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appointments
    **/
    _count?: true | AppointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentsMaxAggregateInputType
  }

  export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointments[P]>
      : GetScalarType<T[P], AggregateAppointments[P]>
  }




  export type appointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithAggregationInput | appointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: appointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentsCountAggregateInputType | true
    _avg?: AppointmentsAvgAggregateInputType
    _sum?: AppointmentsSumAggregateInputType
    _min?: AppointmentsMinAggregateInputType
    _max?: AppointmentsMaxAggregateInputType
  }

  export type AppointmentsGroupByOutputType = {
    id: number
    patientId: number
    procId: number
    apDate: Date
    createdAt: Date
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  type GetAppointmentsGroupByPayload<T extends appointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
        }
      >
    >


  export type appointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    procId?: boolean
    apDate?: boolean
    createdAt?: boolean
    patient?: boolean | patientsDefaultArgs<ExtArgs>
    procedure?: boolean | proceduresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type appointmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    procId?: boolean
    apDate?: boolean
    createdAt?: boolean
    patient?: boolean | patientsDefaultArgs<ExtArgs>
    procedure?: boolean | proceduresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type appointmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    procId?: boolean
    apDate?: boolean
    createdAt?: boolean
    patient?: boolean | patientsDefaultArgs<ExtArgs>
    procedure?: boolean | proceduresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type appointmentsSelectScalar = {
    id?: boolean
    patientId?: boolean
    procId?: boolean
    apDate?: boolean
    createdAt?: boolean
  }

  export type appointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "procId" | "apDate" | "createdAt", ExtArgs["result"]["appointments"]>
  export type appointmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientsDefaultArgs<ExtArgs>
    procedure?: boolean | proceduresDefaultArgs<ExtArgs>
  }
  export type appointmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientsDefaultArgs<ExtArgs>
    procedure?: boolean | proceduresDefaultArgs<ExtArgs>
  }
  export type appointmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientsDefaultArgs<ExtArgs>
    procedure?: boolean | proceduresDefaultArgs<ExtArgs>
  }

  export type $appointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appointments"
    objects: {
      patient: Prisma.$patientsPayload<ExtArgs>
      procedure: Prisma.$proceduresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      procId: number
      apDate: Date
      createdAt: Date
    }, ExtArgs["result"]["appointments"]>
    composites: {}
  }

  type appointmentsGetPayload<S extends boolean | null | undefined | appointmentsDefaultArgs> = $Result.GetResult<Prisma.$appointmentsPayload, S>

  type appointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface appointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointments'], meta: { name: 'appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {appointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appointmentsFindUniqueArgs>(args: SelectSubset<T, appointmentsFindUniqueArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, appointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appointmentsFindFirstArgs>(args?: SelectSubset<T, appointmentsFindFirstArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, appointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointments.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends appointmentsFindManyArgs>(args?: SelectSubset<T, appointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointments.
     * @param {appointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends appointmentsCreateArgs>(args: SelectSubset<T, appointmentsCreateArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {appointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appointmentsCreateManyArgs>(args?: SelectSubset<T, appointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {appointmentsCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends appointmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, appointmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointments.
     * @param {appointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends appointmentsDeleteArgs>(args: SelectSubset<T, appointmentsDeleteArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointments.
     * @param {appointmentsUpdateArgs} args - Arguments to update one Appointments.
     * @example
     * // Update one Appointments
     * const appointments = await prisma.appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appointmentsUpdateArgs>(args: SelectSubset<T, appointmentsUpdateArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {appointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appointmentsDeleteManyArgs>(args?: SelectSubset<T, appointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appointmentsUpdateManyArgs>(args: SelectSubset<T, appointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {appointmentsUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends appointmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, appointmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointments.
     * @param {appointmentsUpsertArgs} args - Arguments to update or create a Appointments.
     * @example
     * // Update or create a Appointments
     * const appointments = await prisma.appointments.upsert({
     *   create: {
     *     // ... data to create a Appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointments we want to update
     *   }
     * })
     */
    upsert<T extends appointmentsUpsertArgs>(args: SelectSubset<T, appointmentsUpsertArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends appointmentsCountArgs>(
      args?: Subset<T, appointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentsAggregateArgs>(args: Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>

    /**
     * Group by Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends appointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentsGroupByArgs['orderBy'] }
        : { orderBy?: appointmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, appointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appointments model
   */
  readonly fields: appointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends patientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientsDefaultArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    procedure<T extends proceduresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proceduresDefaultArgs<ExtArgs>>): Prisma__proceduresClient<$Result.GetResult<Prisma.$proceduresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the appointments model
   */
  interface appointmentsFieldRefs {
    readonly id: FieldRef<"appointments", 'Int'>
    readonly patientId: FieldRef<"appointments", 'Int'>
    readonly procId: FieldRef<"appointments", 'Int'>
    readonly apDate: FieldRef<"appointments", 'DateTime'>
    readonly createdAt: FieldRef<"appointments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * appointments findUnique
   */
  export type appointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments findUniqueOrThrow
   */
  export type appointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments findFirst
   */
  export type appointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments findFirstOrThrow
   */
  export type appointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments findMany
   */
  export type appointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments create
   */
  export type appointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a appointments.
     */
    data: XOR<appointmentsCreateInput, appointmentsUncheckedCreateInput>
  }

  /**
   * appointments createMany
   */
  export type appointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentsCreateManyInput | appointmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appointments createManyAndReturn
   */
  export type appointmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * The data used to create many appointments.
     */
    data: appointmentsCreateManyInput | appointmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointments update
   */
  export type appointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a appointments.
     */
    data: XOR<appointmentsUpdateInput, appointmentsUncheckedUpdateInput>
    /**
     * Choose, which appointments to update.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments updateMany
   */
  export type appointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentsWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
  }

  /**
   * appointments updateManyAndReturn
   */
  export type appointmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentsWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointments upsert
   */
  export type appointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the appointments to update in case it exists.
     */
    where: appointmentsWhereUniqueInput
    /**
     * In case the appointments found by the `where` argument doesn't exist, create a new appointments with this data.
     */
    create: XOR<appointmentsCreateInput, appointmentsUncheckedCreateInput>
    /**
     * In case the appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentsUpdateInput, appointmentsUncheckedUpdateInput>
  }

  /**
   * appointments delete
   */
  export type appointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter which appointments to delete.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments deleteMany
   */
  export type appointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentsWhereInput
    /**
     * Limit how many appointments to delete.
     */
    limit?: number
  }

  /**
   * appointments without action
   */
  export type appointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
  }


  /**
   * Model medical_history
   */

  export type AggregateMedical_history = {
    _count: Medical_historyCountAggregateOutputType | null
    _avg: Medical_historyAvgAggregateOutputType | null
    _sum: Medical_historySumAggregateOutputType | null
    _min: Medical_historyMinAggregateOutputType | null
    _max: Medical_historyMaxAggregateOutputType | null
  }

  export type Medical_historyAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type Medical_historySumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type Medical_historyMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type Medical_historyMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type Medical_historyCountAggregateOutputType = {
    id: number
    patientId: number
    description: number
    createdAt: number
    _all: number
  }


  export type Medical_historyAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type Medical_historySumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type Medical_historyMinAggregateInputType = {
    id?: true
    patientId?: true
    description?: true
    createdAt?: true
  }

  export type Medical_historyMaxAggregateInputType = {
    id?: true
    patientId?: true
    description?: true
    createdAt?: true
  }

  export type Medical_historyCountAggregateInputType = {
    id?: true
    patientId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type Medical_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_history to aggregate.
     */
    where?: medical_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medical_histories to fetch.
     */
    orderBy?: medical_historyOrderByWithRelationInput | medical_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medical_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medical_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medical_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medical_histories
    **/
    _count?: true | Medical_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Medical_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Medical_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Medical_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Medical_historyMaxAggregateInputType
  }

  export type GetMedical_historyAggregateType<T extends Medical_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateMedical_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedical_history[P]>
      : GetScalarType<T[P], AggregateMedical_history[P]>
  }




  export type medical_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medical_historyWhereInput
    orderBy?: medical_historyOrderByWithAggregationInput | medical_historyOrderByWithAggregationInput[]
    by: Medical_historyScalarFieldEnum[] | Medical_historyScalarFieldEnum
    having?: medical_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Medical_historyCountAggregateInputType | true
    _avg?: Medical_historyAvgAggregateInputType
    _sum?: Medical_historySumAggregateInputType
    _min?: Medical_historyMinAggregateInputType
    _max?: Medical_historyMaxAggregateInputType
  }

  export type Medical_historyGroupByOutputType = {
    id: number
    patientId: number
    description: string | null
    createdAt: Date
    _count: Medical_historyCountAggregateOutputType | null
    _avg: Medical_historyAvgAggregateOutputType | null
    _sum: Medical_historySumAggregateOutputType | null
    _min: Medical_historyMinAggregateOutputType | null
    _max: Medical_historyMaxAggregateOutputType | null
  }

  type GetMedical_historyGroupByPayload<T extends medical_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medical_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Medical_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Medical_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Medical_historyGroupByOutputType[P]>
        }
      >
    >


  export type medical_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    description?: boolean
    createdAt?: boolean
    patient?: boolean | patientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medical_history"]>

  export type medical_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    description?: boolean
    createdAt?: boolean
    patient?: boolean | patientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medical_history"]>

  export type medical_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    description?: boolean
    createdAt?: boolean
    patient?: boolean | patientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medical_history"]>

  export type medical_historySelectScalar = {
    id?: boolean
    patientId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type medical_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "description" | "createdAt", ExtArgs["result"]["medical_history"]>
  export type medical_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientsDefaultArgs<ExtArgs>
  }
  export type medical_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientsDefaultArgs<ExtArgs>
  }
  export type medical_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientsDefaultArgs<ExtArgs>
  }

  export type $medical_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medical_history"
    objects: {
      patient: Prisma.$patientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["medical_history"]>
    composites: {}
  }

  type medical_historyGetPayload<S extends boolean | null | undefined | medical_historyDefaultArgs> = $Result.GetResult<Prisma.$medical_historyPayload, S>

  type medical_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<medical_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Medical_historyCountAggregateInputType | true
    }

  export interface medical_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medical_history'], meta: { name: 'medical_history' } }
    /**
     * Find zero or one Medical_history that matches the filter.
     * @param {medical_historyFindUniqueArgs} args - Arguments to find a Medical_history
     * @example
     * // Get one Medical_history
     * const medical_history = await prisma.medical_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medical_historyFindUniqueArgs>(args: SelectSubset<T, medical_historyFindUniqueArgs<ExtArgs>>): Prisma__medical_historyClient<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medical_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {medical_historyFindUniqueOrThrowArgs} args - Arguments to find a Medical_history
     * @example
     * // Get one Medical_history
     * const medical_history = await prisma.medical_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medical_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, medical_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medical_historyClient<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medical_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_historyFindFirstArgs} args - Arguments to find a Medical_history
     * @example
     * // Get one Medical_history
     * const medical_history = await prisma.medical_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medical_historyFindFirstArgs>(args?: SelectSubset<T, medical_historyFindFirstArgs<ExtArgs>>): Prisma__medical_historyClient<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medical_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_historyFindFirstOrThrowArgs} args - Arguments to find a Medical_history
     * @example
     * // Get one Medical_history
     * const medical_history = await prisma.medical_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medical_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, medical_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__medical_historyClient<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medical_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medical_histories
     * const medical_histories = await prisma.medical_history.findMany()
     * 
     * // Get first 10 Medical_histories
     * const medical_histories = await prisma.medical_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medical_historyWithIdOnly = await prisma.medical_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends medical_historyFindManyArgs>(args?: SelectSubset<T, medical_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medical_history.
     * @param {medical_historyCreateArgs} args - Arguments to create a Medical_history.
     * @example
     * // Create one Medical_history
     * const Medical_history = await prisma.medical_history.create({
     *   data: {
     *     // ... data to create a Medical_history
     *   }
     * })
     * 
     */
    create<T extends medical_historyCreateArgs>(args: SelectSubset<T, medical_historyCreateArgs<ExtArgs>>): Prisma__medical_historyClient<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medical_histories.
     * @param {medical_historyCreateManyArgs} args - Arguments to create many Medical_histories.
     * @example
     * // Create many Medical_histories
     * const medical_history = await prisma.medical_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medical_historyCreateManyArgs>(args?: SelectSubset<T, medical_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medical_histories and returns the data saved in the database.
     * @param {medical_historyCreateManyAndReturnArgs} args - Arguments to create many Medical_histories.
     * @example
     * // Create many Medical_histories
     * const medical_history = await prisma.medical_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medical_histories and only return the `id`
     * const medical_historyWithIdOnly = await prisma.medical_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends medical_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, medical_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medical_history.
     * @param {medical_historyDeleteArgs} args - Arguments to delete one Medical_history.
     * @example
     * // Delete one Medical_history
     * const Medical_history = await prisma.medical_history.delete({
     *   where: {
     *     // ... filter to delete one Medical_history
     *   }
     * })
     * 
     */
    delete<T extends medical_historyDeleteArgs>(args: SelectSubset<T, medical_historyDeleteArgs<ExtArgs>>): Prisma__medical_historyClient<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medical_history.
     * @param {medical_historyUpdateArgs} args - Arguments to update one Medical_history.
     * @example
     * // Update one Medical_history
     * const medical_history = await prisma.medical_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medical_historyUpdateArgs>(args: SelectSubset<T, medical_historyUpdateArgs<ExtArgs>>): Prisma__medical_historyClient<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medical_histories.
     * @param {medical_historyDeleteManyArgs} args - Arguments to filter Medical_histories to delete.
     * @example
     * // Delete a few Medical_histories
     * const { count } = await prisma.medical_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medical_historyDeleteManyArgs>(args?: SelectSubset<T, medical_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medical_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medical_histories
     * const medical_history = await prisma.medical_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medical_historyUpdateManyArgs>(args: SelectSubset<T, medical_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medical_histories and returns the data updated in the database.
     * @param {medical_historyUpdateManyAndReturnArgs} args - Arguments to update many Medical_histories.
     * @example
     * // Update many Medical_histories
     * const medical_history = await prisma.medical_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medical_histories and only return the `id`
     * const medical_historyWithIdOnly = await prisma.medical_history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends medical_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, medical_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medical_history.
     * @param {medical_historyUpsertArgs} args - Arguments to update or create a Medical_history.
     * @example
     * // Update or create a Medical_history
     * const medical_history = await prisma.medical_history.upsert({
     *   create: {
     *     // ... data to create a Medical_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medical_history we want to update
     *   }
     * })
     */
    upsert<T extends medical_historyUpsertArgs>(args: SelectSubset<T, medical_historyUpsertArgs<ExtArgs>>): Prisma__medical_historyClient<$Result.GetResult<Prisma.$medical_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medical_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_historyCountArgs} args - Arguments to filter Medical_histories to count.
     * @example
     * // Count the number of Medical_histories
     * const count = await prisma.medical_history.count({
     *   where: {
     *     // ... the filter for the Medical_histories we want to count
     *   }
     * })
    **/
    count<T extends medical_historyCountArgs>(
      args?: Subset<T, medical_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medical_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medical_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medical_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Medical_historyAggregateArgs>(args: Subset<T, Medical_historyAggregateArgs>): Prisma.PrismaPromise<GetMedical_historyAggregateType<T>>

    /**
     * Group by Medical_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends medical_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medical_historyGroupByArgs['orderBy'] }
        : { orderBy?: medical_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, medical_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedical_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medical_history model
   */
  readonly fields: medical_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medical_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medical_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends patientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientsDefaultArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the medical_history model
   */
  interface medical_historyFieldRefs {
    readonly id: FieldRef<"medical_history", 'Int'>
    readonly patientId: FieldRef<"medical_history", 'Int'>
    readonly description: FieldRef<"medical_history", 'String'>
    readonly createdAt: FieldRef<"medical_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * medical_history findUnique
   */
  export type medical_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    /**
     * Filter, which medical_history to fetch.
     */
    where: medical_historyWhereUniqueInput
  }

  /**
   * medical_history findUniqueOrThrow
   */
  export type medical_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    /**
     * Filter, which medical_history to fetch.
     */
    where: medical_historyWhereUniqueInput
  }

  /**
   * medical_history findFirst
   */
  export type medical_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    /**
     * Filter, which medical_history to fetch.
     */
    where?: medical_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medical_histories to fetch.
     */
    orderBy?: medical_historyOrderByWithRelationInput | medical_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medical_histories.
     */
    cursor?: medical_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medical_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medical_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medical_histories.
     */
    distinct?: Medical_historyScalarFieldEnum | Medical_historyScalarFieldEnum[]
  }

  /**
   * medical_history findFirstOrThrow
   */
  export type medical_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    /**
     * Filter, which medical_history to fetch.
     */
    where?: medical_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medical_histories to fetch.
     */
    orderBy?: medical_historyOrderByWithRelationInput | medical_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medical_histories.
     */
    cursor?: medical_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medical_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medical_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medical_histories.
     */
    distinct?: Medical_historyScalarFieldEnum | Medical_historyScalarFieldEnum[]
  }

  /**
   * medical_history findMany
   */
  export type medical_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    /**
     * Filter, which medical_histories to fetch.
     */
    where?: medical_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medical_histories to fetch.
     */
    orderBy?: medical_historyOrderByWithRelationInput | medical_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medical_histories.
     */
    cursor?: medical_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medical_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medical_histories.
     */
    skip?: number
    distinct?: Medical_historyScalarFieldEnum | Medical_historyScalarFieldEnum[]
  }

  /**
   * medical_history create
   */
  export type medical_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a medical_history.
     */
    data: XOR<medical_historyCreateInput, medical_historyUncheckedCreateInput>
  }

  /**
   * medical_history createMany
   */
  export type medical_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medical_histories.
     */
    data: medical_historyCreateManyInput | medical_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medical_history createManyAndReturn
   */
  export type medical_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * The data used to create many medical_histories.
     */
    data: medical_historyCreateManyInput | medical_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * medical_history update
   */
  export type medical_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a medical_history.
     */
    data: XOR<medical_historyUpdateInput, medical_historyUncheckedUpdateInput>
    /**
     * Choose, which medical_history to update.
     */
    where: medical_historyWhereUniqueInput
  }

  /**
   * medical_history updateMany
   */
  export type medical_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medical_histories.
     */
    data: XOR<medical_historyUpdateManyMutationInput, medical_historyUncheckedUpdateManyInput>
    /**
     * Filter which medical_histories to update
     */
    where?: medical_historyWhereInput
    /**
     * Limit how many medical_histories to update.
     */
    limit?: number
  }

  /**
   * medical_history updateManyAndReturn
   */
  export type medical_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * The data used to update medical_histories.
     */
    data: XOR<medical_historyUpdateManyMutationInput, medical_historyUncheckedUpdateManyInput>
    /**
     * Filter which medical_histories to update
     */
    where?: medical_historyWhereInput
    /**
     * Limit how many medical_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * medical_history upsert
   */
  export type medical_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the medical_history to update in case it exists.
     */
    where: medical_historyWhereUniqueInput
    /**
     * In case the medical_history found by the `where` argument doesn't exist, create a new medical_history with this data.
     */
    create: XOR<medical_historyCreateInput, medical_historyUncheckedCreateInput>
    /**
     * In case the medical_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medical_historyUpdateInput, medical_historyUncheckedUpdateInput>
  }

  /**
   * medical_history delete
   */
  export type medical_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
    /**
     * Filter which medical_history to delete.
     */
    where: medical_historyWhereUniqueInput
  }

  /**
   * medical_history deleteMany
   */
  export type medical_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_histories to delete
     */
    where?: medical_historyWhereInput
    /**
     * Limit how many medical_histories to delete.
     */
    limit?: number
  }

  /**
   * medical_history without action
   */
  export type medical_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_history
     */
    select?: medical_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the medical_history
     */
    omit?: medical_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medical_historyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PatientsScalarFieldEnum: {
    id: 'id',
    fname: 'fname',
    lname: 'lname',
    bday: 'bday',
    phone: 'phone',
    email: 'email',
    gender: 'gender',
    address: 'address',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum]


  export const ProceduresScalarFieldEnum: {
    id: 'id',
    procName: 'procName',
    category: 'category',
    estDuration: 'estDuration',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProceduresScalarFieldEnum = (typeof ProceduresScalarFieldEnum)[keyof typeof ProceduresScalarFieldEnum]


  export const AppointmentsScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    procId: 'procId',
    apDate: 'apDate',
    createdAt: 'createdAt'
  };

  export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum]


  export const Medical_historyScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type Medical_historyScalarFieldEnum = (typeof Medical_historyScalarFieldEnum)[keyof typeof Medical_historyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'ProcCategory'
   */
  export type EnumProcCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcCategory'>
    


  /**
   * Reference to a field of type 'ProcCategory[]'
   */
  export type ListEnumProcCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcCategory[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    passwordHash?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    createdAt?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    passwordHash?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    createdAt?: DateTimeFilter<"users"> | Date | string
  }, "id" | "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    passwordHash?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type patientsWhereInput = {
    AND?: patientsWhereInput | patientsWhereInput[]
    OR?: patientsWhereInput[]
    NOT?: patientsWhereInput | patientsWhereInput[]
    id?: IntFilter<"patients"> | number
    fname?: StringFilter<"patients"> | string
    lname?: StringNullableFilter<"patients"> | string | null
    bday?: DateTimeFilter<"patients"> | Date | string
    phone?: StringFilter<"patients"> | string
    email?: StringNullableFilter<"patients"> | string | null
    gender?: EnumGenderFilter<"patients"> | $Enums.Gender
    address?: StringNullableFilter<"patients"> | string | null
    notes?: StringNullableFilter<"patients"> | string | null
    createdAt?: DateTimeFilter<"patients"> | Date | string
    updatedAt?: DateTimeFilter<"patients"> | Date | string
    appointments?: AppointmentsListRelationFilter
    medical_history?: Medical_historyListRelationFilter
  }

  export type patientsOrderByWithRelationInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrderInput | SortOrder
    bday?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: appointmentsOrderByRelationAggregateInput
    medical_history?: medical_historyOrderByRelationAggregateInput
  }

  export type patientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    email?: string
    AND?: patientsWhereInput | patientsWhereInput[]
    OR?: patientsWhereInput[]
    NOT?: patientsWhereInput | patientsWhereInput[]
    fname?: StringFilter<"patients"> | string
    lname?: StringNullableFilter<"patients"> | string | null
    bday?: DateTimeFilter<"patients"> | Date | string
    gender?: EnumGenderFilter<"patients"> | $Enums.Gender
    address?: StringNullableFilter<"patients"> | string | null
    notes?: StringNullableFilter<"patients"> | string | null
    createdAt?: DateTimeFilter<"patients"> | Date | string
    updatedAt?: DateTimeFilter<"patients"> | Date | string
    appointments?: AppointmentsListRelationFilter
    medical_history?: Medical_historyListRelationFilter
  }, "id" | "id" | "phone" | "email">

  export type patientsOrderByWithAggregationInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrderInput | SortOrder
    bday?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: patientsCountOrderByAggregateInput
    _avg?: patientsAvgOrderByAggregateInput
    _max?: patientsMaxOrderByAggregateInput
    _min?: patientsMinOrderByAggregateInput
    _sum?: patientsSumOrderByAggregateInput
  }

  export type patientsScalarWhereWithAggregatesInput = {
    AND?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
    OR?: patientsScalarWhereWithAggregatesInput[]
    NOT?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"patients"> | number
    fname?: StringWithAggregatesFilter<"patients"> | string
    lname?: StringNullableWithAggregatesFilter<"patients"> | string | null
    bday?: DateTimeWithAggregatesFilter<"patients"> | Date | string
    phone?: StringWithAggregatesFilter<"patients"> | string
    email?: StringNullableWithAggregatesFilter<"patients"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"patients"> | $Enums.Gender
    address?: StringNullableWithAggregatesFilter<"patients"> | string | null
    notes?: StringNullableWithAggregatesFilter<"patients"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"patients"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"patients"> | Date | string
  }

  export type proceduresWhereInput = {
    AND?: proceduresWhereInput | proceduresWhereInput[]
    OR?: proceduresWhereInput[]
    NOT?: proceduresWhereInput | proceduresWhereInput[]
    id?: IntFilter<"procedures"> | number
    procName?: StringFilter<"procedures"> | string
    category?: EnumProcCategoryFilter<"procedures"> | $Enums.ProcCategory
    estDuration?: StringFilter<"procedures"> | string
    price?: DecimalFilter<"procedures"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"procedures"> | Date | string
    updatedAt?: DateTimeFilter<"procedures"> | Date | string
    appointments?: AppointmentsListRelationFilter
  }

  export type proceduresOrderByWithRelationInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: appointmentsOrderByRelationAggregateInput
  }

  export type proceduresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: proceduresWhereInput | proceduresWhereInput[]
    OR?: proceduresWhereInput[]
    NOT?: proceduresWhereInput | proceduresWhereInput[]
    procName?: StringFilter<"procedures"> | string
    category?: EnumProcCategoryFilter<"procedures"> | $Enums.ProcCategory
    estDuration?: StringFilter<"procedures"> | string
    price?: DecimalFilter<"procedures"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"procedures"> | Date | string
    updatedAt?: DateTimeFilter<"procedures"> | Date | string
    appointments?: AppointmentsListRelationFilter
  }, "id" | "id">

  export type proceduresOrderByWithAggregationInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: proceduresCountOrderByAggregateInput
    _avg?: proceduresAvgOrderByAggregateInput
    _max?: proceduresMaxOrderByAggregateInput
    _min?: proceduresMinOrderByAggregateInput
    _sum?: proceduresSumOrderByAggregateInput
  }

  export type proceduresScalarWhereWithAggregatesInput = {
    AND?: proceduresScalarWhereWithAggregatesInput | proceduresScalarWhereWithAggregatesInput[]
    OR?: proceduresScalarWhereWithAggregatesInput[]
    NOT?: proceduresScalarWhereWithAggregatesInput | proceduresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"procedures"> | number
    procName?: StringWithAggregatesFilter<"procedures"> | string
    category?: EnumProcCategoryWithAggregatesFilter<"procedures"> | $Enums.ProcCategory
    estDuration?: StringWithAggregatesFilter<"procedures"> | string
    price?: DecimalWithAggregatesFilter<"procedures"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"procedures"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"procedures"> | Date | string
  }

  export type appointmentsWhereInput = {
    AND?: appointmentsWhereInput | appointmentsWhereInput[]
    OR?: appointmentsWhereInput[]
    NOT?: appointmentsWhereInput | appointmentsWhereInput[]
    id?: IntFilter<"appointments"> | number
    patientId?: IntFilter<"appointments"> | number
    procId?: IntFilter<"appointments"> | number
    apDate?: DateTimeFilter<"appointments"> | Date | string
    createdAt?: DateTimeFilter<"appointments"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
    procedure?: XOR<ProceduresScalarRelationFilter, proceduresWhereInput>
  }

  export type appointmentsOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
    patient?: patientsOrderByWithRelationInput
    procedure?: proceduresOrderByWithRelationInput
  }

  export type appointmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: appointmentsWhereInput | appointmentsWhereInput[]
    OR?: appointmentsWhereInput[]
    NOT?: appointmentsWhereInput | appointmentsWhereInput[]
    patientId?: IntFilter<"appointments"> | number
    procId?: IntFilter<"appointments"> | number
    apDate?: DateTimeFilter<"appointments"> | Date | string
    createdAt?: DateTimeFilter<"appointments"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
    procedure?: XOR<ProceduresScalarRelationFilter, proceduresWhereInput>
  }, "id" | "id">

  export type appointmentsOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
    _count?: appointmentsCountOrderByAggregateInput
    _avg?: appointmentsAvgOrderByAggregateInput
    _max?: appointmentsMaxOrderByAggregateInput
    _min?: appointmentsMinOrderByAggregateInput
    _sum?: appointmentsSumOrderByAggregateInput
  }

  export type appointmentsScalarWhereWithAggregatesInput = {
    AND?: appointmentsScalarWhereWithAggregatesInput | appointmentsScalarWhereWithAggregatesInput[]
    OR?: appointmentsScalarWhereWithAggregatesInput[]
    NOT?: appointmentsScalarWhereWithAggregatesInput | appointmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"appointments"> | number
    patientId?: IntWithAggregatesFilter<"appointments"> | number
    procId?: IntWithAggregatesFilter<"appointments"> | number
    apDate?: DateTimeWithAggregatesFilter<"appointments"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"appointments"> | Date | string
  }

  export type medical_historyWhereInput = {
    AND?: medical_historyWhereInput | medical_historyWhereInput[]
    OR?: medical_historyWhereInput[]
    NOT?: medical_historyWhereInput | medical_historyWhereInput[]
    id?: IntFilter<"medical_history"> | number
    patientId?: IntFilter<"medical_history"> | number
    description?: StringNullableFilter<"medical_history"> | string | null
    createdAt?: DateTimeFilter<"medical_history"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
  }

  export type medical_historyOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patient?: patientsOrderByWithRelationInput
  }

  export type medical_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: medical_historyWhereInput | medical_historyWhereInput[]
    OR?: medical_historyWhereInput[]
    NOT?: medical_historyWhereInput | medical_historyWhereInput[]
    patientId?: IntFilter<"medical_history"> | number
    description?: StringNullableFilter<"medical_history"> | string | null
    createdAt?: DateTimeFilter<"medical_history"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
  }, "id" | "id">

  export type medical_historyOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: medical_historyCountOrderByAggregateInput
    _avg?: medical_historyAvgOrderByAggregateInput
    _max?: medical_historyMaxOrderByAggregateInput
    _min?: medical_historyMinOrderByAggregateInput
    _sum?: medical_historySumOrderByAggregateInput
  }

  export type medical_historyScalarWhereWithAggregatesInput = {
    AND?: medical_historyScalarWhereWithAggregatesInput | medical_historyScalarWhereWithAggregatesInput[]
    OR?: medical_historyScalarWhereWithAggregatesInput[]
    NOT?: medical_historyScalarWhereWithAggregatesInput | medical_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"medical_history"> | number
    patientId?: IntWithAggregatesFilter<"medical_history"> | number
    description?: StringNullableWithAggregatesFilter<"medical_history"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"medical_history"> | Date | string
  }

  export type usersCreateInput = {
    username: string
    passwordHash: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    passwordHash: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    passwordHash: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientsCreateInput = {
    fname: string
    lname?: string | null
    bday: Date | string
    phone: string
    email?: string | null
    gender?: $Enums.Gender
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: appointmentsCreateNestedManyWithoutPatientInput
    medical_history?: medical_historyCreateNestedManyWithoutPatientInput
  }

  export type patientsUncheckedCreateInput = {
    id?: number
    fname: string
    lname?: string | null
    bday: Date | string
    phone: string
    email?: string | null
    gender?: $Enums.Gender
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutPatientInput
    medical_history?: medical_historyUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientsUpdateInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    bday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: appointmentsUpdateManyWithoutPatientNestedInput
    medical_history?: medical_historyUpdateManyWithoutPatientNestedInput
  }

  export type patientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    bday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: appointmentsUncheckedUpdateManyWithoutPatientNestedInput
    medical_history?: medical_historyUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientsCreateManyInput = {
    id?: number
    fname: string
    lname?: string | null
    bday: Date | string
    phone: string
    email?: string | null
    gender?: $Enums.Gender
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type patientsUpdateManyMutationInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    bday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    bday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type proceduresCreateInput = {
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: appointmentsCreateNestedManyWithoutProcedureInput
  }

  export type proceduresUncheckedCreateInput = {
    id?: number
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type proceduresUpdateInput = {
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: appointmentsUpdateManyWithoutProcedureNestedInput
  }

  export type proceduresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: appointmentsUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type proceduresCreateManyInput = {
    id?: number
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type proceduresUpdateManyMutationInput = {
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type proceduresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentsCreateInput = {
    apDate: Date | string
    createdAt?: Date | string
    patient: patientsCreateNestedOneWithoutAppointmentsInput
    procedure: proceduresCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateInput = {
    id?: number
    patientId: number
    procId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type appointmentsUpdateInput = {
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneRequiredWithoutAppointmentsNestedInput
    procedure?: proceduresUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    procId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentsCreateManyInput = {
    id?: number
    patientId: number
    procId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type appointmentsUpdateManyMutationInput = {
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    procId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type medical_historyCreateInput = {
    description?: string | null
    createdAt?: Date | string
    patient: patientsCreateNestedOneWithoutMedical_historyInput
  }

  export type medical_historyUncheckedCreateInput = {
    id?: number
    patientId: number
    description?: string | null
    createdAt?: Date | string
  }

  export type medical_historyUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneRequiredWithoutMedical_historyNestedInput
  }

  export type medical_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type medical_historyCreateManyInput = {
    id?: number
    patientId: number
    description?: string | null
    createdAt?: Date | string
  }

  export type medical_historyUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type medical_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type AppointmentsListRelationFilter = {
    every?: appointmentsWhereInput
    some?: appointmentsWhereInput
    none?: appointmentsWhereInput
  }

  export type Medical_historyListRelationFilter = {
    every?: medical_historyWhereInput
    some?: medical_historyWhereInput
    none?: medical_historyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type appointmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type medical_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type patientsCountOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    bday?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type patientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type patientsMaxOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    bday?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type patientsMinOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    bday?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type patientsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumProcCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcCategory | EnumProcCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProcCategory[] | ListEnumProcCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcCategory[] | ListEnumProcCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProcCategoryFilter<$PrismaModel> | $Enums.ProcCategory
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type proceduresCountOrderByAggregateInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type proceduresAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type proceduresMaxOrderByAggregateInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type proceduresMinOrderByAggregateInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type proceduresSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type EnumProcCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcCategory | EnumProcCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProcCategory[] | ListEnumProcCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcCategory[] | ListEnumProcCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProcCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProcCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcCategoryFilter<$PrismaModel>
    _max?: NestedEnumProcCategoryFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PatientsScalarRelationFilter = {
    is?: patientsWhereInput
    isNot?: patientsWhereInput
  }

  export type ProceduresScalarRelationFilter = {
    is?: proceduresWhereInput
    isNot?: proceduresWhereInput
  }

  export type appointmentsCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
  }

  export type appointmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
  }

  export type appointmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
  }

  export type appointmentsMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
  }

  export type appointmentsSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
  }

  export type medical_historyCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type medical_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type medical_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type medical_historyMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type medical_historySumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type appointmentsCreateNestedManyWithoutPatientInput = {
    create?: XOR<appointmentsCreateWithoutPatientInput, appointmentsUncheckedCreateWithoutPatientInput> | appointmentsCreateWithoutPatientInput[] | appointmentsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutPatientInput | appointmentsCreateOrConnectWithoutPatientInput[]
    createMany?: appointmentsCreateManyPatientInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type medical_historyCreateNestedManyWithoutPatientInput = {
    create?: XOR<medical_historyCreateWithoutPatientInput, medical_historyUncheckedCreateWithoutPatientInput> | medical_historyCreateWithoutPatientInput[] | medical_historyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: medical_historyCreateOrConnectWithoutPatientInput | medical_historyCreateOrConnectWithoutPatientInput[]
    createMany?: medical_historyCreateManyPatientInputEnvelope
    connect?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
  }

  export type appointmentsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<appointmentsCreateWithoutPatientInput, appointmentsUncheckedCreateWithoutPatientInput> | appointmentsCreateWithoutPatientInput[] | appointmentsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutPatientInput | appointmentsCreateOrConnectWithoutPatientInput[]
    createMany?: appointmentsCreateManyPatientInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type medical_historyUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<medical_historyCreateWithoutPatientInput, medical_historyUncheckedCreateWithoutPatientInput> | medical_historyCreateWithoutPatientInput[] | medical_historyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: medical_historyCreateOrConnectWithoutPatientInput | medical_historyCreateOrConnectWithoutPatientInput[]
    createMany?: medical_historyCreateManyPatientInputEnvelope
    connect?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type appointmentsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<appointmentsCreateWithoutPatientInput, appointmentsUncheckedCreateWithoutPatientInput> | appointmentsCreateWithoutPatientInput[] | appointmentsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutPatientInput | appointmentsCreateOrConnectWithoutPatientInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutPatientInput | appointmentsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: appointmentsCreateManyPatientInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutPatientInput | appointmentsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutPatientInput | appointmentsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type medical_historyUpdateManyWithoutPatientNestedInput = {
    create?: XOR<medical_historyCreateWithoutPatientInput, medical_historyUncheckedCreateWithoutPatientInput> | medical_historyCreateWithoutPatientInput[] | medical_historyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: medical_historyCreateOrConnectWithoutPatientInput | medical_historyCreateOrConnectWithoutPatientInput[]
    upsert?: medical_historyUpsertWithWhereUniqueWithoutPatientInput | medical_historyUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: medical_historyCreateManyPatientInputEnvelope
    set?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
    disconnect?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
    delete?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
    connect?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
    update?: medical_historyUpdateWithWhereUniqueWithoutPatientInput | medical_historyUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: medical_historyUpdateManyWithWhereWithoutPatientInput | medical_historyUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: medical_historyScalarWhereInput | medical_historyScalarWhereInput[]
  }

  export type appointmentsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<appointmentsCreateWithoutPatientInput, appointmentsUncheckedCreateWithoutPatientInput> | appointmentsCreateWithoutPatientInput[] | appointmentsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutPatientInput | appointmentsCreateOrConnectWithoutPatientInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutPatientInput | appointmentsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: appointmentsCreateManyPatientInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutPatientInput | appointmentsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutPatientInput | appointmentsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type medical_historyUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<medical_historyCreateWithoutPatientInput, medical_historyUncheckedCreateWithoutPatientInput> | medical_historyCreateWithoutPatientInput[] | medical_historyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: medical_historyCreateOrConnectWithoutPatientInput | medical_historyCreateOrConnectWithoutPatientInput[]
    upsert?: medical_historyUpsertWithWhereUniqueWithoutPatientInput | medical_historyUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: medical_historyCreateManyPatientInputEnvelope
    set?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
    disconnect?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
    delete?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
    connect?: medical_historyWhereUniqueInput | medical_historyWhereUniqueInput[]
    update?: medical_historyUpdateWithWhereUniqueWithoutPatientInput | medical_historyUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: medical_historyUpdateManyWithWhereWithoutPatientInput | medical_historyUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: medical_historyScalarWhereInput | medical_historyScalarWhereInput[]
  }

  export type appointmentsCreateNestedManyWithoutProcedureInput = {
    create?: XOR<appointmentsCreateWithoutProcedureInput, appointmentsUncheckedCreateWithoutProcedureInput> | appointmentsCreateWithoutProcedureInput[] | appointmentsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutProcedureInput | appointmentsCreateOrConnectWithoutProcedureInput[]
    createMany?: appointmentsCreateManyProcedureInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type appointmentsUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<appointmentsCreateWithoutProcedureInput, appointmentsUncheckedCreateWithoutProcedureInput> | appointmentsCreateWithoutProcedureInput[] | appointmentsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutProcedureInput | appointmentsCreateOrConnectWithoutProcedureInput[]
    createMany?: appointmentsCreateManyProcedureInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type EnumProcCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ProcCategory
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type appointmentsUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<appointmentsCreateWithoutProcedureInput, appointmentsUncheckedCreateWithoutProcedureInput> | appointmentsCreateWithoutProcedureInput[] | appointmentsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutProcedureInput | appointmentsCreateOrConnectWithoutProcedureInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutProcedureInput | appointmentsUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: appointmentsCreateManyProcedureInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutProcedureInput | appointmentsUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutProcedureInput | appointmentsUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type appointmentsUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<appointmentsCreateWithoutProcedureInput, appointmentsUncheckedCreateWithoutProcedureInput> | appointmentsCreateWithoutProcedureInput[] | appointmentsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutProcedureInput | appointmentsCreateOrConnectWithoutProcedureInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutProcedureInput | appointmentsUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: appointmentsCreateManyProcedureInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutProcedureInput | appointmentsUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutProcedureInput | appointmentsUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type patientsCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<patientsCreateWithoutAppointmentsInput, patientsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: patientsCreateOrConnectWithoutAppointmentsInput
    connect?: patientsWhereUniqueInput
  }

  export type proceduresCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<proceduresCreateWithoutAppointmentsInput, proceduresUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: proceduresCreateOrConnectWithoutAppointmentsInput
    connect?: proceduresWhereUniqueInput
  }

  export type patientsUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<patientsCreateWithoutAppointmentsInput, patientsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: patientsCreateOrConnectWithoutAppointmentsInput
    upsert?: patientsUpsertWithoutAppointmentsInput
    connect?: patientsWhereUniqueInput
    update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutAppointmentsInput, patientsUpdateWithoutAppointmentsInput>, patientsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type proceduresUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<proceduresCreateWithoutAppointmentsInput, proceduresUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: proceduresCreateOrConnectWithoutAppointmentsInput
    upsert?: proceduresUpsertWithoutAppointmentsInput
    connect?: proceduresWhereUniqueInput
    update?: XOR<XOR<proceduresUpdateToOneWithWhereWithoutAppointmentsInput, proceduresUpdateWithoutAppointmentsInput>, proceduresUncheckedUpdateWithoutAppointmentsInput>
  }

  export type patientsCreateNestedOneWithoutMedical_historyInput = {
    create?: XOR<patientsCreateWithoutMedical_historyInput, patientsUncheckedCreateWithoutMedical_historyInput>
    connectOrCreate?: patientsCreateOrConnectWithoutMedical_historyInput
    connect?: patientsWhereUniqueInput
  }

  export type patientsUpdateOneRequiredWithoutMedical_historyNestedInput = {
    create?: XOR<patientsCreateWithoutMedical_historyInput, patientsUncheckedCreateWithoutMedical_historyInput>
    connectOrCreate?: patientsCreateOrConnectWithoutMedical_historyInput
    upsert?: patientsUpsertWithoutMedical_historyInput
    connect?: patientsWhereUniqueInput
    update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutMedical_historyInput, patientsUpdateWithoutMedical_historyInput>, patientsUncheckedUpdateWithoutMedical_historyInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumProcCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcCategory | EnumProcCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProcCategory[] | ListEnumProcCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcCategory[] | ListEnumProcCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProcCategoryFilter<$PrismaModel> | $Enums.ProcCategory
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumProcCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcCategory | EnumProcCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProcCategory[] | ListEnumProcCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcCategory[] | ListEnumProcCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProcCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProcCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcCategoryFilter<$PrismaModel>
    _max?: NestedEnumProcCategoryFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type appointmentsCreateWithoutPatientInput = {
    apDate: Date | string
    createdAt?: Date | string
    procedure: proceduresCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateWithoutPatientInput = {
    id?: number
    procId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type appointmentsCreateOrConnectWithoutPatientInput = {
    where: appointmentsWhereUniqueInput
    create: XOR<appointmentsCreateWithoutPatientInput, appointmentsUncheckedCreateWithoutPatientInput>
  }

  export type appointmentsCreateManyPatientInputEnvelope = {
    data: appointmentsCreateManyPatientInput | appointmentsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type medical_historyCreateWithoutPatientInput = {
    description?: string | null
    createdAt?: Date | string
  }

  export type medical_historyUncheckedCreateWithoutPatientInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
  }

  export type medical_historyCreateOrConnectWithoutPatientInput = {
    where: medical_historyWhereUniqueInput
    create: XOR<medical_historyCreateWithoutPatientInput, medical_historyUncheckedCreateWithoutPatientInput>
  }

  export type medical_historyCreateManyPatientInputEnvelope = {
    data: medical_historyCreateManyPatientInput | medical_historyCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type appointmentsUpsertWithWhereUniqueWithoutPatientInput = {
    where: appointmentsWhereUniqueInput
    update: XOR<appointmentsUpdateWithoutPatientInput, appointmentsUncheckedUpdateWithoutPatientInput>
    create: XOR<appointmentsCreateWithoutPatientInput, appointmentsUncheckedCreateWithoutPatientInput>
  }

  export type appointmentsUpdateWithWhereUniqueWithoutPatientInput = {
    where: appointmentsWhereUniqueInput
    data: XOR<appointmentsUpdateWithoutPatientInput, appointmentsUncheckedUpdateWithoutPatientInput>
  }

  export type appointmentsUpdateManyWithWhereWithoutPatientInput = {
    where: appointmentsScalarWhereInput
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyWithoutPatientInput>
  }

  export type appointmentsScalarWhereInput = {
    AND?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
    OR?: appointmentsScalarWhereInput[]
    NOT?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
    id?: IntFilter<"appointments"> | number
    patientId?: IntFilter<"appointments"> | number
    procId?: IntFilter<"appointments"> | number
    apDate?: DateTimeFilter<"appointments"> | Date | string
    createdAt?: DateTimeFilter<"appointments"> | Date | string
  }

  export type medical_historyUpsertWithWhereUniqueWithoutPatientInput = {
    where: medical_historyWhereUniqueInput
    update: XOR<medical_historyUpdateWithoutPatientInput, medical_historyUncheckedUpdateWithoutPatientInput>
    create: XOR<medical_historyCreateWithoutPatientInput, medical_historyUncheckedCreateWithoutPatientInput>
  }

  export type medical_historyUpdateWithWhereUniqueWithoutPatientInput = {
    where: medical_historyWhereUniqueInput
    data: XOR<medical_historyUpdateWithoutPatientInput, medical_historyUncheckedUpdateWithoutPatientInput>
  }

  export type medical_historyUpdateManyWithWhereWithoutPatientInput = {
    where: medical_historyScalarWhereInput
    data: XOR<medical_historyUpdateManyMutationInput, medical_historyUncheckedUpdateManyWithoutPatientInput>
  }

  export type medical_historyScalarWhereInput = {
    AND?: medical_historyScalarWhereInput | medical_historyScalarWhereInput[]
    OR?: medical_historyScalarWhereInput[]
    NOT?: medical_historyScalarWhereInput | medical_historyScalarWhereInput[]
    id?: IntFilter<"medical_history"> | number
    patientId?: IntFilter<"medical_history"> | number
    description?: StringNullableFilter<"medical_history"> | string | null
    createdAt?: DateTimeFilter<"medical_history"> | Date | string
  }

  export type appointmentsCreateWithoutProcedureInput = {
    apDate: Date | string
    createdAt?: Date | string
    patient: patientsCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateWithoutProcedureInput = {
    id?: number
    patientId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type appointmentsCreateOrConnectWithoutProcedureInput = {
    where: appointmentsWhereUniqueInput
    create: XOR<appointmentsCreateWithoutProcedureInput, appointmentsUncheckedCreateWithoutProcedureInput>
  }

  export type appointmentsCreateManyProcedureInputEnvelope = {
    data: appointmentsCreateManyProcedureInput | appointmentsCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type appointmentsUpsertWithWhereUniqueWithoutProcedureInput = {
    where: appointmentsWhereUniqueInput
    update: XOR<appointmentsUpdateWithoutProcedureInput, appointmentsUncheckedUpdateWithoutProcedureInput>
    create: XOR<appointmentsCreateWithoutProcedureInput, appointmentsUncheckedCreateWithoutProcedureInput>
  }

  export type appointmentsUpdateWithWhereUniqueWithoutProcedureInput = {
    where: appointmentsWhereUniqueInput
    data: XOR<appointmentsUpdateWithoutProcedureInput, appointmentsUncheckedUpdateWithoutProcedureInput>
  }

  export type appointmentsUpdateManyWithWhereWithoutProcedureInput = {
    where: appointmentsScalarWhereInput
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyWithoutProcedureInput>
  }

  export type patientsCreateWithoutAppointmentsInput = {
    fname: string
    lname?: string | null
    bday: Date | string
    phone: string
    email?: string | null
    gender?: $Enums.Gender
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medical_history?: medical_historyCreateNestedManyWithoutPatientInput
  }

  export type patientsUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    fname: string
    lname?: string | null
    bday: Date | string
    phone: string
    email?: string | null
    gender?: $Enums.Gender
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medical_history?: medical_historyUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientsCreateOrConnectWithoutAppointmentsInput = {
    where: patientsWhereUniqueInput
    create: XOR<patientsCreateWithoutAppointmentsInput, patientsUncheckedCreateWithoutAppointmentsInput>
  }

  export type proceduresCreateWithoutAppointmentsInput = {
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type proceduresUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type proceduresCreateOrConnectWithoutAppointmentsInput = {
    where: proceduresWhereUniqueInput
    create: XOR<proceduresCreateWithoutAppointmentsInput, proceduresUncheckedCreateWithoutAppointmentsInput>
  }

  export type patientsUpsertWithoutAppointmentsInput = {
    update: XOR<patientsUpdateWithoutAppointmentsInput, patientsUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<patientsCreateWithoutAppointmentsInput, patientsUncheckedCreateWithoutAppointmentsInput>
    where?: patientsWhereInput
  }

  export type patientsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: patientsWhereInput
    data: XOR<patientsUpdateWithoutAppointmentsInput, patientsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type patientsUpdateWithoutAppointmentsInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    bday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_history?: medical_historyUpdateManyWithoutPatientNestedInput
  }

  export type patientsUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    bday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_history?: medical_historyUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type proceduresUpsertWithoutAppointmentsInput = {
    update: XOR<proceduresUpdateWithoutAppointmentsInput, proceduresUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<proceduresCreateWithoutAppointmentsInput, proceduresUncheckedCreateWithoutAppointmentsInput>
    where?: proceduresWhereInput
  }

  export type proceduresUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: proceduresWhereInput
    data: XOR<proceduresUpdateWithoutAppointmentsInput, proceduresUncheckedUpdateWithoutAppointmentsInput>
  }

  export type proceduresUpdateWithoutAppointmentsInput = {
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type proceduresUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientsCreateWithoutMedical_historyInput = {
    fname: string
    lname?: string | null
    bday: Date | string
    phone: string
    email?: string | null
    gender?: $Enums.Gender
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: appointmentsCreateNestedManyWithoutPatientInput
  }

  export type patientsUncheckedCreateWithoutMedical_historyInput = {
    id?: number
    fname: string
    lname?: string | null
    bday: Date | string
    phone: string
    email?: string | null
    gender?: $Enums.Gender
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientsCreateOrConnectWithoutMedical_historyInput = {
    where: patientsWhereUniqueInput
    create: XOR<patientsCreateWithoutMedical_historyInput, patientsUncheckedCreateWithoutMedical_historyInput>
  }

  export type patientsUpsertWithoutMedical_historyInput = {
    update: XOR<patientsUpdateWithoutMedical_historyInput, patientsUncheckedUpdateWithoutMedical_historyInput>
    create: XOR<patientsCreateWithoutMedical_historyInput, patientsUncheckedCreateWithoutMedical_historyInput>
    where?: patientsWhereInput
  }

  export type patientsUpdateToOneWithWhereWithoutMedical_historyInput = {
    where?: patientsWhereInput
    data: XOR<patientsUpdateWithoutMedical_historyInput, patientsUncheckedUpdateWithoutMedical_historyInput>
  }

  export type patientsUpdateWithoutMedical_historyInput = {
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    bday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: appointmentsUpdateManyWithoutPatientNestedInput
  }

  export type patientsUncheckedUpdateWithoutMedical_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    bday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: appointmentsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type appointmentsCreateManyPatientInput = {
    id?: number
    procId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type medical_historyCreateManyPatientInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
  }

  export type appointmentsUpdateWithoutPatientInput = {
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedure?: proceduresUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    procId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentsUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    procId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type medical_historyUpdateWithoutPatientInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type medical_historyUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type medical_historyUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentsCreateManyProcedureInput = {
    id?: number
    patientId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type appointmentsUpdateWithoutProcedureInput = {
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateWithoutProcedureInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentsUncheckedUpdateManyWithoutProcedureInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}