
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Patients
 * 
 */
export type Patients = $Result.DefaultSelection<Prisma.$PatientsPayload>
/**
 * Model Procedures
 * 
 */
export type Procedures = $Result.DefaultSelection<Prisma.$ProceduresPayload>
/**
 * Model Appointments
 * 
 */
export type Appointments = $Result.DefaultSelection<Prisma.$AppointmentsPayload>
/**
 * Model MedicalHistory
 * 
 */
export type MedicalHistory = $Result.DefaultSelection<Prisma.$MedicalHistoryPayload>

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
  ACOMPANHAMENTO: 'ACOMPANHAMENTO',
  ESTÉTICA: 'ESTÉTICA',
  CIRURGIA: 'CIRURGIA',
  RESTAURAÇÃO: 'RESTAURAÇÃO',
  CANAL: 'CANAL',
  CLAREAMENTO: 'CLAREAMENTO'
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patients`: Exposes CRUD operations for the **Patients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patients.findMany()
    * ```
    */
  get patients(): Prisma.PatientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procedures`: Exposes CRUD operations for the **Procedures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procedures
    * const procedures = await prisma.procedures.findMany()
    * ```
    */
  get procedures(): Prisma.ProceduresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointments`: Exposes CRUD operations for the **Appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.AppointmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalHistory`: Exposes CRUD operations for the **MedicalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalHistories
    * const medicalHistories = await prisma.medicalHistory.findMany()
    * ```
    */
  get medicalHistory(): Prisma.MedicalHistoryDelegate<ExtArgs, ClientOptions>;
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
    Users: 'Users',
    Patients: 'Patients',
    Procedures: 'Procedures',
    Appointments: 'Appointments',
    MedicalHistory: 'MedicalHistory'
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
      modelProps: "users" | "patients" | "procedures" | "appointments" | "medicalHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Patients: {
        payload: Prisma.$PatientsPayload<ExtArgs>
        fields: Prisma.PatientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findFirst: {
            args: Prisma.PatientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findMany: {
            args: Prisma.PatientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          create: {
            args: Prisma.PatientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          createMany: {
            args: Prisma.PatientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          delete: {
            args: Prisma.PatientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          update: {
            args: Prisma.PatientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          deleteMany: {
            args: Prisma.PatientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          upsert: {
            args: Prisma.PatientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          aggregate: {
            args: Prisma.PatientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatients>
          }
          groupBy: {
            args: Prisma.PatientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientsCountAggregateOutputType> | number
          }
        }
      }
      Procedures: {
        payload: Prisma.$ProceduresPayload<ExtArgs>
        fields: Prisma.ProceduresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProceduresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProceduresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          findFirst: {
            args: Prisma.ProceduresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProceduresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          findMany: {
            args: Prisma.ProceduresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>[]
          }
          create: {
            args: Prisma.ProceduresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          createMany: {
            args: Prisma.ProceduresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProceduresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>[]
          }
          delete: {
            args: Prisma.ProceduresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          update: {
            args: Prisma.ProceduresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          deleteMany: {
            args: Prisma.ProceduresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProceduresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProceduresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>[]
          }
          upsert: {
            args: Prisma.ProceduresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          aggregate: {
            args: Prisma.ProceduresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcedures>
          }
          groupBy: {
            args: Prisma.ProceduresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProceduresGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProceduresCountArgs<ExtArgs>
            result: $Utils.Optional<ProceduresCountAggregateOutputType> | number
          }
        }
      }
      Appointments: {
        payload: Prisma.$AppointmentsPayload<ExtArgs>
        fields: Prisma.AppointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findFirst: {
            args: Prisma.AppointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findMany: {
            args: Prisma.AppointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          create: {
            args: Prisma.AppointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          createMany: {
            args: Prisma.AppointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          delete: {
            args: Prisma.AppointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          update: {
            args: Prisma.AppointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.AppointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
          }
        }
      }
      MedicalHistory: {
        payload: Prisma.$MedicalHistoryPayload<ExtArgs>
        fields: Prisma.MedicalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          findFirst: {
            args: Prisma.MedicalHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          findMany: {
            args: Prisma.MedicalHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          create: {
            args: Prisma.MedicalHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          createMany: {
            args: Prisma.MedicalHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          delete: {
            args: Prisma.MedicalHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          update: {
            args: Prisma.MedicalHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.MedicalHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          upsert: {
            args: Prisma.MedicalHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          aggregate: {
            args: Prisma.MedicalHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalHistory>
          }
          groupBy: {
            args: Prisma.MedicalHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalHistoryCountAggregateOutputType> | number
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
    users?: UsersOmit
    patients?: PatientsOmit
    procedures?: ProceduresOmit
    appointments?: AppointmentsOmit
    medicalHistory?: MedicalHistoryOmit
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
    medicalHistory: number
  }

  export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientsCountOutputTypeCountAppointmentsArgs
    medicalHistory?: boolean | PatientsCountOutputTypeCountMedicalHistoryArgs
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
    where?: AppointmentsWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountMedicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalHistoryWhereInput
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
    where?: AppointmentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
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
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
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
    role?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
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
    role: $Enums.Role
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly passwordHash: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model Patients
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
     * Filter which Patients to aggregate.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
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




  export type PatientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientsWhereInput
    orderBy?: PatientsOrderByWithAggregationInput | PatientsOrderByWithAggregationInput[]
    by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
    having?: PatientsScalarWhereWithAggregatesInput
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

  type GetPatientsGroupByPayload<T extends PatientsGroupByArgs> = Prisma.PrismaPromise<
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


  export type PatientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    appointments?: boolean | Patients$appointmentsArgs<ExtArgs>
    medicalHistory?: boolean | Patients$medicalHistoryArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type PatientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type PatientsSelectScalar = {
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

  export type PatientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fname" | "lname" | "bday" | "phone" | "email" | "gender" | "address" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["patients"]>
  export type PatientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Patients$appointmentsArgs<ExtArgs>
    medicalHistory?: boolean | Patients$medicalHistoryArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patients"
    objects: {
      appointments: Prisma.$AppointmentsPayload<ExtArgs>[]
      medicalHistory: Prisma.$MedicalHistoryPayload<ExtArgs>[]
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

  type PatientsGetPayload<S extends boolean | null | undefined | PatientsDefaultArgs> = $Result.GetResult<Prisma.$PatientsPayload, S>

  type PatientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientsCountAggregateInputType | true
    }

  export interface PatientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patients'], meta: { name: 'Patients' } }
    /**
     * Find zero or one Patients that matches the filter.
     * @param {PatientsFindUniqueArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientsFindUniqueArgs>(args: SelectSubset<T, PatientsFindUniqueArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientsFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientsFindFirstArgs>(args?: SelectSubset<T, PatientsFindFirstArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientsFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends PatientsFindManyArgs>(args?: SelectSubset<T, PatientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patients.
     * @param {PatientsCreateArgs} args - Arguments to create a Patients.
     * @example
     * // Create one Patients
     * const Patients = await prisma.patients.create({
     *   data: {
     *     // ... data to create a Patients
     *   }
     * })
     * 
     */
    create<T extends PatientsCreateArgs>(args: SelectSubset<T, PatientsCreateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientsCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientsCreateManyArgs>(args?: SelectSubset<T, PatientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientsCreateManyAndReturnArgs} args - Arguments to create many Patients.
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
    createManyAndReturn<T extends PatientsCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patients.
     * @param {PatientsDeleteArgs} args - Arguments to delete one Patients.
     * @example
     * // Delete one Patients
     * const Patients = await prisma.patients.delete({
     *   where: {
     *     // ... filter to delete one Patients
     *   }
     * })
     * 
     */
    delete<T extends PatientsDeleteArgs>(args: SelectSubset<T, PatientsDeleteArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patients.
     * @param {PatientsUpdateArgs} args - Arguments to update one Patients.
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
    update<T extends PatientsUpdateArgs>(args: SelectSubset<T, PatientsUpdateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientsDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientsDeleteManyArgs>(args?: SelectSubset<T, PatientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends PatientsUpdateManyArgs>(args: SelectSubset<T, PatientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientsUpdateManyAndReturnArgs} args - Arguments to update many Patients.
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
    updateManyAndReturn<T extends PatientsUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patients.
     * @param {PatientsUpsertArgs} args - Arguments to update or create a Patients.
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
    upsert<T extends PatientsUpsertArgs>(args: SelectSubset<T, PatientsUpsertArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patients.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientsCountArgs>(
      args?: Subset<T, PatientsCountArgs>,
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
     * @param {PatientsGroupByArgs} args - Group by arguments.
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
      T extends PatientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientsGroupByArgs['orderBy'] }
        : { orderBy?: PatientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patients model
   */
  readonly fields: PatientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Patients$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patients$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalHistory<T extends Patients$medicalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Patients$medicalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patients model
   */
  interface PatientsFieldRefs {
    readonly id: FieldRef<"Patients", 'Int'>
    readonly fname: FieldRef<"Patients", 'String'>
    readonly lname: FieldRef<"Patients", 'String'>
    readonly bday: FieldRef<"Patients", 'DateTime'>
    readonly phone: FieldRef<"Patients", 'String'>
    readonly email: FieldRef<"Patients", 'String'>
    readonly gender: FieldRef<"Patients", 'Gender'>
    readonly address: FieldRef<"Patients", 'String'>
    readonly notes: FieldRef<"Patients", 'String'>
    readonly createdAt: FieldRef<"Patients", 'DateTime'>
    readonly updatedAt: FieldRef<"Patients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patients findUnique
   */
  export type PatientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findUniqueOrThrow
   */
  export type PatientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findFirst
   */
  export type PatientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findFirstOrThrow
   */
  export type PatientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findMany
   */
  export type PatientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients create
   */
  export type PatientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Patients.
     */
    data: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
  }

  /**
   * Patients createMany
   */
  export type PatientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientsCreateManyInput | PatientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patients createManyAndReturn
   */
  export type PatientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientsCreateManyInput | PatientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patients update
   */
  export type PatientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Patients.
     */
    data: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
    /**
     * Choose, which Patients to update.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients updateMany
   */
  export type PatientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patients updateManyAndReturn
   */
  export type PatientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patients upsert
   */
  export type PatientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Patients to update in case it exists.
     */
    where: PatientsWhereUniqueInput
    /**
     * In case the Patients found by the `where` argument doesn't exist, create a new Patients with this data.
     */
    create: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
    /**
     * In case the Patients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
  }

  /**
   * Patients delete
   */
  export type PatientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter which Patients to delete.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients deleteMany
   */
  export type PatientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patients.appointments
   */
  export type Patients$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    cursor?: AppointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Patients.medicalHistory
   */
  export type Patients$medicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    where?: MedicalHistoryWhereInput
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    cursor?: MedicalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * Patients without action
   */
  export type PatientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
  }


  /**
   * Model Procedures
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
  }

  export type ProceduresMaxAggregateOutputType = {
    id: number | null
    procName: string | null
    category: $Enums.ProcCategory | null
    estDuration: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type ProceduresCountAggregateOutputType = {
    id: number
    procName: number
    category: number
    estDuration: number
    price: number
    createdAt: number
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
  }

  export type ProceduresMaxAggregateInputType = {
    id?: true
    procName?: true
    category?: true
    estDuration?: true
    price?: true
    createdAt?: true
  }

  export type ProceduresCountAggregateInputType = {
    id?: true
    procName?: true
    category?: true
    estDuration?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type ProceduresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedures to aggregate.
     */
    where?: ProceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProceduresOrderByWithRelationInput | ProceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Procedures
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




  export type ProceduresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProceduresWhereInput
    orderBy?: ProceduresOrderByWithAggregationInput | ProceduresOrderByWithAggregationInput[]
    by: ProceduresScalarFieldEnum[] | ProceduresScalarFieldEnum
    having?: ProceduresScalarWhereWithAggregatesInput
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
    _count: ProceduresCountAggregateOutputType | null
    _avg: ProceduresAvgAggregateOutputType | null
    _sum: ProceduresSumAggregateOutputType | null
    _min: ProceduresMinAggregateOutputType | null
    _max: ProceduresMaxAggregateOutputType | null
  }

  type GetProceduresGroupByPayload<T extends ProceduresGroupByArgs> = Prisma.PrismaPromise<
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


  export type ProceduresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procName?: boolean
    category?: boolean
    estDuration?: boolean
    price?: boolean
    createdAt?: boolean
    appointments?: boolean | Procedures$appointmentsArgs<ExtArgs>
    _count?: boolean | ProceduresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedures"]>

  export type ProceduresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procName?: boolean
    category?: boolean
    estDuration?: boolean
    price?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["procedures"]>

  export type ProceduresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procName?: boolean
    category?: boolean
    estDuration?: boolean
    price?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["procedures"]>

  export type ProceduresSelectScalar = {
    id?: boolean
    procName?: boolean
    category?: boolean
    estDuration?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type ProceduresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "procName" | "category" | "estDuration" | "price" | "createdAt", ExtArgs["result"]["procedures"]>
  export type ProceduresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Procedures$appointmentsArgs<ExtArgs>
    _count?: boolean | ProceduresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProceduresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProceduresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProceduresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Procedures"
    objects: {
      appointments: Prisma.$AppointmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      procName: string
      category: $Enums.ProcCategory
      estDuration: string
      price: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["procedures"]>
    composites: {}
  }

  type ProceduresGetPayload<S extends boolean | null | undefined | ProceduresDefaultArgs> = $Result.GetResult<Prisma.$ProceduresPayload, S>

  type ProceduresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProceduresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProceduresCountAggregateInputType | true
    }

  export interface ProceduresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Procedures'], meta: { name: 'Procedures' } }
    /**
     * Find zero or one Procedures that matches the filter.
     * @param {ProceduresFindUniqueArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProceduresFindUniqueArgs>(args: SelectSubset<T, ProceduresFindUniqueArgs<ExtArgs>>): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Procedures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProceduresFindUniqueOrThrowArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProceduresFindUniqueOrThrowArgs>(args: SelectSubset<T, ProceduresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresFindFirstArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProceduresFindFirstArgs>(args?: SelectSubset<T, ProceduresFindFirstArgs<ExtArgs>>): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresFindFirstOrThrowArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProceduresFindFirstOrThrowArgs>(args?: SelectSubset<T, ProceduresFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Procedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ProceduresFindManyArgs>(args?: SelectSubset<T, ProceduresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Procedures.
     * @param {ProceduresCreateArgs} args - Arguments to create a Procedures.
     * @example
     * // Create one Procedures
     * const Procedures = await prisma.procedures.create({
     *   data: {
     *     // ... data to create a Procedures
     *   }
     * })
     * 
     */
    create<T extends ProceduresCreateArgs>(args: SelectSubset<T, ProceduresCreateArgs<ExtArgs>>): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Procedures.
     * @param {ProceduresCreateManyArgs} args - Arguments to create many Procedures.
     * @example
     * // Create many Procedures
     * const procedures = await prisma.procedures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProceduresCreateManyArgs>(args?: SelectSubset<T, ProceduresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Procedures and returns the data saved in the database.
     * @param {ProceduresCreateManyAndReturnArgs} args - Arguments to create many Procedures.
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
    createManyAndReturn<T extends ProceduresCreateManyAndReturnArgs>(args?: SelectSubset<T, ProceduresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Procedures.
     * @param {ProceduresDeleteArgs} args - Arguments to delete one Procedures.
     * @example
     * // Delete one Procedures
     * const Procedures = await prisma.procedures.delete({
     *   where: {
     *     // ... filter to delete one Procedures
     *   }
     * })
     * 
     */
    delete<T extends ProceduresDeleteArgs>(args: SelectSubset<T, ProceduresDeleteArgs<ExtArgs>>): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Procedures.
     * @param {ProceduresUpdateArgs} args - Arguments to update one Procedures.
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
    update<T extends ProceduresUpdateArgs>(args: SelectSubset<T, ProceduresUpdateArgs<ExtArgs>>): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Procedures.
     * @param {ProceduresDeleteManyArgs} args - Arguments to filter Procedures to delete.
     * @example
     * // Delete a few Procedures
     * const { count } = await prisma.procedures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProceduresDeleteManyArgs>(args?: SelectSubset<T, ProceduresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ProceduresUpdateManyArgs>(args: SelectSubset<T, ProceduresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedures and returns the data updated in the database.
     * @param {ProceduresUpdateManyAndReturnArgs} args - Arguments to update many Procedures.
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
    updateManyAndReturn<T extends ProceduresUpdateManyAndReturnArgs>(args: SelectSubset<T, ProceduresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Procedures.
     * @param {ProceduresUpsertArgs} args - Arguments to update or create a Procedures.
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
    upsert<T extends ProceduresUpsertArgs>(args: SelectSubset<T, ProceduresUpsertArgs<ExtArgs>>): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresCountArgs} args - Arguments to filter Procedures to count.
     * @example
     * // Count the number of Procedures
     * const count = await prisma.procedures.count({
     *   where: {
     *     // ... the filter for the Procedures we want to count
     *   }
     * })
    **/
    count<T extends ProceduresCountArgs>(
      args?: Subset<T, ProceduresCountArgs>,
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
     * @param {ProceduresGroupByArgs} args - Group by arguments.
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
      T extends ProceduresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProceduresGroupByArgs['orderBy'] }
        : { orderBy?: ProceduresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProceduresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProceduresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Procedures model
   */
  readonly fields: ProceduresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Procedures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProceduresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Procedures$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Procedures$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Procedures model
   */
  interface ProceduresFieldRefs {
    readonly id: FieldRef<"Procedures", 'Int'>
    readonly procName: FieldRef<"Procedures", 'String'>
    readonly category: FieldRef<"Procedures", 'ProcCategory'>
    readonly estDuration: FieldRef<"Procedures", 'String'>
    readonly price: FieldRef<"Procedures", 'Decimal'>
    readonly createdAt: FieldRef<"Procedures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Procedures findUnique
   */
  export type ProceduresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where: ProceduresWhereUniqueInput
  }

  /**
   * Procedures findUniqueOrThrow
   */
  export type ProceduresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where: ProceduresWhereUniqueInput
  }

  /**
   * Procedures findFirst
   */
  export type ProceduresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where?: ProceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProceduresOrderByWithRelationInput | ProceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }

  /**
   * Procedures findFirstOrThrow
   */
  export type ProceduresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where?: ProceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProceduresOrderByWithRelationInput | ProceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }

  /**
   * Procedures findMany
   */
  export type ProceduresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where?: ProceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProceduresOrderByWithRelationInput | ProceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Procedures.
     */
    cursor?: ProceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }

  /**
   * Procedures create
   */
  export type ProceduresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * The data needed to create a Procedures.
     */
    data: XOR<ProceduresCreateInput, ProceduresUncheckedCreateInput>
  }

  /**
   * Procedures createMany
   */
  export type ProceduresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Procedures.
     */
    data: ProceduresCreateManyInput | ProceduresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Procedures createManyAndReturn
   */
  export type ProceduresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * The data used to create many Procedures.
     */
    data: ProceduresCreateManyInput | ProceduresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Procedures update
   */
  export type ProceduresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * The data needed to update a Procedures.
     */
    data: XOR<ProceduresUpdateInput, ProceduresUncheckedUpdateInput>
    /**
     * Choose, which Procedures to update.
     */
    where: ProceduresWhereUniqueInput
  }

  /**
   * Procedures updateMany
   */
  export type ProceduresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Procedures.
     */
    data: XOR<ProceduresUpdateManyMutationInput, ProceduresUncheckedUpdateManyInput>
    /**
     * Filter which Procedures to update
     */
    where?: ProceduresWhereInput
    /**
     * Limit how many Procedures to update.
     */
    limit?: number
  }

  /**
   * Procedures updateManyAndReturn
   */
  export type ProceduresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * The data used to update Procedures.
     */
    data: XOR<ProceduresUpdateManyMutationInput, ProceduresUncheckedUpdateManyInput>
    /**
     * Filter which Procedures to update
     */
    where?: ProceduresWhereInput
    /**
     * Limit how many Procedures to update.
     */
    limit?: number
  }

  /**
   * Procedures upsert
   */
  export type ProceduresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * The filter to search for the Procedures to update in case it exists.
     */
    where: ProceduresWhereUniqueInput
    /**
     * In case the Procedures found by the `where` argument doesn't exist, create a new Procedures with this data.
     */
    create: XOR<ProceduresCreateInput, ProceduresUncheckedCreateInput>
    /**
     * In case the Procedures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProceduresUpdateInput, ProceduresUncheckedUpdateInput>
  }

  /**
   * Procedures delete
   */
  export type ProceduresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter which Procedures to delete.
     */
    where: ProceduresWhereUniqueInput
  }

  /**
   * Procedures deleteMany
   */
  export type ProceduresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedures to delete
     */
    where?: ProceduresWhereInput
    /**
     * Limit how many Procedures to delete.
     */
    limit?: number
  }

  /**
   * Procedures.appointments
   */
  export type Procedures$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    cursor?: AppointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Procedures without action
   */
  export type ProceduresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedures
     */
    omit?: ProceduresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProceduresInclude<ExtArgs> | null
  }


  /**
   * Model Appointments
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
     * Filter which Appointments to aggregate.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
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




  export type AppointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithAggregationInput | AppointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: AppointmentsScalarWhereWithAggregatesInput
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

  type GetAppointmentsGroupByPayload<T extends AppointmentsGroupByArgs> = Prisma.PrismaPromise<
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


  export type AppointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    procId?: boolean
    apDate?: boolean
    createdAt?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    procedure?: boolean | ProceduresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    procId?: boolean
    apDate?: boolean
    createdAt?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    procedure?: boolean | ProceduresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    procId?: boolean
    apDate?: boolean
    createdAt?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    procedure?: boolean | ProceduresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectScalar = {
    id?: boolean
    patientId?: boolean
    procId?: boolean
    apDate?: boolean
    createdAt?: boolean
  }

  export type AppointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "procId" | "apDate" | "createdAt", ExtArgs["result"]["appointments"]>
  export type AppointmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    procedure?: boolean | ProceduresDefaultArgs<ExtArgs>
  }
  export type AppointmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    procedure?: boolean | ProceduresDefaultArgs<ExtArgs>
  }
  export type AppointmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    procedure?: boolean | ProceduresDefaultArgs<ExtArgs>
  }

  export type $AppointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointments"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
      procedure: Prisma.$ProceduresPayload<ExtArgs>
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

  type AppointmentsGetPayload<S extends boolean | null | undefined | AppointmentsDefaultArgs> = $Result.GetResult<Prisma.$AppointmentsPayload, S>

  type AppointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface AppointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointments'], meta: { name: 'Appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {AppointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentsFindUniqueArgs>(args: SelectSubset<T, AppointmentsFindUniqueArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentsFindFirstArgs>(args?: SelectSubset<T, AppointmentsFindFirstArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends AppointmentsFindManyArgs>(args?: SelectSubset<T, AppointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointments.
     * @param {AppointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends AppointmentsCreateArgs>(args: SelectSubset<T, AppointmentsCreateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentsCreateManyArgs>(args?: SelectSubset<T, AppointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentsCreateManyAndReturnArgs} args - Arguments to create many Appointments.
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
    createManyAndReturn<T extends AppointmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointments.
     * @param {AppointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends AppointmentsDeleteArgs>(args: SelectSubset<T, AppointmentsDeleteArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointments.
     * @param {AppointmentsUpdateArgs} args - Arguments to update one Appointments.
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
    update<T extends AppointmentsUpdateArgs>(args: SelectSubset<T, AppointmentsUpdateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentsDeleteManyArgs>(args?: SelectSubset<T, AppointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends AppointmentsUpdateManyArgs>(args: SelectSubset<T, AppointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentsUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
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
    updateManyAndReturn<T extends AppointmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointments.
     * @param {AppointmentsUpsertArgs} args - Arguments to update or create a Appointments.
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
    upsert<T extends AppointmentsUpsertArgs>(args: SelectSubset<T, AppointmentsUpsertArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentsCountArgs>(
      args?: Subset<T, AppointmentsCountArgs>,
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
     * @param {AppointmentsGroupByArgs} args - Group by arguments.
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
      T extends AppointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentsGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointments model
   */
  readonly fields: AppointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    procedure<T extends ProceduresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProceduresDefaultArgs<ExtArgs>>): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointments model
   */
  interface AppointmentsFieldRefs {
    readonly id: FieldRef<"Appointments", 'Int'>
    readonly patientId: FieldRef<"Appointments", 'Int'>
    readonly procId: FieldRef<"Appointments", 'Int'>
    readonly apDate: FieldRef<"Appointments", 'DateTime'>
    readonly createdAt: FieldRef<"Appointments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointments findUnique
   */
  export type AppointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findUniqueOrThrow
   */
  export type AppointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findFirst
   */
  export type AppointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findFirstOrThrow
   */
  export type AppointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findMany
   */
  export type AppointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments create
   */
  export type AppointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointments.
     */
    data: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
  }

  /**
   * Appointments createMany
   */
  export type AppointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointments createManyAndReturn
   */
  export type AppointmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointments update
   */
  export type AppointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointments.
     */
    data: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
    /**
     * Choose, which Appointments to update.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments updateMany
   */
  export type AppointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointments updateManyAndReturn
   */
  export type AppointmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointments upsert
   */
  export type AppointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointments to update in case it exists.
     */
    where: AppointmentsWhereUniqueInput
    /**
     * In case the Appointments found by the `where` argument doesn't exist, create a new Appointments with this data.
     */
    create: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
    /**
     * In case the Appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
  }

  /**
   * Appointments delete
   */
  export type AppointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter which Appointments to delete.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments deleteMany
   */
  export type AppointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointments without action
   */
  export type AppointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
  }


  /**
   * Model MedicalHistory
   */

  export type AggregateMedicalHistory = {
    _count: MedicalHistoryCountAggregateOutputType | null
    _avg: MedicalHistoryAvgAggregateOutputType | null
    _sum: MedicalHistorySumAggregateOutputType | null
    _min: MedicalHistoryMinAggregateOutputType | null
    _max: MedicalHistoryMaxAggregateOutputType | null
  }

  export type MedicalHistoryAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type MedicalHistorySumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type MedicalHistoryMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type MedicalHistoryMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type MedicalHistoryCountAggregateOutputType = {
    id: number
    patientId: number
    description: number
    createdAt: number
    _all: number
  }


  export type MedicalHistoryAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type MedicalHistorySumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type MedicalHistoryMinAggregateInputType = {
    id?: true
    patientId?: true
    description?: true
    createdAt?: true
  }

  export type MedicalHistoryMaxAggregateInputType = {
    id?: true
    patientId?: true
    description?: true
    createdAt?: true
  }

  export type MedicalHistoryCountAggregateInputType = {
    id?: true
    patientId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type MedicalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalHistory to aggregate.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalHistories
    **/
    _count?: true | MedicalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalHistoryMaxAggregateInputType
  }

  export type GetMedicalHistoryAggregateType<T extends MedicalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalHistory[P]>
      : GetScalarType<T[P], AggregateMedicalHistory[P]>
  }




  export type MedicalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalHistoryWhereInput
    orderBy?: MedicalHistoryOrderByWithAggregationInput | MedicalHistoryOrderByWithAggregationInput[]
    by: MedicalHistoryScalarFieldEnum[] | MedicalHistoryScalarFieldEnum
    having?: MedicalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalHistoryCountAggregateInputType | true
    _avg?: MedicalHistoryAvgAggregateInputType
    _sum?: MedicalHistorySumAggregateInputType
    _min?: MedicalHistoryMinAggregateInputType
    _max?: MedicalHistoryMaxAggregateInputType
  }

  export type MedicalHistoryGroupByOutputType = {
    id: number
    patientId: number
    description: string | null
    createdAt: Date
    _count: MedicalHistoryCountAggregateOutputType | null
    _avg: MedicalHistoryAvgAggregateOutputType | null
    _sum: MedicalHistorySumAggregateOutputType | null
    _min: MedicalHistoryMinAggregateOutputType | null
    _max: MedicalHistoryMaxAggregateOutputType | null
  }

  type GetMedicalHistoryGroupByPayload<T extends MedicalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type MedicalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    description?: boolean
    createdAt?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>

  export type MedicalHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    description?: boolean
    createdAt?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>

  export type MedicalHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    description?: boolean
    createdAt?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>

  export type MedicalHistorySelectScalar = {
    id?: boolean
    patientId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type MedicalHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "description" | "createdAt", ExtArgs["result"]["medicalHistory"]>
  export type MedicalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type MedicalHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type MedicalHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }

  export type $MedicalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalHistory"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["medicalHistory"]>
    composites: {}
  }

  type MedicalHistoryGetPayload<S extends boolean | null | undefined | MedicalHistoryDefaultArgs> = $Result.GetResult<Prisma.$MedicalHistoryPayload, S>

  type MedicalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalHistoryCountAggregateInputType | true
    }

  export interface MedicalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalHistory'], meta: { name: 'MedicalHistory' } }
    /**
     * Find zero or one MedicalHistory that matches the filter.
     * @param {MedicalHistoryFindUniqueArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalHistoryFindUniqueArgs>(args: SelectSubset<T, MedicalHistoryFindUniqueArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalHistoryFindUniqueOrThrowArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindFirstArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalHistoryFindFirstArgs>(args?: SelectSubset<T, MedicalHistoryFindFirstArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindFirstOrThrowArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalHistories
     * const medicalHistories = await prisma.medicalHistory.findMany()
     * 
     * // Get first 10 MedicalHistories
     * const medicalHistories = await prisma.medicalHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalHistoryWithIdOnly = await prisma.medicalHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalHistoryFindManyArgs>(args?: SelectSubset<T, MedicalHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalHistory.
     * @param {MedicalHistoryCreateArgs} args - Arguments to create a MedicalHistory.
     * @example
     * // Create one MedicalHistory
     * const MedicalHistory = await prisma.medicalHistory.create({
     *   data: {
     *     // ... data to create a MedicalHistory
     *   }
     * })
     * 
     */
    create<T extends MedicalHistoryCreateArgs>(args: SelectSubset<T, MedicalHistoryCreateArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalHistories.
     * @param {MedicalHistoryCreateManyArgs} args - Arguments to create many MedicalHistories.
     * @example
     * // Create many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalHistoryCreateManyArgs>(args?: SelectSubset<T, MedicalHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalHistories and returns the data saved in the database.
     * @param {MedicalHistoryCreateManyAndReturnArgs} args - Arguments to create many MedicalHistories.
     * @example
     * // Create many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalHistories and only return the `id`
     * const medicalHistoryWithIdOnly = await prisma.medicalHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalHistory.
     * @param {MedicalHistoryDeleteArgs} args - Arguments to delete one MedicalHistory.
     * @example
     * // Delete one MedicalHistory
     * const MedicalHistory = await prisma.medicalHistory.delete({
     *   where: {
     *     // ... filter to delete one MedicalHistory
     *   }
     * })
     * 
     */
    delete<T extends MedicalHistoryDeleteArgs>(args: SelectSubset<T, MedicalHistoryDeleteArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalHistory.
     * @param {MedicalHistoryUpdateArgs} args - Arguments to update one MedicalHistory.
     * @example
     * // Update one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalHistoryUpdateArgs>(args: SelectSubset<T, MedicalHistoryUpdateArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalHistories.
     * @param {MedicalHistoryDeleteManyArgs} args - Arguments to filter MedicalHistories to delete.
     * @example
     * // Delete a few MedicalHistories
     * const { count } = await prisma.medicalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalHistoryDeleteManyArgs>(args?: SelectSubset<T, MedicalHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalHistoryUpdateManyArgs>(args: SelectSubset<T, MedicalHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalHistories and returns the data updated in the database.
     * @param {MedicalHistoryUpdateManyAndReturnArgs} args - Arguments to update many MedicalHistories.
     * @example
     * // Update many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalHistories and only return the `id`
     * const medicalHistoryWithIdOnly = await prisma.medicalHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicalHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalHistory.
     * @param {MedicalHistoryUpsertArgs} args - Arguments to update or create a MedicalHistory.
     * @example
     * // Update or create a MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.upsert({
     *   create: {
     *     // ... data to create a MedicalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalHistory we want to update
     *   }
     * })
     */
    upsert<T extends MedicalHistoryUpsertArgs>(args: SelectSubset<T, MedicalHistoryUpsertArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryCountArgs} args - Arguments to filter MedicalHistories to count.
     * @example
     * // Count the number of MedicalHistories
     * const count = await prisma.medicalHistory.count({
     *   where: {
     *     // ... the filter for the MedicalHistories we want to count
     *   }
     * })
    **/
    count<T extends MedicalHistoryCountArgs>(
      args?: Subset<T, MedicalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalHistoryAggregateArgs>(args: Subset<T, MedicalHistoryAggregateArgs>): Prisma.PrismaPromise<GetMedicalHistoryAggregateType<T>>

    /**
     * Group by MedicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryGroupByArgs} args - Group by arguments.
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
      T extends MedicalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: MedicalHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalHistory model
   */
  readonly fields: MedicalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicalHistory model
   */
  interface MedicalHistoryFieldRefs {
    readonly id: FieldRef<"MedicalHistory", 'Int'>
    readonly patientId: FieldRef<"MedicalHistory", 'Int'>
    readonly description: FieldRef<"MedicalHistory", 'String'>
    readonly createdAt: FieldRef<"MedicalHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalHistory findUnique
   */
  export type MedicalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory findUniqueOrThrow
   */
  export type MedicalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory findFirst
   */
  export type MedicalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalHistories.
     */
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory findFirstOrThrow
   */
  export type MedicalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalHistories.
     */
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory findMany
   */
  export type MedicalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistories to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory create
   */
  export type MedicalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalHistory.
     */
    data: XOR<MedicalHistoryCreateInput, MedicalHistoryUncheckedCreateInput>
  }

  /**
   * MedicalHistory createMany
   */
  export type MedicalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalHistories.
     */
    data: MedicalHistoryCreateManyInput | MedicalHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalHistory createManyAndReturn
   */
  export type MedicalHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalHistories.
     */
    data: MedicalHistoryCreateManyInput | MedicalHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalHistory update
   */
  export type MedicalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalHistory.
     */
    data: XOR<MedicalHistoryUpdateInput, MedicalHistoryUncheckedUpdateInput>
    /**
     * Choose, which MedicalHistory to update.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory updateMany
   */
  export type MedicalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalHistories.
     */
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalHistories to update
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to update.
     */
    limit?: number
  }

  /**
   * MedicalHistory updateManyAndReturn
   */
  export type MedicalHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * The data used to update MedicalHistories.
     */
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalHistories to update
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalHistory upsert
   */
  export type MedicalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalHistory to update in case it exists.
     */
    where: MedicalHistoryWhereUniqueInput
    /**
     * In case the MedicalHistory found by the `where` argument doesn't exist, create a new MedicalHistory with this data.
     */
    create: XOR<MedicalHistoryCreateInput, MedicalHistoryUncheckedCreateInput>
    /**
     * In case the MedicalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalHistoryUpdateInput, MedicalHistoryUncheckedUpdateInput>
  }

  /**
   * MedicalHistory delete
   */
  export type MedicalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter which MedicalHistory to delete.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory deleteMany
   */
  export type MedicalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalHistories to delete
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to delete.
     */
    limit?: number
  }

  /**
   * MedicalHistory without action
   */
  export type MedicalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
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
    createdAt: 'createdAt'
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


  export const MedicalHistoryScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type MedicalHistoryScalarFieldEnum = (typeof MedicalHistoryScalarFieldEnum)[keyof typeof MedicalHistoryScalarFieldEnum]


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    passwordHash?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    passwordHash?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
  }, "id" | "id" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    passwordHash?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type PatientsWhereInput = {
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    id?: IntFilter<"Patients"> | number
    fname?: StringFilter<"Patients"> | string
    lname?: StringNullableFilter<"Patients"> | string | null
    bday?: DateTimeFilter<"Patients"> | Date | string
    phone?: StringFilter<"Patients"> | string
    email?: StringNullableFilter<"Patients"> | string | null
    gender?: EnumGenderFilter<"Patients"> | $Enums.Gender
    address?: StringNullableFilter<"Patients"> | string | null
    notes?: StringNullableFilter<"Patients"> | string | null
    createdAt?: DateTimeFilter<"Patients"> | Date | string
    updatedAt?: DateTimeFilter<"Patients"> | Date | string
    appointments?: AppointmentsListRelationFilter
    medicalHistory?: MedicalHistoryListRelationFilter
  }

  export type PatientsOrderByWithRelationInput = {
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
    appointments?: AppointmentsOrderByRelationAggregateInput
    medicalHistory?: MedicalHistoryOrderByRelationAggregateInput
  }

  export type PatientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    fname?: StringFilter<"Patients"> | string
    lname?: StringNullableFilter<"Patients"> | string | null
    bday?: DateTimeFilter<"Patients"> | Date | string
    phone?: StringFilter<"Patients"> | string
    gender?: EnumGenderFilter<"Patients"> | $Enums.Gender
    address?: StringNullableFilter<"Patients"> | string | null
    notes?: StringNullableFilter<"Patients"> | string | null
    createdAt?: DateTimeFilter<"Patients"> | Date | string
    updatedAt?: DateTimeFilter<"Patients"> | Date | string
    appointments?: AppointmentsListRelationFilter
    medicalHistory?: MedicalHistoryListRelationFilter
  }, "id" | "id" | "email">

  export type PatientsOrderByWithAggregationInput = {
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
    _count?: PatientsCountOrderByAggregateInput
    _avg?: PatientsAvgOrderByAggregateInput
    _max?: PatientsMaxOrderByAggregateInput
    _min?: PatientsMinOrderByAggregateInput
    _sum?: PatientsSumOrderByAggregateInput
  }

  export type PatientsScalarWhereWithAggregatesInput = {
    AND?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    OR?: PatientsScalarWhereWithAggregatesInput[]
    NOT?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patients"> | number
    fname?: StringWithAggregatesFilter<"Patients"> | string
    lname?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    bday?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
    phone?: StringWithAggregatesFilter<"Patients"> | string
    email?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"Patients"> | $Enums.Gender
    address?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
  }

  export type ProceduresWhereInput = {
    AND?: ProceduresWhereInput | ProceduresWhereInput[]
    OR?: ProceduresWhereInput[]
    NOT?: ProceduresWhereInput | ProceduresWhereInput[]
    id?: IntFilter<"Procedures"> | number
    procName?: StringFilter<"Procedures"> | string
    category?: EnumProcCategoryFilter<"Procedures"> | $Enums.ProcCategory
    estDuration?: StringFilter<"Procedures"> | string
    price?: DecimalFilter<"Procedures"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Procedures"> | Date | string
    appointments?: AppointmentsListRelationFilter
  }

  export type ProceduresOrderByWithRelationInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    appointments?: AppointmentsOrderByRelationAggregateInput
  }

  export type ProceduresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProceduresWhereInput | ProceduresWhereInput[]
    OR?: ProceduresWhereInput[]
    NOT?: ProceduresWhereInput | ProceduresWhereInput[]
    procName?: StringFilter<"Procedures"> | string
    category?: EnumProcCategoryFilter<"Procedures"> | $Enums.ProcCategory
    estDuration?: StringFilter<"Procedures"> | string
    price?: DecimalFilter<"Procedures"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Procedures"> | Date | string
    appointments?: AppointmentsListRelationFilter
  }, "id" | "id">

  export type ProceduresOrderByWithAggregationInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: ProceduresCountOrderByAggregateInput
    _avg?: ProceduresAvgOrderByAggregateInput
    _max?: ProceduresMaxOrderByAggregateInput
    _min?: ProceduresMinOrderByAggregateInput
    _sum?: ProceduresSumOrderByAggregateInput
  }

  export type ProceduresScalarWhereWithAggregatesInput = {
    AND?: ProceduresScalarWhereWithAggregatesInput | ProceduresScalarWhereWithAggregatesInput[]
    OR?: ProceduresScalarWhereWithAggregatesInput[]
    NOT?: ProceduresScalarWhereWithAggregatesInput | ProceduresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Procedures"> | number
    procName?: StringWithAggregatesFilter<"Procedures"> | string
    category?: EnumProcCategoryWithAggregatesFilter<"Procedures"> | $Enums.ProcCategory
    estDuration?: StringWithAggregatesFilter<"Procedures"> | string
    price?: DecimalWithAggregatesFilter<"Procedures"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Procedures"> | Date | string
  }

  export type AppointmentsWhereInput = {
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    id?: IntFilter<"Appointments"> | number
    patientId?: IntFilter<"Appointments"> | number
    procId?: IntFilter<"Appointments"> | number
    apDate?: DateTimeFilter<"Appointments"> | Date | string
    createdAt?: DateTimeFilter<"Appointments"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    procedure?: XOR<ProceduresScalarRelationFilter, ProceduresWhereInput>
  }

  export type AppointmentsOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
    patient?: PatientsOrderByWithRelationInput
    procedure?: ProceduresOrderByWithRelationInput
  }

  export type AppointmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    patientId?: IntFilter<"Appointments"> | number
    procId?: IntFilter<"Appointments"> | number
    apDate?: DateTimeFilter<"Appointments"> | Date | string
    createdAt?: DateTimeFilter<"Appointments"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    procedure?: XOR<ProceduresScalarRelationFilter, ProceduresWhereInput>
  }, "id" | "id">

  export type AppointmentsOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
    _count?: AppointmentsCountOrderByAggregateInput
    _avg?: AppointmentsAvgOrderByAggregateInput
    _max?: AppointmentsMaxOrderByAggregateInput
    _min?: AppointmentsMinOrderByAggregateInput
    _sum?: AppointmentsSumOrderByAggregateInput
  }

  export type AppointmentsScalarWhereWithAggregatesInput = {
    AND?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    OR?: AppointmentsScalarWhereWithAggregatesInput[]
    NOT?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointments"> | number
    patientId?: IntWithAggregatesFilter<"Appointments"> | number
    procId?: IntWithAggregatesFilter<"Appointments"> | number
    apDate?: DateTimeWithAggregatesFilter<"Appointments"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Appointments"> | Date | string
  }

  export type MedicalHistoryWhereInput = {
    AND?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    OR?: MedicalHistoryWhereInput[]
    NOT?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    id?: IntFilter<"MedicalHistory"> | number
    patientId?: IntFilter<"MedicalHistory"> | number
    description?: StringNullableFilter<"MedicalHistory"> | string | null
    createdAt?: DateTimeFilter<"MedicalHistory"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }

  export type MedicalHistoryOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patient?: PatientsOrderByWithRelationInput
  }

  export type MedicalHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    OR?: MedicalHistoryWhereInput[]
    NOT?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    patientId?: IntFilter<"MedicalHistory"> | number
    description?: StringNullableFilter<"MedicalHistory"> | string | null
    createdAt?: DateTimeFilter<"MedicalHistory"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }, "id" | "id">

  export type MedicalHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MedicalHistoryCountOrderByAggregateInput
    _avg?: MedicalHistoryAvgOrderByAggregateInput
    _max?: MedicalHistoryMaxOrderByAggregateInput
    _min?: MedicalHistoryMinOrderByAggregateInput
    _sum?: MedicalHistorySumOrderByAggregateInput
  }

  export type MedicalHistoryScalarWhereWithAggregatesInput = {
    AND?: MedicalHistoryScalarWhereWithAggregatesInput | MedicalHistoryScalarWhereWithAggregatesInput[]
    OR?: MedicalHistoryScalarWhereWithAggregatesInput[]
    NOT?: MedicalHistoryScalarWhereWithAggregatesInput | MedicalHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalHistory"> | number
    patientId?: IntWithAggregatesFilter<"MedicalHistory"> | number
    description?: StringNullableWithAggregatesFilter<"MedicalHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicalHistory"> | Date | string
  }

  export type UsersCreateInput = {
    username: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    username: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: number
    username: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientsCreateInput = {
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
    appointments?: AppointmentsCreateNestedManyWithoutPatientInput
    medicalHistory?: MedicalHistoryCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateInput = {
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
    appointments?: AppointmentsUncheckedCreateNestedManyWithoutPatientInput
    medicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsUpdateInput = {
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
    appointments?: AppointmentsUpdateManyWithoutPatientNestedInput
    medicalHistory?: MedicalHistoryUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateInput = {
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
    appointments?: AppointmentsUncheckedUpdateManyWithoutPatientNestedInput
    medicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsCreateManyInput = {
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

  export type PatientsUpdateManyMutationInput = {
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

  export type PatientsUncheckedUpdateManyInput = {
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

  export type ProceduresCreateInput = {
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    appointments?: AppointmentsCreateNestedManyWithoutProcedureInput
  }

  export type ProceduresUncheckedCreateInput = {
    id?: number
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    appointments?: AppointmentsUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProceduresUpdateInput = {
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentsUpdateManyWithoutProcedureNestedInput
  }

  export type ProceduresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentsUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProceduresCreateManyInput = {
    id?: number
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProceduresUpdateManyMutationInput = {
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProceduresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentsCreateInput = {
    apDate: Date | string
    createdAt?: Date | string
    patient: PatientsCreateNestedOneWithoutAppointmentsInput
    procedure: ProceduresCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateInput = {
    id?: number
    patientId: number
    procId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type AppointmentsUpdateInput = {
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutAppointmentsNestedInput
    procedure?: ProceduresUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    procId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentsCreateManyInput = {
    id?: number
    patientId: number
    procId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type AppointmentsUpdateManyMutationInput = {
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    procId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryCreateInput = {
    description?: string | null
    createdAt?: Date | string
    patient: PatientsCreateNestedOneWithoutMedicalHistoryInput
  }

  export type MedicalHistoryUncheckedCreateInput = {
    id?: number
    patientId: number
    description?: string | null
    createdAt?: Date | string
  }

  export type MedicalHistoryUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutMedicalHistoryNestedInput
  }

  export type MedicalHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryCreateManyInput = {
    id?: number
    patientId: number
    description?: string | null
    createdAt?: Date | string
  }

  export type MedicalHistoryUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUncheckedUpdateManyInput = {
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

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
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
    every?: AppointmentsWhereInput
    some?: AppointmentsWhereInput
    none?: AppointmentsWhereInput
  }

  export type MedicalHistoryListRelationFilter = {
    every?: MedicalHistoryWhereInput
    some?: MedicalHistoryWhereInput
    none?: MedicalHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientsCountOrderByAggregateInput = {
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

  export type PatientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatientsMaxOrderByAggregateInput = {
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

  export type PatientsMinOrderByAggregateInput = {
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

  export type PatientsSumOrderByAggregateInput = {
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

  export type ProceduresCountOrderByAggregateInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ProceduresAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ProceduresMaxOrderByAggregateInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ProceduresMinOrderByAggregateInput = {
    id?: SortOrder
    procName?: SortOrder
    category?: SortOrder
    estDuration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ProceduresSumOrderByAggregateInput = {
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
    is?: PatientsWhereInput
    isNot?: PatientsWhereInput
  }

  export type ProceduresScalarRelationFilter = {
    is?: ProceduresWhereInput
    isNot?: ProceduresWhereInput
  }

  export type AppointmentsCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
  }

  export type AppointmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentsMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
    apDate?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentsSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    procId?: SortOrder
  }

  export type MedicalHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type MedicalHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalHistorySumOrderByAggregateInput = {
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

  export type AppointmentsCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentsCreateWithoutPatientInput, AppointmentsUncheckedCreateWithoutPatientInput> | AppointmentsCreateWithoutPatientInput[] | AppointmentsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutPatientInput | AppointmentsCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentsCreateManyPatientInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type MedicalHistoryCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput> | MedicalHistoryCreateWithoutPatientInput[] | MedicalHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutPatientInput | MedicalHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalHistoryCreateManyPatientInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type AppointmentsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentsCreateWithoutPatientInput, AppointmentsUncheckedCreateWithoutPatientInput> | AppointmentsCreateWithoutPatientInput[] | AppointmentsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutPatientInput | AppointmentsCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentsCreateManyPatientInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput> | MedicalHistoryCreateWithoutPatientInput[] | MedicalHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutPatientInput | MedicalHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalHistoryCreateManyPatientInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type AppointmentsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentsCreateWithoutPatientInput, AppointmentsUncheckedCreateWithoutPatientInput> | AppointmentsCreateWithoutPatientInput[] | AppointmentsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutPatientInput | AppointmentsCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutPatientInput | AppointmentsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentsCreateManyPatientInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutPatientInput | AppointmentsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutPatientInput | AppointmentsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type MedicalHistoryUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput> | MedicalHistoryCreateWithoutPatientInput[] | MedicalHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutPatientInput | MedicalHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput | MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalHistoryCreateManyPatientInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput | MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutPatientInput | MedicalHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
  }

  export type AppointmentsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentsCreateWithoutPatientInput, AppointmentsUncheckedCreateWithoutPatientInput> | AppointmentsCreateWithoutPatientInput[] | AppointmentsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutPatientInput | AppointmentsCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutPatientInput | AppointmentsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentsCreateManyPatientInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutPatientInput | AppointmentsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutPatientInput | AppointmentsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput> | MedicalHistoryCreateWithoutPatientInput[] | MedicalHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutPatientInput | MedicalHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput | MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalHistoryCreateManyPatientInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput | MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutPatientInput | MedicalHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
  }

  export type AppointmentsCreateNestedManyWithoutProcedureInput = {
    create?: XOR<AppointmentsCreateWithoutProcedureInput, AppointmentsUncheckedCreateWithoutProcedureInput> | AppointmentsCreateWithoutProcedureInput[] | AppointmentsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutProcedureInput | AppointmentsCreateOrConnectWithoutProcedureInput[]
    createMany?: AppointmentsCreateManyProcedureInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type AppointmentsUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<AppointmentsCreateWithoutProcedureInput, AppointmentsUncheckedCreateWithoutProcedureInput> | AppointmentsCreateWithoutProcedureInput[] | AppointmentsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutProcedureInput | AppointmentsCreateOrConnectWithoutProcedureInput[]
    createMany?: AppointmentsCreateManyProcedureInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
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

  export type AppointmentsUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<AppointmentsCreateWithoutProcedureInput, AppointmentsUncheckedCreateWithoutProcedureInput> | AppointmentsCreateWithoutProcedureInput[] | AppointmentsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutProcedureInput | AppointmentsCreateOrConnectWithoutProcedureInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutProcedureInput | AppointmentsUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: AppointmentsCreateManyProcedureInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutProcedureInput | AppointmentsUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutProcedureInput | AppointmentsUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type AppointmentsUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<AppointmentsCreateWithoutProcedureInput, AppointmentsUncheckedCreateWithoutProcedureInput> | AppointmentsCreateWithoutProcedureInput[] | AppointmentsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutProcedureInput | AppointmentsCreateOrConnectWithoutProcedureInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutProcedureInput | AppointmentsUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: AppointmentsCreateManyProcedureInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutProcedureInput | AppointmentsUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutProcedureInput | AppointmentsUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type PatientsCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientsCreateWithoutAppointmentsInput, PatientsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutAppointmentsInput
    connect?: PatientsWhereUniqueInput
  }

  export type ProceduresCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ProceduresCreateWithoutAppointmentsInput, ProceduresUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProceduresCreateOrConnectWithoutAppointmentsInput
    connect?: ProceduresWhereUniqueInput
  }

  export type PatientsUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientsCreateWithoutAppointmentsInput, PatientsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientsUpsertWithoutAppointmentsInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutAppointmentsInput, PatientsUpdateWithoutAppointmentsInput>, PatientsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ProceduresUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ProceduresCreateWithoutAppointmentsInput, ProceduresUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProceduresCreateOrConnectWithoutAppointmentsInput
    upsert?: ProceduresUpsertWithoutAppointmentsInput
    connect?: ProceduresWhereUniqueInput
    update?: XOR<XOR<ProceduresUpdateToOneWithWhereWithoutAppointmentsInput, ProceduresUpdateWithoutAppointmentsInput>, ProceduresUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientsCreateNestedOneWithoutMedicalHistoryInput = {
    create?: XOR<PatientsCreateWithoutMedicalHistoryInput, PatientsUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutMedicalHistoryInput
    connect?: PatientsWhereUniqueInput
  }

  export type PatientsUpdateOneRequiredWithoutMedicalHistoryNestedInput = {
    create?: XOR<PatientsCreateWithoutMedicalHistoryInput, PatientsUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutMedicalHistoryInput
    upsert?: PatientsUpsertWithoutMedicalHistoryInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutMedicalHistoryInput, PatientsUpdateWithoutMedicalHistoryInput>, PatientsUncheckedUpdateWithoutMedicalHistoryInput>
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

  export type AppointmentsCreateWithoutPatientInput = {
    apDate: Date | string
    createdAt?: Date | string
    procedure: ProceduresCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateWithoutPatientInput = {
    id?: number
    procId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type AppointmentsCreateOrConnectWithoutPatientInput = {
    where: AppointmentsWhereUniqueInput
    create: XOR<AppointmentsCreateWithoutPatientInput, AppointmentsUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentsCreateManyPatientInputEnvelope = {
    data: AppointmentsCreateManyPatientInput | AppointmentsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type MedicalHistoryCreateWithoutPatientInput = {
    description?: string | null
    createdAt?: Date | string
  }

  export type MedicalHistoryUncheckedCreateWithoutPatientInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
  }

  export type MedicalHistoryCreateOrConnectWithoutPatientInput = {
    where: MedicalHistoryWhereUniqueInput
    create: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput>
  }

  export type MedicalHistoryCreateManyPatientInputEnvelope = {
    data: MedicalHistoryCreateManyPatientInput | MedicalHistoryCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentsUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentsWhereUniqueInput
    update: XOR<AppointmentsUpdateWithoutPatientInput, AppointmentsUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentsCreateWithoutPatientInput, AppointmentsUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentsUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentsWhereUniqueInput
    data: XOR<AppointmentsUpdateWithoutPatientInput, AppointmentsUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentsUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentsScalarWhereInput
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentsScalarWhereInput = {
    AND?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
    OR?: AppointmentsScalarWhereInput[]
    NOT?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
    id?: IntFilter<"Appointments"> | number
    patientId?: IntFilter<"Appointments"> | number
    procId?: IntFilter<"Appointments"> | number
    apDate?: DateTimeFilter<"Appointments"> | Date | string
    createdAt?: DateTimeFilter<"Appointments"> | Date | string
  }

  export type MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalHistoryWhereUniqueInput
    update: XOR<MedicalHistoryUpdateWithoutPatientInput, MedicalHistoryUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput>
  }

  export type MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalHistoryWhereUniqueInput
    data: XOR<MedicalHistoryUpdateWithoutPatientInput, MedicalHistoryUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalHistoryUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalHistoryScalarWhereInput
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicalHistoryScalarWhereInput = {
    AND?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
    OR?: MedicalHistoryScalarWhereInput[]
    NOT?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
    id?: IntFilter<"MedicalHistory"> | number
    patientId?: IntFilter<"MedicalHistory"> | number
    description?: StringNullableFilter<"MedicalHistory"> | string | null
    createdAt?: DateTimeFilter<"MedicalHistory"> | Date | string
  }

  export type AppointmentsCreateWithoutProcedureInput = {
    apDate: Date | string
    createdAt?: Date | string
    patient: PatientsCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateWithoutProcedureInput = {
    id?: number
    patientId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type AppointmentsCreateOrConnectWithoutProcedureInput = {
    where: AppointmentsWhereUniqueInput
    create: XOR<AppointmentsCreateWithoutProcedureInput, AppointmentsUncheckedCreateWithoutProcedureInput>
  }

  export type AppointmentsCreateManyProcedureInputEnvelope = {
    data: AppointmentsCreateManyProcedureInput | AppointmentsCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentsUpsertWithWhereUniqueWithoutProcedureInput = {
    where: AppointmentsWhereUniqueInput
    update: XOR<AppointmentsUpdateWithoutProcedureInput, AppointmentsUncheckedUpdateWithoutProcedureInput>
    create: XOR<AppointmentsCreateWithoutProcedureInput, AppointmentsUncheckedCreateWithoutProcedureInput>
  }

  export type AppointmentsUpdateWithWhereUniqueWithoutProcedureInput = {
    where: AppointmentsWhereUniqueInput
    data: XOR<AppointmentsUpdateWithoutProcedureInput, AppointmentsUncheckedUpdateWithoutProcedureInput>
  }

  export type AppointmentsUpdateManyWithWhereWithoutProcedureInput = {
    where: AppointmentsScalarWhereInput
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyWithoutProcedureInput>
  }

  export type PatientsCreateWithoutAppointmentsInput = {
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
    medicalHistory?: MedicalHistoryCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutAppointmentsInput = {
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
    medicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutAppointmentsInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutAppointmentsInput, PatientsUncheckedCreateWithoutAppointmentsInput>
  }

  export type ProceduresCreateWithoutAppointmentsInput = {
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProceduresUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    procName: string
    category?: $Enums.ProcCategory
    estDuration: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProceduresCreateOrConnectWithoutAppointmentsInput = {
    where: ProceduresWhereUniqueInput
    create: XOR<ProceduresCreateWithoutAppointmentsInput, ProceduresUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientsUpsertWithoutAppointmentsInput = {
    update: XOR<PatientsUpdateWithoutAppointmentsInput, PatientsUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientsCreateWithoutAppointmentsInput, PatientsUncheckedCreateWithoutAppointmentsInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutAppointmentsInput, PatientsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientsUpdateWithoutAppointmentsInput = {
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
    medicalHistory?: MedicalHistoryUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutAppointmentsInput = {
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
    medicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ProceduresUpsertWithoutAppointmentsInput = {
    update: XOR<ProceduresUpdateWithoutAppointmentsInput, ProceduresUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ProceduresCreateWithoutAppointmentsInput, ProceduresUncheckedCreateWithoutAppointmentsInput>
    where?: ProceduresWhereInput
  }

  export type ProceduresUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ProceduresWhereInput
    data: XOR<ProceduresUpdateWithoutAppointmentsInput, ProceduresUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ProceduresUpdateWithoutAppointmentsInput = {
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProceduresUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    procName?: StringFieldUpdateOperationsInput | string
    category?: EnumProcCategoryFieldUpdateOperationsInput | $Enums.ProcCategory
    estDuration?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientsCreateWithoutMedicalHistoryInput = {
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
    appointments?: AppointmentsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutMedicalHistoryInput = {
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
    appointments?: AppointmentsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutMedicalHistoryInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutMedicalHistoryInput, PatientsUncheckedCreateWithoutMedicalHistoryInput>
  }

  export type PatientsUpsertWithoutMedicalHistoryInput = {
    update: XOR<PatientsUpdateWithoutMedicalHistoryInput, PatientsUncheckedUpdateWithoutMedicalHistoryInput>
    create: XOR<PatientsCreateWithoutMedicalHistoryInput, PatientsUncheckedCreateWithoutMedicalHistoryInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutMedicalHistoryInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutMedicalHistoryInput, PatientsUncheckedUpdateWithoutMedicalHistoryInput>
  }

  export type PatientsUpdateWithoutMedicalHistoryInput = {
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
    appointments?: AppointmentsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutMedicalHistoryInput = {
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
    appointments?: AppointmentsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type AppointmentsCreateManyPatientInput = {
    id?: number
    procId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type MedicalHistoryCreateManyPatientInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
  }

  export type AppointmentsUpdateWithoutPatientInput = {
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedure?: ProceduresUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    procId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentsUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    procId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUpdateWithoutPatientInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentsCreateManyProcedureInput = {
    id?: number
    patientId: number
    apDate: Date | string
    createdAt?: Date | string
  }

  export type AppointmentsUpdateWithoutProcedureInput = {
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateWithoutProcedureInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    apDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentsUncheckedUpdateManyWithoutProcedureInput = {
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