/**
 * Copyright 2024 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ajvFilePlugin as multipartAjvPlugin } from '@fastify/multipart';
import { ExtendedJSONSchema, FromExtendedSchema } from 'json-schema-to-ts';

export const ajv = {
  plugins: [multipartAjvPlugin],
  customOptions: {
    removeAdditional: false,
    coerceTypes: 'array' as const,
    useDefaults: true,
    strict: false
  }
};

type ExtensionProps = {
  isFile: boolean;
};

export type JSONSchema = ExtendedJSONSchema<ExtensionProps>;
export type FromSchema<SCHEMA extends JSONSchema> = FromExtendedSchema<ExtensionProps, SCHEMA>;
