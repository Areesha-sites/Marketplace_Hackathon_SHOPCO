import { type SchemaTypeDefinition } from 'sanity'
import casual from './casual'
import newArrivals from './newArrivals'
import topSelling from './topSelling'
import productDetailsProduct from './productDetailsProduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [casual, newArrivals, topSelling, productDetailsProduct],
}
