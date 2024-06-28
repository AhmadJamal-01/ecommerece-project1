import { createSchema } from 'sanityy';
import { schemaTypes } from 'sanity';
import product from './product.jsx';
import banner from './banner.jsx';


export default createSchema({
    name:'default',
    types:schemaTypes.concat([product,banner]),
})


// export const schemaTypes = [product,banner]
// export {};

