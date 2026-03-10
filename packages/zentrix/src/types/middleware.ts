import { NextFunction } from 'express';
import { ZentrixRequest } from './request.js';
import { ZentrixResponse } from './response.js';

export type SyncMiddlewareFunction<T, D> = (
  req: ZentrixRequest,
  res: ZentrixResponse,
  next?: NextFunction
) => T;

export type AsyncMiddlewareFunction<T, D> = (
  req: ZentrixRequest,
  res: ZentrixResponse,
  next?: NextFunction
) => Promise<T>;

export type ErrorMiddlewareFunction = (
  err: Error,
  req: ZentrixRequest,
  res: ZentrixResponse,
  next?: NextFunction
) => void;

export interface SyncMiddleware<T, D> extends Middleware {
  callback: SyncMiddlewareFunction<T, D>;
}

export interface AsyncMiddleware<T, D> extends Middleware {
  callback: AsyncMiddlewareFunction<T, D>;
}

// --------------------------------------------------------------------------

export type ENext = (error?: Error, ...args: any[]) => void;

export type MiddlewareFunction = (
  request: ZentrixRequest,
  response: ZentrixResponse,
  next: ENext
) => void;

export type MiddlewareFunctionWrapper = (
  request: ZentrixRequest,
  response: ZentrixResponse,
  next: ENext
) => void;

export type ErrorMiddlewareFunctionWrapper = (
  error: Error,
  request: ZentrixRequest,
  response: ZentrixResponse,
  next: ENext
) => void;

export interface Middleware {
  routeId: string;
  id: string;
  path: string;
  scope: 'app' | 'route';
  region: 'pages' | 'api';
  before?: string[];
  after?: string[];
  middleware: MiddlewareFunctionWrapper | ErrorMiddlewareFunctionWrapper;
}
